// Restaurant Information and Complete Menu Data
export const restaurantInfo = {
  name: "The Copper Kettle",
  tagline: "Bistro & Fresh Kitchen",
  slogan: "Honest Flavors, Warm Hospitality & Everyday Comfort Food",
  description: "A cozy neighborhood dining destination serving lovingly prepared comfort meals, smoky grills, aromatic biryanis, and artisanal desserts. Made fresh daily with local produce, no artificial colors, and zero shortcuts.",
  phone: "+1 (555) 382-7490",
  phoneFormatted: "+1 (555) 382-7490",
  whatsappNumber: "15553827490",
  email: "hello@thecopperkettlebistro.com",
  address: {
    street: "142 Heritage Boulevard, Suite 4",
    landmark: "Opposite Market Square Garden",
    city: "Metro City",
    state: "CA",
    zip: "94016",
    mapsUrl: "https://maps.google.com/?q=142+Heritage+Boulevard+Metro+City"
  },
  openingHours: [
    { day: "Monday", opens: "11:30 AM", closes: "10:30 PM", openHour: 11.5, closeHour: 22.5 },
    { day: "Tuesday", opens: "11:30 AM", closes: "10:30 PM", openHour: 11.5, closeHour: 22.5 },
    { day: "Wednesday", opens: "11:30 AM", closes: "10:30 PM", openHour: 11.5, closeHour: 22.5 },
    { day: "Thursday", opens: "11:30 AM", closes: "10:30 PM", openHour: 11.5, closeHour: 22.5 },
    { day: "Friday", opens: "11:30 AM", closes: "11:30 PM", openHour: 11.5, closeHour: 23.5 },
    { day: "Saturday", opens: "11:00 AM", closes: "11:30 PM", openHour: 11.0, closeHour: 23.5 },
    { day: "Sunday", opens: "11:00 AM", closes: "10:30 PM", openHour: 11.0, closeHour: 22.5 }
  ],
  stats: [
    { number: "4.8★", label: "1,450+ Google Reviews" },
    { number: "45+", label: "Chef Signature Dishes" },
    { number: "100%", label: "Farm-Fresh Local Produce" },
    { number: "6+", label: "Years Serving You" }
  ]
};

export const specialOffers = [
  {
    id: "offer-1",
    code: "WEEKDAY15",
    discount: "15% OFF",
    title: "Executive Lunch Hour",
    description: "Enjoy 15% off your entire meal bill on all Dine-In and Takeaway orders between 12:00 PM and 4:00 PM.",
    validity: "Mon – Thu | 12:00 PM – 4:00 PM",
    badge: "Popular Deal",
    minOrder: "$25"
  },
  {
    id: "offer-2",
    code: "FAMILYFEAST",
    discount: "$12 OFF",
    title: "Family Weekend Bonanza",
    description: "Flat $12 discount on orders above $60. Includes complimentary chef's dessert platter for the table.",
    validity: "Fri – Sun | All Day",
    badge: "Weekend Special",
    minOrder: "$60"
  },
  {
    id: "offer-3",
    code: "STUDENTBITE",
    discount: "FREE FRIES",
    title: "Student Combo Perk",
    description: "Get a free portion of Peri-Peri Truffle Fries with any Burger or Wrap upon showing student ID.",
    validity: "Everyday | Students Only",
    badge: "Pocket Friendly",
    minOrder: "1 Main Dish"
  }
];

export const menuCategories = [
  { id: "all", label: "All Items", icon: "Utensils" },
  { id: "starters", label: "Starters", icon: "Flame" },
  { id: "main-course", label: "Main Course", icon: "CookingPot" },
  { id: "biryani-rice", label: "Biryani & Rice", icon: "Wheat" },
  { id: "fast-food", label: "Fast Food", icon: "Sandwich" },
  { id: "beverages", label: "Beverages", icon: "GlassWater" },
  { id: "desserts", label: "Desserts", icon: "IceCream" }
];

