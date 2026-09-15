export const foods = [
{
  //==================================================
  // Identity
  //==================================================

  id: 1,

  slug: "margherita-pizza",



  //==================================================
  // Card Data
  //==================================================

  title: "Margherita Pizza",

  type: "Food",

  image: "/Images/Img Foods/photo1.webp",

  location: {
    address: "Via Toledo",
    city: "Naples",
    country: "Italy",
  },

  date: "Mar 6 - Mar 16",

  category: "pizza",

  cuisine: "italian",

  restaurantName: "Italiano Restaurant",

  badge: "Featured",

  tag: "Excellent",

  rating: 4.9,

  reviewsCount: 3200,

  views: 682,



  //==================================================
  // Pricing
  //==================================================

  price: 18,

  oldPrice: 24,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Authentic Italian Margherita Pizza prepared using traditional Naples cooking methods and premium fresh ingredients.",

    "Margherita Pizza represents one of the most famous Italian dishes in the world. Prepared using handmade dough, rich tomato sauce, premium mozzarella cheese, and fresh basil leaves, every pizza is baked inside a traditional stone oven to create the perfect balance between soft texture and crispy edges. Designed for sharing and enjoying authentic Italian flavors, this meal delivers freshness, simplicity, and unforgettable taste."
  ],



  



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery Available",
    "Takeaway",
    "Online Reservation",
    "Outdoor Seating",
    "Family Tables",
    "Fresh Daily Preparation",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo1-food1.webp",
      "/Images/Img Foods/photo1-food2.webp",
      "/Images/Img Foods/photo1-food3.webp",
      "/Images/Img Foods/photo1-food4.webp",
      "/Images/Img Foods/photo1-food5.webp",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Original Naples Recipe",
      "Stone Oven Cooking",
      "Premium Italian Cheese",
      "Handmade Dough",
      "Fresh Daily Ingredients",
      "Traditional Italian Flavor",
      "Balanced Cheese Texture",
      "Light Crispy Crust",
      "Fresh Basil Finish",
      "Perfect For Sharing",
      "Restaurant Signature Meal",
      "Authentic Dining Experience",
    ],

    //==================================================
  // Ingredients
  //==================================================

  ingredients: [
    "Fresh Mozzarella Cheese",
    "Italian Tomato Sauce",
    "Fresh Basil Leaves",
    "Extra Virgin Olive Oil",
    "Pizza Dough",
    "Sea Salt",
    "Black Pepper",
    "Organic Flour",
    "Natural Yeast",
    "Parmesan Cheese",
    "Garlic Seasoning",
    "Italian Herbs"
  ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: 2,

      preparationTime: 20,

      calories: 850,

      spicyLevel: "Mild",

      cookingStyle: "Stone Oven",

      mealType: "Lunch / Dinner",

      dishWeight: 650,

      protein: 31,

      carbs: 84,

      fat:28,

      allergens: [
        "Milk",
        "Gluten",
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Lemon Juice",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is Margherita Pizza prepared fresh daily?",

        answer:
          "Yes. Dough and ingredients are prepared fresh every day to maintain authentic Italian quality and flavor.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can extra toppings be added?",

        answer:
          "Yes. Guests may add extra cheese, mushrooms, olives, or vegetables depending on availability.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Is this meal suitable for sharing?",

        answer:
          "Yes. The serving size is designed for two people and works perfectly for shared dining experiences.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "How is the pizza baked?",

        answer:
          "The pizza is cooked using a traditional stone oven to preserve authentic Italian texture and flavor.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Ahmed Salah",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "One of the best pizzas I have ever tried. Fresh ingredients and excellent texture.",

        likes: 16,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very authentic Italian taste and perfect amount of cheese.",

        likes: 10,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 2,

  slug: "cheese-burger",



  //==================================================
  // Card Data
  //==================================================

  title: "Cheese Burger",

  type: "Food",

  image: "/Images/Img Foods/photo2.png",

  location: {
    address: "5th Avenue",
    city: "New York",
    country: "USA",
  },

  date: "Mar 16 - Mar 15",

  category: "burger",

  cuisine: "american",

  restaurantName: "Burger House",

  badge: "Popular",

  tag: "Excellent",

  rating: 4.7,

  reviewsCount: 2500,

  views: 834,



  //==================================================
  // Pricing
  //==================================================

  price: 15,

  oldPrice: 20,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Classic American cheeseburger prepared using grilled beef, melted cheddar cheese, and fresh bakery buns.",

    "This Cheese Burger delivers an authentic American fast-food experience with premium grilled beef, rich cheddar cheese, fresh vegetables, and crispy side fries. Prepared to order and served hot, the meal combines juicy texture with balanced flavors and remains one of the most requested dishes for quick and satisfying dining."
  ],







  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Drive Through",
    "Online Ordering",
    "Fast Preparation",
    "Family Seating",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    gallery: [
      "/Images/Img Foods/photo2-food1.webp",
      "/Images/Img Foods/photo2-food2.webp",
      "/Images/Img Foods/photo2-food3.webp",
      "/Images/Img Foods/photo2-food4.webp",
      "/Images/Img Foods/photo2-food5.webp",
    ],



    highlights: [
      "Fresh Grilled Beef",
      "Premium Cheddar Cheese",
      "Soft Bakery Bun",
      "Served Hot",
      "American Recipe",
      "Crispy Side Fries",
      "Balanced Flavor",
      "Fast Preparation",
      "Restaurant Favorite",
      "Fresh Daily Ingredients",
      "Juicy Texture",
      "Classic Fast Food Experience",
    ],



      //==================================================
  // Ingredients
  //==================================================

  ingredients: [
    "Premium Beef Patty",
    "Cheddar Cheese",
    "Burger Bun",
    "Fresh Lettuce",
    "Tomato Slices",
    "Pickles",
    "Red Onion",
    "Burger Sauce",
    "Mayonnaise",
    "American Mustard",
    "French Fries",
    "Black Pepper"
  ],

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "15 min",

      calories: 920,

      spicyLevel: "Low",

      cookingStyle: "Grilled",

      mealType: "Lunch / Dinner",

      dishWeight: "540 g",

      protein: "38 g",

      carbs: "67 g",

      fat: "42 g",

      allergens: [
        "Milk",
        "Gluten",
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Classic Cola",
    },



    faq: [

      {
        id: 1,
        question: "Is the burger prepared fresh after ordering?",
        answer:
          "Yes. Every burger is prepared immediately after ordering to maintain freshness and temperature.",
        defaultChecked: true,
      },

      {
        id: 2,
        question: "Can I remove ingredients?",
        answer:
          "Yes. Cheese, onions, sauces, and vegetables can be customized.",
        defaultChecked: false,
      },

      {
        id: 3,
        question: "Does the meal include fries?",
        answer:
          "Yes. Standard serving includes crispy fries.",
        defaultChecked: false,
      },

      {
        id: 4,
        question: "Can extra cheese be added?",
        answer:
          "Yes. Additional cheese and premium toppings are available.",
        defaultChecked: false,
      },
    ],



    reviews: [

      {
        id: 1,

        name: "Mohamed Ali",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent burger with juicy meat and perfect cheese amount.",

        likes: 18,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Omar Hassan",

        avatar: "/Images/users/u3.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Very tasty and filling meal with crispy fries.",

        likes: 9,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 3,

  slug: "chicken-shawarma",



  //==================================================
  // Card Data
  //==================================================

  title: "Chicken Shawarma",

  type: "Food",

  image: "/Images/Img Foods/photo3.webp",

  location: {
    address: "Istiklal Street",
    city: "Istanbul",
    country: "Turkey",
  },

    date: "Oct 5 - Oct 6",

  category: "shawarma",

  cuisine: "arabic",

  restaurantName: "Damascus Grill",

  badge: "Trending",

  tag: "Very Good",

  rating: 4.8,

  reviewsCount: 2100,

  views: 596,



  //==================================================
  // Pricing
  //==================================================

  price: 12,

  oldPrice: 16,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Traditional chicken shawarma prepared with seasoned grilled chicken slices and authentic Middle Eastern flavors.",

    "Chicken Shawarma offers a rich combination of marinated chicken, soft bread, garlic sauce, and fresh vegetables. Slowly grilled on a rotating spit and sliced fresh for every order, this meal delivers the authentic street-food experience famous across the Middle East and Turkey. Served hot with crispy fries and flavorful sauces."
  ],


  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Street Pickup",
    "Fresh Daily Preparation",
    "Family Seating",
    "Online Ordering",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo3-food1.webp",
      "/Images/Img Foods/photo3-food2.webp",
      "/Images/Img Foods/photo3-food3.webp",
      "/Images/Img Foods/photo3-food4.webp",
      "/Images/Img Foods/photo3-food5.webp",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Authentic Shawarma Recipe",
      "Freshly Grilled Chicken",
      "Slow Rotating Cooking",
      "Traditional Arabic Flavor",
      "Rich Garlic Sauce",
      "Crispy Fries Included",
      "Soft Fresh Bread",
      "Prepared Per Order",
      "Popular Street Food",
      "Balanced Spices",
      "Fresh Vegetables",
      "Hot Serving Experience",
    ],


      //==================================================
  // Ingredients
  //==================================================

  ingredients: [
    "Chicken Breast",
    "Arabic Bread",
    "Garlic Sauce",
    "French Fries",
    "Pickles",
    "Tomatoes",
    "Parsley",
    "White Onion",
    "Lemon Juice",
    "Olive Oil",
    "Shawarma Spices",
    "Black Pepper"
  ],
  

    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "10 min",

      calories: 700,

      spicyLevel: "Medium",

      cookingStyle: "Vertical Grill",

      mealType: "Lunch / Dinner",

      dishWeight: "480 g",

      protein: "36 g",

      carbs: "61 g",

      fat: "24 g",

      allergens: [
        "Gluten",
        "Garlic",
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Orange Juice",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the chicken prepared fresh daily?",

        answer:
          "Yes. Chicken is marinated and prepared fresh every day for better taste and quality.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can I remove garlic sauce?",

        answer:
          "Yes. Sauces and toppings can be customized based on preference.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Does the meal include fries?",

        answer:
          "Yes. Fries are included in the standard serving.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is extra chicken available?",

        answer:
          "Yes. Additional portions can be added for extra charge.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Khaled Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very authentic taste and the chicken was juicy and flavorful.",

        likes: 14,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Mariam Hassan",

        avatar: "/Images/users/u5.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Fresh ingredients and excellent garlic sauce.",

        likes: 8,

        dislikes: 0,

        hearts: 3,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 4,

  slug: "family-sushi-box",



  //==================================================
  // Card Data
  //==================================================

  title: "Family Sushi Box",

  type: "Food",

  image: "/Images/Img Foods/photo4.webp",

  location: {
    address: "Shibuya Crossing",
    city: "Tokyo",
    country: "Japan",
  },

  date: "Oct 1 - Oct 4",

  category: "sushi",

  cuisine: "japanese",

  restaurantName: "Tokyo Sushi",

  badge: "Featured",

  tag: "Excellent",

  rating: 5.0,

  reviewsCount: 4100,

  views: 942,



  //==================================================
  // Pricing
  //==================================================

  price: 40,

  oldPrice: 52,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Premium Japanese sushi selection prepared using fresh seafood, authentic rice preparation, and traditional presentation.",

    "Family Sushi Box delivers a complete Japanese dining experience through a premium assortment of sushi rolls prepared daily by experienced sushi chefs. The meal includes fresh salmon, tuna, shrimp, rice, and traditional sauces arranged carefully for sharing. Designed for families and groups seeking freshness, balance, and authentic Japanese flavors."
  ],






  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Online Reservation",
    "Fresh Daily Preparation",
    "Family Dining",
    "Premium Packaging",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo4-food1.webp",
      "/Images/Img Foods/photo4-food2.webp",
      "/Images/Img Foods/photo4-food3.webp",
      "/Images/Img Foods/photo4-food4.webp",
      "/Images/Img Foods/photo4-food5.webp",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Premium Seafood Selection",
      "Prepared By Sushi Chef",
      "Fresh Daily Ingredients",
      "Traditional Japanese Recipe",
      "Perfect Family Portion",
      "Balanced Flavor Experience",
      "Beautiful Presentation",
      "High Quality Rice",
      "Cold Fresh Serving",
      "Restaurant Signature Box",
      "Healthy Meal Choice",
      "Authentic Sushi Experience",
    ],


      //==================================================
  // Ingredients
  //==================================================

  ingredients: [
    "Fresh Salmon",
    "Fresh Tuna",
    "Shrimp",
    "Japanese Rice",
    "Seaweed Sheets",
    "Avocado",
    "Cucumber",
    "Soy Sauce",
    "Wasabi",
    "Pickled Ginger",
    "Sesame Seeds",
    "Cream Cheese",
  ],


    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "4 persons",

      preparationTime: "30 min",

      calories: 1200,

      spicyLevel: "Low",

      cookingStyle: "Fresh Preparation",

      mealType: "Lunch / Dinner",

      dishWeight: "950 g",

      protein: "58 g",

      carbs: "132 g",

      fat: "36 g",

      allergens: [
        "Fish",
        "Soy",
        "Milk"
      ],

      servingTemperature: "Cold",

      recommendedDrink:
        "Japanese Green Tea",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the sushi prepared fresh every day?",

        answer:
          "Yes. All seafood and sushi ingredients are prepared daily to ensure freshness and premium quality.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Is this meal suitable for sharing?",

        answer:
          "Yes. Family Sushi Box is designed to serve groups and families comfortably.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Does the box include sauces?",

        answer:
          "Yes. Soy sauce, wasabi, and pickled ginger are included.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can ingredients be customized?",

        answer:
          "Yes. Selected ingredients may be adjusted depending on availability.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Youssef Adel",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very fresh sushi and excellent presentation. Perfect for sharing.",

        likes: 19,

        dislikes: 0,

        hearts: 10,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Nour Hassan",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Premium quality seafood and authentic Japanese flavor.",

        likes: 12,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 5,

  slug: "pasta-alfredo",



  //==================================================
  // Card Data
  //==================================================

  title: "Pasta Alfredo",

  type: "Food",

  image: "/Images/Img Foods/photo5.webp",

  location: {
    address: "Via del Corso",
    city: "Rome",
    country: "Italy",
  },

  category: "pasta",

  cuisine: "italian",

  restaurantName: "Roma Pasta",

  badge: "Popular",

  tag: "Very Good",

    date: "Oct 4 - Oct 8",

  rating: 4.6,

  reviewsCount: 1800,

  views: 638,



  //==================================================
  // Pricing
  //==================================================

  price: 22,

  oldPrice: 29,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Classic Italian Alfredo pasta prepared with creamy sauce and premium cheese for a rich and smooth dining experience.",

    "Pasta Alfredo combines perfectly cooked pasta with creamy Alfredo sauce, parmesan cheese, mushrooms, and fresh ingredients to deliver a balanced Italian meal. Served hot and prepared fresh for every order, making it ideal for lunch and dinner lovers."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Fresh Daily Preparation",
    "Family Tables",
    "Online Reservation",
    "Fast Serving"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo5-food1.webp",
      "/Images/Img Foods/photo5-food2.webp",
      "/Images/Img Foods/photo5-food3.webp",
      "/Images/Img Foods/photo5-food4.webp",
      "/Images/Img Foods/photo5-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Italian Pasta",
      "Fresh Cream",
      "Parmesan Cheese",
      "Mushrooms",
      "Butter",
      "Garlic",
      "Black Pepper",
      "Parsley",
      "Olive Oil",
      "Sea Salt",
      "Milk",
      "Italian Herbs"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Authentic Italian Recipe",
      "Creamy Alfredo Sauce",
      "Fresh Daily Preparation",
      "Premium Parmesan",
      "Rich Flavor Experience",
      "Soft Cooked Pasta",
      "Restaurant Signature Dish",
      "Balanced Cream Texture",
      "Perfect Lunch Option",
      "Hot Fresh Serving",
      "Traditional Italian Style",
      "Comfort Food Experience"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "25 min",

      calories: 950,

      spicyLevel: "None",

      cookingStyle: "Italian Cream Cooking",

      mealType: "Lunch / Dinner",

      dishWeight: "620 g",

      protein: "32 g",

      carbs: "88 g",

      fat: "42 g",

      allergens: [
        "Milk",
        "Gluten"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Lemon Soda",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is Pasta Alfredo suitable for sharing?",

        answer:
          "Yes. The serving size is ideal for two people.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can I remove mushrooms?",

        answer:
          "Yes. Ingredients can be adjusted upon request.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Is the sauce prepared fresh?",

        answer:
          "Yes. Alfredo sauce is prepared fresh for every order.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can extra cheese be added?",

        answer:
          "Yes. Extra parmesan is available.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Ahmed Adel",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very creamy and rich flavor. One of the best pasta meals I tried.",

        likes: 16,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Sara Hassan",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Excellent cheese flavor and perfect pasta texture.",

        likes: 10,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},


