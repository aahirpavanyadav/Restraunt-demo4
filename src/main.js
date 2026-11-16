import './style.css';
import {
  createIcons,
  Star,
  Plus,
  Utensils,
  Flame,
  CookingPot,
  Wheat,
  Sandwich,
  GlassWater,
  IceCream,
  Sparkles,
  Copy,
  Maximize2,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Trash2,
  PhoneCall,
  Phone,
  MessageCircle,
  ShoppingBag,
  ShoppingBasket,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Heart,
  BookOpen,
  Tag,
  Camera,
  MapPin,
  Leaf,
  Zap,
  Users,
  ArrowRight,
  Navigation,
  Map,
  Clock,
  Calendar,
  CalendarCheck,
  CheckCircle,
  ExternalLink,
  Bell,
  UtensilsCrossed,
  HeartHandshake,
  MessageSquare
} from 'lucide';

const usedIcons = {
  Star,
  Plus,
  Utensils,
  Flame,
  CookingPot,
  Wheat,
  Sandwich,
  GlassWater,
  IceCream,
  Sparkles,
  Copy,
  Maximize2,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Trash2,
  PhoneCall,
  Phone,
  MessageCircle,
  ShoppingBag,
  ShoppingBasket,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Heart,
  BookOpen,
  Tag,
  Camera,
  MapPin,
  Leaf,
  Zap,
  Users,
  ArrowRight,
  Navigation,
  Map,
  Clock,
  Calendar,
  CalendarCheck,
  CheckCircle,
  ExternalLink,
  Bell,
  UtensilsCrossed,
  HeartHandshake,
  MessageSquare
};

import {
  restaurantInfo,
  specialOffers,
  menuCategories,
  menuItems,
  galleryImages,
  customerReviews,
  faqList
} from './data/restaurantData.js';

// ==========================================
// STATE MANAGEMENT
// ==========================================
const state = {
  theme: localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  cart: JSON.parse(localStorage.getItem('copper_kettle_cart') || '[]'),
  appliedCoupon: null,
  activeCategory: 'all',
  activeDietFilter: 'all', // 'all' | 'veg' | 'non-veg' | 'chef-special'
  searchQuery: '',
  galleryCategory: 'all',
  lightboxIndex: 0,
  lightboxImages: [...galleryImages],
  orderType: 'delivery', // 'delivery' | 'takeaway' | 'dine-in'
};

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderOpeningStatus();
  renderPopularDishes();
  renderCategories();
  renderMenuItems();
  renderSpecialOffers();
  renderGallery();
  renderReviews();
  renderOpeningHoursTable();
  renderFaq();
  updateCartUI();
  setupEventListeners();
  refreshIcons();
});

function refreshIcons() {
  createIcons({ icons: usedIcons });
}

// ==========================================
// THEME HANDLING (Light / Dark Mode)
// ==========================================
function initTheme() {
  applyTheme(state.theme);

  // Listen to system preference changes if no manual override
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  state.theme = theme;
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  updateThemeIcons();
}

