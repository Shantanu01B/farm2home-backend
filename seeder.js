const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('./models/Product');

dotenv.config();

let products = [{
        name: "Apple",
        category: "Fruits",
        price: 50,
        image: "/images/apple.jpg",
        description: "Fresh organic apple.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Banana",
        category: "Fruits",
        price: 30,
        image: "/images/banana.jpg",
        description: "Ripe and sweet bananas.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Mango",
        category: "Fruits",
        price: 100,
        image: "/images/mango.jpg",
        description: "Delicious tropical mangoes.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Orange",
        category: "Fruits",
        price: 60,
        image: "/images/orange.jpg",
        description: "Fresh and juicy oranges.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Graphes",
        category: "Fruits",
        price: 70,
        image: "/images/graphes.jpg",
        description: "Sweet seedless grapes.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Pineapple",
        category: "Fruits",
        price: 90,
        image: "/images/pineapple.jpg",
        description: "Juicy tropical pineapple.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Tomato",
        category: "Vegetables",
        price: 40,
        image: "/images/tomato.jpg",
        description: "Organic red tomatoes.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Carrot",
        category: "Vegetables",
        price: 20,
        image: "/images/carrot.jpg",
        description: "Fresh and crunchy carrots.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Potato",
        category: "Vegetables",
        price: 25,
        image: "/images/potato.jpg",
        description: "High-quality potatoes.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Spinach",
        category: "Vegetables",
        price: 15,
        image: "/images/spinach.jpg",
        description: "Fresh spinach leaves.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Broccoli",
        category: "Vegetables",
        price: 35,
        image: "/images/broccoli.jpg",
        description: "Fresh green broccoli.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Cucumber",
        category: "Vegetables",
        price: 30,
        image: "/images/cucumber.jpg",
        description: "Crisp and refreshing cucumbers.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Milk",
        category: "Dairy",
        price: 40,
        image: "/images/milk.jpg",
        description: "Fresh cow's milk.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Butter",
        category: "Dairy",
        price: 80,
        image: "/images/butter.jpg",
        description: "Organic butter.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Cheese",
        category: "Dairy",
        price: 120,
        image: "/images/cheese.jpg",
        description: "Creamy cheese.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Yogurt",
        category: "Dairy",
        price: 50,
        image: "/images/yogurt.jpg",
        description: "Healthy and fresh yogurt.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Paneer",
        category: "Dairy",
        price: 110,
        image: "/images/paneer.jpg",
        description: "Fresh homemade paneer.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Curd",
        category: "Dairy",
        price: 45,
        image: "/images/curd.jpg",
        description: "Homemade fresh curd.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Rice",
        category: "Grains",
        price: 60,
        image: "/images/rice.jpg",
        description: "Organic rice.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Wheat Flour",
        category: "Grains",
        price: 45,
        image: "/images/wheat-flour.jpg",
        description: "High-quality wheat flour.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Oats",
        category: "Grains",
        price: 55,
        image: "/images/oats.jpg",
        description: "Organic oats.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Barley",
        category: "Grains",
        price: 50,
        image: "/images/barley.jpg",
        description: "Healthy barley grains.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Quinoa",
        category: "Grains",
        price: 120,
        image: "/images/quinoa.jpg",
        description: "Protein-rich quinoa.",
        stock: 10,
        addedBy: "farmer@example.com",
    },
    {
        name: "Buckwheat",
        category: "Grains",
        price: 65,
        image: "/images/buckwheat.jpg",
        description: "Nutritious buckwheat grains.",
        stock: 10,
        addedBy: "farmer@example.com",
    }
];

// ✅ Trim category values
products = products.map(product => ({
    ...product,
    category: product.category.trim()
}));

const seedData = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const deleted = await Product.deleteMany();
        console.log(`🧹 Deleted ${deleted.deletedCount} products`);

        await Product.insertMany(products);
        console.log("✅ All products inserted!");
        process.exit();
    } catch (error) {
        console.error("❌ Error inserting data:", error);
        process.exit(1);
    }
};

seedData();