{
  //==================================================
  // Identity
  //==================================================

  id: 6,

  slug: "mixed-seafood-plate",



  //==================================================
  // Card Data
  //==================================================

  title: "Mixed Seafood Plate",

  type: "Food",

  image: "/Images/Img Foods/photo6.webp",

  location: {
    address: "La Rambla",
    city: "Barcelona",
    country: "Spain",
  },

  category: "seafood",

  cuisine: "spanish",

  restaurantName: "Ocean Food",

  badge: "Featured",

  tag: "Excellent",

      date: "May 4 - May 8",

  rating: 4.7,

  reviewsCount: 1600,

  views: 721,



  //==================================================
  // Pricing
  //==================================================

  price: 35,

  oldPrice: 45,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Premium seafood platter combining fresh ocean ingredients with Mediterranean cooking style and authentic Spanish flavor.",

    "Mixed Seafood Plate offers a complete seafood experience including grilled shrimp, calamari, fish fillets, and fresh sides prepared daily. Served hot with carefully selected seasonings and balanced textures, making it perfect for seafood lovers and shared dining."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Fresh Daily Preparation",
    "Family Dining",
    "Sea View Seating",
    "Online Reservation"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo6-food1.webp",
      "/Images/Img Foods/photo6-food2.webp",
      "/Images/Img Foods/photo6-food3.webp",
      "/Images/Img Foods/photo6-food4.webp",
      "/Images/Img Foods/photo6-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Fresh Shrimp",
      "Calamari Rings",
      "Grilled Fish Fillet",
      "Garlic Butter",
      "Fresh Lemon",
      "Olive Oil",
      "Sea Salt",
      "Black Pepper",
      "Parsley",
      "Cherry Tomatoes",
      "Spanish Spices",
      "Seafood Sauce",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Premium Seafood Selection",
      "Mediterranean Recipe",
      "Fresh Daily Catch",
      "Rich Ocean Flavor",
      "Grilled To Order",
      "Balanced Seafood Mix",
      "Restaurant Signature Dish",
      "Fresh Lemon Finish",
      "Family Sharing Option",
      "High Protein Meal",
      "Authentic Spanish Style",
      "Hot Fresh Serving",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "3 persons",

      preparationTime: "35 min",

      calories: 1300,

      spicyLevel: "Low",

      cookingStyle: "Mediterranean Grilled",

      mealType: "Lunch / Dinner",

      dishWeight: "980 g",

      protein: "84 g",

      carbs: "42 g",

      fat: "58 g",

      allergens: [
        "Fish",
        "Shellfish",
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Mojito",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the seafood prepared fresh daily?",

        answer:
          "Yes. Seafood ingredients are selected and prepared fresh every day.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Is this meal suitable for sharing?",

        answer:
          "Yes. The dish is designed for up to three people.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Can ingredients be customized?",

        answer:
          "Yes. Selected seafood items can be adjusted depending on availability.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Does the meal include sauce?",

        answer:
          "Yes. Signature seafood sauce is included.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Omar Salah",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Fresh seafood and excellent grilling quality. Very satisfying meal.",

        likes: 18,

        dislikes: 0,

        hearts: 9,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Mariam Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Great seafood quality and beautiful presentation.",

        likes: 11,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 7,

  slug: "hot-dog",



  //==================================================
  // Card Data
  //==================================================

  title: "Hot Dog",

type: "Food",

  image: "/Images/Img Foods/photo7.jpg",

  location: {
    address: "Michigan Avenue",
    city: "Chicago",
    country: "USA",
  },

  category: "fast food",

  cuisine: "american",

  restaurantName: "Street Food Hub",

  badge: "Popular",

  tag: "Average",

        date: "May 6 - May 8",

  rating: 4.2,

  reviewsCount: 900,

  views: 486,



  //==================================================
  // Pricing
  //==================================================

  price: 10,

  oldPrice:  14,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Classic American hot dog served inside a soft bun with signature sauces and crispy toppings.",

    "This traditional Hot Dog delivers the authentic street-food experience with grilled sausage, fresh bread, crispy onions, and flavorful sauces. Designed as a quick and satisfying meal with balanced texture and rich flavor."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Street Pickup",
    "Fast Preparation",
    "Outdoor Seating",
    "Online Ordering",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo7-food1.webp",
      "/Images/Img Foods/photo7-food2.webp",
      "/Images/Img Foods/photo7-food3.webp",
      "/Images/Img Foods/photo7-food4.webp",
      "/Images/Img Foods/photo7-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Beef Sausage",
      "Hot Dog Bread",
      "American Mustard",
      "Ketchup",
      "Crispy Onion",
      "Pickles",
      "Cheddar Sauce",
      "Fresh Lettuce",
      "Black Pepper",
      "French Fries",
      "Burger Sauce",
      "Sea Salt",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Classic American Recipe",
      "Fresh Daily Preparation",
      "Premium Sausage",
      "Soft Fresh Bread",
      "Quick Serving",
      "Street Food Experience",
      "Perfect Snack Meal",
      "Crispy Toppings",
      "Balanced Flavor",
      "Restaurant Favorite",
      "Hot Fresh Serving",
      "Affordable Meal Choice",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "8 min",

      calories: 600,

      spicyLevel: "Low",

      cookingStyle: "Grilled",

      mealType: "Snack / Lunch",

      dishWeight: "390 g",

      protein: "23 g",

      carbs: "48 g",

      fat: "24 g",

      allergens: [
        "Gluten",
        "Milk"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Cold Cola",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the hot dog prepared after ordering?",

        answer:
          "Yes. Every serving is prepared fresh immediately after placing the order.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can sauces be customized?",

        answer:
          "Yes. Sauces and toppings can be adjusted according to preference.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Does the meal include fries?",

        answer:
          "Standard serving may include side fries depending on the selected meal package.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can I add extra sausage?",

        answer:
          "Yes. Additional sausage portions are available.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Khaled Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very tasty and fast service. Perfect street food experience.",

        likes: 11,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Ahmed Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Fresh bread and good sausage quality. Great quick meal.",

        likes: 7,

        dislikes: 0,

        hearts: 2,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 8,

  slug: "family-fried-chicken",



  //==================================================
  // Card Data
  //==================================================

  title: "Family Fried Chicken",

  type: "Food",

  image: "/Images/Img Foods/photo8.jpg",

  location: {
    address: "Main Street",
    city: "Texas",
    country: "USA",
  },

  category: "fried chicken",

  cuisine: "american",

  restaurantName: "Chicken King",

  badge: "Featured",

  tag: "Excellent",

          date: "Dec 10 - Dec 15",


  rating: 4.8,

  reviewsCount: 2700,

  views: 1054,



  //==================================================
  // Pricing
  //==================================================

  price: 28,

  oldPrice: 36,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Large crispy fried chicken meal prepared for sharing with premium seasoning and classic American flavor.",

    "Family Fried Chicken combines crispy golden coating with juicy chicken pieces served alongside fries and signature sauces. Prepared fresh daily and designed for groups and family gatherings, delivering a satisfying combination of crunch, flavor, and generous portions."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Family Meal Packages",
    "Fresh Daily Cooking",
    "Online Ordering",
    "Large Group Serving",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo8-food1.webp",
      "/Images/Img Foods/photo8-food2.webp",
      "/Images/Img Foods/photo8-food3.webp",
      "/Images/Img Foods/photo8-food4.webp",
      "/Images/Img Foods/photo8-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Fresh Chicken",
      "Crispy Flour Mix",
      "Black Pepper",
      "Paprika",
      "Garlic Powder",
      "Onion Powder",
      "Sea Salt",
      "French Fries",
      "BBQ Sauce",
      "Cheddar Sauce",
      "Vegetable Oil",
      "Chicken Seasoning",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Extra Crispy Texture",
      "Large Family Portion",
      "Fresh Daily Preparation",
      "Premium Chicken Quality",
      "American Style Recipe",
      "Golden Crunch Coating",
      "Served With Fries",
      "Signature Sauces Included",
      "Restaurant Bestseller",
      "Perfect Sharing Meal",
      "Hot Fresh Serving",
      "Rich Flavor Experience",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "5 persons",

      preparationTime: "25 min",

      calories: 1800,

      spicyLevel: "Medium",

      cookingStyle: "Deep Fried",

      mealType: "Lunch / Dinner",

      dishWeight: "1450 g",

      protein: "108 g",

      carbs: "132 g",

      fat: "92 g",

      allergens: [
        "Gluten",
        "Milk",
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Lemon Soda",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the meal enough for family sharing?",

        answer:
          "Yes. The portion is designed to serve up to five people comfortably.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can I choose spicy or regular seasoning?",

        answer:
          "Yes. Different spice levels are available.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Does the meal include sauces?",

        answer:
          "Yes. Multiple dipping sauces are included.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can fries be replaced?",

        answer:
          "Yes. Side items can be customized depending on availability.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Omar Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very crispy and huge portion. Perfect for sharing with family.",

        likes: 21,

        dislikes: 0,

        hearts: 10,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Mariam Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Fresh chicken and excellent crunchy coating.",

        likes: 13,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 9,

  slug: "caesar-salad",



  //==================================================
  // Card Data
  //==================================================

  title: "Caesar Salad",

  type: "Food",

  image: "/Images/Img Foods/photo9.jpg",

  location: {
    address: "Rue de Rivoli",
    city: "Paris",
    country: "France",
  },

  category: "salad",

  cuisine: "healthy",

  restaurantName: "Healthy Bowl",

  badge: "Trending",

  tag: "Good",

            date: "Aug 10 - Aug 15",

  rating: 4.4,

  reviewsCount: 1000,

  views: 537,



  //==================================================
  // Pricing
  //==================================================

  price: 14,

  oldPrice: 19,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Fresh Caesar Salad prepared with premium vegetables, grilled chicken, and creamy dressing for a balanced healthy meal.",

    "Caesar Salad delivers freshness and flavor through crisp lettuce, grilled chicken slices, parmesan cheese, and crunchy croutons finished with signature Caesar dressing. Designed for healthy eating while maintaining a satisfying and rich taste."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Healthy Meal Preparation",
    "Fresh Daily Ingredients",
    "Online Ordering",
    "Quick Serving"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo9-food1.webp",
      "/Images/Img Foods/photo9-food2.webp",
      "/Images/Img Foods/photo9-food3.webp",
      "/Images/Img Foods/photo9-food4.webp",
      "/Images/Img Foods/photo9-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Fresh Lettuce",
      "Grilled Chicken",
      "Parmesan Cheese",
      "Caesar Dressing",
      "Croutons",
      "Olive Oil",
      "Black Pepper",
      "Sea Salt",
      "Fresh Lemon",
      "Garlic",
      "Cherry Tomatoes",
      "Italian Herbs"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Healthy Meal Choice",
      "Fresh Daily Ingredients",
      "High Protein Content",
      "Light And Balanced",
      "Fresh Vegetable Mix",
      "Premium Chicken Quality",
      "Classic Caesar Recipe",
      "Low Preparation Time",
      "Restaurant Favorite",
      "Fresh Cold Serving",
      "Light Yet Filling",
      "Perfect Lunch Option"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "10 min",

      calories: 350,

      spicyLevel: "None",

      cookingStyle: "Fresh Mixed",

      mealType: "Lunch",

      dishWeight: "410 g",

      protein: "31 g",

      carbs: "18 g",

      fat: "14 g",

      allergens: [
        "Milk",
        "Egg",
        "Gluten"
      ],

      servingTemperature: "Cold",

      recommendedDrink:
        "Fresh Orange Juice",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is Caesar Salad suitable for healthy diets?",

        answer:
          "Yes. It offers balanced nutrition with moderate calories and good protein content.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can I remove chicken?",

        answer:
          "Yes. Ingredients can be customized before preparation.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Is the dressing prepared fresh?",

        answer:
          "Yes. Caesar dressing is prepared daily.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can extra vegetables be added?",

        answer:
          "Yes. Additional toppings are available.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Sara Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very fresh and light meal. Perfect for healthy eating.",

        likes: 12,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Omar Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Fresh ingredients and excellent chicken quality.",

        likes: 7,

        dislikes: 0,

        hearts: 3,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 10,

  slug: "chocolate-pancakes",



  //==================================================
  // Card Data
  //==================================================

  title: "Chocolate Pancakes",

  type: "Food",

  image: "/Images/Img Foods/photo10.jpg",

  location: {
    address: "Queen Street",
    city: "Toronto",
    country: "Canada",
  },

  category: "dessert",

  cuisine: "american",

  restaurantName: "Sweet Cafe",

  badge: "Popular",

  tag: "Excellent",

  date: "Aug 9 - Aug 20",

  rating: 4.9,

  reviewsCount: 2200,

  views: 1120,



  //==================================================
  // Pricing
  //==================================================

  price: 16,

  oldPrice: 22,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Soft fluffy pancakes layered with rich chocolate and topped with premium dessert ingredients.",

    "Chocolate Pancakes deliver a sweet and indulgent dessert experience through freshly prepared pancakes covered with chocolate sauce and decorated with strawberries and creamy toppings. Perfect for breakfast lovers and dessert enthusiasts seeking a rich and satisfying meal."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Fresh Daily Preparation",
    "Breakfast Serving",
    "Online Ordering",
    "Dessert Packaging",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo10-food1.webp",
      "/Images/Img Foods/photo10-food2.webp",
      "/Images/Img Foods/photo10-food3.webp",
      "/Images/Img Foods/photo10-food4.webp",
      "/Images/Img Foods/photo10-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Pancake Flour",
      "Fresh Milk",
      "Eggs",
      "Chocolate Sauce",
      "Dark Chocolate",
      "Fresh Strawberries",
      "Vanilla Cream",
      "Butter",
      "Sugar",
      "Maple Syrup",
      "Whipped Cream",
      "Chocolate Chips",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Soft Fluffy Texture",
      "Rich Chocolate Flavor",
      "Prepared Fresh Daily",
      "Premium Dessert Experience",
      "Perfect Breakfast Choice",
      "Fresh Fruit Topping",
      "Balanced Sweetness",
      "Beautiful Presentation",
      "Restaurant Signature Dessert",
      "Smooth Chocolate Layers",
      "Perfect Sharing Portion",
      "Fresh Warm Serving",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "15 min",

      calories: 780,

      spicyLevel: "None",

      cookingStyle: "Pan Cooked",

      mealType: "Breakfast / Dessert",

      dishWeight: "580 g",

      protein: "16 g",

      carbs: "96 g",

      fat: "34 g",

      allergens: [
        "Milk",
        "Egg",
        "Gluten"
      ],

      servingTemperature: "Warm",

      recommendedDrink:
        "Hot Chocolate",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Are the pancakes prepared fresh after ordering?",

        answer:
          "Yes. Pancakes are cooked fresh for every order.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can I add extra chocolate?",

        answer:
          "Yes. Extra chocolate toppings are available.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Does the dish include fruits?",

        answer:
          "Yes. Fresh strawberries are included in the standard serving.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can whipped cream be removed?",

        answer:
          "Yes. Toppings can be customized before preparation.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Mariam Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very soft pancakes and amazing chocolate flavor.",

        likes: 18,

        dislikes: 0,

        hearts: 9,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Ahmed Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "One of the best dessert meals. Perfect sweetness balance.",

        likes: 11,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 11,

  slug: "grilled-steak",



  //==================================================
  // Card Data
  //==================================================

  title: "Grilled Steak",

  type: "Food",

  image: "/Images/Img Foods/photo11.webp",

  location: {
    address: "Downtown Steak Street",
    city: "Texas",
    country: "USA",
  },

  category: "meat",

  cuisine: "american",

  restaurantName: "Smoke House",

  badge: "Featured",

  tag: "Excellent",

    date: "Jul 9 - Jul 20",

  rating: 4.8,

  reviewsCount: 1900,

  views: 986,



  //==================================================
  // Pricing
  //==================================================

  price: 45,

  oldPrice: 58,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Premium grilled steak cooked to perfection with rich smoky flavor and tender texture.",

    "Grilled Steak delivers a luxury meat experience using premium beef cuts prepared over open flame and served with vegetables and signature sauce. Every serving focuses on tenderness, balanced seasoning, and authentic American steakhouse quality."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Premium Serving",
    "Fresh Daily Preparation",
    "Reservation Available",
    "Custom Cooking Level",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo11-food1.webp",
      "/Images/Img Foods/photo11-food2.webp",
      "/Images/Img Foods/photo11-food3.webp",
      "/Images/Img Foods/photo11-food4.webp",
      "/Images/Img Foods/photo11-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Premium Beef Steak",
      "Black Pepper",
      "Sea Salt",
      "Garlic Butter",
      "Fresh Rosemary",
      "Olive Oil",
      "Grilled Vegetables",
      "BBQ Sauce",
      "Garlic",
      "Smoked Paprika",
      "Fresh Thyme",
      "Steak Seasoning",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Premium Beef Selection",
      "Open Flame Grilling",
      "Restaurant Signature Dish",
      "Tender Juicy Texture",
      "Custom Cooking Level",
      "Rich Smoky Flavor",
      "Served With Vegetables",
      "High Protein Meal",
      "Fresh Daily Preparation",
      "Luxury Dining Experience",
      "Perfect Dinner Choice",
      "Hot Fresh Serving"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "35 min",

      calories: 1400,

      spicyLevel: "Medium",

      cookingStyle: "Open Flame Grilled",

      mealType: "Lunch / Dinner",

      dishWeight: "820 g",

      protein: "95 g",

      carbs: "26 g",

      fat: "82 g",

      allergens: [
        "Milk",
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Lemonade",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can I choose steak doneness level?",

        answer:
          "Yes. Rare, Medium Rare, Medium, and Well Done options are available.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Does the meal include side vegetables?",

        answer:
          "Yes. Grilled vegetables are included with the serving.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Can extra sauce be added?",

        answer:
          "Yes. Additional sauce options are available.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is the steak prepared fresh?",

        answer:
          "Yes. Every steak is grilled after ordering.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Omar Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Perfect steak texture and excellent smoky flavor.",

        likes: 22,

        dislikes: 0,

        hearts: 11,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Mariam Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "One of the best steak meals I tried. Very juicy and premium.",

        likes: 14,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 12,

  slug: "chicken-biryani",



  //==================================================
  // Card Data
  //==================================================

  title: "Chicken Biryani",

  type: "Food",

  image: "/Images/Img Foods/photo12.jpg",

  location: {
    address: "Colaba Street",
    city: "Mumbai",
    country: "India",
  },

  category: "rice",

  cuisine: "indian",

  restaurantName: "Spicy Indian Food",

  badge: "Popular",

  tag: "Very Good",

  
    date: "Jul 20 - Jul 24",

  rating: 4.7,

  reviewsCount: 2400,

  views: 1210,



  //==================================================
  // Pricing
  //==================================================

  price: 20,

  oldPrice: 27,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Traditional Indian biryani made with aromatic rice, marinated chicken, and authentic spice combinations.",

    "Chicken Biryani delivers a rich Indian dining experience by combining long-grain rice with slow-cooked chicken and layered spices. Every serving offers balanced flavor, aromatic texture, and restaurant-quality preparation designed for biryani lovers."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Fresh Daily Preparation",
    "Family Serving",
    "Online Ordering",
    "Custom Spice Level",
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo12-food1.webp",
      "/Images/Img Foods/photo12-food2.webp",
      "/Images/Img Foods/photo12-food3.webp",
      "/Images/Img Foods/photo12-food4.webp",
      "/Images/Img Foods/photo12-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Basmati Rice",
      "Chicken Pieces",
      "Biryani Masala",
      "Fresh Onion",
      "Garlic",
      "Ginger",
      "Yogurt",
      "Green Chili",
      "Fresh Coriander",
      "Mint Leaves",
      "Saffron",
      "Indian Spices",
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Authentic Indian Recipe",
      "Aromatic Long Grain Rice",
      "Slow Cooked Chicken",
      "Traditional Spice Blend",
      "Restaurant Signature Dish",
      "Rich Layered Flavor",
      "Fresh Daily Preparation",
      "Perfect Family Meal",
      "Balanced Spice Experience",
      "Premium Ingredient Quality",
      "Comfort Food Experience",
      "Hot Fresh Serving",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "30 min",

      calories: 980,

      spicyLevel: "High",

      cookingStyle: "Layered Dum Cooking",

      mealType: "Lunch / Dinner",

      dishWeight: "760 g",

      protein: "52 g",

      carbs: "108 g",

      fat: "34 g",

      allergens: [
        "Milk"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Mango Lassi",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can I choose spice level?",

        answer:
          "Yes. Mild, medium, and spicy options are available.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Is the biryani cooked fresh?",

        answer:
          "Yes. Every serving is prepared fresh daily.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Does the meal include sauce or sides?",

        answer:
          "Yes. Traditional yogurt sauce and side salad are included.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can extra chicken be added?",

        answer:
          "Yes. Additional chicken portions are available.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Ahmed Mahmoud",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent flavor and authentic Indian spices. Very satisfying meal.",

        likes: 20,

        dislikes: 0,

        hearts: 9,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Sara Hassan",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Rice quality and chicken flavor were amazing.",

        likes: 12,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 13,

  slug: "tacos",



  //==================================================
  // Card Data
  //==================================================

  title: "Tacos",

  type: "Food",

  image: "/Images/Img Foods/photo13.avif",

  location: {
    address: "Avenida Reforma",
    city: "Mexico City",
    country: "Mexico",
  },

  category: "fast food",

  cuisine: "mexican",

  restaurantName: "Mexican Grill",

  badge: "Trending",

  tag: "Good",

      date: "Feb 20 - Feb 24",

  rating: 4.5,

  reviewsCount: 1500,

  views: 845,



  //==================================================
  // Pricing
  //==================================================

  price: 13,

  oldPrice: 18,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Traditional Mexican tacos filled with seasoned meat and fresh toppings for an authentic street-food experience.",

    "Tacos combine soft tortillas with juicy beef, fresh vegetables, rich cheese, and signature Mexican sauces. Prepared fresh for every order and served hot to create the perfect balance between flavor, texture, and authentic Mexican taste."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Street Pickup",
    "Fresh Daily Preparation",
    "Online Ordering",
    "Fast Serving"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo13-food1.webp",
      "/Images/Img Foods/photo13-food2.webp",
      "/Images/Img Foods/photo13-food3.webp",
      "/Images/Img Foods/photo13-food4.webp",
      "/Images/Img Foods/photo13-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Soft Tortilla Bread",
      "Seasoned Beef",
      "Cheddar Cheese",
      "Fresh Lettuce",
      "Fresh Tomatoes",
      "Red Onion",
      "Avocado",
      "Mexican Salsa",
      "Sour Cream",
      "Fresh Lime",
      "Jalapeño",
      "Mexican Spices"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Authentic Mexican Recipe",
      "Fresh Daily Preparation",
      "Juicy Meat Filling",
      "Restaurant Signature Dish",
      "Balanced Flavor Layers",
      "Street Food Experience",
      "Fresh Vegetables",
      "Premium Tortilla Quality",
      "Hot Fresh Serving",
      "Custom Topping Options",
      "Rich Mexican Sauces",
      "Perfect Quick Meal"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "12 min",

      calories: 620,

      spicyLevel: "Medium",

      cookingStyle: "Mexican Street Style",

      mealType: "Lunch / Dinner",

      dishWeight: "470 g",

      protein: "30 g",

      carbs: "58 g",

      fat: "28 g",

      allergens: [
        "Milk",
        "Gluten"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Lemon Soda",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can I choose spicy level?",

        answer:
          "Yes. Mild, medium, and spicy options are available.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can ingredients be customized?",

        answer:
          "Yes. Toppings and sauces can be adjusted upon request.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Are tacos prepared fresh?",

        answer:
          "Yes. Every serving is prepared after ordering.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Can I add extra cheese?",

        answer:
          "Yes. Extra toppings are available.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Omar Adel",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent tacos with authentic Mexican flavor and fresh ingredients.",

        likes: 17,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Mariam Ahmed",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Very tasty and the sauces were amazing.",

        likes: 10,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 14,

  slug: "pad-thai",



  //==================================================
  // Card Data
  //==================================================

  title: "Pad Thai",

  type: "Food",

  image: "/Images/Img Foods/photo14.webp",

  location: {
    address: "Sukhumvit Road",
    city: "Bangkok",
    country: "Thailand",
  },

  category: "noodles",

  cuisine: "thai",

  restaurantName: "Thai Spice",

  badge: "Featured",

  tag: "Very Good",

        date: "Feb 13 - Feb 14",

  rating: 4.6,

  reviewsCount: 1300,

  views: 774,



  //==================================================
  // Pricing
  //==================================================

  price: 19,

  oldPrice: 25,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Authentic Thai noodles prepared with fresh vegetables, shrimp, and signature sweet-savory sauce.",

    "Pad Thai offers one of Thailand’s most iconic flavors through stir-fried rice noodles combined with shrimp, vegetables, peanuts, and balanced seasoning. The dish delivers freshness, texture, and traditional street-food style preparation."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Fresh Daily Preparation",
    "Asian Food Experience",
    "Online Ordering",
    "Fast Serving"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo14-food1.webp",
      "/Images/Img Foods/photo14-food2.webp",
      "/Images/Img Foods/photo14-food3.webp",
      "/Images/Img Foods/photo14-food4.webp",
      "/Images/Img Foods/photo14-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Rice Noodles",
      "Fresh Shrimp",
      "Egg",
      "Bean Sprouts",
      "Green Onion",
      "Peanuts",
      "Garlic",
      "Thai Sauce",
      "Lime",
      "Fish Sauce",
      "Brown Sugar",
      "Fresh Vegetables"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Authentic Thai Recipe",
      "Balanced Sweet And Savory Flavor",
      "Fresh Daily Preparation",
      "Premium Seafood Quality",
      "Traditional Street Food Style",
      "Fresh Vegetables Included",
      "Restaurant Signature Dish",
      "Light Yet Filling Meal",
      "Rich Asian Flavors",
      "Fresh Stir Fry Cooking",
      "Popular Thai Choice",
      "Hot Fresh Serving"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "18 min",

      calories: 740,

      spicyLevel: "Medium",

      cookingStyle: "Stir Fried",

      mealType: "Lunch / Dinner",

      dishWeight: "590 g",

      protein: "34 g",

      carbs: "82 g",

      fat: "24 g",

      allergens: [
        "Egg",
        "Peanuts",
        "Seafood"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Thai Iced Tea",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can Pad Thai be made less spicy?",

        answer:
          "Yes. Spice level can be customized before preparation.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can shrimp be replaced?",

        answer:
          "Yes. Alternative protein options are available.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Is Pad Thai prepared fresh?",

        answer:
          "Yes. Every order is cooked immediately after ordering.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Does it include peanuts?",

        answer:
          "Yes. Peanuts are included unless removed by request.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Ahmed Samir",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Amazing Thai flavor and perfectly balanced seasoning.",

        likes: 16,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Sara Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Fresh ingredients and very authentic taste.",

        likes: 9,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 15,

  slug: "croissant",



  //==================================================
  // Card Data
  //==================================================

  title: "Croissant",

  type: "Food",
  
  image: "/Images/Img Foods/photo15.webp",

  location: {
    address: "Rue Saint-Honoré",
    city: "Paris",
    country: "France",
  },

  category: "bakery",

  cuisine: "french",

  restaurantName: "French Bakery",

  badge: "Popular",

  tag: "Good",

          date: "Jan 13 - Jan 14",

  rating: 4.3,

  reviewsCount: 900,

  views: 602,



  //==================================================
  // Pricing
  //==================================================

  price: 8,

  oldPrice: 12,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Classic French croissant baked daily with rich buttery layers and soft interior texture.",

    "Croissant delivers an authentic Paris bakery experience through carefully folded dough, golden crust, and fresh ingredients. Perfect for breakfast, coffee breaks, and light meals with balanced sweetness and delicate texture."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Fresh Daily Baking",
    "Breakfast Serving",
    "Coffee Pairing",
    "Online Ordering"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo15-food1.webp",
      "/Images/Img Foods/photo15-food2.webp",
      "/Images/Img Foods/photo15-food3.webp",
      "/Images/Img Foods/photo15-food4.webp",
      "/Images/Img Foods/photo15-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Premium Flour",
      "French Butter",
      "Fresh Milk",
      "Sugar",
      "Yeast",
      "Sea Salt",
      "Egg Wash",
      "Filtered Water",
      "Vanilla Extract",
      "Fresh Cream",
      "Butter Layers",
      "Bakery Dough"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Authentic French Recipe",
      "Fresh Daily Baking",
      "Golden Crispy Layers",
      "Soft Interior Texture",
      "Premium Butter Quality",
      "Perfect Breakfast Option",
      "Traditional Paris Style",
      "Restaurant Bestseller",
      "Fresh Warm Serving",
      "Balanced Sweetness",
      "Light Meal Experience",
      "Perfect Coffee Companion"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "5 min",

      calories: 300,

      spicyLevel: "None",

      cookingStyle: "Fresh Baked",

      mealType: "Breakfast / Snack",

      dishWeight: "160 g",

      protein: "7 g",

      carbs: "34 g",

      fat: "15 g",

      allergens: [
        "Milk",
        "Egg",
        "Gluten"
      ],

      servingTemperature: "Warm",

      recommendedDrink:
        "Cappuccino",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the croissant baked daily?",

        answer:
          "Yes. Croissants are baked fresh every morning.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can chocolate filling be added?",

        answer:
          "Yes. Additional filling options are available.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Is it suitable for breakfast?",

        answer:
          "Yes. Croissant is one of the most popular breakfast choices.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Does it pair with coffee?",

        answer:
          "Yes. Coffee and bakery combinations are available.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Mariam Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very soft inside and perfectly crispy outside.",

        likes: 12,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Ahmed Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Excellent bakery quality and authentic French taste.",

        likes: 8,

        dislikes: 0,

        hearts: 3,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 16,

  slug: "salmon-sushi",



  //==================================================
  // Card Data
  //==================================================

  title: "Salmon Sushi",

  type: "Food",

  image: "/Images/Img Foods/photo16.webp",

  location: {
    address: "Shibuya Crossing",
    city: "Tokyo",
    country: "Japan",
  },

  category: "sushi",

  cuisine: "japanese",

  restaurantName: "Sakura Sushi",

  badge: "Featured",

  tag: "Excellent",

            date: "Jan 9 - Jan 14",

  rating: 4.9,

  reviewsCount: 2800,

  views: 1324,



  //==================================================
  // Pricing
  //==================================================

  price: 26,

  oldPrice: 34,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Premium Japanese salmon sushi prepared using fresh ingredients and traditional sushi techniques.",

    "Salmon Sushi offers an authentic Japanese dining experience through perfectly seasoned rice, premium fresh salmon, and balanced flavors. Carefully prepared by sushi chefs to deliver freshness, elegant presentation, and high-quality seafood taste."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Fresh Daily Preparation",
    "Chef Preparation",
    "Online Ordering",
    "Premium Packaging"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo16-food1.webp",
      "/Images/Img Foods/photo16-food2.webp",
      "/Images/Img Foods/photo16-food3.webp",
      "/Images/Img Foods/photo16-food4.webp",
      "/Images/Img Foods/photo16-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Fresh Salmon",
      "Japanese Rice",
      "Seaweed",
      "Soy Sauce",
      "Wasabi",
      "Pickled Ginger",
      "Rice Vinegar",
      "Sesame Seeds",
      "Fresh Avocado",
      "Cucumber",
      "Japanese Seasoning",
      "Premium Seafood Sauce"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Premium Fresh Salmon",
      "Authentic Japanese Recipe",
      "Prepared By Sushi Chefs",
      "Fresh Daily Ingredients",
      "Elegant Presentation",
      "Balanced Seafood Flavor",
      "Premium Rice Quality",
      "Restaurant Signature Dish",
      "Light And Healthy Meal",
      "Perfect Sushi Experience",
      "Cold Fresh Serving",
      "High Quality Seafood",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "20 min",

      calories: 650,

      spicyLevel: "None",

      cookingStyle: "Japanese Sushi Preparation",

      mealType: "Lunch / Dinner",

      dishWeight: "430 g",

      protein: "42 g",

      carbs: "46 g",

      fat: "24 g",

      allergens: [
        "Fish",
        "Soy"
      ],

      servingTemperature: "Cold",

      recommendedDrink:
        "Japanese Green Tea",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the salmon served fresh?",

        answer:
          "Yes. Fresh premium salmon is prepared daily.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Does the meal include soy sauce and wasabi?",

        answer:
          "Yes. Traditional side sauces are included.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Can extra sushi pieces be added?",

        answer:
          "Yes. Additional portions are available.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is this suitable for sharing?",

        answer:
          "Yes. Standard serving is suitable for two people.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Sara Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Fresh salmon and excellent sushi quality. One of the best I tried.",

        likes: 20,

        dislikes: 0,

        hearts: 10,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Omar Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very authentic Japanese taste and beautiful presentation.",

        likes: 13,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 17,

  slug: "bbq-pizza",



  //==================================================
  // Card Data
  //==================================================

  title: "BBQ Pizza",


  type: "Food",
  
  image: "/Images/Img Foods/photo17.jpg",

  location: {
    address: "Michigan Avenue",
    city: "Chicago",
    country: "USA",
  },

  category: "pizza",

  cuisine: "american",

  restaurantName: "Pizza Town",

  badge: "Trending",

  tag: "Very Good",

  date: "Nov 9 - Nov 14",

  rating: 4.7,

  reviewsCount: 1700,

  views: 1042,



  //==================================================
  // Pricing
  //==================================================

  price: 24,

  oldPrice: 31,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "American style BBQ pizza topped with grilled chicken, smoky sauce, and premium melted cheese.",

    "BBQ Pizza combines crispy dough with rich barbecue flavor and fresh toppings to create a satisfying meal experience. Prepared using premium ingredients and baked fresh for a perfect balance between smoky taste, melted cheese, and soft interior texture."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Fresh Oven Baking",
    "Family Serving",
    "Online Ordering",
    "Custom Toppings"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo17-food1.webp",
      "/Images/Img Foods/photo17-food2.webp",
      "/Images/Img Foods/photo17-food3.webp",
      "/Images/Img Foods/photo17-food4.webp",
      "/Images/Img Foods/photo17-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Pizza Dough",
      "BBQ Sauce",
      "Grilled Chicken",
      "Mozzarella Cheese",
      "Cheddar Cheese",
      "Fresh Onion",
      "Sweet Corn",
      "Black Olives",
      "Olive Oil",
      "Fresh Garlic",
      "Italian Herbs",
      "Smoked Seasoning"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Smoky BBQ Flavor",
      "Fresh Oven Preparation",
      "Premium Cheese Blend",
      "Restaurant Signature Pizza",
      "Loaded Chicken Toppings",
      "Golden Crispy Crust",
      "Fresh Daily Ingredients",
      "Family Sharing Meal",
      "Balanced Flavor Layers",
      "Hot Fresh Serving",
      "American Style Pizza",
      "Custom Topping Options"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "3 persons",

      preparationTime: "22 min",

      calories: 1100,

      spicyLevel: "Low",

      cookingStyle: "Stone Oven Baked",

      mealType: "Lunch / Dinner",

      dishWeight: "980 g",

      protein: "54 g",

      carbs: "112 g",

      fat: "47 g",

      allergens: [
        "Milk",
        "Gluten"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Cola",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can toppings be customized?",

        answer:
          "Yes. Additional toppings and ingredient changes are available.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Is the pizza baked after ordering?",

        answer:
          "Yes. Every pizza is baked fresh after order confirmation.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Can extra cheese be added?",

        answer:
          "Yes. Extra cheese options are available.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is this suitable for sharing?",

        answer:
          "Yes. Standard serving size is suitable for three people.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Ahmed Mostafa",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent BBQ flavor and perfectly baked crust.",

        likes: 18,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Mariam Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very rich flavor and enough quantity for sharing.",

        likes: 11,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 18,

  slug: "falafel-sandwich",



  //==================================================
  // Card Data
  //==================================================

  title: "Falafel Sandwich",

  type: "Food",
  
  image: "/Images/Img Foods/photo18.png",

  location: {
    address: "El Moez Street",
    city: "Cairo",
    country: "Egypt",
  },

  category: "sandwich",

  cuisine: "arabic",

  restaurantName: "Oriental Food",

  badge: "Popular",

  tag: "Good",

    date: "Nov 14 - Nov 20",

  rating: 4.4,

  reviewsCount: 2000,

  views: 1286,



  //==================================================
  // Pricing
  //==================================================

  price: 6,

  oldPrice: 9,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Traditional Egyptian falafel sandwich prepared with crispy falafel, fresh vegetables, and authentic oriental flavors.",

    "Falafel Sandwich delivers a classic Egyptian street food experience through freshly fried falafel, warm local bread, creamy tahini, and fresh salad ingredients. A light yet satisfying meal with balanced texture and authentic taste."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Fresh Daily Preparation",
    "Street Pickup",
    "Breakfast Serving",
    "Online Ordering"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo18-food1.webp",
      "/Images/Img Foods/photo18-food2.webp",
      "/Images/Img Foods/photo18-food3.webp",
      "/Images/Img Foods/photo18-food4.webp",
      "/Images/Img Foods/photo18-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Egyptian Falafel",
      "Baladi Bread",
      "Tahini Sauce",
      "Fresh Tomatoes",
      "Parsley",
      "Fresh Lettuce",
      "Pickles",
      "Cucumber",
      "Sesame",
      "Garlic",
      "Oriental Spices",
      "Fresh Lemon"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Traditional Egyptian Recipe",
      "Fresh Daily Preparation",
      "Crispy Falafel Texture",
      "Authentic Street Food",
      "Light Yet Filling Meal",
      "Fresh Vegetable Toppings",
      "Fresh Warm Bread",
      "Restaurant Bestseller",
      "Balanced Oriental Flavor",
      "Quick Serving Time",
      "Affordable Meal Option",
      "Fresh Hot Serving",
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "7 min",

      calories: 450,

      spicyLevel: "Low",

      cookingStyle: "Fresh Fried",

      mealType: "Breakfast / Snack",

      dishWeight: "330 g",

      protein: "14 g",

      carbs: "46 g",

      fat: "18 g",

      allergens: [
        "Sesame",
        "Gluten"
      ],

      servingTemperature: "Hot",

      recommendedDrink:
        "Fresh Sugar Cane Juice",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Is the falafel prepared fresh daily?",

        answer:
          "Yes. Falafel is prepared fresh every day using traditional ingredients.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can extra tahini be added?",

        answer:
          "Yes. Additional tahini sauce is available.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Can spicy sauce be added?",

        answer:
          "Yes. Optional spicy sauce is available.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is this suitable as breakfast?",

        answer:
          "Yes. Falafel sandwiches are one of the most popular breakfast choices.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Mohamed Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Authentic Egyptian taste with very fresh ingredients.",

        likes: 16,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Simple and delicious. Bread and tahini were excellent.",

        likes: 10,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 19,

  slug: "ice-cream-sundae",



  //==================================================
  // Card Data
  //==================================================

  title: "Ice Cream Sundae",

  type: "Food",

  image: "/Images/Img Foods/photo19.jpg",

  location: {
    address: "Via del Corso",
    city: "Rome",
    country: "Italy",
  },

  category: "dessert",

  cuisine: "italian",

  restaurantName: "Sweet World",

  badge: "Featured",

  tag: "Excellent",

  date: "Apr 14 - Apr 20",

  rating: 4.8,

  reviewsCount: 1600,

  views: 1125,



  //==================================================
  // Pricing
  //==================================================

  price: 11,

  oldPrice: 15,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Classic Italian-style ice cream sundae served with rich toppings and smooth creamy texture.",

    "Ice Cream Sundae combines premium vanilla and chocolate ice cream with sweet caramel, fresh toppings, and elegant presentation. Designed to deliver a refreshing dessert experience suitable for sharing or enjoying as a sweet finish."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Takeaway",
    "Delivery",
    "Fresh Daily Preparation",
    "Dessert Serving",
    "Custom Toppings",
    "Online Ordering"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo19-food1.webp",
      "/Images/Img Foods/photo19-food2.webp",
      "/Images/Img Foods/photo19-food3.webp",
      "/Images/Img Foods/photo19-food4.webp",
      "/Images/Img Foods/photo19-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Vanilla Ice Cream",
      "Chocolate Ice Cream",
      "Caramel Sauce",
      "Whipped Cream",
      "Fresh Milk",
      "Chocolate Syrup",
      "Fresh Strawberries",
      "Cookie Crumbs",
      "Roasted Almonds",
      "Chocolate Chips",
      "Vanilla Extract",
      "Sweet Cream"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Premium Ice Cream Quality",
      "Smooth Creamy Texture",
      "Refreshing Dessert Experience",
      "Fresh Daily Preparation",
      "Rich Chocolate Flavor",
      "Perfect Sweet Balance",
      "Cold Fresh Serving",
      "Elegant Presentation",
      "Premium Toppings",
      "Restaurant Favorite Dessert",
      "Ideal Sharing Option",
      "Classic Italian Style"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "2 persons",

      preparationTime: "5 min",

      calories: 520,

      spicyLevel: "None",

      cookingStyle: "Cold Dessert Preparation",

      mealType: "Dessert",

      dishWeight: "360 g",

      protein: "8 g",

      carbs: "64 g",

      fat: "24 g",

      allergens: [
        "Milk",
        "Nuts"
      ],

      servingTemperature: "Cold",

      recommendedDrink:
        "Iced Coffee",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can I choose different ice cream flavors?",

        answer:
          "Yes. Additional flavor combinations are available.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Can extra toppings be added?",

        answer:
          "Yes. Chocolate, nuts, and fruit toppings are available.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Is the dessert suitable for sharing?",

        answer:
          "Yes. Standard serving size is suitable for two people.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is it served immediately?",

        answer:
          "Yes. Sundae desserts are prepared and served instantly.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Mariam Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very creamy and refreshing. Caramel topping was amazing.",

        likes: 18,

        dislikes: 0,

        hearts: 9,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Ahmed Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent dessert and perfect quantity for sharing.",

        likes: 11,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},

{
  //==================================================
  // Identity
  //==================================================

  id: 20,

  slug: "club-sandwich",



  //==================================================
  // Card Data
  //==================================================

  title: "Club Sandwich",

  type: "Food",
  
  image: "/Images/Img Foods/photo20.jpg",

  location: {
    address: "Oxford Street",
    city: "London",
    country: "UK",
  },

  category: "sandwich",

  cuisine: "american",

  restaurantName: "London Cafe",

  badge: "Trending",

  tag: "Very Good",

    date: "Apr 12 - Apr 15",

  rating: 4.5,

  reviewsCount: 1200,

  views: 891,



  //==================================================
  // Pricing
  //==================================================

  price: 14,

  oldPrice: 19,

  quantity: 1,



  //==================================================
  // Description
  //==================================================

  description: [
    "Classic layered club sandwich filled with premium ingredients and served as a complete meal.",

    "Club Sandwich combines toasted bread with juicy turkey slices, melted cheese, fresh vegetables, and crispy bacon to create a balanced and satisfying meal suitable for lunch and quick dining."
  ],



  //==================================================
  // Services
  //==================================================

  services: [
    "Dine In",
    "Delivery",
    "Takeaway",
    "Fresh Daily Preparation",
    "Quick Serving",
    "Online Ordering",
    "Custom Ingredients"
  ],



  //==================================================
  // Details
  //==================================================

  details: {

    //==================================================
    // Gallery
    //==================================================

    gallery: [
      "/Images/Img Foods/photo20-food1.webp",
      "/Images/Img Foods/photo20-food2.webp",
      "/Images/Img Foods/photo20-food3.webp",
      "/Images/Img Foods/photo20-food4.webp",
      "/Images/Img Foods/photo20-food5.webp",
    ],



    //==================================================
    // Ingredients
    //==================================================

    ingredients: [
      "Toasted Bread",
      "Turkey Slices",
      "Cheddar Cheese",
      "Crispy Bacon",
      "Fresh Lettuce",
      "Fresh Tomatoes",
      "Mayonnaise",
      "Butter",
      "Black Pepper",
      "French Fries",
      "Pickles",
      "Sandwich Sauce"
    ],



    //==================================================
    // Highlights
    //==================================================

    highlights: [
      "Classic Club Sandwich Recipe",
      "Fresh Daily Preparation",
      "Perfect Layered Structure",
      "Premium Turkey Quality",
      "Golden Toasted Bread",
      "Balanced Meal Experience",
      "Restaurant Bestseller",
      "Served With Fries",
      "Fresh Vegetable Toppings",
      "Quick Lunch Option",
      "Hot Fresh Serving",
      "Custom Ingredient Options"
    ],



    //==================================================
    // Menu Info
    //==================================================

    menuInfo: {

      servingSize: "1 person",

      preparationTime: "10 min",

      calories: 690,

      spicyLevel: "None",

      cookingStyle: "Grilled & Toasted",

      mealType: "Lunch / Snack",

      dishWeight: "520 g",

      protein: "34 g",

      carbs: "58 g",

      fat: "30 g",

      allergens: [
        "Milk",
        "Gluten"
      ],

      servingTemperature: "Warm",

      recommendedDrink:
        "Fresh Orange Juice",
    },



    //==================================================
    // FAQ
    //==================================================

    faq: [

      {
        id: 1,

        question:
          "Can ingredients be customized?",

        answer:
          "Yes. You can remove or add ingredients before preparation.",

        defaultChecked: true,
      },

      {
        id: 2,

        question:
          "Does the meal include fries?",

        answer:
          "Yes. French fries are included with the standard serving.",

        defaultChecked: false,
      },

      {
        id: 3,

        question:
          "Can extra cheese be added?",

        answer:
          "Yes. Additional cheese options are available.",

        defaultChecked: false,
      },

      {
        id: 4,

        question:
          "Is it suitable as a full meal?",

        answer:
          "Yes. Club Sandwich is designed as a complete filling meal.",

        defaultChecked: false,
      },
    ],



    //==================================================
    // Reviews
    //==================================================

    reviews: [

      {
        id: 1,

        name: "Omar Hassan",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very filling and fresh. Bread texture was excellent.",

        likes: 15,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 2,

        name: "Sara Adel",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Great combination of ingredients and very satisfying meal.",

        likes: 9,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },
    ],
  },
},
  
];