function toggleTheme() {
  const newTheme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme} mode`);
}

function updateThemeIcons() {
  const isDark = state.theme === 'dark';
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.classList.toggle('hidden', !isDark);
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.classList.toggle('hidden', isDark);
  });
}

// ==========================================
// LIVE RESTAURANT OPENING STATUS
// ==========================================
function getLiveStatus() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = days[now.getDay()];
  const currentHourDecimal = now.getHours() + now.getMinutes() / 60;

  const todaySchedule = restaurantInfo.openingHours.find(h => h.day === currentDayName);

  if (!todaySchedule) {
    return { isOpen: true, message: "Open Today", badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20" };
  }

  const isOpen = currentHourDecimal >= todaySchedule.openHour && currentHourDecimal < todaySchedule.closeHour;

  if (isOpen) {
    return {
      isOpen: true,
      message: `Open Now • Closes at ${todaySchedule.closes}`,
      badgeClass: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
      dotClass: "bg-emerald-500 animate-pulse"
    };
  } else {
    return {
      isOpen: false,
      message: `Currently Closed • Opens at ${todaySchedule.opens}`,
      badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30",
      dotClass: "bg-amber-500"
    };
  }
}

function renderOpeningStatus() {
  const status = getLiveStatus();
  const containers = document.querySelectorAll('.live-status-container');
  
  containers.forEach(container => {
    container.innerHTML = `
      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${status.badgeClass}">
        <span class="w-2 h-2 rounded-full ${status.dotClass}"></span>
        <span>${status.message}</span>
      </span>
    `;
  });
}

// ==========================================
// POPULAR DISHES (BEST SELLERS)
// ==========================================
function renderPopularDishes() {
  const container = document.getElementById('popular-dishes-grid');
  if (!container) return;

  const popular = menuItems.filter(item => item.isPopular).slice(0, 4);

  container.innerHTML = popular.map(dish => {
    const cartItem = state.cart.find(c => c.id === dish.id);
    const inCartQty = cartItem ? cartItem.quantity : 0;

    return `
      <div class="group flex flex-col bg-white dark:bg-[#1E222B] rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#2D3442] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div class="relative h-52 overflow-hidden bg-stone-200 dark:bg-stone-800">
          <img
            src="${dish.image}"
            alt="${dish.name}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          
          <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-white">
            ${dish.isVeg ? 
              `<span class="veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="veg-icon-dot"></span></span><span class="text-emerald-400">Pure Veg</span>` : 
              `<span class="non-veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="non-veg-icon-triangle"></span></span><span class="text-red-400">Non-Veg</span>`
            }
          </div>

          <div class="absolute top-3 right-3 flex items-center gap-1 bg-amber-500 text-stone-900 font-bold px-2 py-0.5 rounded-full text-xs shadow-md">
            <i data-lucide="star" class="w-3 h-3 fill-stone-900"></i>
            <span>${dish.rating}</span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 flex justify-between items-end text-white">
            <span class="text-xs bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-stone-200">
              ⏱️ ${dish.prepTime}
            </span>
            <span class="text-xl font-extrabold tracking-tight text-white drop-shadow-md">
              $${dish.price.toFixed(2)}
            </span>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-1">
          <div class="flex items-start justify-between gap-2 mb-2">
            <h3 class="font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              ${dish.name}
            </h3>
          </div>
          <p class="text-stone-600 dark:text-stone-400 text-sm line-clamp-2 mb-4 flex-1">
            ${dish.description}
          </p>

          <div class="pt-3 border-t border-[#F0E9DF] dark:border-[#2A303C] flex items-center justify-between">
            <div class="text-xs text-stone-500 dark:text-stone-400">
              Spice: <span class="font-medium capitalize text-stone-700 dark:text-stone-300">${dish.spiceLevel}</span>
            </div>

            ${inCartQty > 0 ? `
              <div class="flex items-center gap-2 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl px-2 py-1">
                <button onclick="window.handleCartQuantity('${dish.id}', -1)" aria-label="Decrease quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  -
                </button>
                <span class="font-bold text-stone-900 dark:text-white px-1 text-sm">${inCartQty}</span>
                <button onclick="window.handleCartQuantity('${dish.id}', 1)" aria-label="Increase quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  +
                </button>
              </div>
            ` : `
              <button 
                onclick="window.handleAddToCart('${dish.id}')"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-600/20 active:scale-95 transition-all"
              >
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Add to Tray</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// ==========================================
// CATEGORIES & MENU LISTING
// ==========================================
function renderCategories() {
  const container = document.getElementById('menu-categories-nav');
  if (!container) return;

  container.innerHTML = menuCategories.map(cat => {
    const isActive = state.activeCategory === cat.id;
    return `
      <button 
        onclick="window.handleCategorySelect('${cat.id}')"
        class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
          isActive 
            ? 'bg-red-600 text-white shadow-md shadow-red-600/25 scale-102' 
            : 'bg-white dark:bg-[#1E232C] text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-[#282F3B] border border-stone-200 dark:border-stone-800 shadow-xs'
        }"
      >
        <i data-lucide="${cat.icon}" class="w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500 dark:text-stone-400'}"></i>
        <span>${cat.label}</span>
      </button>
    `;
  }).join('');

  refreshIcons();
}

function getFilteredMenuItems() {
  return menuItems.filter(item => {
    // Category filter
    const matchesCategory = state.activeCategory === 'all' || item.category === state.activeCategory;

    // Diet filter
    let matchesDiet = true;
    if (state.activeDietFilter === 'veg') matchesDiet = item.isVeg === true;
    if (state.activeDietFilter === 'non-veg') matchesDiet = item.isVeg === false;
    if (state.activeDietFilter === 'chef-special') matchesDiet = item.isChefSpecial === true;

    // Search query
    let matchesSearch = true;
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase().trim();
      matchesSearch = item.name.toLowerCase().includes(q) ||
                      item.description.toLowerCase().includes(q) ||
                      item.category.toLowerCase().includes(q);
    }

    return matchesCategory && matchesDiet && matchesSearch;
  });
}

function renderMenuItems() {
  const container = document.getElementById('menu-items-grid');
  const countEl = document.getElementById('menu-items-count');
  if (!container) return;

  const items = getFilteredMenuItems();

  if (countEl) {
    countEl.textContent = `Showing ${items.length} ${items.length === 1 ? 'dish' : 'dishes'}`;
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-stone-50 dark:bg-[#181B22] rounded-3xl border border-dashed border-stone-300 dark:border-stone-800 p-8">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center text-red-600 dark:text-red-400">
          <i data-lucide="utensils-crossed" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">No dishes match your selection</h3>
        <p class="text-stone-600 dark:text-stone-400 max-w-md mx-auto text-sm mb-6">
          We couldn't find anything matching "${state.searchQuery}". Try selecting another category or resetting filters.
        </p>
        <button 
          onclick="window.resetMenuFilters()"
          class="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-md transition-all"
        >
          Reset All Filters
        </button>
      </div>
    `;
    refreshIcons();
    return;
  }

  container.innerHTML = items.map(dish => {
    const cartItem = state.cart.find(c => c.id === dish.id);
    const inCartQty = cartItem ? cartItem.quantity : 0;

    return `
      <div class="group flex flex-col bg-white dark:bg-[#1E222B] rounded-2xl overflow-hidden border border-[#E8DFD3] dark:border-[#2D3442] transition-all duration-300 hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1">
        <div class="relative h-48 overflow-hidden bg-stone-200 dark:bg-stone-800">
          <img
            src="${dish.image}"
            alt="${dish.name}"
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>
          
          <div class="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-medium text-white">
            ${dish.isVeg ? 
              `<span class="veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="veg-icon-dot"></span></span><span class="text-emerald-400">Veg</span>` : 
              `<span class="non-veg-icon bg-white/90 dark:bg-stone-900/90 p-0.5"><span class="non-veg-icon-triangle"></span></span><span class="text-red-400">Non-Veg</span>`
            }
          </div>

          ${dish.isChefSpecial ? `
            <div class="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
              <i data-lucide="sparkles" class="w-3 h-3"></i>
              <span>Chef's Choice</span>
            </div>
          ` : `
            <div class="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-amber-400 font-semibold px-2 py-0.5 rounded-full text-xs">
              <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i>
              <span>${dish.rating}</span>
            </div>
          `}

          <div class="absolute bottom-3 left-3 text-xs bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md text-stone-200">
            ⏱️ ${dish.prepTime}
          </div>
        </div>

        <div class="p-4 sm:p-5 flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-start justify-between gap-2 mb-1.5">
              <h3 class="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                ${dish.name}
              </h3>
            </div>
            <p class="text-stone-600 dark:text-stone-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
              ${dish.description}
            </p>
          </div>

          <div class="pt-3 border-t border-[#F0E9DF] dark:border-[#2A303C] flex items-center justify-between mt-auto">
            <div class="flex flex-col">
              <span class="text-xs text-stone-500 dark:text-stone-400">Price</span>
              <span class="text-lg font-black text-stone-900 dark:text-white">
                $${dish.price.toFixed(2)}
              </span>
            </div>

            ${inCartQty > 0 ? `
              <div class="flex items-center gap-1.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 rounded-xl px-2 py-1">
                <button onclick="window.handleCartQuantity('${dish.id}', -1)" aria-label="Decrease quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  -
                </button>
                <span class="font-bold text-stone-900 dark:text-white px-2 text-sm">${inCartQty}</span>
                <button onclick="window.handleCartQuantity('${dish.id}', 1)" aria-label="Increase quantity" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors shadow-xs font-bold text-sm">
                  +
                </button>
              </div>
            ` : `
              <button 
                onclick="window.handleAddToCart('${dish.id}')"
                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-red-600 hover:bg-red-700 text-white shadow-sm shadow-red-600/20 active:scale-95 transition-all"
              >
                <i data-lucide="plus" class="w-4 h-4"></i>
                <span>Add</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// ==========================================
// SPECIAL OFFERS & COUPONS
// ==========================================
function renderSpecialOffers() {
  const container = document.getElementById('special-offers-grid');
  if (!container) return;

  container.innerHTML = specialOffers.map(offer => {
    return `
      <div class="relative flex flex-col justify-between bg-white dark:bg-[#1E222B] rounded-3xl p-6 sm:p-7 border border-[#E8DFD3] dark:border-[#2D3442] shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-36 h-36 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
        
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-400 border border-red-200 dark:border-red-900/50">
              ${offer.badge}
            </span>
            <span class="text-xs text-stone-500 dark:text-stone-400 font-medium">
              Min. ${offer.minOrder}
            </span>
          </div>

          <div class="text-3xl font-black text-red-600 dark:text-red-400 mb-2">
            ${offer.discount}
          </div>

          <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            ${offer.title}
          </h3>

          <p class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6">
            ${offer.description}
          </p>
        </div>

        <div class="pt-4 border-t border-dashed border-stone-200 dark:border-stone-800">
          <div class="flex items-center justify-between gap-2 bg-stone-50 dark:bg-[#161920] p-2 rounded-2xl border border-stone-200 dark:border-stone-800">
            <div class="pl-2 font-mono font-bold text-sm text-stone-800 dark:text-stone-200 tracking-wider">
              ${offer.code}
            </div>
            <button 
              onclick="window.copyCouponCode('${offer.code}')"
              class="px-3.5 py-1.5 rounded-xl bg-stone-900 text-white dark:bg-white dark:text-stone-900 text-xs font-bold hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-all flex items-center gap-1 active:scale-95"
            >
              <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              <span>Copy</span>
            </button>
          </div>
          <p class="text-[11px] text-stone-500 dark:text-stone-400 mt-2 text-center">
            Valid: ${offer.validity}
          </p>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function copyCouponCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    state.appliedCoupon = code;
    showToast(`Coupon code "${code}" copied & applied to your tray!`);
    updateCartUI();
    openCartDrawer();
  }).catch(() => {
    state.appliedCoupon = code;
    showToast(`Applied coupon "${code}" to your tray!`);
    updateCartUI();
  });
}

