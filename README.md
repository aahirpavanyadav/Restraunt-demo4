# The Copper Kettle — Modern Local Restaurant Website

A vibrant, welcoming, high-performance website designed for a modern local restaurant. Built with a food-first philosophy, accessible design, dark and light modes, and seamless conversion tools like click-to-call, table reservations, and an interactive WhatsApp order tray.

---

## 🍽️ 1. Restaurant Identity & Design Direction

- **Brand Name:** The Copper Kettle
- **Concept:** Bistro, Fresh Grills & Authentic Kitchen
- **Tagline:** *Wholesome Flavors, Honest Hospitality & Everyday Comfort Food*
- **Audience:** Everyday neighborhood residents, families, students, and working professionals.
- **Design Philosophy:** Welcoming, energetic, food-focused, approachable, and affordable-looking — without pretense or luxury markups.

### Color System
- **Light Theme:**
  - Base Background: Warm Cream (`#FAF7F2`)
  - Secondary Container: Soft Almond (`#F3ECE2`)
  - Cards: Crisp White (`#FFFFFF`) with warm borders (`#E8DFD3`)
  - Typography: Dark Charcoal (`#1C1917`) & Muted Umber (`#57534E`)
  - Primary Accent: Rich Tomato Red (`#D9381E` / `#EA580C`)
  - Secondary Accent: Warm Golden Amber (`#D97706` / `#F59E0B`)
- **Dark Theme:**
  - Base Background: Deep Charcoal (`#121316`)
  - Surface & Cards: Warm Slate (`#1C2028` / `#22262E`) with subtle borders (`#2D333F`)
  - Typography: Off-White (`#F5F5F4`) & Silver Stone (`#D6D3D1`)
  - Primary Accent: Bright Tomato Coral (`#EF4444`) & Warm Amber (`#F59E0B`)

---

## 🌓 2. Fully Functional Dark & Light Mode

- **Theme Toggle:** Prominently featured on desktop navbar and mobile drawer with animated Sun and Moon icons.
- **Persistence:** Stored in `localStorage.getItem('theme')`.
- **System Preference Detection:** Automatically respects `window.matchMedia('(prefers-color-scheme: dark)')` on first visit.
- **Accessible Contrast:** Complies with WCAG AA/AAA readability standards across all cards, buttons, badges, and modals.
- **Smooth Transitions:** Polished CSS transitions between theme switches.

---

## 📱 3. Mobile-First Responsive Design

- Optimized across all breakpoints from **320px** smartphones to tablets, laptops, and ultra-wide screens.
- **Touch-Friendly Controls:** Minimum 44px touch targets on all interactive buttons and toggles.
- **Mobile Navigation Drawer:** Smooth slide-out menu with frosted backdrop blur.
- **Mobile Quick Action Bar:** Fixed sticky bar at the bottom on mobile screens with 4 essential touch actions:
  - 📞 **Call Now** (`tel:...`)
  - 💬 **WhatsApp Chat**
  - 📖 **View Menu**
  - 🛍️ **Order Tray** with live item badge counter
- **Zero Horizontal Overflow:** Strict layout containment ensuring no horizontal scrolling on small screens.

---

## 🍲 4. Features & Sections

### Navigation
- Brand Logo with copper kettle emblem.
- Dynamic **Live Opening Status Badge**: Automatically computes whether the restaurant is currently Open or Closed based on real day of the week and local hours (e.g. `🟢 Open Now • Closes at 10:30 PM`).
- Direct links: Home, Best Sellers, Story, Menu, Offers, Gallery, Reviews, Location & Booking.
- Order Tray indicator with live item count and running subtotal.

### Hero Section
- Mouth-watering photography with warm glowing gradient backdrop.
- Catchy headline communicating comforting food at honest everyday prices.
- Dual Conversion CTAs: **Explore Menu** & **Order via WhatsApp**.
- Trust metrics: 4.8★ Rating (1,450+ Diners), 100% Farm Fresh Produce, 25-Min Fast Pickup, Family & Student Friendly.

