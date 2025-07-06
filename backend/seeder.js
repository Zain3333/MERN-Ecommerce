const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: './config.env' });

// Import models
const User = require('./models/User');
const Product = require('./models/Product');
const Category = require('./models/Category');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected for seeding'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Pakistan-specific Categories
const categories = [
  {
    name: 'Mobile Phones',
    description: 'Latest smartphones and mobile accessories',
    slug: 'mobile-phones'
  },
  {
    name: 'Fashion & Clothing',
    description: 'Traditional and modern Pakistani fashion',
    slug: 'fashion-clothing'
  },
  {
    name: 'Home & Kitchen',
    description: 'Home appliances and kitchen essentials',
    slug: 'home-kitchen'
  },
  {
    name: 'Electronics',
    description: 'Computers, laptops, and electronic gadgets',
    slug: 'electronics'
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Beauty products and personal care items',
    slug: 'beauty-personal-care'
  },
  {
    name: 'Sports & Fitness',
    description: 'Sports equipment and fitness accessories',
    slug: 'sports-fitness'
  },
  {
    name: 'Books & Stationery',
    description: 'Educational books and office supplies',
    slug: 'books-stationery'
  },
  {
    name: 'Automotive',
    description: 'Car accessories and automotive parts',
    slug: 'automotive'
  }
];

