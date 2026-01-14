// specsTemplate.js
export const archetypeSpecs = {
  laptops: [
    { icon: "screen", label: "Screen size", value: "14-inch Retina Display" },
    { icon: "cpu", label: "Processor", value: "Intel Core Ultra/ Ryzen AMD CPU" },
    { icon: "cores", label: "Cores", value: "16-core CPU" },
    { icon: "battery", label: "Battery", value: "Up to 14 hours" }
  ],

  mobile: [
    { icon: "screen", label: "Display", value: "6.7-inch OLED/ (10.2-inch)" },
    { icon: "camera", label: "Camera", value: "48 MP" },
    { icon: "battery", label: "Battery", value: "Up to 29 hours" }
  ],

  wearable: [
    { icon: "screen", label: "Display", value: "AMOLED" },
    { icon: "battery", label: "Battery Life", value: "Up to 7 days" }
  ],

  audio: [
    { icon: "battery", label: "Playback Time", value: "Up to 30 hours" },
    { icon: "sound", label: "Sound", value: "High quality audio" }
  ],

  computer: [
    { icon: "screen", label: "Screen", value: "High resolution display" },
    { icon: "cpu", label: "Processor", value: "High performance CPU" },
    { icon: "storage", label: "Storage", value: "Fast SSD" }
  ],
  
  beauty: [
    { icon: "sparkles", label: "Finish", value: "Smooth & radiant" },
    { icon: "leaf", label: "Ingredients", value: "Skin-friendly formula" },
    { icon: "drop", label: "Volume", value: "100 ml" }
  ],

  fragrances: [
    { icon: "wind", label: "Fragrance Type", value: "Eau de Parfum" },
    { icon: "clock", label: "Lasting", value: "Up to 8 hours" },
    { icon: "drop", label: "Volume", value: "50 ml" }
  ],

  furniture: [
    { icon: "cube", label: "Material", value: "Solid wood / Metal" },
    { icon: "ruler", label: "Dimensions", value: "Standard size" },
    { icon: "weight", label: "Weight Capacity", value: "150 kg" }
  ],

  groceries: [
    { icon: "package", label: "Quantity", value: "1 kg pack" },
    { icon: "calendar", label: "Expiry", value: "12 months shelf life" },
    { icon: "leaf", label: "Quality", value: "Fresh & organic" }
  ],

  "home-decoration": [
    { icon: "home", label: "Usage", value: "Indoor decor" },
    { icon: "palette", label: "Style", value: "Modern aesthetic" },
    { icon: "cube", label: "Material", value: "Ceramic / Glass" }
  ],

  "kitchen-accessories": [
    { icon: "tool", label: "Utility", value: "Daily kitchen use" },
    { icon: "cube", label: "Material", value: "Stainless steel" },
    { icon: "shield", label: "Safety", value: "Food grade" }
  ],

  fashion: [
    { icon: "tshirt", label: "Fabric", value: "Premium cotton" },
    { icon: "ruler", label: "Fit", value: "Regular fit" },
    { icon: "palette", label: "Style", value: "Casual wear" }
  ],

  watches: [
    { icon: "clock", label: "Movement", value: "Quartz" },
    { icon: "droplet", label: "Water Resistance", value: "5 ATM" },
    { icon: "watch", label: "Dial Size", value: "42 mm" }
  ],

  vehicle: [
    { icon: "engine", label: "Engine", value: "150cc – 500cc" },
    { icon: "speed", label: "Top Speed", value: "120 km/h" },
    { icon: "fuel", label: "Fuel Type", value: "Petrol" }
  ],

  accessories: [
    { icon: "cube", label: "Material", value: "Synthetic / Leather" },
    { icon: "briefcase", label: "Usage", value: "Daily use" },
    { icon: "weight", label: "Weight", value: "Lightweight design" }
  ],


  generic: [
    { icon: "default", label: "Category", value: "Standard Product" }
  ],
};

export const categoryMap = {
  smartphones: "mobile",
  tablets: "mobile",
  laptops: "laptops",

  "mens-watches": "watches",
  "womens-watches": "watches",

  smartwatches: "wearable",
  headphones: "audio",

  beauty: "beauty",
  fragrances: "fragrances",
  groceries: "groceries",

  furniture: "furniture",
  "home-decoration": "home-decoration",
  "kitchen-accessories": "kitchen-accessories",

  "mens-shirts": "fashion",
  "mens-shoes": "fashion",
  "womens-dresses": "fashion",
  "womens-shoes": "fashion",
  tops: "fashion",

  sunglasses: "accessories",
  "mobile-accessories": "accessories",
  "sports-accessories": "accessories",
  "womens-bags": "accessories",
  "womens-jewellery": "accessories",

  motorcycle: "vehicle",
  vehicle: "vehicle",
};