### Popular Dishes (Best Sellers)
- 4 best-selling dishes showcased with high-res photography, Veg/Non-Veg indicators, ratings, prep times, prices, and one-click "Add to Tray".

### About Us & Food Philosophy
- The story of The Copper Kettle.
- The 3 Kitchen Pillars:
  1. *Stone-Ground Spices Daily* (no MSG or artificial colors).
  2. *Local Farms & Hygienic Kitchen* (separate cookware for pure veg items).
  3. *Pocket-Friendly Generous Portions*.
- Multi-photo masonry collage highlighting the open kitchen and dining space.

### Complete Interactive Menu
- **Category Filter Tabs:** Starters, Main Course, Biryani & Rice, Fast Food, Beverages, Desserts.
- **Dietary Filter Pills:** All, Pure Veg (🟢 green badge), Non-Veg (🔴 red triangle), Chef Specials (⭐).
- **Live Search Bar:** Instant real-time filtering by dish name, category, or ingredients.
- Inline quantity adjusters (+/-) directly on dish cards.

### Special Offers & Value Deals
- Promotional cards with coupon codes (`WEEKDAY15`, `FAMILYFEAST`, `STUDENTBITE`).
- **One-Click Copy:** Copies coupon code to clipboard, triggers a visual toast, and automatically applies it to the order tray.

### Photo Gallery & Interactive Lightbox
- High-res photo gallery with category filtering (All, Food & Drinks, Cozy Ambiance, Kitchen & Craft).
- **Fullscreen Lightbox Modal:** Full image display, previous/next controls, keyboard support (`Escape`, `ArrowLeft`, `ArrowRight`).

### Customer Reviews
- Authentic customer testimonials with avatars, verified diner badges, review sources (Google Reviews, TripAdvisor), and star ratings.

### Contact, Location & Live Hours Table
- Full address with landmark and customer parking info.
- Click-to-call phone button and WhatsApp direct chat link.
- Interactive local map card with "Get Directions" link to Google Maps.
- **Dynamic Weekly Opening Hours Table:** Automatically detects today's day of the week and highlights it with a green "TODAY" badge.

### Table Reservation Form
- Reservation booking with live validation: Name, Phone, Date, Time, Party Size, Seating Preference (Indoor Booth / Garden Patio), and Notes.
- **Instant WhatsApp Confirmation:** Allows users to send their reservation request directly to the restaurant's WhatsApp with one click.

### Slide-Over Order Tray (Cart)
- Full-featured tray drawer with smooth slide animation.
- Order type selector: **🛵 Delivery**, **🥡 Takeaway / Pickup**, or **🍽️ Dine-In**.
- Promo coupon input with automatic discount calculation.
- Live cost breakdown: Subtotal, Discount, Delivery Fee, Local Sales Tax, and Total.
- **WhatsApp Order Direct Integration:** Generates a clean, formatted WhatsApp order message with items, quantities, and delivery/table details ready to send to the kitchen.

---

## 🚀 5. Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm

### Installation & Development
```bash
# Navigate to project directory
cd /home/dvlpr/.gemini/antigravity/scratch/restaurant-demo4

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Preview
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

### Automated Verification Test
```bash
# Run test suite
node test/verify.js
```

---

## ⚡ 6. Tech Stack & Performance
- **Vite 8:** Lightning-fast HMR and production bundling.
- **Tailwind CSS v4:** Modern utility-first styling with native CSS variables for instant theme switching.
- **Lucide Icons:** Optimized tree-shaken SVG icons (bundle size < 20 kB gzipped).
- **SEO & Structured Data:** Schema.org `Restaurant` JSON-LD for local search optimization.
- **Accessibility:** Semantic HTML5, ARIA labels, keyboard navigation, and `prefers-reduced-motion` compliance.