export const menuItems = [
  // STARTERS
  {
    id: "m-1",
    name: "Crispy Honey Chilli Lotus Stem",
    category: "starters",
    price: 9.50,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Thinly sliced lotus root tossed in sesame oil, tangy honey-chilli glaze, and roasted sesame seeds.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "12 mins"
  },
  {
    id: "m-2",
    name: "Smoky Charcoal Chicken Tikka",
    category: "starters",
    price: 12.00,
    isVeg: false,
    isPopular: true,
    isChefSpecial: false,
    rating: 4.8,
    description: "Tender boneless chicken thigh marinated in hung yogurt, mustard oil, and hand-ground degi mirch.",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "hot",
    prepTime: "15 mins"
  },
  {
    id: "m-3",
    name: "Cheesy Herb Stuffed Mushrooms",
    category: "starters",
    price: 10.50,
    isVeg: true,
    isPopular: false,
    isChefSpecial: true,
    rating: 4.7,
    description: "Plump button mushrooms filled with herb ricotta, mozzarella, and garlic breadcrumb crust.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "14 mins"
  },
  {
    id: "m-4",
    name: "Malabar Pepper Garlic Prawns",
    category: "starters",
    price: 14.50,
    isVeg: false,
    isPopular: false,
    isChefSpecial: true,
    rating: 4.9,
    description: "Fresh coastal prawns sautéed in cold-pressed coconut oil, crushed Tellicherry pepper, and curry leaves.",
    image: "https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "hot",
    prepTime: "12 mins"
  },
  {
    id: "m-5",
    name: "Crispy Sweet Corn Chaat Basket",
    category: "starters",
    price: 8.50,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.6,
    description: "Crunchy golden corn kernels tossed with pomegranate, chaat masala, fresh lime, and cilantro.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "10 mins"
  },

  // MAIN COURSE
  {
    id: "m-6",
    name: "Old Delhi Velvet Butter Chicken",
    category: "main-course",
    price: 14.50,
    isVeg: false,
    isPopular: true,
    isChefSpecial: true,
    rating: 5.0,
    description: "Tandoor-roasted chicken simmered in an aromatic velvety tomato and cashew gravy with churned butter.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "18 mins"
  },
  {
    id: "m-7",
    name: "Royal Paneer Lababdar",
    category: "main-course",
    price: 12.50,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    rating: 4.8,
    description: "Fresh cottage cheese cubes folded into a coarse onion-tomato gravy with grated paneer and kasuri methi.",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "15 mins"
  },
  {
    id: "m-8",
    name: "24-Hour Slow Dal Makhani",
    category: "main-course",
    price: 10.00,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Black lentils slow-cooked overnight over glowing charcoal with churned butter, cream, and subtle ginger.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "10 mins"
  },
  {
    id: "m-9",
    name: "Herb Grilled Chicken & Mash",
    category: "main-course",
    price: 15.00,
    isVeg: false,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.7,
    description: "Pan-seared marinated chicken breast served over creamy garlic mashed potatoes and rosemary jus.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "20 mins"
  },
  {
    id: "m-10",
    name: "Smoked Eggplant Bharta & Roti",
    category: "main-course",
    price: 9.50,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.6,
    description: "Fire-roasted mashed eggplant tempered with shallots, heirloom tomatoes, green chillies, and fresh coriander.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "12 mins"
  },

  // BIRYANI / RICE
  {
    id: "m-11",
    name: "Dum Pukht Chicken Biryani",
    category: "biryani-rice",
    price: 13.50,
    isVeg: false,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Aged long-grain basmati rice and marinated chicken sealed in a clay handi with saffron, caramelized onions, and mint.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "20 mins"
  },
  {
    id: "m-12",
    name: "Hyderabadi Subz Dum Biryani",
    category: "biryani-rice",
    price: 11.00,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.8,
    description: "Seasonal garden veggies, paneer cubes, and aromatic basmati slow steamed with kewra water and fried cashews.",
    image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "15 mins"
  },
  {
    id: "m-13",
    name: "Nawabi Slow-Cooked Mutton Biryani",
    category: "biryani-rice",
    price: 16.50,
    isVeg: false,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Tender bone-in mutton pieces marinated in royal spices and layered with fragrant saffron rice. Served with mirchi ka salan.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "hot",
    prepTime: "22 mins"
  },
  {
    id: "m-14",
    name: "Ghee Jeera Basmati Pulao",
    category: "biryani-rice",
    price: 6.50,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.6,
    description: "Fluffy basmati rice tempered with golden cumin seeds, green cardamom, and fragrant desi cow ghee.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "10 mins"
  },

  // FAST FOOD
  {
    id: "m-15",
    name: "The Kettle Smashed Cheeseburger",
    category: "fast-food",
    price: 11.00,
    isVeg: false,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Two crispy-edged prime beef or chicken patties, melted cheddar, house secret smoky kettle sauce, and pickles on brioche.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "12 mins"
  },
  {
    id: "m-16",
    name: "Crispy Peri-Peri Paneer Tikka Wrap",
    category: "fast-food",
    price: 8.50,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    rating: 4.7,
    description: "Smoky tandoori paneer cubes, crunchy bell peppers, pickled onions, and house mint mayo rolled in a handmade flatbread.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "10 mins"
  },
  {
    id: "m-17",
    name: "Loaded Cheesy Truffle Fries",
    category: "fast-food",
    price: 7.00,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    rating: 4.8,
    description: "Hand-cut Idaho potato fries dusted with peri-peri spice, drenched in molten cheddar sauce, truffle oil, and chives.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "mild",
    prepTime: "8 mins"
  },
  {
    id: "m-18",
    name: "Honey Chipotle BBQ Chicken Wings (6 pcs)",
    category: "fast-food",
    price: 10.50,
    isVeg: false,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.8,
    description: "Crispy double-fried wings tossed in our sweet and smoky house honey chipotle glaze with cool ranch dip.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "medium",
    prepTime: "14 mins"
  },

  // BEVERAGES
  {
    id: "m-19",
    name: "Alphonso Mango Cardamom Lassi",
    category: "beverages",
    price: 5.50,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Thick churned farm yogurt blended with sweet Alphonso mango pulp, crushed pistachios, and green cardamom.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "5 mins"
  },
  {
    id: "m-20",
    name: "Fresh Kaffir Lime & Mint Cooler",
    category: "beverages",
    price: 4.50,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.7,
    description: "Sparkling infused water with fresh garden mint, hand-squeezed Persian lime, black salt, and organic cane sugar.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "5 mins"
  },
  {
    id: "m-21",
    name: "Artisanal Masala Cutting Chai",
    category: "beverages",
    price: 3.00,
    isVeg: true,
    isPopular: true,
    isChefSpecial: false,
    rating: 4.9,
    description: "Strong black Assam tea simmered with fresh crushed ginger, cinnamon bark, cardamom, and creamy whole milk.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "6 mins"
  },
  {
    id: "m-22",
    name: "Iced Hazelnut Cold Brew",
    category: "beverages",
    price: 6.00,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.8,
    description: "Single-origin Arabica steeped for 18 hours, served over artisanal ice with toasted hazelnut syrup and cold foam.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "4 mins"
  },

  // DESSERTS
  {
    id: "m-23",
    name: "Sizzling Chocolate Walnut Brownie",
    category: "desserts",
    price: 8.50,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    rating: 5.0,
    description: "Warm fudgy dark chocolate brownie on a smoking cast iron skillet, topped with Madagascar vanilla gelato and hot fudge.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "8 mins"
  },
  {
    id: "m-24",
    name: "Angoori Gulab Jamun & Saffron Rabri",
    category: "desserts",
    price: 7.50,
    isVeg: true,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    description: "Bite-sized golden milk dumplings soaked in cardamom rose syrup, nestled in rich saffron-reduced condensed milk.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "5 mins"
  },
  {
    id: "m-25",
    name: "New York Baked Berry Cheesecake",
    category: "desserts",
    price: 8.00,
    isVeg: true,
    isPopular: false,
    isChefSpecial: false,
    rating: 4.8,
    description: "Classic dense cream cheese cake on a golden graham cracker crust, topped with tart house-made mixed berry compote.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80",
    spiceLevel: "none",
    prepTime: "4 mins"
  }
];