// ==========================================
// GALLERY & INTERACTIVE LIGHTBOX
// ==========================================
function renderGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filtered = state.galleryCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === state.galleryCategory);

  state.lightboxImages = filtered;

  container.innerHTML = filtered.map((item, index) => {
    return `
      <div 
        onclick="window.openLightbox(${index})"
        class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer bg-stone-200 dark:bg-stone-800 shadow-sm border border-[#E8DFD3] dark:border-[#2D333F]"
      >
        <img
          src="${item.thumb}"
          alt="${item.title}"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
          <span class="text-xs uppercase tracking-wider font-semibold text-amber-400 mb-1">
            ${item.category}
          </span>
          <h4 class="font-bold text-lg mb-1">${item.title}</h4>
          <p class="text-xs text-stone-300 line-clamp-1">${item.caption}</p>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-stone-200">
            <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
            <span>Click to expand</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function openLightbox(index) {
  state.lightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
}

function nextLightboxImage() {
  if (state.lightboxImages.length === 0) return;
  state.lightboxIndex = (state.lightboxIndex + 1) % state.lightboxImages.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  if (state.lightboxImages.length === 0) return;
  state.lightboxIndex = (state.lightboxIndex - 1 + state.lightboxImages.length) % state.lightboxImages.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const current = state.lightboxImages[state.lightboxIndex];
  if (!current) return;

  const imgEl = document.getElementById('lightbox-image');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const counterEl = document.getElementById('lightbox-counter');

  if (imgEl) imgEl.src = current.url;
  if (titleEl) titleEl.textContent = current.title;
  if (descEl) descEl.textContent = current.caption;
  if (counterEl) counterEl.textContent = `${state.lightboxIndex + 1} / ${state.lightboxImages.length}`;
}

// ==========================================
// CUSTOMER REVIEWS & TESTIMONIALS
// ==========================================
function renderReviews() {
  const container = document.getElementById('reviews-grid');
  if (!container) return;

  container.innerHTML = customerReviews.map(rev => {
    return `
      <div class="flex flex-col justify-between bg-white dark:bg-[#1E222B] p-6 sm:p-7 rounded-3xl border border-[#E8DFD3] dark:border-[#2D3442] shadow-sm hover:shadow-xl transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-1 text-amber-500">
              ${Array.from({ length: rev.rating }).map(() => `<i data-lucide="star" class="w-4 h-4 fill-amber-500 text-amber-500"></i>`).join('')}
            </div>
            <span class="text-xs text-stone-400 font-medium">${rev.source}</span>
          </div>

          <p class="text-stone-700 dark:text-stone-300 text-sm leading-relaxed mb-6 italic">
            "${rev.comment}"
          </p>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-[#F0E9DF] dark:border-[#2A303C]">
          <img
            src="${rev.avatar}"
            alt="${rev.author}"
            class="w-11 h-11 rounded-full object-cover border border-stone-200 dark:border-stone-700"
          />
          <div>
            <h4 class="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-1.5">
              ${rev.author}
              ${rev.verified ? `<i data-lucide="badge-check" class="w-4 h-4 text-emerald-500" title="Verified Customer"></i>` : ''}
            </h4>
            <span class="text-xs text-stone-500 dark:text-stone-400">${rev.role}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

// ==========================================
// OPENING HOURS TABLE WITH TODAY HIGHLIGHT
// ==========================================
function renderOpeningHoursTable() {
  const container = document.getElementById('opening-hours-table');
  if (!container) return;

  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[now.getDay()];

  container.innerHTML = restaurantInfo.openingHours.map(schedule => {
    const isToday = schedule.day === todayName;

    return `
      <div class="flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
        isToday 
          ? 'bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 font-semibold' 
          : 'hover:bg-stone-50 dark:hover:bg-stone-800/50'
      }">
        <div class="flex items-center gap-2">
          <span class="text-sm ${isToday ? 'text-red-700 dark:text-red-400 font-bold' : 'text-stone-700 dark:text-stone-300'}">
            ${schedule.day}
          </span>
          ${isToday ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-red-600 text-white tracking-wider">Today</span>` : ''}
        </div>
        <span class="text-sm font-medium ${isToday ? 'text-red-800 dark:text-red-300' : 'text-stone-600 dark:text-stone-400'}">
          ${schedule.opens} – ${schedule.closes}
        </span>
      </div>
    `;
  }).join('');
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function renderFaq() {
  const container = document.getElementById('faq-container');
  if (!container) return;

  container.innerHTML = faqList.map((item, index) => {
    return `
      <div class="border border-[#E8DFD3] dark:border-[#2D333F] rounded-2xl overflow-hidden bg-white dark:bg-[#1C2028]">
        <button 
          onclick="window.toggleFaq(${index})"
          class="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-stone-900 dark:text-stone-100 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <span class="text-sm sm:text-base">${item.q}</span>
          <i data-lucide="chevron-down" id="faq-icon-${index}" class="w-5 h-5 text-stone-400 transition-transform duration-200 flex-shrink-0"></i>
        </button>
        <div id="faq-content-${index}" class="hidden px-5 pb-5 text-stone-600 dark:text-stone-400 text-sm leading-relaxed border-t border-[#F0E9DF] dark:border-[#2A303C] pt-3">
          ${item.a}
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
}

function toggleFaq(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!content) return;

  const isClosed = content.classList.contains('hidden');
  content.classList.toggle('hidden', !isClosed);
  if (icon) {
    icon.style.transform = isClosed ? 'rotate(180deg)' : 'rotate(0deg)';
  }
}

// ==========================================
// CART / ORDER TRAY MANAGEMENT
// ==========================================
function addToCart(dishId) {
  const dish = menuItems.find(d => d.id === dishId);
  if (!dish) return;

  const existing = state.cart.find(c => c.id === dishId);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      isVeg: dish.isVeg,
      image: dish.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  renderMenuItems();
  renderPopularDishes();
  showToast(`Added "${dish.name}" to your tray!`);
}

function updateCartQuantity(dishId, delta) {
  const itemIndex = state.cart.findIndex(c => c.id === dishId);
  if (itemIndex === -1) return;

  state.cart[itemIndex].quantity += delta;
  if (state.cart[itemIndex].quantity <= 0) {
    state.cart.splice(itemIndex, 1);
  }

  saveCart();
  updateCartUI();
  renderMenuItems();
  renderPopularDishes();
}

function removeFromCart(dishId) {
  state.cart = state.cart.filter(c => c.id !== dishId);
  saveCart();
  updateCartUI();
  renderMenuItems();
  renderPopularDishes();
}

function clearCart() {
  state.cart = [];
  state.appliedCoupon = null;
  saveCart();
  updateCartUI();
  renderMenuItems();
  renderPopularDishes();
  showToast('Order tray cleared.');
}

function saveCart() {
  localStorage.setItem('copper_kettle_cart', JSON.stringify(state.cart));
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;

  if (state.appliedCoupon === 'WEEKDAY15') {
    discount = subtotal * 0.15;
  } else if (state.appliedCoupon === 'FAMILYFEAST' && subtotal >= 60) {
    discount = 12.00;
  } else if (state.appliedCoupon === 'STUDENTBITE' && subtotal > 0) {
    discount = 7.00; // Free fries value
  }

  const tax = (subtotal - discount) > 0 ? (subtotal - discount) * 0.08 : 0; // 8% local sales tax
  const deliveryFee = state.orderType === 'delivery' && subtotal > 0 ? 3.50 : 0;
  const total = Math.max(0, subtotal - discount + tax + deliveryFee);

  return { subtotal, discount, tax, deliveryFee, total };
}

function updateCartUI() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totals = calculateCartTotals();

  // Update badge counters
  document.querySelectorAll('.cart-badge-count').forEach(el => {
    el.textContent = count;
    el.classList.toggle('hidden', count === 0);
  });

  document.querySelectorAll('.cart-subtotal-text').forEach(el => {
    el.textContent = `$${totals.total.toFixed(2)}`;
  });

  // Render drawer items
  const drawerContainer = document.getElementById('cart-drawer-items');
  const emptyContainer = document.getElementById('cart-drawer-empty');
  const footerContainer = document.getElementById('cart-drawer-footer');

  if (!drawerContainer) return;

  if (state.cart.length === 0) {
    if (drawerContainer) drawerContainer.innerHTML = '';
    if (emptyContainer) emptyContainer.classList.remove('hidden');
    if (footerContainer) footerContainer.classList.add('hidden');
    return;
  }

  if (emptyContainer) emptyContainer.classList.add('hidden');
  if (footerContainer) footerContainer.classList.remove('hidden');

  drawerContainer.innerHTML = state.cart.map(item => {
    return `
      <div class="flex items-center gap-3 p-3 bg-white dark:bg-[#1E222B] rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xs">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="w-16 h-16 rounded-xl object-cover"
        />
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-stone-900 dark:text-stone-100 text-sm truncate">${item.name}</h4>
          <span class="text-xs text-stone-500 dark:text-stone-400">$${item.price.toFixed(2)} each</span>
          <div class="text-sm font-bold text-red-600 dark:text-red-400 mt-0.5">
            $${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>

        <div class="flex items-center gap-1.5 bg-stone-100 dark:bg-[#282F3B] border border-stone-200 dark:border-stone-700 rounded-xl px-1.5 py-1">
          <button 
            onclick="window.handleCartQuantity('${item.id}', -1)"
            aria-label="Decrease quantity"
            class="w-6 h-6 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-700 font-bold text-xs"
          >
            -
          </button>
          <span class="text-xs font-bold text-stone-900 dark:text-white px-1">${item.quantity}</span>
          <button 
            onclick="window.handleCartQuantity('${item.id}', 1)"
            aria-label="Increase quantity"
            class="w-6 h-6 flex items-center justify-center rounded-lg text-stone-700 dark:text-stone-200 hover:bg-white dark:hover:bg-stone-700 font-bold text-xs"
          >
            +
          </button>
        </div>

        <button 
          onclick="window.handleRemoveCartItem('${item.id}')"
          aria-label="Remove item"
          class="p-1.5 text-stone-400 hover:text-red-500 transition-colors"
        >
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  // Update totals inside drawer
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountRowEl = document.getElementById('cart-discount-row');
  const discountValEl = document.getElementById('cart-discount-val');
  const deliveryRowEl = document.getElementById('cart-delivery-row');
  const deliveryValEl = document.getElementById('cart-delivery-val');
  const taxEl = document.getElementById('cart-tax');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.textContent = `$${totals.subtotal.toFixed(2)}`;
  
  if (discountRowEl && discountValEl) {
    if (totals.discount > 0) {
      discountRowEl.classList.remove('hidden');
      discountValEl.textContent = `-$${totals.discount.toFixed(2)} (${state.appliedCoupon})`;
    } else {
      discountRowEl.classList.add('hidden');
    }
  }

  if (deliveryRowEl && deliveryValEl) {
    if (state.orderType === 'delivery') {
      deliveryRowEl.classList.remove('hidden');
      deliveryValEl.textContent = `$${totals.deliveryFee.toFixed(2)}`;
    } else {
      deliveryRowEl.classList.add('hidden');
    }
  }

  if (taxEl) taxEl.textContent = `$${totals.tax.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${totals.total.toFixed(2)}`;

  refreshIcons();
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    backdrop.classList.remove('hidden');
    drawer.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// WhatsApp Order Direct Generation
function sendWhatsAppOrder() {
  if (state.cart.length === 0) {
    showToast('Your tray is empty! Add dishes to order.');
    return;
  }

  const totals = calculateCartTotals();
  const addressInput = document.getElementById('order-address-input');
  const notesInput = document.getElementById('order-notes-input');
  
  const customerAddress = addressInput ? addressInput.value.trim() : '';
  const customerNotes = notesInput ? notesInput.value.trim() : '';

  let message = `🍽️ *NEW ORDER - ${restaurantInfo.name.toUpperCase()}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📍 *Order Type:* ${state.orderType.toUpperCase()}\n`;
  if (customerAddress) {
    message += `🏠 *Delivery / Table:* ${customerAddress}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📋 *ORDERED ITEMS:*\n`;

  state.cart.forEach(item => {
    message += `• ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💵 *Subtotal:* $${totals.subtotal.toFixed(2)}\n`;
  if (totals.discount > 0) {
    message += `🏷️ *Discount (${state.appliedCoupon}):* -$${totals.discount.toFixed(2)}\n`;
  }
  if (state.orderType === 'delivery') {
    message += `🛵 *Delivery Fee:* $${totals.deliveryFee.toFixed(2)}\n`;
  }
  message += `🏛️ *Estimated Tax:* $${totals.tax.toFixed(2)}\n`;
  message += `✨ *FINAL TOTAL:* $${totals.total.toFixed(2)}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  if (customerNotes) {
    message += `📝 *Kitchen Instructions:* ${customerNotes}\n`;
  }
  message += `\nPlease confirm order availability and estimated preparation time. Thank you!`;

  const waUrl = `https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3200);
}

// ==========================================
// EVENT LISTENERS & GLOBAL EXPORTS
// ==========================================
function setupEventListeners() {
  // Theme toggles
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  // Mobile navigation drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.remove('-translate-x-full');
      if (mobileNavBackdrop) mobileNavBackdrop.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  const closeMobileNav = () => {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('-translate-x-full');
    if (mobileNavBackdrop) mobileNavBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

  // Close mobile nav when clicking anchor links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Search input
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderMenuItems();
    });
  }

  // Dietary filters
  document.querySelectorAll('.diet-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      state.activeDietFilter = filter;

      document.querySelectorAll('.diet-filter-btn').forEach(b => {
        const isCurrent = b.dataset.filter === filter;
        b.classList.toggle('bg-red-600', isCurrent);
        b.classList.toggle('text-white', isCurrent);
        b.classList.toggle('border-transparent', isCurrent);
        b.classList.toggle('bg-white', !isCurrent);
        b.classList.toggle('dark:bg-[#1E232C]', !isCurrent);
        b.classList.toggle('text-stone-700', !isCurrent);
        b.classList.toggle('dark:text-stone-300', !isCurrent);
      });

      renderMenuItems();
    });
  });

  // Gallery filters
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      state.galleryCategory = cat;

      document.querySelectorAll('.gallery-filter-btn').forEach(b => {
        const isCurrent = b.dataset.category === cat;
        b.classList.toggle('bg-red-600', isCurrent);
        b.classList.toggle('text-white', isCurrent);
        b.classList.toggle('bg-white', !isCurrent);
        b.classList.toggle('dark:bg-[#1E232C]', !isCurrent);
        b.classList.toggle('text-stone-700', !isCurrent);
        b.classList.toggle('dark:text-stone-300', !isCurrent);
      });

      renderGallery();
    });
  });

  // Lightbox key controls
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightbox-modal');
    if (modal && !modal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    }
  });

  // Cart drawer triggers
  document.querySelectorAll('.open-cart-btn').forEach(btn => {
    btn.addEventListener('click', openCartDrawer);
  });
  const cartCloseBtn = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-drawer-backdrop');
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // Order type switcher
  document.querySelectorAll('.order-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.type;
      state.orderType = type;

      document.querySelectorAll('.order-type-btn').forEach(b => {
        const isActive = b.dataset.type === type;
        b.classList.toggle('bg-red-600', isActive);
        b.classList.toggle('text-white', isActive);
        b.classList.toggle('bg-stone-100', !isActive);
        b.classList.toggle('dark:bg-[#1E232C]', !isActive);
        b.classList.toggle('text-stone-700', !isActive);
        b.classList.toggle('dark:text-stone-300', !isActive);
      });

      const label = document.getElementById('order-address-label');
      const input = document.getElementById('order-address-input');
      if (label && input) {
        if (type === 'delivery') {
          label.textContent = "Delivery Address & Apt #";
          input.placeholder = "e.g. 742 Evergreen Terr, Apt 4B";
        } else if (type === 'dine-in') {
          label.textContent = "Your Table Number (if seated)";
          input.placeholder = "e.g. Table #12 or Patio Booth";
        } else {
          label.textContent = "Pickup Time & Contact Name";
          input.placeholder = "e.g. John Doe, pickup in 25 mins";
        }
      }

      updateCartUI();
    });
  });

  // Coupon apply input inside cart
  const applyCouponBtn = document.getElementById('apply-coupon-btn');
  const couponInput = document.getElementById('cart-coupon-input');
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      const code = couponInput.value.trim().toUpperCase();
      if (!code) return;

      const validOffer = specialOffers.find(o => o.code === code);
      if (validOffer) {
        state.appliedCoupon = code;
        showToast(`Coupon "${code}" applied successfully!`);
        updateCartUI();
      } else {
        showToast(`Invalid coupon code. Try WEEKDAY15 or FAMILYFEAST`);
      }
    });
  }

  // WhatsApp order button
  const waOrderBtn = document.getElementById('cart-whatsapp-order-btn');
  if (waOrderBtn) {
    waOrderBtn.addEventListener('click', sendWhatsAppOrder);
  }

  // Clear cart button
  const clearCartBtn = document.getElementById('clear-cart-btn');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', clearCart);
  }

  // Table Reservation Form Submission
  const bookingForm = document.getElementById('table-booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('book-name').value.trim();
      const phone = document.getElementById('book-phone').value.trim();
      const date = document.getElementById('book-date').value;
      const time = document.getElementById('book-time').value;
      const guests = document.getElementById('book-guests').value;
      const seating = document.getElementById('book-seating').value;
      const notes = document.getElementById('book-notes').value.trim();

      if (!name || !phone || !date || !time) {
        showToast('Please fill out all required reservation fields.');
        return;
      }

      // Show confirmation modal
      const modal = document.getElementById('booking-confirmation-modal');
      const detailsEl = document.getElementById('booking-summary-details');
      if (modal && detailsEl) {
        detailsEl.innerHTML = `
          <div class="space-y-2 text-sm text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/60 p-4 rounded-xl border border-stone-200 dark:border-stone-700">
            <div class="flex justify-between"><strong>Guest:</strong> <span>${name}</span></div>
            <div class="flex justify-between"><strong>Phone:</strong> <span>${phone}</span></div>
            <div class="flex justify-between"><strong>Date & Time:</strong> <span>${date} at ${time}</span></div>
            <div class="flex justify-between"><strong>Guests:</strong> <span>${guests} Persons (${seating})</span></div>
            ${notes ? `<div class="flex justify-between"><strong>Notes:</strong> <span>${notes}</span></div>` : ''}
          </div>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');

        // Setup WhatsApp confirmation button
        const sendWaBtn = document.getElementById('booking-send-wa-btn');
        if (sendWaBtn) {
          sendWaBtn.onclick = () => {
            let msg = `📅 *TABLE RESERVATION REQUEST - ${restaurantInfo.name.toUpperCase()}*\n`;
            msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
            msg += `👤 *Name:* ${name}\n`;
            msg += `📞 *Phone:* ${phone}\n`;
            msg += `🗓️ *Date:* ${date}\n`;
            msg += `⏰ *Time:* ${time}\n`;
            msg += `👥 *Party Size:* ${guests} Guests\n`;
            msg += `🪑 *Seating:* ${seating}\n`;
            if (notes) msg += `📝 *Special Requests:* ${notes}\n`;
            msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
            msg += `Please confirm if a table is available at this time. Thank you!`;

            window.open(`https://wa.me/${restaurantInfo.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            bookingForm.reset();
          };
        }
      }
    });
  }

  // Close reservation modal
  const closeBookingModalBtn = document.getElementById('close-booking-modal-btn');
  if (closeBookingModalBtn) {
    closeBookingModalBtn.addEventListener('click', () => {
      const modal = document.getElementById('booking-confirmation-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }

  // Newsletter signup
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletter-email');
      if (input && input.value) {
        showToast('🎉 Thank you! Check your email for your $5 welcome coupon.');
        input.value = '';
      }
    });
  }
}

// Global window bindings for inline HTML clicks
window.handleAddToCart = addToCart;
window.handleCartQuantity = updateCartQuantity;
window.handleRemoveCartItem = removeFromCart;
window.handleCategorySelect = (categoryId) => {
  state.activeCategory = categoryId;
  renderCategories();
  renderMenuItems();
};
window.resetMenuFilters = () => {
  state.activeCategory = 'all';
  state.activeDietFilter = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';
  renderCategories();
  renderMenuItems();
};
window.copyCouponCode = copyCouponCode;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.nextLightboxImage = nextLightboxImage;
window.prevLightboxImage = prevLightboxImage;
window.toggleFaq = toggleFaq;
