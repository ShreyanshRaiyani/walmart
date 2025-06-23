export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  fastDelivery: boolean;
  sponsored?: boolean;
}

export const products: Product[] = [
  // Electronics
  {
    id: '1',
    name: 'Apple iPhone 15 Pro Max 256GB',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 1247,
    description: 'The most advanced iPhone ever with titanium design and powerful A17 Pro chip.',
    features: ['6.7" Pro Display', 'A17 Pro Chip', 'Pro Camera System', '5G Connectivity'],
    inStock: true,
    fastDelivery: true,
    sponsored: true
  },
  {
    id: '2',
    name: 'Samsung 65" QLED 4K Smart TV',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.6,
    reviews: 892,
    description: 'Experience brilliant colors and sharp details with Quantum Dot technology.',
    features: ['65" QLED Display', '4K Resolution', 'Smart TV Platform', 'HDR Support'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '3',
    name: 'Sony WH-1000XM4 Wireless Headphones',
    price: 299,
    originalPrice: 349,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.7,
    reviews: 2156,
    description: 'Industry-leading noise canceling with premium sound quality.',
    features: ['Active Noise Canceling', '30hr Battery', 'Quick Charge', 'Touch Controls'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '4',
    name: 'MacBook Air M2 13-inch',
    price: 1199,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 756,
    description: 'Supercharged by M2 chip for incredible performance and battery life.',
    features: ['M2 Chip', '13.6" Liquid Retina Display', 'All-day Battery', 'MagSafe Charging'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '5',
    name: 'iPad Pro 12.9" M2 Chip',
    price: 1099,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.8,
    reviews: 634,
    description: 'The ultimate iPad experience with M2 chip and Liquid Retina XDR display.',
    features: ['M2 Chip', '12.9" Liquid Retina XDR', 'Apple Pencil Support', 'Thunderbolt Port'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '6',
    name: 'Nintendo Switch OLED Console',
    price: 349,
    image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    rating: 4.9,
    reviews: 1876,
    description: 'Enhanced gaming experience with vibrant OLED screen.',
    features: ['7" OLED Screen', 'Enhanced Audio', 'Adjustable Stand', 'Multiple Game Modes'],
    inStock: true,
    fastDelivery: true,
    sponsored: true
  },

  // Clothing
  {
    id: '7',
    name: 'Nike Air Max 270 Sneakers',
    price: 89,
    originalPrice: 120,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.5,
    reviews: 1834,
    description: 'Maximum comfort with the largest Max Air unit yet for all-day comfort.',
    features: ['Max Air Unit', 'Breathable Mesh', 'Durable Outsole', 'Multiple Colors'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '8',
    name: "Levi's 501 Original Jeans",
    price: 59,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.4,
    reviews: 967,
    description: 'The original blue jean since 1873. Timeless style that never goes out of fashion.',
    features: ['100% Cotton', 'Classic Fit', 'Button Fly', 'Machine Washable'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '9',
    name: 'Patagonia Down Jacket',
    price: 199,
    originalPrice: 229,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.7,
    reviews: 543,
    description: 'Lightweight, compressible down jacket perfect for outdoor adventures.',
    features: ['700-Fill Down', 'Water-Resistant', 'Packable Design', 'Eco-Friendly'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '10',
    name: 'Adidas Ultraboost 22 Running Shoes',
    price: 129,
    originalPrice: 180,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.6,
    reviews: 892,
    description: 'Revolutionary running shoe with responsive Boost midsole technology.',
    features: ['Boost Midsole', 'Primeknit Upper', 'Continental Rubber', 'Energy Return'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '11',
    name: 'Champion Powerblend Fleece Hoodie',
    price: 35,
    originalPrice: 45,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.3,
    reviews: 1245,
    description: 'Comfortable fleece hoodie perfect for casual wear and workouts.',
    features: ['Powerblend Fleece', 'Reduced Pilling', 'Kangaroo Pocket', 'Adjustable Hood'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '12',
    name: 'Calvin Klein Cotton T-Shirt 3-Pack',
    price: 29,
    originalPrice: 39,
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    rating: 4.4,
    reviews: 756,
    description: 'Premium cotton t-shirts with classic fit and superior comfort.',
    features: ['100% Cotton', 'Classic Fit', 'Crew Neck', 'Machine Washable'],
    inStock: true,
    fastDelivery: true
  },

  // Home & Garden
  {
    id: '13',
    name: 'Dyson V15 Detect Cordless Vacuum',
    price: 649,
    originalPrice: 749,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.8,
    reviews: 1456,
    description: 'Reveals hidden dust with laser technology and powerful suction.',
    features: ['Laser Detection', 'HEPA Filtration', '60min Runtime', 'LCD Screen'],
    inStock: true,
    fastDelivery: true,
    sponsored: true
  },
  {
    id: '14',
    name: 'KitchenAid Stand Mixer',
    price: 329,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/6280486/pexels-photo-6280486.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.9,
    reviews: 2834,
    description: 'Professional-grade stand mixer for all your baking needs.',
    features: ['5-Quart Bowl', '10 Speeds', 'Tilt-Head Design', 'Multiple Attachments'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '15',
    name: 'Outdoor Patio Furniture Set',
    price: 899,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.3,
    reviews: 234,
    description: 'Complete 4-piece patio set perfect for outdoor entertaining.',
    features: ['Weather Resistant', '4-Piece Set', 'Cushions Included', 'Easy Assembly'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '16',
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    price: 79,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 3456,
    description: '7 appliances in 1: pressure cooker, slow cooker, rice cooker, and more.',
    features: ['7-in-1 Functionality', '6-Quart Capacity', '14 Smart Programs', 'Stainless Steel'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '17',
    name: 'Shark Navigator Lift-Away Vacuum',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/4239092/pexels-photo-4239092.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.5,
    reviews: 2134,
    description: 'Powerful upright vacuum with lift-away canister for versatile cleaning.',
    features: ['Lift-Away Technology', 'Anti-Allergen Seal', 'Swivel Steering', 'Pet Hair Pickup'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '18',
    name: 'Ninja Foodi Personal Blender',
    price: 59,
    originalPrice: 79,
    image: 'https://images.pexels.com/photos/4226797/pexels-photo-4226797.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.4,
    reviews: 1876,
    description: 'Compact blender perfect for smoothies and personal-sized portions.',
    features: ['18oz Cups', 'Nutrient Extraction', 'BPA-Free', 'Easy Cleanup'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '19',
    name: 'Weber Genesis II Gas Grill',
    price: 599,
    originalPrice: 699,
    image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.6,
    reviews: 567,
    description: 'Premium gas grill with advanced grilling technology and durability.',
    features: ['3 Burners', 'Porcelain Cooking Grates', 'Grease Management', '10-Year Warranty'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '20',
    name: 'Keurig K-Elite Coffee Maker',
    price: 129,
    originalPrice: 169,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home & Garden',
    rating: 4.3,
    reviews: 2345,
    description: 'Premium single-serve coffee maker with strong brew and iced settings.',
    features: ['5 Cup Sizes', 'Strong Brew', 'Iced Coffee Setting', '75oz Water Reservoir'],
    inStock: true,
    fastDelivery: true
  },

  // Sports & Outdoors
  {
    id: '21',
    name: 'Yeti Rambler Tumbler 30oz',
    price: 39,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports & Outdoors',
    rating: 4.8,
    reviews: 3421,
    description: 'Double-wall vacuum insulation keeps drinks at the perfect temperature.',
    features: ['Double-Wall Insulation', 'Leak-Proof Lid', 'Dishwasher Safe', 'Multiple Colors'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '22',
    name: 'Coleman 4-Person Tent',
    price: 89,
    originalPrice: 119,
    image: 'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports & Outdoors',
    rating: 4.2,
    reviews: 876,
    description: 'Easy setup family tent perfect for car camping and festivals.',
    features: ['4-Person Capacity', 'Easy Setup', 'Weather Resistant', 'Carry Bag Included'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '23',
    name: 'NordicTrack T Series Treadmill',
    price: 799,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports & Outdoors',
    rating: 4.5,
    reviews: 1234,
    description: 'Professional-grade treadmill with interactive training programs.',
    features: ['20" x 55" Tread Belt', '10% Incline', 'iFit Compatible', 'FlexSelect Cushioning'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '24',
    name: 'Bowflex SelectTech Dumbbells',
    price: 349,
    originalPrice: 429,
    image: 'https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports & Outdoors',
    rating: 4.7,
    reviews: 2156,
    description: 'Adjustable dumbbells that replace 15 sets of weights.',
    features: ['5-52.5 lbs per dumbbell', 'Space Saving', 'Quick Weight Changes', 'Durable Construction'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '25',
    name: 'Hydro Flask Water Bottle 32oz',
    price: 44,
    originalPrice: 49,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports & Outdoors',
    rating: 4.6,
    reviews: 4567,
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
    features: ['TempShield Insulation', 'BPA-Free', 'Wide Mouth', 'Lifetime Warranty'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '26',
    name: 'REI Co-op Merino Wool Long Underwear',
    price: 65,
    originalPrice: 85,
    image: 'https://images.pexels.com/photos/7792741/pexels-photo-7792741.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Sports & Outdoors',
    rating: 4.4,
    reviews: 892,
    description: 'Premium merino wool base layer for ultimate comfort and temperature regulation.',
    features: ['100% Merino Wool', 'Odor Resistant', 'Temperature Regulating', 'Flatlock Seams'],
    inStock: true,
    fastDelivery: true
  },

  // Health & Beauty
  {
    id: '27',
    name: 'Neutrogena Hydrating Face Cleanser',
    price: 12,
    originalPrice: 15,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health & Beauty',
    rating: 4.6,
    reviews: 2134,
    description: 'Gentle cleanser that removes makeup while hydrating skin.',
    features: ['Gentle Formula', 'Removes Makeup', 'Hydrates Skin', 'Dermatologist Tested'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '28',
    name: 'Philips Sonicare Electric Toothbrush',
    price: 79,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health & Beauty',
    rating: 4.7,
    reviews: 1567,
    description: 'Advanced sonic technology for superior plaque removal.',
    features: ['Sonic Technology', '2-Week Battery', 'Multiple Modes', 'Travel Case'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '29',
    name: 'Olay Regenerist Micro-Sculpting Cream',
    price: 28,
    originalPrice: 35,
    image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health & Beauty',
    rating: 4.5,
    reviews: 3456,
    description: 'Anti-aging moisturizer with amino-peptides and niacinamide.',
    features: ['Amino-Peptides', 'Firming Formula', 'Non-Greasy', 'Fragrance-Free'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '30',
    name: 'CeraVe Daily Moisturizing Lotion',
    price: 16,
    originalPrice: 19,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health & Beauty',
    rating: 4.8,
    reviews: 5678,
    description: 'Lightweight, non-greasy moisturizer for normal to dry skin.',
    features: ['3 Essential Ceramides', 'Hyaluronic Acid', 'MVE Technology', 'Fragrance-Free'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '31',
    name: 'Fitbit Charge 5 Fitness Tracker',
    price: 149,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health & Beauty',
    rating: 4.4,
    reviews: 2345,
    description: 'Advanced fitness tracker with built-in GPS and health monitoring.',
    features: ['Built-in GPS', 'Heart Rate Monitor', '7-Day Battery', 'Sleep Tracking'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '32',
    name: 'Theragun Mini Massage Gun',
    price: 179,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health & Beauty',
    rating: 4.6,
    reviews: 1876,
    description: 'Portable percussive therapy device for muscle recovery.',
    features: ['Ultra-Portable', '150min Battery', '3 Speed Settings', 'QuietForce Technology'],
    inStock: true,
    fastDelivery: true
  },

  // Toys & Games
  {
    id: '33',
    name: 'LEGO Creator 3-in-1 Deep Sea Creatures',
    price: 79,
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys & Games',
    rating: 4.8,
    reviews: 892,
    description: 'Build a shark, squid, or angler fish with this versatile LEGO set.',
    features: ['3-in-1 Build', '230 Pieces', 'Ages 7+', 'Creative Building'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '34',
    name: 'PlayStation 5 Console',
    price: 499,
    image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys & Games',
    rating: 4.9,
    reviews: 3456,
    description: 'Next-generation gaming console with lightning-fast loading.',
    features: ['Ultra-High Speed SSD', '4K Gaming', 'Ray Tracing', 'Haptic Feedback'],
    inStock: true,
    fastDelivery: true,
    sponsored: true
  },
  {
    id: '35',
    name: 'Monopoly Classic Board Game',
    price: 19,
    originalPrice: 25,
    image: 'https://images.pexels.com/photos/278918/pexels-photo-278918.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys & Games',
    rating: 4.5,
    reviews: 2134,
    description: 'The classic property trading game that brings families together.',
    features: ['2-8 Players', 'Ages 8+', 'Classic Tokens', 'Property Cards'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '36',
    name: 'Barbie Dreamhouse Playset',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys & Games',
    rating: 4.7,
    reviews: 1567,
    description: '3-story dollhouse with 8 rooms and 70+ accessories.',
    features: ['3 Stories', '8 Rooms', '70+ Accessories', 'Working Elevator'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '37',
    name: 'Hot Wheels Track Builder Unlimited',
    price: 49,
    originalPrice: 59,
    image: 'https://images.pexels.com/photos/35619/capri-ford-oldtimer-automotive.jpg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys & Games',
    rating: 4.4,
    reviews: 987,
    description: 'Build epic tracks with unlimited possibilities and stunts.',
    features: ['Unlimited Building', 'Stunt Pieces', '1 Hot Wheels Car', 'Ages 4+'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '38',
    name: 'Nerf Elite 2.0 Commander Blaster',
    price: 29,
    originalPrice: 39,
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Toys & Games',
    rating: 4.3,
    reviews: 1234,
    description: 'High-performance blaster with customizable features.',
    features: ['6-Dart Capacity', '27m Range', 'Tactical Rails', 'Ages 8+'],
    inStock: true,
    fastDelivery: true
  },

  // Books
  {
    id: '39',
    name: 'The Seven Husbands of Evelyn Hugo',
    price: 16,
    originalPrice: 18,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Books',
    rating: 4.9,
    reviews: 45678,
    description: 'A captivating novel about a reclusive Hollywood icon finally ready to tell her story.',
    features: ['Bestselling Novel', '400 Pages', 'Fiction', 'Award Winner'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '40',
    name: 'Atomic Habits by James Clear',
    price: 14,
    originalPrice: 18,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Books',
    rating: 4.8,
    reviews: 23456,
    description: 'An easy and proven way to build good habits and break bad ones.',
    features: ['Self-Help', '320 Pages', 'New York Times Bestseller', 'Practical Guide'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '41',
    name: 'Where the Crawdads Sing',
    price: 15,
    originalPrice: 17,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Books',
    rating: 4.7,
    reviews: 34567,
    description: 'A mystery and coming-of-age story set in the natural world.',
    features: ['Mystery Novel', '384 Pages', 'Bestseller', 'Nature Setting'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '42',
    name: 'The Midnight Library',
    price: 13,
    originalPrice: 16,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Books',
    rating: 4.6,
    reviews: 12345,
    description: 'A novel about all the choices that go into a life well lived.',
    features: ['Philosophical Fiction', '288 Pages', 'Award Winner', 'Thought Provoking'],
    inStock: true,
    fastDelivery: true
  },

  // Automotive
  {
    id: '43',
    name: 'Michelin Defender T+H All-Season Tire',
    price: 129,
    originalPrice: 149,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Automotive',
    rating: 4.5,
    reviews: 2345,
    description: 'Premium all-season tire with exceptional longevity and performance.',
    features: ['80,000 Mile Warranty', 'All-Season Tread', 'Fuel Efficient', 'Quiet Ride'],
    inStock: true,
    fastDelivery: false
  },
  {
    id: '44',
    name: 'Bosch ICON Windshield Wipers',
    price: 24,
    originalPrice: 29,
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Automotive',
    rating: 4.7,
    reviews: 3456,
    description: 'Premium beam wiper blades for superior visibility and performance.',
    features: ['Beam Design', 'All-Weather', 'Easy Installation', 'Durable Construction'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '45',
    name: 'Chemical Guys Car Wash Kit',
    price: 49,
    originalPrice: 59,
    image: 'https://images.pexels.com/photos/3806289/pexels-photo-3806289.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Automotive',
    rating: 4.6,
    reviews: 1876,
    description: 'Complete car wash kit with premium soaps and accessories.',
    features: ['Complete Kit', 'Premium Soaps', 'Microfiber Towels', 'Professional Grade'],
    inStock: true,
    fastDelivery: true
  },
  {
    id: '46',
    name: 'Garmin DriveSmart 65 GPS Navigator',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Automotive',
    rating: 4.4,
    reviews: 987,
    description: 'Advanced GPS navigator with 6.95" display and voice-activated navigation.',
    features: ['6.95" Display', 'Voice Activation', 'Live Traffic', 'Bluetooth Connectivity'],
    inStock: true,
    fastDelivery: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  const normalizedCategory = category.toLowerCase().replace(/[-\s&]/g, '');
  return products.filter(product => {
    const productCategory = product.category.toLowerCase().replace(/[-\s&]/g, '');
    return productCategory === normalizedCategory;
  });
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.sponsored || product.rating >= 4.7).slice(0, 8);
};

export const getDealsOfTheDay = (): Product[] => {
  return products.filter(product => product.originalPrice && product.originalPrice > product.price).slice(0, 6);
};