export const galleryImages = [
  {
    id: "g-1",
    category: "food",
    title: "Signature Dum Biryani Platter",
    caption: "Slow cooked in sealed clay handis with saffron and aromatic spices.",
    url: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-2",
    category: "interior",
    title: "Warm Rustic Dining Room",
    caption: "Cozy timber booths and warm ambient lighting designed for family gatherings.",
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-3",
    category: "kitchen",
    title: "Charcoal Tandoor Skewers",
    caption: "Live clay ovens firing fresh naans and marinated tikka skewers.",
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-4",
    category: "food",
    title: "The Smashed Brioche Burger",
    caption: "Crispy lacy edges, double American cheese and kettle sauce.",
    url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-5",
    category: "interior",
    title: "Outdoor Sunny Patio",
    caption: "Breezy afternoon coffee, evening drinks and pet-friendly outdoor seating.",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-6",
    category: "food",
    title: "Velvety Butter Chicken & Garlic Naan",
    caption: "Slow-simmered creamy tomato gravy served piping hot.",
    url: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-7",
    category: "kitchen",
    title: "Fresh Daily Prep & Spices",
    caption: "Whole spices stone-ground every morning with zero synthetic preservatives.",
    url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "g-8",
    category: "food",
    title: "Sizzling Gelato Brownie",
    caption: "Cast iron skillet decadence topped with Belgian chocolate drizzle.",
    url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  }
];