// Secure Users with Pakistan-specific data
const users = [
  {
    name: 'Admin Ecommerce',
    email: 'admin@pakistanecommerce.com',
    password: 'Admin@2024#Secure', // This will be hashed
    role: 'admin',
    phone: '+92-300-1234567',
    addresses: [{
      street: '123 Mall Road',
      city: 'Lahore',
      state: 'Punjab',
      zipCode: '54000',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Ahmed Khan',
    email: 'ahmed.khan@gmail.com',
    password: 'password123',
    role: 'user',
    phone: '+92-301-2345678',
    addresses: [{
      street: '456 Gulberg III',
      city: 'Lahore',
      state: 'Punjab',
      zipCode: '54660',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Fatima Ali',
    email: 'fatima.ali@yahoo.com',
    password: 'password123',
    role: 'user',
    phone: '+92-302-3456789',
    addresses: [{
      street: '789 Clifton Block 5',
      city: 'Karachi',
      state: 'Sindh',
      zipCode: '75600',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Usman Hassan',
    email: 'usman.hassan@hotmail.com',
    password: 'password123',
    role: 'user',
    phone: '+92-303-4567890',
    addresses: [{
      street: '321 F-7 Markaz',
      city: 'Islamabad',
      state: 'Federal Territory',
      zipCode: '44000',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Ayesha Malik',
    email: 'ayesha.malik@outlook.com',
    password: 'password123',
    role: 'user',
    phone: '+92-304-5678901',
    addresses: [{
      street: '654 University Town',
      city: 'Peshawar',
      state: 'Khyber Pakhtunkhwa',
      zipCode: '25000',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Bilal Ahmed',
    email: 'bilal.ahmed@gmail.com',
    password: 'password123',
    role: 'user',
    phone: '+92-305-6789012',
    addresses: [{
      street: '987 Satellite Town',
      city: 'Rawalpindi',
      state: 'Punjab',
      zipCode: '46000',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Sana Khan',
    email: 'sana.khan@yahoo.com',
    password: 'password123',
    role: 'user',
    phone: '+92-306-7890123',
    addresses: [{
      street: '147 Model Town',
      city: 'Multan',
      state: 'Punjab',
      zipCode: '60000',
      country: 'Pakistan',
      isDefault: true
    }]
  },
  {
    name: 'Hassan Raza',
    email: 'hassan.raza@hotmail.com',
    password: 'password123',
    role: 'user',
    phone: '+92-307-8901234',
    addresses: [{
      street: '258 Cantt Area',
      city: 'Faisalabad',
      state: 'Punjab',
      zipCode: '38000',
      country: 'Pakistan',
      isDefault: true
    }]
  }
];

// Pakistan-specific Products with realistic pricing (in PKR)
const products = [
  {
    name: 'iPhone 15 Pro Max',
    description: 'Latest iPhone with A17 Pro chip, 48MP camera, and titanium design. Perfect for photography and gaming.',
    price: 450000, // PKR
    originalPrice: 480000,
    discount: 6,
    brand: 'Apple',
    stock: 25,
    ratings: 4.8,
    numOfReviews: 89,
    featured: true,
    sku: 'IPH15PROMAX-256',
    weight: 221,
    dimensions: {
      length: 159.9,
      width: 76.7,
      height: 8.25
    },
    shippingInfo: {
      freeShipping: true,
      shippingCost: 0,
      estimatedDays: 3
    },
    specifications: [
      { name: 'Screen Size', value: '6.7 inches' },
      { name: 'Storage', value: '256GB' },
      { name: 'Color', value: 'Natural Titanium' },
      { name: 'Chip', value: 'A17 Pro' }
    ],
    tags: ['smartphone', 'apple', 'iphone', '5g', 'camera'],
    images: [
      {
        public_id: 'ecommerce/iphone15promax_1',
        url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop'
      },
      {
        public_id: 'ecommerce/iphone15promax_2',
        url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with S Pen, 200MP camera, and Snapdragon 8 Gen 3 processor.',
    price: 380000, // PKR
    originalPrice: 420000,
    discount: 10,
    brand: 'Samsung',
    stock: 30,
    ratings: 4.7,
    numOfReviews: 67,
    featured: true,
    sku: 'SAMS24ULTRA-512',
    weight: 232,
    dimensions: {
      length: 163.4,
      width: 79.0,
      height: 8.6
    },
    shippingInfo: {
      freeShipping: true,
      shippingCost: 0,
      estimatedDays: 4
    },
    specifications: [
      { name: 'Screen Size', value: '6.8 inches' },
      { name: 'Storage', value: '512GB' },
      { name: 'Color', value: 'Titanium Gray' },
      { name: 'Chip', value: 'Snapdragon 8 Gen 3' }
    ],
    tags: ['smartphone', 'samsung', 'android', 's-pen', 'camera'],
    images: [
      {
        public_id: 'ecommerce/samsunggalaxys24ultra_1',
        url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Lawn Suit',
    description: 'Beautiful embroidered lawn suit perfect for summer. Made with premium cotton lawn fabric.',
    price: 8500, // PKR
    originalPrice: 12000,
    discount: 29,
    brand: 'Gul Ahmed',
    stock: 50,
    ratings: 4.6,
    numOfReviews: 156,
    featured: true,
    sku: 'LAWN-SUIT-001',
    weight: 500,
    dimensions: {
      length: 60,
      width: 40,
      height: 5
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 200,
      estimatedDays: 2
    },
    specifications: [
      { name: 'Fabric', value: 'Premium Cotton Lawn' },
      { name: 'Design', value: 'Embroidered' },
      { name: 'Size', value: 'Free Size' },
      { name: 'Care', value: 'Dry Clean Recommended' }
    ],
    tags: ['lawn', 'suit', 'pakistani', 'summer', 'embroidery'],
    images: [
      {
        public_id: 'ecommerce/lawnsuit_1',
        url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Dawlance Refrigerator',
    description: 'Double door refrigerator with frost-free technology and energy efficient design.',
    price: 85000, // PKR
    originalPrice: 95000,
    discount: 11,
    brand: 'Dawlance',
    stock: 15,
    ratings: 4.5,
    numOfReviews: 78,
    featured: true,
    sku: 'DAWLANCE-FRIDGE-001',
    weight: 65000,
    dimensions: {
      length: 70,
      width: 65,
      height: 170
    },
    shippingInfo: {
      freeShipping: true,
      shippingCost: 0,
      estimatedDays: 7
    },
    specifications: [
      { name: 'Capacity', value: '520 Liters' },
      { name: 'Type', value: 'Frost Free' },
      { name: 'Energy Rating', value: 'A++' },
      { name: 'Color', value: 'Silver' }
    ],
    tags: ['refrigerator', 'dawlance', 'home', 'appliance', 'kitchen'],
    images: [
      {
        public_id: 'ecommerce/dawlancefridge_1',
        url: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Orient Fan',
    description: 'High-quality ceiling fan with remote control and energy-efficient motor.',
    price: 8500, // PKR
    originalPrice: 9500,
    discount: 11,
    brand: 'Orient',
    stock: 40,
    ratings: 4.4,
    numOfReviews: 234,
    featured: false,
    sku: 'ORIENT-FAN-001',
    weight: 8000,
    dimensions: {
      length: 48,
      width: 48,
      height: 15
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 500,
      estimatedDays: 3
    },
    specifications: [
      { name: 'Blade Size', value: '48 inches' },
      { name: 'Speed', value: '3 Speed' },
      { name: 'Remote', value: 'Yes' },
      { name: 'Color', value: 'White' }
    ],
    tags: ['fan', 'orient', 'ceiling', 'remote', 'cooling'],
    images: [
      {
        public_id: 'ecommerce/orientfan_1',
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Khaadi Kurta',
    description: 'Traditional handcrafted kurta made with premium cotton fabric. Perfect for casual and formal wear.',
    price: 3500, // PKR
    originalPrice: 4500,
    discount: 22,
    brand: 'Khaadi',
    stock: 75,
    ratings: 4.7,
    numOfReviews: 189,
    featured: true,
    sku: 'KHAADI-KURTA-001',
    weight: 300,
    dimensions: {
      length: 45,
      width: 35,
      height: 3
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 150,
      estimatedDays: 2
    },
    specifications: [
      { name: 'Fabric', value: 'Premium Cotton' },
      { name: 'Style', value: 'Traditional' },
      { name: 'Size', value: 'M, L, XL' },
      { name: 'Care', value: 'Machine Washable' }
    ],
    tags: ['kurta', 'khaadi', 'pakistani', 'traditional', 'cotton'],
    images: [
      {
        public_id: 'ecommerce/khaadikurta_1',
        url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'HP Pavilion Laptop',
    description: '15.6-inch laptop with Intel Core i5 processor, 8GB RAM, and 512GB SSD. Perfect for work and study.',
    price: 125000, // PKR
    originalPrice: 140000,
    discount: 11,
    brand: 'HP',
    stock: 20,
    ratings: 4.6,
    numOfReviews: 92,
    featured: true,
    sku: 'HP-PAVILION-001',
    weight: 2200,
    dimensions: {
      length: 36.2,
      width: 24.8,
      height: 1.8
    },
    shippingInfo: {
      freeShipping: true,
      shippingCost: 0,
      estimatedDays: 5
    },
    specifications: [
      { name: 'Processor', value: 'Intel Core i5-1135G7' },
      { name: 'RAM', value: '8GB DDR4' },
      { name: 'Storage', value: '512GB SSD' },
      { name: 'Display', value: '15.6" FHD' }
    ],
    tags: ['laptop', 'hp', 'pavilion', 'intel', 'work'],
    images: [
      {
        public_id: 'ecommerce/hppavilion_1',
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Jewelry Set',
    description: 'Traditional Pakistani jewelry set with kundan work. Perfect for special occasions.',
    price: 25000, // PKR
    originalPrice: 35000,
    discount: 29,
    brand: 'Traditional',
    stock: 10,
    ratings: 4.8,
    numOfReviews: 45,
    featured: false,
    sku: 'JEWELRY-SET-001',
    weight: 150,
    dimensions: {
      length: 20,
      width: 15,
      height: 5
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 300,
      estimatedDays: 4
    },
    specifications: [
      { name: 'Material', value: 'Gold Plated' },
      { name: 'Work', value: 'Kundan' },
      { name: 'Set Includes', value: 'Necklace, Earrings, Ring' },
      { name: 'Occasion', value: 'Wedding, Party' }
    ],
    tags: ['jewelry', 'pakistani', 'kundan', 'traditional', 'wedding'],
    images: [
      {
        public_id: 'ecommerce/jewelryset_1',
        url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Biryani Masala',
    description: 'Authentic Pakistani biryani masala blend. Perfect for making delicious biryani at home.',
    price: 250, // PKR
    originalPrice: 300,
    discount: 17,
    brand: 'National',
    stock: 100,
    ratings: 4.9,
    numOfReviews: 567,
    featured: false,
    sku: 'BIRYANI-MASALA-001',
    weight: 50,
    dimensions: {
      length: 8,
      width: 5,
      height: 2
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 100,
      estimatedDays: 1
    },
    specifications: [
      { name: 'Weight', value: '50g' },
      { name: 'Type', value: 'Biryani Masala' },
      { name: 'Shelf Life', value: '24 Months' },
      { name: 'Origin', value: 'Pakistan' }
    ],
    tags: ['masala', 'biryani', 'spices', 'pakistani', 'cooking'],
    images: [
      {
        public_id: 'ecommerce/biryanimasala_1',
        url: 'https://images.unsplash.com/photo-1563379091339-03246963d042?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Football',
    description: 'Official size football perfect for playing in Pakistan. Made with premium leather.',
    price: 1200, // PKR
    originalPrice: 1500,
    discount: 20,
    brand: 'Adidas',
    stock: 60,
    ratings: 4.5,
    numOfReviews: 123,
    featured: false,
    sku: 'FOOTBALL-001',
    weight: 450,
    dimensions: {
      length: 22,
      width: 22,
      height: 22
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 200,
      estimatedDays: 2
    },
    specifications: [
      { name: 'Size', value: 'Size 5 (Official)' },
      { name: 'Material', value: 'Synthetic Leather' },
      { name: 'Color', value: 'White/Black' },
      { name: 'Usage', value: 'Professional' }
    ],
    tags: ['football', 'sports', 'adidas', 'pakistani', 'leather'],
    images: [
      {
        public_id: 'ecommerce/football_1',
        url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Tea Set',
    description: 'Traditional Pakistani tea set with 6 cups and saucers. Perfect for serving guests.',
    price: 3500, // PKR
    originalPrice: 4500,
    discount: 22,
    brand: 'Traditional',
    stock: 25,
    ratings: 4.6,
    numOfReviews: 89,
    featured: false,
    sku: 'TEA-SET-001',
    weight: 1200,
    dimensions: {
      length: 30,
      width: 20,
      height: 15
    },
    shippingInfo: {
      freeShipping: false,
      shippingCost: 300,
      estimatedDays: 3
    },
    specifications: [
      { name: 'Material', value: 'Porcelain' },
      { name: 'Set Includes', value: '6 Cups, 6 Saucers, 1 Teapot' },
      { name: 'Design', value: 'Traditional Pakistani' },
      { name: 'Care', value: 'Dishwasher Safe' }
    ],
    tags: ['tea-set', 'pakistani', 'traditional', 'porcelain', 'kitchen'],
    images: [
      {
        public_id: 'ecommerce/teaset_1',
        url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&h=500&fit=crop'
      }
    ]
  },
  {
    name: 'Pakistani Carpet',
    description: 'Hand-woven Pakistani carpet with traditional designs. Perfect for home decoration.',
    price: 45000, // PKR
    originalPrice: 60000,
    discount: 25,
    brand: 'Traditional',
    stock: 8,
    ratings: 4.7,
    numOfReviews: 34,
    featured: false,
    sku: 'CARPET-001',
    weight: 8000,
    dimensions: {
      length: 200,
      width: 150,
      height: 5
    },
    shippingInfo: {
      freeShipping: true,
      shippingCost: 0,
      estimatedDays: 7
    },
    specifications: [
      { name: 'Material', value: 'Wool' },
      { name: 'Size', value: '6x4 feet' },
      { name: 'Origin', value: 'Pakistan' },
      { name: 'Care', value: 'Professional Cleaning' }
    ],
    tags: ['carpet', 'pakistani', 'traditional', 'wool', 'home'],
    images: [
      {
        public_id: 'ecommerce/carpet_1',
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop'
      }
    ]
  }
];

// Function to hash passwords
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Function to seed data
const seedData = async () => {
  try {
    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});

    // Create categories
    console.log('Creating categories...');
    const createdCategories = await Category.insertMany(categories);
    console.log(`${createdCategories.length} categories created`);

    // Create users with hashed passwords
    console.log('Creating users...');
    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await hashPassword(user.password)
      }))
    );
    const createdUsers = await User.insertMany(hashedUsers);
    console.log(`${createdUsers.length} users created`);

    // Create products with category references
    console.log('Creating products...');
    const productsWithCategories = products.map((product, index) => {
      const categoryIndex = index % createdCategories.length;
      return {
        ...product,
        category: createdCategories[categoryIndex]._id
      };
    });
    const createdProducts = await Product.insertMany(productsWithCategories);
    console.log(`${createdProducts.length} products created`);

    console.log('✅ Database seeded successfully!');
    console.log('\n📋 Summary:');
    console.log(`- ${createdCategories.length} categories`);
    console.log(`- ${createdUsers.length} users`);
    console.log(`- ${createdProducts.length} products`);
    
    console.log('\n👤 Test Users:');
    users.forEach(user => {
      console.log(`- ${user.email} (Password: ${user.password}) - Role: ${user.role}`);
    });

    console.log('\n🔐 Admin Credentials:');
    console.log('Email: admin@pakistanecommerce.com');
    console.log('Password: Admin@2024#Secure');
    console.log('⚠️  Please change this password after first login!');

    console.log('\n💰 Product Price Range:');
    const prices = products.map(p => p.price);
    console.log(`- Minimum: Rs. ${Math.min(...prices).toLocaleString()}`);
    console.log(`- Maximum: Rs. ${Math.max(...prices).toLocaleString()}`);
    console.log(`- Average: Rs. ${Math.round(prices.reduce((a, b) => a + b, 0) / prices.length).toLocaleString()}`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

// Run the seeder
seedData(); 