export const customerReviews = [
  {
    id: "rev-1",
    author: "Elena Rostova",
    role: "Local Foodie & Architect",
    rating: 5,
    date: "November 4, 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    verified: true,
    source: "Google Review",
    comment: "The Butter Chicken and Dal Makhani here are hands down the best in the area! The prices are unbelievably fair for this portion size. Cozy atmosphere, fast service, and the staff actually treats you like family."
  },
  {
    id: "rev-2",
    author: "Marcus Chen",
    role: "College Student & Regular",
    rating: 5,
    date: "October 28, 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    verified: true,
    source: "Google Review",
    comment: "The Smashed Cheeseburger with peri-peri fries is my go-to post-lecture meal. Great student combos and super convenient to order ahead on WhatsApp and grab it on my way home!"
  },
  {
    id: "rev-3",
    author: "Priya & Rajesh Sharma",
    role: "Family of 4",
    rating: 5,
    date: "October 19, 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    verified: true,
    source: "TripAdvisor",
    comment: "We hosted my parents' 30th anniversary dinner here. The Dum Chicken Biryani was fragrant and delicate, not greasy at all. Everyone from my 8-year-old to my grandparents loved the food. Highly recommended!"
  },
  {
    id: "rev-4",
    author: "David Miller",
    role: "Software Consultant",
    rating: 5,
    date: "September 30, 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    verified: true,
    source: "Google Review",
    comment: "The weekday lunch deal is unbeatable value. Fast, fresh, clean, and delicious. You can taste the real stone-ground spices in every bite."
  }
];

export const faqList = [
  {
    q: "Do you offer pure vegetarian and gluten-friendly options?",
    a: "Yes! Over 50% of our menu is purely vegetarian, prepared with separate cookware and utensils. We also clearly mark gluten-sensitive and dairy-free options on our menu."
  },
  {
    q: "How does ordering through WhatsApp work?",
    a: "Simply browse our menu, add your favorites to your order tray, and tap 'Order via WhatsApp'. It creates a pre-formatted message with your items, selected address or pickup time, and sends it directly to our kitchen team for instant confirmation!"
  },
  {
    q: "Can I reserve a table for large groups or birthdays?",
    a: "Absolutely! You can use our Table Booking form on this page or give us a quick call. For parties larger than 10, we recommend booking at least 24 hours in advance."
  },
  {
    q: "Is parking available at the restaurant?",
    a: "Yes, we have dedicated customer parking behind the building accessible from Market Square Lane, plus ample street parking out front."
  }
];
