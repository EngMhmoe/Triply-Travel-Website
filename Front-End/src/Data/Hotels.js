export const Hotels = [
{
    id: 1,
    slug: "royal-palace-resort",

    //==================================================
    // Card Data
    //==================================================

    title: "Royal Palace Resort",
    image: "/Images/Img Hotels/photo1.jpg",

        type: "Hotel",

    location: {
      address: "12 Avenue des Champs-Élysées",
      city: "Paris",
      country: "France",
    },

    category: "luxury",
    badge: "Featured",
    tag: "Excellent",
    rating: 5.0,
    reviewsCount: 4200,
    price: 650,
    oldPrice: 790,
    quantity: 1,
    views: 250,

    //==================================================
    // Booking Info
    //==================================================

    date: "Jun 10 - Jun 15",
    duration: 5,
    durationLabel: "Luxury Paris Vacation",
    language: "english",

    //==================================================
    // Description (5+ lines)
    //==================================================

    description: [
      "Royal Palace Resort is a world-class luxury destination located near the Eiffel Tower in the heart of Paris. The hotel combines modern architectural elegance with classic French luxury, offering guests premium suites, panoramic city views, and an unmatched level of comfort. Every detail inside the resort is designed to deliver a five-star hospitality experience including spa treatments, fine dining restaurants, and personalized concierge services that ensure an unforgettable stay in one of the most iconic cities in the world.",

      "Guests staying at Royal Palace Resort enjoy exclusive access to high-end facilities such as indoor swimming pools, wellness centers, fitness clubs, and luxury lounges. The hotel is strategically located close to major attractions like the Louvre Museum, Champs-Élysées, and Seine River cruises, making it the perfect choice for both leisure and romantic getaways. The resort focuses on privacy, comfort, and premium service, ensuring every guest experiences the true essence of Parisian luxury.",
    ],

    //==================================================
    // Facilities
    //==================================================

    facilities: [
      "wifi",
      "spa",
      "pool",
      "restaurant",
      "gym",
      "tv",
      "parking",
      "air_condition",
    ],

    //==================================================
    // Services
    //==================================================

    services: [
      "private dinner",
      "airport pickup",
      "room service",
      "spa treatment",
      "daily housekeeping",
    ],

    //==================================================
    // Attractions
    //==================================================

    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Arc de Triomphe",
      "Champs-Élysées",
    ],

    //==================================================
    // Policies
    //==================================================

    policies: [
      "No smoking",
      "No pets allowed",
      "Check-in starts at 2:00 PM",
      "ID required",
      "Cancellation allowed according to policy",
    ],

    //==================================================
    // Details
    //==================================================

    details: {
      gallery: [
        "/Images/Img Hotels/photo1-hotel1.webp",
        "/Images/Img Hotels/photo1-hotel2.webp",
        "/Images/Img Hotels/photo1-hotel3.webp",
        "/Images/Img Hotels/photo1-hotel4.webp",
        "/Images/Img Hotels/photo1-hotel5.webp",
      ],

      //New
      availableRooms : [
        {
          id: 1,
          image: "/Images/Img Hotels/photo1-hotel6.webp",
          title: "Premium Lake View Room",
          pricePerDay: 145,

          size: "15",
          beds: { count: 2, type: "Single"},
          bathroom: "Shower and Bathtub",
          wifi: "Free Wi-Fi",
          freeToiletries:  "Free Toiletries",
        },

        {
          id: 2,
          image: "/Images/Img Hotels/photo1-hotel7.webp",
          title: "Royal Executive Suite",
          pricePerDay: 240,

          size: "35 m²", 
          beds: { count: 1, type: "King"},
          bathroom: "Luxury Marble Bathroom", 
          wifi: "Free Wi-Fi",
          freeToiletries:  "Free Toiletries", 
        },

        {
          id: 3,
          image: "/Images/Img Hotels/photo1-hotel8.webp",
          title: "Panoramic Suite",
          pricePerDay: 320,
          size:  "45 m²", 
          beds: { count: 1, type: "King"},
          bathroom: "Jacuzzi Bathroom", 
          wifi: "Free Wi-Fi",
          freeToiletries: "Luxury Toiletries", 
        },

        {
          id: 4,
          image: "/Images/Img Hotels/photo1-hotel9.webp",
          title: "Family Luxury Room",
          pricePerDay: 210,
          size: "30 m²", 
          beds: { count: 3, type: "Single" },
          bathroom:  "Modern Bathroom",
          wifi: "Free Wi-Fi",
          freeToiletries:  "Free Toiletries", 
        },

        {
          id: 5,
          image: "/Images/Img Hotels/photo1-hotel10.webp",
          title: "Honeymoon Suite",
          pricePerDay: 400,
          size: "55 m²", 
          beds: { count: 1, type: "King" },
          bathroom: "Romantic Jacuzzi",
          wifi: "Free Wi-Fi", 
          freeToiletries:  "Premium Toiletries", 
        },
      ],

      amenities: [
        { name: "Free WiFi", icon: "wifi" },

        { name: "Swimming Pool", icon: "pool" },

        { name: "Luxury Spa", icon: "spa" },

        { name: "Gym", icon: "gym" },

        { name: "Private Parking", icon: "parking" },

        { name: "Restaurant", icon: "restaurant" },

        { name: "Airport Transfer", icon: "transfer" },

        { name: "Room Service", icon: "room_service" },

        { name: "Air Conditioning", icon: "air_condition" },

        { name: "Coffee Shop", icon: "coffee" },

        { name: "Television", icon: "tv" },

        { name: "Elevator", icon: "elevator" },

        { name: "Security Vault", icon: "security_vault" },

        { name: "Fire Place", icon: "fireplace" },

        { name: "Doorman", icon: "doorman" },

        { name: "Pets Allowed", icon: "pets" },

        { name: "Entertainment", icon: "party" },
      ],

      //
      faq: [
        {
          id: 1,
          question: "Is airport pickup available?",
          answer: "Yes, airport pickup is available 24/7.",
          defaultChecked: true,
        },
        {
          id: 2,
          question: "Can I cancel my booking?",
          answer: "Yes, cancellation depends on hotel policy.",
          defaultChecked: false,
        },
        {
          id: 3,
          question: "Is breakfast included?",
          answer: "Yes, breakfast is included in selected packages.",
          defaultChecked: false,
        },
      ],

      reviews: [
        {
          id: 1,
          name: "Sara Ali",
          avatar: "/Images/users/u2.jpg",
          time: new Date().toLocaleString(),
          rating: 5,
          description: "Amazing luxury experience in Paris.",
          likes: 8,
          dislikes: 0,
          hearts: 4,
          replies: [],
          userActions: { liked: false, disliked: false, loved: false },
        },
        {
          id: 2,
          name: "Omar Hassan",
          avatar: "/Images/users/u3.jpg",
          time: new Date().toLocaleString(),
          rating: 5,
          description: "Perfect service and location.",
          likes: 5,
          dislikes: 0,
          hearts: 2,
          replies: [],
          userActions: { liked: false, disliked: false, loved: false },
        },
        {
          id: 3,
          name: "Lina Mohamed",
          avatar: "/Images/users/u4.jpg",
          time: new Date().toLocaleString(),
          rating: 4,
          description: "Very clean and luxurious hotel.",
          likes: 3,
          dislikes: 0,
          hearts: 1,
          replies: [],
          userActions: { liked: false, disliked: false, loved: false },
        },
      ],

      //NEW
      hotelInfo: {
        maxRooms: 15,
        maxGuests: 5,
        hotelType: "Luxury Resort",
        hotelStars: 5,
        minimumStay: 3,
        extraPeople: "No Charge",
        securityDeposit: 150,
        safetySecurity: "High Security",
        cancellation: "Strict",
      },
    },
  },

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



{
  id: 2,
  slug: "blue-ocean-paradise",

  title: "Blue Ocean Paradise",

  type: "Hotel",

  image: "/Images/Img Hotels/photo2.avif",

  location: {
    address: "Private Island Resort",
    city: "Male",
    country: "Maldives",
  },

  category: "beach",
  badge: "Featured",
  tag: "Excellent",
  rating: 4.9,
  reviewsCount: 3100,
  price: 720,
  oldPrice: 850,
  quantity: 1,
  views: 250,

  date: "Jul 01 - Jul 06",
  duration: 5,
  durationLabel: "Beach Escape",
  language: "english",

description: [
  "Blue Ocean Paradise is an exclusive private island resort located in the Maldives, offering breathtaking views of crystal-clear waters and white sandy beaches. The resort is designed for ultimate relaxation and luxury, featuring private beachfront villas, overwater suites, and personalized hospitality services. Guests experience a perfect blend of tropical nature and modern comfort, with high-end interiors, ocean-facing rooms, and world-class amenities tailored for honeymooners and luxury travelers.",

  "The resort provides a wide range of premium experiences including snorkeling in coral reefs, private boat tours, sunset cruises, and luxury spa treatments. With its peaceful island environment and 24/7 dedicated service, Blue Ocean Paradise ensures complete privacy and relaxation. It is an ideal destination for couples, families, and travelers seeking a once-in-a-lifetime tropical escape surrounded by natural beauty and elite hospitality."
],

  facilities: [
    "wifi",
    "pool",
    "spa",
    "restaurant",
    "gym",
    "air_condition",
  ],

  services: [
    "boat tours",
    "breakfast buffet",
    "room service",
  ],

  attractions: [
    "Private Island",
    "Coral Reef",
    "Sunset Beach",
  ],

  policies: [
    "No pets",
    "No smoking",
    "Check-in 3:00 PM",
    "ID required",
  ],

  details: {
    gallery: [
      "/Images/Img Hotels/photo2-hotel1.webp",
      "/Images/Img Hotels/photo2-hotel2.webp",
      "/Images/Img Hotels/photo2-hotel3.webp",
      "/Images/Img Hotels/photo2-hotel4.webp",
      "/Images/Img Hotels/photo2-hotel5.webp",
    ],

availableRooms: [
  {
    id: 1,
    image: "/Images/Img Hotels/photo2-hotel6.webp",
    title: "Ocean Villa",
    pricePerDay: 200,

    size: "25 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Ocean View Bathroom",
    wifi: "Free Wi-Fi",
    freeToiletries: "Luxury Toiletries",
  },

  {
    id: 2,
    image: "/Images/Img Hotels/photo2-hotel7.webp",
    title: "Beachfront Suite",
    pricePerDay: 320,

    size: "40 m²",
    beds: { count: 2, type: "King" },
    bathroom: "Private Jacuzzi",
    wifi: "Free Wi-Fi",
    freeToiletries: "Premium Toiletries",
  },

  {
    id: 3,
    image: "/Images/Img Hotels/photo2-hotel8.webp",
    title: "Sunset Villa",
    pricePerDay: 410,

    size: "55 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Sunset View Bath",
    wifi: "Free Wi-Fi",
    freeToiletries: "Luxury Toiletries",
  },

  {
    id: 4,
    image: "/Images/Img Hotels/photo2-hotel9.webp",
    title: "Family Ocean Room",
    pricePerDay: 260,

    size: "35 m²",
    beds: { count: 3, type: "Single" },
    bathroom: "Shared Luxury Bathroom",
    wifi: "Free Wi-Fi",
    freeToiletries: "Free Toiletries",
  },

  {
    id: 5,
    image: "/Images/Img Hotels/photo2-hotel10.webp",
    title: "Honeymoon Water Villa",
    pricePerDay: 500,

    size: "70 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Romantic Ocean Jacuzzi",
    wifi: "Free Wi-Fi",
    freeToiletries: "Luxury Set",
  },
],

    amenities: [
      { name: "Free WiFi", icon: "wifi" },
      { name: "Swimming Pool", icon: "pool" },

      { name: "Luxury Spa", icon: "spa" },

      { name: "Gym", icon: "gym" },

      { name: "Private Parking", icon: "parking" },

      { name: "Restaurant", icon: "restaurant" },

      { name: "Airport Transfer", icon: "transfer" },

      { name: "Room Service", icon: "room_service" },

      { name: "Air Conditioning", icon: "air_condition" },

      { name: "Coffee Shop", icon: "coffee" },

      { name: "Television", icon: "tv" },

      { name: "Security Vault", icon: "vault" },

      { name: "Breakfast", icon: "breakfast" },

      { name: "Fire Place", icon: "fireplace" },

      { name: "Doorman", icon: "doorman" },

      { name: "Elevator", icon: "elevator" },

      { name: "Pets Allowed", icon: "pets" },

      { name: "Fitness Facility", icon: "gym" },

      { name: "Fridge", icon: "fridge" },

      { name: "Event Space", icon: "event" },
    ],

    faq: [
      {
        id: 1,
        question: "Is breakfast included?",
        answer: "Yes, depending on room type.",
        defaultChecked: true,
      },
      {
        id: 2,
        question: "Do you offer airport transfer?",
        answer: "Yes, free airport pickup is available.",
        defaultChecked: false,
      },
      {
        id: 3,
        question: "Can I cancel anytime?",
        answer: "Cancellation depends on policy terms.",
        defaultChecked: false,
      },
    ],

    reviews: [
      {
        id: 1,
        name: "Ahmed Ali",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Perfect beach experience!",
        likes: 10,
        dislikes: 0,
        hearts: 5,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
      {
        id: 2,
        name: "Maya John",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Amazing views and service.",
        likes: 6,
        dislikes: 0,
        hearts: 3,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
      {
        id: 3,
        name: "Sara Kim",
        avatar: "/Images/users/u3.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Best vacation ever!",
        likes: 8,
        dislikes: 0,
        hearts: 4,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
    ],

    hotelInfo: {
      maxRooms: 20,
      maxGuests: 6,
      hotelType: "Beach Resort",
      hotelStars: 5,
      minimumStay: 3,
      extraPeople: "No Charge",
      securityDeposit: 200,
      safetySecurity: "High Security",
      cancellation: "Strict",
    },
  },
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  id: 3,
  slug: "tokyo-sky-business-hotel",

  title: "Tokyo Sky Business Hotel",

  type: "Hotel",

  image: "/Images/Img Hotels/photo3.webp",

  location: {
    address: "Shinjuku Central Area",
    city: "Tokyo",
    country: "Japan",
  },

  category: "business",
  badge: "Featured",
  tag: "Very Good",
  rating: 4.5,
  reviewsCount: 1800,
  price: 260,
  oldPrice: 320,
  quantity: 1,
  views: 250,

  date: "Mar 10 - Mar 13",
  duration: 3,
  durationLabel: "Business Trip Tokyo",
  language: "japanese",

  description: [
    "Tokyo Sky Business Hotel is a modern high-rise business destination located in the heart of Shinjuku, Tokyo. It offers premium business-class rooms designed for productivity and comfort, featuring advanced workspaces, high-speed internet, and panoramic skyline views of one of the most dynamic cities in the world. The hotel blends Japanese minimal design with modern luxury, making it ideal for corporate travelers and entrepreneurs.",

    "Guests benefit from professional meeting rooms, 24/7 concierge service, and easy access to Tokyo's major business districts, shopping centers, and transportation hubs. Whether you're on a short business trip or an extended stay, Tokyo Sky Business Hotel ensures efficiency, comfort, and a seamless urban experience."
  ],

  facilities: [
    "wifi",
    "gym",
    "tv",
    "air_condition",
    "restaurant",
  ],

  services: [
    "meeting rooms",
    "24/7 support",
    "room service",
    "business lounge",
  ],

  attractions: [
    "Tokyo Tower",
    "Shibuya Crossing",
    "Shinjuku District",
    "Imperial Palace",
  ],

  policies: [
    "No smoking",
    "Business ID required",
    "Check-in 2:00 PM",
    "Cancellation policy applies",
  ],

  details: {
    gallery: [
      "/Images/Img Hotels/photo3-hotel1.webp",
      "/Images/Img Hotels/photo3-hotel2.webp",
      "/Images/Img Hotels/photo3-hotel3.webp",
      "/Images/Img Hotels/photo3-hotel4.webp",
      "/Images/Img Hotels/photo3-hotel5.webp",
    ],

availableRooms: [
  {
    id: 1,
    image: "/Images/Img Hotels/photo3-hotel6.webp",
    title: "Standard Business Room",
    pricePerDay: 120,

    size: "18 m²",
    beds: { count: 1, type: "Single" },
    bathroom: "Modern Shower Bathroom",
    wifi: "High-Speed WiFi",
    freeToiletries: "Business Kit",
  },

  {
    id: 2,
    image: "/Images/Img Hotels/photo3-hotel7.webp",
    title: "Executive City Room",
    pricePerDay: 180,

    size: "25 m²",
    beds: { count: 1, type: "Queen" },
    bathroom: "Luxury Bathroom",
    wifi: "High-Speed WiFi",
    freeToiletries: "Premium Toiletries",
  },

  {
    id: 3,
    image: "/Images/Img Hotels/photo3-hotel8.webp",
    title: "Skyline Suite",
    pricePerDay: 250,

    size: "35 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Panoramic Bathroom",
    wifi: "Ultra Fast WiFi",
    freeToiletries: "Luxury Set",
  },

  {
    id: 4,
    image: "/Images/Img Hotels/photo3-hotel9.webp",
    title: "Twin Business Room",
    pricePerDay: 150,

    size: "22 m²",
    beds: { count: 2, type: "Single" },
    bathroom: "Standard Bathroom",
    wifi: "Free WiFi",
    freeToiletries: "Basic Kit",
  },

  {
    id: 5,
    image: "/Images/Img Hotels/photo3-hotel10.webp",
    title: "Premium Executive Suite",
    pricePerDay: 310,

    size: "40 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Luxury Spa Bathroom",
    wifi: "Ultra Fast WiFi",
    freeToiletries: "Luxury Kit",
  },
],

    amenities: [
      { name: "Free WiFi", icon: "wifi" },

      { name: "Gym", icon: "gym" },
      
      { name: "Restaurant", icon: "restaurant" },

      { name: "Room Service", icon: "room_service" },

      { name: "Air Conditioning", icon: "air_condition" },

      { name: "Coffee Shop", icon: "coffee" },

      { name: "Television", icon: "tv" },

      { name: "Elevator", icon: "elevator" },

      { name: "Security Vault", icon: "security_vault" },

      { name: "Doorman", icon: "doorman" },
    ],

    faq: [
      {
        id: 1,
        question: "Does the hotel support business meetings?",
        answer: "Yes, fully equipped meeting rooms are available.",
        defaultChecked: true,
      },
      {
        id: 2,
        question: "Is WiFi fast enough for work?",
        answer: "Yes, high-speed business-grade internet is provided.",
        defaultChecked: false,
      },
      {
        id: 3,
        question: "Is early check-in available?",
        answer: "Yes, depending on availability.",
        defaultChecked: false,
      },
    ],

    reviews: [
      {
        id: 1,
        name: "Kenji Tanaka",
        avatar: "/Images/users/u5.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Perfect hotel for business trips in Tokyo.",
        likes: 6,
        dislikes: 0,
        hearts: 3,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },

      {
        id: 2,
        name: "John Smith",
        avatar: "/Images/users/u6.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Very clean and professional environment.",
        likes: 4,
        dislikes: 0,
        hearts: 2,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },

      {
        id: 3,
        name: "Sara Ahmed",
        avatar: "/Images/users/u7.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Great location and amazing service.",
        likes: 7,
        dislikes: 0,
        hearts: 4,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
    ],

    hotelInfo: {
      maxRooms: 12,
      maxGuests: 2,
      hotelType: "Business Hotel",
      hotelStars: 4,
      minimumStay: 1,
      extraPeople: "No Charge",
      securityDeposit: 100,
      safetySecurity: "High Security",
      cancellation: "Flexible",
    },
  },
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  id: 4,
  slug: "desert-moon-camp",

  //==================================================
  // Card Data
  //==================================================

  title: "Desert Moon Camp",

  type: "Hotel",

  image: "/Images/Img Hotels/photo4.avif",

  location: {
    address: "Sahara Desert Camp Zone",
    city: "Marrakesh",
    country: "Morocco",
  },

  category: "desert",
  badge: "Featured",
  tag: "Excellent",
  rating: 4.6,
  reviewsCount: 1800,
  price: 190,
  oldPrice: 240,
  quantity: 1,
  views: 250,

  //==================================================
  // Booking Info
  //==================================================

  date: "Sep 01 - Sep 06",
  duration: 5,
  durationLabel: "Desert Adventure Escape",
  language: "english",

  //==================================================
  // Description (5+ lines)
  //==================================================

  description: [
    "Desert Moon Camp is a premium desert retreat located in the heart of the Sahara, offering an authentic Bedouin experience combined with modern luxury comfort. Guests enjoy private desert tents, traditional design, and breathtaking views of golden dunes that stretch endlessly under the open sky.",
    
    "The camp provides a unique blend of adventure and relaxation with camel rides, desert safaris, sandboarding, and nightly cultural performances around the fire. Every stay is designed to create unforgettable memories in one of the most peaceful natural environments in the world."
  ],

  //==================================================
  // Facilities
  //==================================================

  facilities: [
    "wifi",
    "spa",
    "pool",
    "restaurant",
    "gym",
    "air_condition",
    "tv",
    "parking",
  ],

  //==================================================
  // Services
  //==================================================

  services: [
    "camel safari",
    "desert tour",
    "bonfire night",
    "room service",
    "pickup service",
  ],

  //==================================================
  // Attractions
  //==================================================

  attractions: [
    "Sahara Desert",
    "Camel Ride Experience",
    "Sunset Dunes",
    "Star Gazing",
    "Bedouin Camp",
  ],

  //==================================================
  // Policies
  //==================================================

  policies: [
    "No smoking inside tents",
    "No pets allowed",
    "Check-in starts at 3:00 PM",
    "ID required",
    "Cancellation depends on package",
  ],

  //==================================================
  // Details
  //==================================================

  details: {
    gallery: [
      "/Images/Img Hotels/photo4-hotel1.webp",
      "/Images/Img Hotels/photo4-hotel2.webp",
      "/Images/Img Hotels/photo4-hotel3.webp",
      "/Images/Img Hotels/photo4-hotel4.webp",
      "/Images/Img Hotels/photo4-hotel5.webp",
    ],

availableRooms: [
  {
    id: 1,
    image: "/Images/Img Hotels/photo4-hotel6.webp",
    title: "Standard Business Room",
    pricePerDay: 120,

    size: "18 m²",
    beds: { count: 1, type: "Single" },
    bathroom: "Modern Shower Bathroom",
    wifi: "High-Speed WiFi",
    freeToiletries: "Business Kit",
  },

  {
    id: 2,
    image: "/Images/Img Hotels/photo4-hotel7.webp",
    title: "Executive City Room",
    pricePerDay: 180,

    size: "25 m²",
    beds: { count: 1, type: "Queen" },
    bathroom: "Luxury Bathroom",
    wifi: "High-Speed WiFi",
    freeToiletries: "Premium Toiletries",
  },

  {
    id: 3,
    image: "/Images/Img Hotels/photo4-hotel8.webp",
    title: "Skyline Suite",
    pricePerDay: 250,

    size: "35 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Panoramic Bathroom",
    wifi: "Ultra Fast WiFi",
    freeToiletries: "Luxury Set",
  },

  {
    id: 4,
    image: "/Images/Img Hotels/photo4-hotel9.webp",
    title: "Twin Business Room",
    pricePerDay: 150,

    size: "22 m²",
    beds: { count: 2, type: "Single" },
    bathroom: "Standard Bathroom",
    wifi: "Free WiFi",
    freeToiletries: "Basic Kit",
  },

  {
    id: 5,
    image: "/Images/Img Hotels/photo4-hotel10.webp",
    title: "Premium Executive Suite",
    pricePerDay: 310,

    size: "40 m²",
    beds: { count: 1, type: "King" },
    bathroom: "Luxury Spa Bathroom",
    wifi: "Ultra Fast WiFi",
    freeToiletries: "Luxury Kit",
  },
],

    //==================================================
    // Amenities (20+)
    //==================================================

    amenities: [
      { name: "Free WiFi", icon: "wifi" },

      { name: "Swimming Pool", icon: "pool" },

      { name: "Luxury Spa", icon: "spa" },

      { name: "Gym", icon: "gym" },

      { name: "Private Parking", icon: "parking" },

      { name: "Restaurant", icon: "restaurant" },

      { name: "Airport Transfer", icon: "transfer" },

      { name: "Room Service", icon: "room_service" },

      { name: "Air Conditioning", icon: "air_condition" },
      
      { name: "Coffee", icon: "coffee" },

      { name: "Television", icon: "tv" },

      { name: "Doorman", icon: "doorman" },

      { name: "Elevator", icon: "elevator" },

      { name: "Security Vault", icon: "vault" },

      { name: "Breakfast", icon: "breakfast" },

      { name: "Fire Place", icon: "fireplace" },

      { name: "Pets Allowed", icon: "pets" },

      { name: "Fridge", icon: "fridge" },

      { name: "Event Space", icon: "event" },

      { name: "Entertainment", icon: "party" },
    ],

    //==================================================
    // FAQ (3+)
    //==================================================

    faq: [
      {
        id: 1,
        question: "Is desert camping safe?",
        answer: "Yes, the camp is fully secured with trained staff.",
        defaultChecked: true,
      },
      {
        id: 2,
        question: "Are camel rides included?",
        answer: "Yes, camel safari is part of most packages.",
        defaultChecked: false,
      },
      {
        id: 3,
        question: "Is food included?",
        answer: "Yes, traditional meals are served daily.",
        defaultChecked: false,
      },
    ],

    //==================================================
    // Reviews (3+)
    //==================================================

    reviews: [
      {
        id: 1,
        name: "Omar Khaled",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Amazing desert experience!",
        likes: 10,
        dislikes: 0,
        hearts: 5,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
      {
        id: 2,
        name: "Sarah Ahmed",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Beautiful and peaceful place.",
        likes: 6,
        dislikes: 0,
        hearts: 2,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
      {
        id: 3,
        name: "Ali Hassan",
        avatar: "/Images/users/u3.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Best desert trip ever!",
        likes: 8,
        dislikes: 0,
        hearts: 3,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false },
      },
    ],

    //==================================================
    // Hotel Info
    //==================================================

    hotelInfo: {
      maxRooms: 25,
      maxGuests: 6,
      hotelType: "Desert Camp",
      hotelStars: 4,
      minimumStay: 2,
      extraPeople: "No Charge",
      securityDeposit: 100,
      safetySecurity: "High Security",
      cancellation: "Moderate",
    },
  },
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
    id: 5,
    slug: "swiss-mountain-cabin",

    //==================================================
    // Card Data
    //==================================================

    title: "Swiss Mountain Cabin",

    image: "/Images/Img Hotels/photo5.webp",

    type: "Hotel",

    location: {
      address: "Alpine Valley Road",
      city: "Interlaken",
      country: "Switzerland",
    },

    category: "mountain",

    badge: "Featured",

    tag: "Excellent",

    rating: 4.9,

    reviewsCount: 3950,

    price: 540,

    oldPrice: 690,

    quantity: 1,

    views: 250,

    //==================================================
    // Booking
    //==================================================

    date: "Dec 10 - Dec 15",

    duration: 5,

    durationLabel: "Swiss Mountain Escape",

    language: "english",

    //==================================================
    // Description
    //==================================================

    description: [
      "Swiss Mountain Cabin offers a premium alpine retreat surrounded by breathtaking mountain landscapes, peaceful forests, and panoramic snowy views. Built with elegant wooden architecture and modern luxury interiors, the cabin creates a perfect balance between traditional Swiss atmosphere and world-class comfort. Guests can enjoy warm fireplaces, private terraces, luxury spa experiences, and direct access to scenic hiking routes and winter activities while experiencing exceptional hospitality and complete privacy.",

      "Every stay at Swiss Mountain Cabin is designed to provide relaxation and unforgettable memories through carefully curated services and premium facilities. Guests enjoy gourmet dining experiences, wellness spaces, outdoor lounges, and spacious suites designed for families and couples. Located near Switzerland’s most iconic mountain destinations, the cabin combines adventure, comfort, and luxury into a unique travel experience throughout every season.",
    ],

    //==================================================
    // Facilities
    //==================================================

    facilities: [
      "wifi",
      "spa",
      "restaurant",
      "gym",
      "parking",
      "tv",
      "fireplace",
      "air_condition",
    ],

    //==================================================
    // Services
    //==================================================

    services: [
      "mountain tours",
      "room service",
      "private dinner",
      "daily housekeeping",
      "airport pickup",
    ],

    //==================================================
    // Attractions
    //==================================================

    attractions: [
      "Swiss Alps",
      "Mountain Hiking",
      "Snow Valley",
      "Lake View",
      "Nature Trails",
    ],

    //==================================================
    // Policies
    //==================================================

    policies: [
      "No smoking",
      "Check-in starts at 2:00 PM",
      "Pets allowed in selected rooms",
      "Government ID required",
      "Flexible cancellation",
    ],

    //==================================================
    // Details
    //==================================================

    details: {
      gallery: [
        "/Images/Img Hotels/photo5-hotel1.webp",
        "/Images/Img Hotels/photo5-hotel2.webp",
        "/Images/Img Hotels/photo5-hotel3.webp",
        "/Images/Img Hotels/photo5-hotel4.webp",
        "/Images/Img Hotels/photo5-hotel5.webp",
      ],

      //==================================================
      // Available Rooms (NO ICONS)
      //==================================================

      availableRooms: [
        {
          id: 1,
          image: "/Images/Img Hotels/photo5-hotel6.webp",
          title: "Classic Mountain Room",
          pricePerDay: 180,

          size: "22 m²",

          beds: {
            count: 1,
            type: "Queen",
          },

          bathroom: "Modern Cabin Bathroom",

          wifi: "High-Speed WiFi",

          freeToiletries: "Luxury Cabin Kit",
        },

        {
          id: 2,
          image: "/Images/Img Hotels/photo5-hotel7.webp",
          title: "Panorama Suite",

          pricePerDay: 240,

          size: "30 m²",

          beds: {
            count: 1,
            type: "King",
          },

          bathroom: "Mountain View Bathroom",

          wifi: "Ultra Fast WiFi",

          freeToiletries: "Premium Set",
        },

        {
          id: 3,
          image: "/Images/Img Hotels/photo5-hotel8.webp",

          title: "Family Wooden Cabin",

          pricePerDay: 290,

          size: "38 m²",

          beds: {
            count: 3,
            type: "Single",
          },

          bathroom: "Luxury Family Bathroom",

          wifi: "Free WiFi",

          freeToiletries: "Family Kit",
        },

        {
          id: 4,

          image: "/Images/Img Hotels/photo5-hotel9.webp",

          title: "Alpine Executive Suite",

          pricePerDay: 340,

          size: "45 m²",

          beds: {
            count: 1,
            type: "King",
          },

          bathroom: "Premium Marble Bathroom",

          wifi: "Ultra Fast WiFi",

          freeToiletries: "Luxury Spa Set",
        },

        {
          id: 5,

          image: "/Images/Img Hotels/photo5-hotel10.webp",

          title: "Honeymoon Mountain Villa",

          pricePerDay: 420,

          size: "55 m²",

          beds: {
            count: 1,
            type: "King",
          },

          bathroom: "Private Jacuzzi Bathroom",

          wifi: "High-Speed WiFi",

          freeToiletries: "Exclusive Couple Package",
        },
      ],

      amenities: [
        { name: "Free WiFi", icon: "wifi" },

        { name: "Swimming Pool", icon: "pool" },

        { name: "Spa", icon: "spa" },
        
        { name: "Gym", icon: "gym" },
        
        { name: "Restaurant", icon: "restaurant" },

        { name: "Room Service", icon: "room_service" },

        { name: "Parking", icon: "parking" },

        { name: "Fire Place", icon: "fireplace" },

        { name: "Television", icon: "tv" },

        { name: "Coffee", icon: "coffee" },

        { name: "Pets Allowed", icon: "pets" },
        
        { name: "Doorman", icon: "doorman" },

        { name: "Security Vault", icon: "vault" },
        
        { name: "Event Space", icon: "party" },
      ],

      faq: [
        {
          id: 1,
          question: "Is skiing available nearby?",
          answer: "Yes, ski resorts are very close.",
          defaultChecked: true,
        },
        {
          id: 2,
          question: "Is heating included?",
          answer: "Yes, all cabins are fully heated.",
          defaultChecked: false,
        },
        {
          id: 3,
          question: "Can I cancel in winter season?",
          answer: "Depends on season policy.",
          defaultChecked: false,
        },
      ],

      reviews: [
        {
          id: 1,
          name: "Lucas Meyer",
          avatar: "/Images/users/u1.jpg",
          time: new Date().toLocaleString(),
          rating: 5,
          description: "Best mountain experience ever!",
          likes: 10,
          dislikes: 0,
          hearts: 6,
          replies: [],
          userActions: { liked: false, disliked: false, loved: false },
        },
        {
          id: 2,
          name: "Emma Brown",
          avatar: "/Images/users/u2.jpg",
          time: new Date().toLocaleString(),
          rating: 5,
          description: "So peaceful and beautiful.",
          likes: 7,
          dislikes: 0,
          hearts: 3,
          replies: [],
          userActions: { liked: false, disliked: false, loved: false },
        },
        {
          id: 3,
          name: "Ali Hassan",
          avatar: "/Images/users/u3.jpg",
          time: new Date().toLocaleString(),
          rating: 4,
          description: "Amazing cabin in the mountains.",
          likes: 6,
          dislikes: 0,
          hearts: 2,
          replies: [],
          userActions: { liked: false, disliked: false, loved: false },
        },
      ],

      hotelInfo: {
        maxRooms: 10,
        maxGuests: 6,
        hotelType: "Mountain Cabin",
        hotelStars: 5,
        minimumStay: 2,
        extraPeople: "Extra Charge",
        securityDeposit: 200,
        safetySecurity: "High Security",
        cancellation: "Strict",
      },
    },
  },

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  id: 6,
  slug: "green-forest-eco-lodge",

  //==================================================
  // Card Data
  //==================================================

  title: "Green Forest Eco Lodge",

  type: "Hotel",

  image: "/Images/Img Hotels/photo6.webp",

  location: {
    address: "Ubud Forest Road",
    city: "Bali",
    country: "Indonesia",
  },

  category: "nature",

  badge: "Featured",

  tag: "Excellent",

  rating: 4.7,

  reviewsCount: 1550,

  price: 290,

  oldPrice: 350,

  quantity: 1,

  views: 250,

  //==================================================
  // Booking
  //==================================================

  date: "May 05 - May 10",

  duration: 5,

  durationLabel: "Nature Retreat",

  language: "english",

  //==================================================
  // Description
  //==================================================

  description: [
    "Green Forest Eco Lodge is a peaceful luxury escape located in the heart of Bali’s tropical forests. Designed with sustainable architecture and natural materials, the lodge provides a unique experience surrounded by waterfalls, greenery, and fresh mountain air. Every room offers scenic forest views while combining comfort, privacy, and eco-friendly living.",

    "Guests enjoy wellness activities including yoga sessions, nature walks, spa experiences, and local cultural tours. The lodge is ideal for travelers seeking relaxation, adventure, and an immersive connection with nature while enjoying premium hospitality and modern facilities."
  ],

  //==================================================
  // Facilities
  //==================================================

  facilities: [
    "wifi",
    "pool",
    "spa",
    "restaurant",
    "gym",
    "parking",
    "tv",
    "air_condition",
  ],

  //==================================================
  // Services
  //==================================================

  services: [
    "yoga classes",
    "spa therapy",
    "airport pickup",
    "daily housekeeping",
    "room service",
  ],

  //==================================================
  // Attractions
  //==================================================

  attractions: [
    "Rice Fields",
    "Forest Trails",
    "Waterfalls",
    "Nature Walks",
    "Bali Temple Tours",
  ],

  //==================================================
  // Policies
  //==================================================

  policies: [
    "No smoking",
    "Check-in starts at 2:00 PM",
    "No loud activities after 10 PM",
    "Government ID required",
    "Flexible cancellation",
  ],

  //==================================================
  // Details
  //==================================================

  details: {
    gallery: [
      "/Images/Img Hotels/photo6-hotel1.webp",
      "/Images/Img Hotels/photo6-hotel2.webp",
      "/Images/Img Hotels/photo6-hotel3.webp",
      "/Images/Img Hotels/photo6-hotel4.webp",
      "/Images/Img Hotels/photo6-hotel5.webp",
    ],

    availableRooms: [
      {
        id: 1,
        image: "/Images/Img Hotels/photo6-hotel6.webp",

        title: "Forest View Room",

        pricePerDay: 160,

        size: "20 m²",

        beds: {
          count: 1,
          type: "Queen",
        },

        bathroom: "Nature Style Bathroom",

        wifi: "Free WiFi",

        freeToiletries: "Organic Toiletries",
      },

      {
        id: 2,
        image: "/Images/Img Hotels/photo6-hotel7.webp",

        title: "Eco Garden Suite",

        pricePerDay: 220,

        size: "28 m²",

        beds: {
          count: 1,
          type: "King",
        },

        bathroom: "Luxury Wooden Bathroom",

        wifi: "High-Speed WiFi",

        freeToiletries: "Premium Eco Kit",
      },

      {
        id: 3,
        image: "/Images/Img Hotels/photo6-hotel8.webp",

        title: "River Side Cabin",

        pricePerDay: 280,

        size: "36 m²",

        beds: {
          count: 2,
          type: "Queen",
        },

        bathroom: "Private River Bathroom",

        wifi: "Ultra Fast WiFi",

        freeToiletries: "Luxury Nature Set",
      },

      {
        id: 4,
        image: "/Images/Img Hotels/photo6-hotel9.webp",

        title: "Family Jungle Lodge",

        pricePerDay: 330,

        size: "45 m²",

        beds: {
          count: 3,
          type: "Single",
        },

        bathroom: "Family Eco Bathroom",

        wifi: "Free WiFi",

        freeToiletries: "Family Essentials Kit",
      },

      {
        id: 5,
        image: "/Images/Img Hotels/photo6-hotel10.webp",

        title: "Private Forest Villa",

        pricePerDay: 420,

        size: "60 m²",

        beds: {
          count: 1,
          type: "King",
        },

        bathroom: "Luxury Spa Bathroom",

        wifi: "Ultra Fast WiFi",

        freeToiletries: "Exclusive Wellness Package",
      },
    ],

    amenities: [
      { name: "Free WiFi", icon: "wifi" },

      { name: "Swimming Pool", icon: "pool" },

      { name: "Spa", icon: "spa" },

      { name: "Restaurant", icon: "restaurant" },

      { name: "Gym", icon: "gym" },

      { name: "Parking", icon: "parking" },

      { name: "Room Service", icon: "room_service" },

      { name: "Coffee", icon: "coffee" },

      { name: "Television", icon: "tv" },

      { name: "Airport Transfer", icon: "transfer" },

      { name: "Doorman", icon: "doorman" },
      
      { name: "Security Vault", icon: "vault" },
    ],

    faq: [
      {
        id: 1,
        question: "Are yoga sessions included?",
        answer: "Yes, daily yoga sessions are available.",
        defaultChecked: true,
      },

      {
        id: 2,
        question: "Is airport pickup available?",
        answer: "Yes, pickup service can be arranged.",
        defaultChecked: false,
      },

      {
        id: 3,
        question: "Are eco activities available?",
        answer: "Yes, multiple nature experiences are included.",
        defaultChecked: false,
      },
    ],

    reviews: [
      {
        id: 1,
        name: "Emma Wilson",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Peaceful place surrounded by nature.",
        likes: 8,
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
        name: "David Lee",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Perfect eco experience in Bali.",
        likes: 6,
        dislikes: 0,
        hearts: 3,
        replies: [],
        userActions: {
          liked: false,
          disliked: false,
          loved: false,
        },
      },

      {
        id: 3,
        name: "Sara Ahmed",
        avatar: "/Images/users/u3.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Beautiful atmosphere and great staff.",
        likes: 5,
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

    hotelInfo: {
      maxRooms: 18,
      maxGuests: 5,
      hotelType: "Eco Lodge",
      hotelStars: 5,
      minimumStay: 2,
      extraPeople: "Extra Charge",
      securityDeposit: 150,
      safetySecurity: "High Security",
      cancellation: "Flexible",
    },
  },
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 7,
slug: "venice-romantic-suites",

//==================================================
// Card Data
//==================================================

title: "Venice Romantic Suites",

type: "Hotel",

image: "/Images/Img Hotels/photo7.webp",

location: {
address: "Grand Canal Waterfront",
city: "Venice",
country: "Italy",
},

category: "romantic",

badge: "Featured",

tag: "Excellent",

rating: 5.0,

reviewsCount: 2700,

price: 510,

oldPrice: 620,

quantity: 1,

views: 250,

//==================================================
// Booking
//==================================================

date: "Apr 10 - Apr 15",

duration: 5,

durationLabel: "Romantic Honeymoon",

language: "italian",

//==================================================
// Description
//==================================================

description: [
"Venice Romantic Suites delivers an unforgettable luxury experience directly along the famous canals of Venice. Designed specifically for couples and honeymoon travelers, the hotel combines elegant Venetian architecture with modern comfort and premium hospitality. Guests enjoy beautifully decorated suites with private balconies, panoramic canal views, handcrafted interiors, and peaceful spaces that create a romantic atmosphere throughout every moment of the stay.",


"The hotel offers exclusive experiences including candlelight dinners, private gondola rides, sunset cruises, and personalized concierge services. Located within walking distance of Venice's iconic attractions, guests can easily explore historic streets, luxury shopping areas, and hidden local experiences before returning to a peaceful and luxurious romantic retreat."


],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"spa",
"restaurant",
"air_condition",
"tv",
"coffee",
"elevator",
"room_service",
],

//==================================================
// Services
//==================================================

services: [
"private dinner",
"gondola experience",
"room service",
"breakfast in room",
"daily housekeeping",
],

//==================================================
// Attractions
//==================================================

attractions: [
"Grand Canal",
"Rialto Bridge",
"St Mark's Square",
"Venice Gondola Tour",
"Historic City Center",
],

//==================================================
// Policies
//==================================================

policies: [
"Adults only",
"No smoking",
"Check-in starts at 2:00 PM",
"Government ID required",
"Cancellation depends on selected package",
],

//==================================================
// Details
//==================================================

details: {
gallery: [
"/Images/Img Hotels/photo7-hotel1.webp",
"/Images/Img Hotels/photo7-hotel2.webp",
"/Images/Img Hotels/photo7-hotel3.webp",
"/Images/Img Hotels/photo7-hotel4.webp",
"/Images/Img Hotels/photo7-hotel5.webp",
],


//==================================================
// Available Rooms
//==================================================

availableRooms: [
  {
    id: 1,
    image: "/Images/Img Hotels/photo7-hotel6.webp",

    title: "Classic Romantic Room",

    pricePerDay: 230,

    size: "24 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Elegant Marble Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Premium Couple Kit",
  },

  {
    id: 2,
    image: "/Images/Img Hotels/photo7-hotel7.webp",

    title: "Grand Canal Suite",

    pricePerDay: 320,

    size: "34 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Luxury Canal View Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Toiletries Set",
  },

  {
    id: 3,
    image: "/Images/Img Hotels/photo7-hotel8.webp",

    title: "Sunset Balcony Suite",

    pricePerDay: 410,

    size: "42 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Spa Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Exclusive Romantic Package",
  },

  {
    id: 4,
    image: "/Images/Img Hotels/photo7-hotel9.webp",

    title: "Luxury Honeymoon Suite",

    pricePerDay: 540,

    size: "55 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Jacuzzi and Marble Bath",

    wifi: "High-Speed WiFi",

    freeToiletries: "Luxury Honeymoon Collection",
  },

  {
    id: 5,
    image: "/Images/Img Hotels/photo7-hotel10.webp",

    title: "Royal Canal Penthouse",

    pricePerDay: 690,

    size: "70 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Premium Private Jacuzzi",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "VIP Romantic Experience",
  },
],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Spa", icon: "spa" },

  { name: "Room Service", icon: "room_service" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Television", icon: "tv" },

  { name: "Elevator", icon: "elevator" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Breakfast", icon: "breakfast" },

  { name: "Private Dinner", icon: "restaurant" },

  { name: "Luxury Lounge", icon: "party" },

  { name: "Security Vault", icon: "vault" },

  { name: "Doorman", icon: "doorman" },

  { name: "Air Conditioning", icon: "air_condition" },
],

//==================================================
// FAQ (واقعي + أطول)
//==================================================

faq: [
  {
    id: 1,

    question: "Does the hotel arrange private gondola rides for couples?",

    answer:
      "Yes. Guests can reserve private gondola experiences directly through the hotel concierge. Packages include sunset tours, romantic decorations, photography options, and special dinner experiences depending on availability and booking period.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Is breakfast included and can it be served inside the room?",

    answer:
      "Breakfast is included in selected packages and can be served privately inside the suite. Guests may choose from Italian breakfast selections, fresh pastries, coffee service, and special romantic room arrangements upon request.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "How close is the hotel to Venice attractions and transportation?",

    answer:
      "The hotel is located near major Venice attractions including St Mark's Square and Grand Canal access points. Water taxis, walking routes, restaurants, and shopping streets are available within a short distance from the property.",

    defaultChecked: false,
  },
],

reviews: [
  {
    id: 1,
    name: "Marco Rossi",
    avatar: "/Images/users/u1.jpg",
    time: new Date().toLocaleString(),
    rating: 5,
    description:
      "One of the most romantic hotels we have ever visited.",
    likes: 10,
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
    name: "Sophia Miller",
    avatar: "/Images/users/u2.jpg",
    time: new Date().toLocaleString(),
    rating: 5,
    description:
      "Beautiful rooms and unforgettable canal views.",
    likes: 8,
    dislikes: 0,
    hearts: 4,
    replies: [],
    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  },

  {
    id: 3,
    name: "Ahmed Adel",
    avatar: "/Images/users/u3.jpg",
    time: new Date().toLocaleString(),
    rating: 5,
    description:
      "Perfect honeymoon destination and amazing service.",
    likes: 6,
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

hotelInfo: {
  maxRooms: 14,
  maxGuests: 2,
  hotelType: "Romantic Suites",
  hotelStars: 5,
  minimumStay: 2,
  extraPeople: "Not Allowed",
  securityDeposit: 180,
  safetySecurity: "High Security",
  cancellation: "Moderate",
},
}
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 8,

slug: "cairo-nile-hotel",

//==================================================
// Card Data
//==================================================

title: "Cairo Nile Hotel",

type: "Hotel",

image: "/Images/Img Hotels/photo8.webp",

location: {
address: "Corniche El Nile",
city: "Cairo",
country: "Egypt",
},

category: "city",

badge: "Featured",

tag: "Very Good",

rating: 4.3,

reviewsCount: 1200,

price: 180,

oldPrice: 240,

quantity: 1,

views: 250,

//==================================================
// Booking
//==================================================

date: "Oct 10 - Oct 15",

duration: 5,

durationLabel: "Cairo Discovery",

language: "arabic",

//==================================================
// Description
//==================================================

description: [
"Cairo Nile Hotel offers a modern city experience combined with authentic Egyptian hospitality directly overlooking the Nile River. Designed for travelers who want comfort, convenience, and panoramic city scenery, the hotel provides elegant rooms, relaxing lounges, and premium services suitable for families, business visitors, and tourists exploring Cairo’s historic landmarks.",


"Guests enjoy direct access to central Cairo attractions while experiencing comfortable accommodations and high-quality service. From rooftop dining and city skyline views to guided experiences and transportation assistance, every stay is planned to combine relaxation with discovering the cultural energy of one of the world's most historic capitals."


],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"coffee",
"air_condition",
"tv",
"parking",
"gym",
"room_service",
],

//==================================================
// Services
//==================================================

services: [
"airport pickup",
"guided tours",
"breakfast buffet",
"room service",
"daily housekeeping",
],

//==================================================
// Attractions
//==================================================

attractions: [
"Pyramids",
"Nile River",
"Egyptian Museum",
"Khan El Khalili",
"Cairo Tower",
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking inside rooms",
"Check-in starts at 2:00 PM",
"Government ID required",
"Pets are not allowed",
"Cancellation depends on selected package",
],

//==================================================
// Details
//==================================================

details: {
gallery: [
"/Images/Img Hotels/photo8-hotel1.webp",
"/Images/Img Hotels/photo8-hotel2.webp",
"/Images/Img Hotels/photo8-hotel3.webp",
"/Images/Img Hotels/photo8-hotel4.webp",
"/Images/Img Hotels/photo8-hotel5.webp",
],


availableRooms: [
  {
    id: 1,

    image: "/Images/Img Hotels/photo8-hotel6.webp",

    title: "Classic Nile Room",

    pricePerDay: 120,

    size: "22 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Modern City Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Essential Travel Kit",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo8-hotel7.webp",

    title: "Deluxe River View Room",

    pricePerDay: 180,

    size: "30 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Luxury Marble Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Premium Toiletries",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo8-hotel8.webp",

    title: "Family City Suite",

    pricePerDay: 230,

    size: "40 m²",

    beds: {
      count: 3,
      type: "Single",
    },

    bathroom: "Large Family Bathroom",

    wifi: "Free WiFi",

    freeToiletries: "Family Care Package",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo8-hotel9.webp",

    title: "Executive Nile Suite",

    pricePerDay: 290,

    size: "48 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Premium River View Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Executive Luxury Kit",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo8-hotel10.webp",

    title: "Royal Panorama Suite",

    pricePerDay: 390,

    size: "60 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Jacuzzi Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Royal Premium Collection",
  },
],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Parking", icon: "parking" },

  { name: "Gym", icon: "gym" },

  { name: "Television", icon: "tv" },

  { name: "Room Service", icon: "room_service" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Elevator", icon: "elevator" },

  { name: "Breakfast", icon: "breakfast" },
  
  { name: "Security Vault", icon: "vault" },

  { name: "Business Lounge", icon: "business" },

  { name: "Air Conditioning", icon: "air_condition" },
  
  { name: "Event Space", icon: "event" },
],

faq: [
  {
    id: 1,

    question: "Do all rooms have a direct Nile River view?",

    answer:
      "Not all room categories include direct Nile views. Guests who prefer river-facing accommodation should select Deluxe River View Rooms or Executive Suites during booking. Availability depends on season and reservation timing.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Can the hotel arrange transportation to the Pyramids and tourist attractions?",

    answer:
      "Yes. The hotel concierge can organize transportation services and guided tours to major attractions including the Pyramids, Egyptian Museum, and Old Cairo. Private vehicles and group experiences are available depending on guest preference.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Is breakfast included with all reservations?",

    answer:
      "Breakfast availability depends on the selected package. Most room options include a buffet breakfast with local and international dishes, while premium suites may include private breakfast service.",

    defaultChecked: false,
  },
],

reviews: [
  {
    id: 1,

    name: "Mohamed Hassan",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Amazing Nile view and excellent service during the entire stay.",

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

  {
    id: 2,

    name: "Sarah Johnson",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 4,

    description:
      "Perfect location for exploring Cairo and comfortable rooms.",

    likes: 6,

    dislikes: 0,

    hearts: 2,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  },

  {
    id: 3,

    name: "Omar Adel",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Very clean hotel and the breakfast was excellent.",

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

hotelInfo: {
  maxRooms: 18,
  maxGuests: 5,
  hotelType: "City Hotel",
  hotelStars: 4,
  minimumStay: 2,
  extraPeople: "Extra Charge",
  securityDeposit: 120,
  safetySecurity: "High Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 9,

slug: "barcelona-coast-stay",

//==================================================
// Card Data
//==================================================

title: "Barcelona Coast Stay",

type: "Hotel",

image: "/Images/Img Hotels/photo9.webp",

location: {
address: "Barceloneta Beach District",
city: "Barcelona",
country: "Spain",
},

category: "beach",

badge: "Featured",

tag: "Very Good",

rating: 4.4,

reviewsCount: 1650,

price: 250,

oldPrice: 320,

quantity: 1,

views: 250,

//==================================================
// Booking
//==================================================

date: "Aug 20 - Aug 25",

duration: 5,

durationLabel: "Summer Beach Vacation",

language: "spanish",

//==================================================
// Description
//==================================================

description: [
"Barcelona Coast Stay offers a modern seaside experience located near the famous beaches of Barcelona. Designed for travelers seeking relaxation with easy access to city life, the hotel combines contemporary architecture, elegant interiors, and premium comfort. Guests enjoy bright rooms, relaxing terraces, and beautiful coastal views while staying close to the city's vibrant atmosphere.",


"The hotel creates a balanced experience between beach relaxation and urban exploration. Visitors can spend their day enjoying the Mediterranean coast, local restaurants, shopping streets, and nightlife before returning to peaceful accommodations and personalized hospitality services."


],

//==================================================
// Facilities
//==================================================

facilities: [
  "wifi",
  "restaurant",
  "coffee",
  "air_condition",
  "parking",
  "tv",
"pool",
"gym",
],

//==================================================
// Services
//==================================================

services: [
"bike rental",
"breakfast buffet",
"airport transfer",
"room service",
"daily housekeeping",
],

//==================================================
// Attractions
//==================================================

attractions: [
"Barcelona Beach",
"La Rambla",
"Sagrada Familia",
"Port Vell",
"Gothic Quarter",
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 2:00 PM",
"Government ID required",
"Pets not allowed",
"Flexible cancellation policy",
],

details: {


gallery: [
  "/Images/Img Hotels/photo9-hotel1.webp",
  "/Images/Img Hotels/photo9-hotel2.webp",
  "/Images/Img Hotels/photo9-hotel3.webp",
  "/Images/Img Hotels/photo9-hotel4.webp",
  "/Images/Img Hotels/photo9-hotel5.webp",
],

availableRooms: [

  {
    id: 1,

    image: "/Images/Img Hotels/photo9-hotel6.webp",

    title: "Classic Coast Room",

    pricePerDay: 150,

    size: "22 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Modern Coastal Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Standard Travel Kit",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo9-hotel7.webp",

    title: "Sea Breeze Suite",

    pricePerDay: 220,

    size: "30 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Premium Marble Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Toiletries",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo9-hotel8.webp",

    title: "Family Coast Apartment",

    pricePerDay: 290,

    size: "40 m²",

    beds: {
      count: 3,
      type: "Single",
    },

    bathroom: "Large Family Bathroom",

    wifi: "Free WiFi",

    freeToiletries: "Family Package",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo9-hotel9.webp",

    title: "Premium Ocean Suite",

    pricePerDay: 360,

    size: "52 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Spa Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Premium Luxury Set",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo9-hotel10.webp",

    title: "Mediterranean Penthouse",

    pricePerDay: 470,

    size: "65 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Jacuzzi Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "VIP Collection",
  },
],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Swimming Pool", icon: "pool" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Gym", icon: "gym" },

  { name: "Parking", icon: "parking" },

  { name: "Television", icon: "tv" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Breakfast", icon: "breakfast" },

  { name: "Room Service", icon: "room_service" },

  { name: "Elevator", icon: "elevator" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Security Vault", icon: "vault" },

  { name: "Air Conditioning", icon: "air_condition" },
  
  { name: "Event Space", icon: "event" },
],

faq: [
  {
    id: 1,

    question: "How far is the hotel from Barcelona Beach?",

    answer:
      "The hotel is located within a short walking distance from Barcelona Beach, allowing guests to access the beach area easily throughout the day without transportation.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Are beach equipment and towels provided?",

    answer:
      "Yes. Guests may request beach towels and selected beach equipment through reception depending on availability during the season.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Does the hotel offer transportation to city attractions?",

    answer:
      "Transportation arrangements and local recommendations can be organized through the concierge service including guided city experiences and airport transfers.",

    defaultChecked: false,
  },
],

reviews: [

  {
    id: 1,

    name: "Carlos Martin",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Amazing beach location and excellent hospitality.",

    likes: 8,

    dislikes: 0,

    hearts: 4,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  },

  {
    id: 2,

    name: "Lina Ahmed",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 4,

    description:
      "Very comfortable rooms and beautiful sea atmosphere.",

    likes: 6,

    dislikes: 0,

    hearts: 2,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  },

  {
    id: 3,

    name: "Emma Wilson",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Perfect hotel for a summer holiday in Barcelona.",

    likes: 9,

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

hotelInfo: {
  maxRooms: 20,
  maxGuests: 5,
  hotelType: "Beach Hotel",
  hotelStars: 4,
  minimumStay: 2,
  extraPeople: "Extra Charge",
  securityDeposit: 140,
  safetySecurity: "High Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 10,

slug: "iceland-aurora-retreat",

title: "Iceland Aurora Retreat",

type: "Hotel",

image: "/Images/Img Hotels/photo10.webp",

location: {
address: "Northern Coast Route",
city: "Reykjavik",
country: "Iceland",
},

category: "nature",

badge: "Featured",

tag: "Excellent",

rating: 4.9,

reviewsCount: 980,

price: 580,

oldPrice: 690,

quantity: 1,

views: 3815,

//==================================================
// Booking
//==================================================

date: "Jan 05 - Jan 10",

duration: 5,

durationLabel: "Northern Lights Tour",

language: "english",

//==================================================
// Description
//==================================================

description: [
"Iceland Aurora Retreat offers a unique luxury escape surrounded by volcanic landscapes, geothermal experiences, and breathtaking northern skies. Designed for travelers searching for quiet nature and premium comfort, the resort combines modern Nordic architecture with panoramic views that create an unforgettable atmosphere throughout every season.",


"Guests can enjoy direct access to aurora observation areas, private outdoor hot pools, guided exploration experiences, and peaceful wellness spaces. Whether visiting to experience Icelandic winter landscapes or simply relax away from busy city life, the retreat delivers a premium nature-focused stay with exceptional hospitality."


],

facilities: [
"wifi",
"restaurant",
"spa",
"air_condition",
"parking",
"pool",
"gym",
"fireplace",
],

services: [
"aurora tours",
"hot springs",
"private transport",
"room service",
"daily housekeeping"
],

attractions: [
"Northern Lights",
"Blue Lagoon",
"Volcanic Valley",
"Snow Mountains",
"Ice Caves"
],

policies: [
"No smoking",
"Check-in starts at 3:00 PM",
"Government ID required",
"Quiet hours after 10 PM",
"Flexible cancellation"
],

details: {


gallery: [
  "/Images/Img Hotels/photo10-hotel1.webp",
  "/Images/Img Hotels/photo10-hotel2.webp",
  "/Images/Img Hotels/photo10-hotel3.webp",
  "/Images/Img Hotels/photo10-hotel4.webp",
  "/Images/Img Hotels/photo10-hotel5.webp",
],

availableRooms: [

  {
    id: 1,

    image: "/Images/Img Hotels/photo10-hotel6.webp",

    title: "Northern Classic Room",

    pricePerDay: 230,

    size: "25 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Modern Nordic Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Essential Arctic Kit",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo10-hotel7.webp",

    title: "Aurora View Suite",

    pricePerDay: 340,

    size: "36 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Premium Heated Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Winter Collection",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo10-hotel8.webp",

    title: "Volcano Family Cabin",

    pricePerDay: 420,

    size: "48 m²",

    beds: {
      count: 3,
      type: "Single",
    },

    bathroom: "Large Family Bathroom",

    wifi: "Free WiFi",

    freeToiletries: "Family Travel Kit",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo10-hotel9.webp",

    title: "Arctic Executive Suite",

    pricePerDay: 520,

    size: "58 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Thermal Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Premium Spa Collection",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo10-hotel10.webp",

    title: "Aurora Panorama Villa",

    pricePerDay: 690,

    size: "72 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Outdoor Jacuzzi",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Exclusive Luxury Package",
  }
],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Spa", icon: "spa" },

  { name: "Swimming Pool", icon: "pool" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Gym", icon: "gym" },

  { name: "Fire Place", icon: "fireplace" },

  { name: "Parking", icon: "parking" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Room Service", icon: "room_service" },

  { name: "Television", icon: "tv" },

  { name: "Security Vault", icon: "vault" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Elevator", icon: "elevator" }
],

faq: [

  {
    id: 1,

    question: "Can guests really see the Northern Lights from the resort?",

    answer:
      "Yes. During the northern lights season and depending on weather conditions, guests can enjoy aurora viewing directly from dedicated outdoor observation areas inside the resort without leaving the property.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Are thermal pools available all year round?",

    answer:
      "Yes. The heated outdoor thermal facilities operate throughout the year and are especially popular during winter because of the contrast between cold weather and warm geothermal water.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Does the hotel organize nature and volcano tours?",

    answer:
      "Yes. Guests may reserve guided experiences including glacier visits, volcano exploration, ice cave trips, and local cultural experiences through the hotel concierge.",

    defaultChecked: false,
  }
],

reviews: [

  {
    id: 1,

    name: "Emily Carter",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Watching the aurora from the resort was unforgettable.",

    likes: 15,

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

    name: "Ahmed Adel",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "One of the most peaceful hotels I have ever visited.",

    likes: 10,

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
    id: 3,

    name: "Daniel Moore",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 4,

    description:
      "Excellent experience and amazing winter scenery.",

    likes: 7,

    dislikes: 0,

    hearts: 4,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  }
],

hotelInfo: {
  maxRooms: 12,
  maxGuests: 6,
  hotelType: "Nature Resort",
  hotelStars: 5,
  minimumStay: 2,
  extraPeople: "Extra Charge",
  securityDeposit: 250,
  safetySecurity: "High Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 11,

slug: "santorini-cliff-resort",

//==================================================
// Card Data
//==================================================

title: "Santorini Cliff Resort",

type: "Hotel",

image: "/Images/Img Hotels/photo11.webp",

location: {
address: "Cliffside Sunset Road",
city: "Santorini",
country: "Greece",
},

category: "romantic",

badge: "Featured",

tag: "Excellent",

rating: 4.9,

reviewsCount: 2900,

price: 530,

oldPrice: 650,

quantity: 1,

views: 4628,

//==================================================
// Booking
//==================================================

date: "Jun 01 - Jun 06",

duration: 5,

durationLabel: "Santorini Romantic Escape",

language: "english",

//==================================================
// Description
//==================================================

description: [
"Santorini Cliff Resort is an exclusive luxury destination built directly above the iconic cliffs of Santorini, offering unforgettable panoramic views over the Aegean Sea. Designed for couples and travelers seeking premium relaxation, the resort combines elegant Cycladic architecture, private terraces, infinity pools, and exceptional hospitality in one of the most beautiful destinations in the Mediterranean.",


"Guests enjoy peaceful mornings overlooking the sea, world-class dining experiences, private sunset lounges, and direct access to Santorini's famous attractions. Every detail inside the resort focuses on creating memorable moments through comfort, privacy, and luxury experiences designed especially for romantic escapes and premium vacations."


],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"air_condition",
"parking",
"pool",
"spa",
"tv",

"room_service"
],

//==================================================
// Services
//==================================================

services: [
"private dinner",
"boat cruise",
"airport transfer",
"daily housekeeping",
"room service"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Blue Domes",
"Santorini Cliffs",
"Sunset Point",
"Volcanic Beach",
"Oia Village"
],

//==================================================
// Policies
//==================================================

policies: [
"Adults only",
"No smoking",
"Check-in starts at 3:00 PM",
"Government ID required",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {


gallery: [
  "/Images/Img Hotels/photo11-hotel1.webp",
  "/Images/Img Hotels/photo11-hotel2.webp",
  "/Images/Img Hotels/photo11-hotel3.webp",
  "/Images/Img Hotels/photo11-hotel4.webp",
  "/Images/Img Hotels/photo11-hotel5.webp"
],

availableRooms: [

  {
    id: 1,

    image: "/Images/Img Hotels/photo11-hotel6.webp",

    title: "Classic Sunset Room",

    pricePerDay: 280,

    size: "24 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Modern Sea View Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Premium Travel Kit",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo11-hotel7.webp",

    title: "Romantic Horizon Suite",

    pricePerDay: 390,

    size: "36 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Luxury Marble Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Toiletries",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo11-hotel8.webp",

    title: "Infinity Pool Suite",

    pricePerDay: 490,

    size: "48 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Spa Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Spa Collection",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo11-hotel9.webp",

    title: "Premium Cliff Villa",

    pricePerDay: 620,

    size: "58 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Jacuzzi Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Exclusive Resort Package",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo11-hotel10.webp",

    title: "Royal Santorini Residence",

    pricePerDay: 790,

    size: "75 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Infinity Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "VIP Luxury Collection",
  }

],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Infinity Pool", icon: "pool" },

  { name: "Luxury Spa", icon: "spa" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Room Service", icon: "room_service" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Air Conditioning", icon: "air_condition" },

  { name: "Parking", icon: "parking" },

  { name: "Television", icon: "tv" },

  { name: "Security Vault", icon: "vault" },

  { name: "Elevator", icon: "elevator" },
  
  { name: "Breakfast", icon: "breakfast" }
],

faq: [

  {
    id: 1,

    question: "Do all rooms include sunset and sea views?",

    answer:
      "Most room categories provide partial or direct sea views, while premium suites and villas include private terraces positioned specifically for Santorini sunset experiences. Exact views depend on room selection.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Is the resort suitable for honeymoon trips?",

    answer:
      "Yes. The resort is one of the most requested options for honeymoon stays thanks to private dining experiences, romantic room setups, premium suites, and personalized celebration arrangements available upon request.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Does the hotel arrange private boat and island tours?",

    answer:
      "Yes. Guests may reserve private cruises, sunset sailing experiences, island exploration tours, and premium transportation services directly through the concierge desk before or during their stay.",

    defaultChecked: false,
  }

],

reviews: [

  {
    id: 1,

    name: "Sophia Miller",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "One of the most romantic places we have ever stayed in.",

    likes: 16,

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

    name: "Karim Adel",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Amazing sunset and excellent hospitality.",

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
    id: 3,

    name: "Emily Brown",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 4,

    description:
      "Beautiful resort and unforgettable atmosphere.",

    likes: 8,

    dislikes: 0,

    hearts: 3,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  }

],

hotelInfo: {
  maxRooms: 14,
  maxGuests: 2,
  hotelType: "Cliff Resort",
  hotelStars: 5,
  minimumStay: 2,
  extraPeople: "Not Allowed",
  securityDeposit: 250,
  safetySecurity: "High Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 12,

slug: "london-royal-stay",

//==================================================
// Card Data
//==================================================

title: "London Royal Stay",

type: "Hotel",

image: "/Images/Img Hotels/photo12.webp",

location: {
address: "Westminster Business District",
city: "London",
country: "England",
},

category: "business",

tag: "Very Good",

rating: 4.4,

reviewsCount: 2100,

price: 340,

oldPrice: 410,

quantity: 1,

views: 2714,

//==================================================
// Booking
//==================================================

date: "Sep 10 - Sep 14",

duration: 4,

durationLabel: "Business London Stay",

language: "english",

//==================================================
// Description
//==================================================

description: [
"London Royal Stay is a premium business and city hotel located in one of London’s most connected areas, offering convenient access to major financial centers, transportation networks, and iconic attractions. The hotel combines elegant British design with modern hospitality standards, creating an ideal environment for both business travelers and visitors exploring the city.",


"Guests enjoy comfortable accommodations, executive workspaces, modern meeting facilities, and personalized services designed to maximize convenience throughout their stay. Whether visiting for meetings, conferences, or a short city escape, London Royal Stay provides a refined experience with comfort and accessibility at every step."


],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"air_condition",
"parking",

"gym",
"tv",
"coffee",
"room_service"
],

//==================================================
// Services
//==================================================

services: [
"meeting rooms",
"24/7 support",
"airport transfer",
"business lounge",
"daily housekeeping"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Big Ben",
"London Eye",
"Buckingham Palace",
"Westminster",
"River Thames"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 2:00 PM",
"Government ID required",
"Business events allowed",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {


gallery: [
  "/Images/Img Hotels/photo12-hotel1.webp",
  "/Images/Img Hotels/photo12-hotel2.webp",
  "/Images/Img Hotels/photo12-hotel3.webp",
  "/Images/Img Hotels/photo12-hotel4.webp",
  "/Images/Img Hotels/photo12-hotel5.webp"
],

availableRooms: [

  {
    id: 1,

    image: "/Images/Img Hotels/photo12-hotel6.webp",

    title: "Standard Royal Room",

    pricePerDay: 180,

    size: "20 m²",

    beds: {
      count: 1,
      type: "Single",
    },

    bathroom: "Modern Business Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Business Essentials Kit",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo12-hotel7.webp",

    title: "Executive City Room",

    pricePerDay: 260,

    size: "28 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Luxury Marble Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Premium Travel Collection",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo12-hotel8.webp",

    title: "Royal Business Suite",

    pricePerDay: 340,

    size: "38 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Executive Spa Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Executive Set",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo12-hotel9.webp",

    title: "Family London Suite",

    pricePerDay: 420,

    size: "48 m²",

    beds: {
      count: 3,
      type: "Single",
    },

    bathroom: "Large Family Bathroom",

    wifi: "Free WiFi",

    freeToiletries: "Family Comfort Package",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo12-hotel10.webp",

    title: "Presidential Royal Residence",

    pricePerDay: 610,

    size: "70 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Luxury Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "VIP Royal Collection",
  }

],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Gym", icon: "gym" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Room Service", icon: "room_service" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Parking", icon: "parking" },

  { name: "Television", icon: "tv" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Meeting Rooms", icon: "meeting" },

  { name: "Business Lounge", icon: "business" },

  { name: "Air Conditioning", icon: "air_condition" },
  
  { name: "Security Vault", icon: "vault" }
],

faq: [

  {
    id: 1,

    question: "Is the hotel suitable for business trips and remote work?",

    answer:
      "Yes. The hotel was designed specifically to support business travelers by offering high-speed internet, dedicated workspaces, meeting rooms, and comfortable environments suitable for remote work and professional stays.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "How close is the hotel to London's main attractions?",

    answer:
      "Most major attractions and transport hubs can be reached quickly using public transportation or short taxi rides, making the hotel convenient for combining business and leisure activities.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Are early check-in and late check-out available?",

    answer:
      "Yes. Early arrival and extended departure options may be arranged depending on room availability and season demand. Guests are encouraged to request this before arrival.",

    defaultChecked: false,
  }

],

reviews: [

  {
    id: 1,

    name: "James Wilson",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Excellent location and perfect service for business stays.",

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

  {
    id: 2,

    name: "Mohamed Hassan",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 4,

    description:
      "Very comfortable rooms and professional environment.",

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

  {
    id: 3,

    name: "Olivia Smith",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Modern hotel with excellent facilities and location.",

    likes: 9,

    dislikes: 0,

    hearts: 4,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  }

],

hotelInfo: {
  maxRooms: 18,
  maxGuests: 4,
  hotelType: "Business Hotel",
  hotelStars: 4,
  minimumStay: 1,
  extraPeople: "Extra Charge",
  securityDeposit: 180,
  safetySecurity: "High Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 13,

slug: "amazon-jungle-lodge",

//==================================================
// Card Data
//==================================================

title: "Amazon Jungle Lodge",

type: "Hotel",

image: "/Images/Img Hotels/photo13.webp",

location: {
address: "Amazon Rainforest Reserve",
city: "Manaus",
country: "Brazil",
},

category: "nature",

tag: "Excellent",

rating: 4.7,

reviewsCount: 1350,

price: 270,

oldPrice: 330,

quantity: 1,

views: 1986,

//==================================================
// Booking
//==================================================

date: "May 10 - May 15",

duration: 5,

durationLabel: "Amazon Adventure",

language: "spanish",

//==================================================
// Description
//==================================================

description: [
"Amazon Jungle Lodge offers an unforgettable eco-adventure experience deep inside the world-famous Amazon rainforest. Designed to connect travelers with nature while maintaining comfort and safety, the lodge combines wooden eco architecture, peaceful surroundings, and carefully designed accommodations surrounded by tropical landscapes and unique wildlife.",


"Guests enjoy guided jungle exploration, river activities, local cultural experiences, and relaxing moments in natural surroundings. Every stay focuses on creating memorable experiences while preserving environmental sustainability, making the lodge ideal for travelers seeking adventure, discovery, and a premium eco-tourism atmosphere."


],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"air_condition",
"parking",
"tv",

"pool",
"fireplace"
],

//==================================================
// Services
//==================================================

services: [
"jungle tours",
"boat trips",
"guided exploration",
"daily housekeeping",
"airport transfer"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Amazon River",
"Rainforest Trails",
"Wildlife Observation",
"Local Villages",
"Waterfall Area"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 2:00 PM",
"Government ID required",
"Quiet hours after 11 PM",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {


gallery: [
  "/Images/Img Hotels/photo13-hotel1.webp",
  "/Images/Img Hotels/photo13-hotel2.webp",
  "/Images/Img Hotels/photo13-hotel3.webp",
  "/Images/Img Hotels/photo13-hotel4.webp",
  "/Images/Img Hotels/photo13-hotel5.webp"
],

availableRooms: [

  {
    id: 1,

    image: "/Images/Img Hotels/photo13-hotel6.webp",

    title: "Classic Rainforest Room",

    pricePerDay: 170,

    size: "22 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Eco Modern Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Natural Care Kit",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo13-hotel7.webp",

    title: "River View Cabin",

    pricePerDay: 240,

    size: "30 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private River Bathroom",

    wifi: "Free WiFi",

    freeToiletries: "Premium Travel Set",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo13-hotel8.webp",

    title: "Family Jungle Suite",

    pricePerDay: 310,

    size: "40 m²",

    beds: {
      count: 3,
      type: "Single",
    },

    bathroom: "Large Family Bathroom",

    wifi: "High-Speed WiFi",

    freeToiletries: "Family Essentials Package",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo13-hotel9.webp",

    title: "Explorer Premium Lodge",

    pricePerDay: 390,

    size: "52 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Luxury Rain Shower Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Explorer Collection",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo13-hotel10.webp",

    title: "Amazon Panorama Villa",

    pricePerDay: 490,

    size: "68 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Private Nature Jacuzzi",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Exclusive Eco Luxury Package",
  }

],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Swimming Pool", icon: "pool" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Room Service", icon: "room_service" },

  { name: "Parking", icon: "parking" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Television", icon: "tv" },
  
  { name: "Fire Place", icon: "fireplace" },
  { name: "Air Conditioning", icon: "air_condition" },
  { name: "Security Vault", icon: "vault" }
],

faq: [

  {
    id: 1,

    question: "Is staying inside the Amazon rainforest safe for visitors?",

    answer:
      "Yes. The lodge operates under professional safety standards and all guided activities are supervised by trained local experts. Guests receive orientation instructions and support throughout their stay to ensure a safe and enjoyable experience.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Are jungle exploration tours included in the stay price?",

    answer:
      "Selected packages include guided rainforest activities, while premium exploration experiences and extended tours may require additional reservations depending on season availability and trip duration.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Will guests be able to see wildlife during their stay?",

    answer:
      "Wildlife sightings depend on weather and timing, but guests commonly experience bird watching, river wildlife, rainforest landscapes, and educational eco experiences led by local guides.",

    defaultChecked: false,
  }

],

reviews: [

  {
    id: 1,

    name: "Carlos Mendes",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Amazing nature experience and unforgettable jungle tours.",

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

    name: "Mohamed Salah",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 4,

    description:
      "Very peaceful place and excellent hospitality.",

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

  {
    id: 3,

    name: "Emma Johnson",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Perfect balance between adventure and comfort.",

    likes: 10,

    dislikes: 0,

    hearts: 4,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  }

],

hotelInfo: {
  maxRooms: 16,
  maxGuests: 6,
  hotelType: "Eco Lodge",
  hotelStars: 4,
  minimumStay: 2,
  extraPeople: "Extra Charge",
  securityDeposit: 150,
  safetySecurity: "High Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 14,

slug: "dubai-golden-towers",

//==================================================
// Card Data
//==================================================

title: "Dubai Golden Towers",

image: "/Images/Img Hotels/photo14.webp",

type: "Hotel",

location: {
address: "Downtown Boulevard",
city: "Dubai",
country: "UAE",
},

category: "luxury",

badge: "Featured",

tag: "Excellent",

rating: 5.0,

reviewsCount: 5200,

price: 790,

oldPrice: 940,

quantity: 1,

views: 7284,

//==================================================
// Booking
//==================================================

date: "Nov 01 - Nov 06",

duration: 5,

durationLabel: "Luxury Dubai Vacation",

language: "english",

//==================================================
// Description
//==================================================

description: [
"Dubai Golden Towers is a premium luxury destination located in the heart of Downtown Dubai, offering extraordinary skyline views, world-class hospitality, and elite experiences designed for travelers seeking exceptional comfort. The property combines modern architecture, elegant interiors, and exclusive services that reflect Dubai’s reputation for luxury and innovation.",


"Guests enjoy rooftop infinity pools, private lounges, fine dining experiences, luxury wellness facilities, and personalized concierge services. With quick access to major attractions and business districts, Dubai Golden Towers creates an unforgettable experience for both leisure travelers and premium city escapes."


],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"pool",
"air_condition",
"parking",

"spa",
"gym",
"tv",
],

//==================================================
// Services
//==================================================

services: [
"vip transfer",
"private chef",
"room service",
"daily housekeeping",
"private concierge"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Burj Khalifa",
"Dubai Mall",
"Dubai Fountain",
"Skyline View",
"Downtown Dubai"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 3:00 PM",
"Government ID required",
"Private events available",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {


gallery: [
  "/Images/Img Hotels/photo14-hotel1.webp",
  "/Images/Img Hotels/photo14-hotel2.webp",
  "/Images/Img Hotels/photo14-hotel3.webp",
  "/Images/Img Hotels/photo14-hotel4.webp",
  "/Images/Img Hotels/photo14-hotel5.webp"
],

availableRooms: [

  {
    id: 1,

    image: "/Images/Img Hotels/photo14-hotel6.webp",

    title: "Deluxe Skyline Room",

    pricePerDay: 340,

    size: "30 m²",

    beds: {
      count: 1,
      type: "Queen",
    },

    bathroom: "Premium Marble Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Luxury Essentials Set",
  },

  {
    id: 2,

    image: "/Images/Img Hotels/photo14-hotel7.webp",

    title: "Golden Executive Suite",

    pricePerDay: 480,

    size: "42 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Executive Spa Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Premium Collection",
  },

  {
    id: 3,

    image: "/Images/Img Hotels/photo14-hotel8.webp",

    title: "Panorama Luxury Suite",

    pricePerDay: 620,

    size: "58 m²",

    beds: {
      count: 1,
      type: "King",
    },

    bathroom: "Panoramic Luxury Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Exclusive Luxury Package",
  },

  {
    id: 4,

    image: "/Images/Img Hotels/photo14-hotel9.webp",

    title: "Royal Family Residence",

    pricePerDay: 780,

    size: "72 m²",

    beds: {
      count: 4,
      type: "Single",
    },

    bathroom: "Large Premium Bathroom",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "Family Premium Kit",
  },

  {
    id: 5,

    image: "/Images/Img Hotels/photo14-hotel10.webp",

    title: "Imperial Golden Penthouse",

    pricePerDay: 1200,

    size: "110 m²",

    beds: {
      count: 2,
      type: "King",
    },

    bathroom: "Private Jacuzzi Spa",

    wifi: "Ultra Fast WiFi",

    freeToiletries: "VIP Signature Collection",
  }

],

amenities: [
  { name: "Free WiFi", icon: "wifi" },

  { name: "Infinity Pool", icon: "pool" },

  { name: "Luxury Spa", icon: "spa" },

  { name: "Gym", icon: "gym" },

  { name: "Restaurant", icon: "restaurant" },

  { name: "Room Service", icon: "room_service" },

  { name: "Private Parking", icon: "parking" },

  { name: "Airport Transfer", icon: "transfer" },

  { name: "Coffee Shop", icon: "coffee" },

  { name: "Television", icon: "tv" },

  { name: "Security Vault", icon: "vault" },

  { name: "Elevator", icon: "elevator" },

  { name: "Business Lounge", icon: "business" },
  
  { name: "Entertainment", icon: "party" }
],

faq: [

  {
    id: 1,

    question: "Does the hotel provide views of Burj Khalifa and Downtown Dubai?",

    answer:
      "Yes. Many room categories offer direct skyline and Burj Khalifa views, while premium suites and penthouses include floor-to-ceiling panoramic windows and private viewing areas depending on room selection.",

    defaultChecked: true,
  },

  {
    id: 2,

    question: "Are VIP transportation and luxury concierge services available?",

    answer:
      "Yes. Guests can reserve premium transportation, airport services, private shopping arrangements, restaurant reservations, and exclusive concierge experiences before and during their stay.",

    defaultChecked: false,
  },

  {
    id: 3,

    question: "Does the resort support families and long stays?",

    answer:
      "Yes. Family residences and premium suites are designed for extended stays with larger spaces, luxury facilities, and personalized hospitality services suitable for both families and business travelers.",

    defaultChecked: false,
  }

],

reviews: [

  {
    id: 1,

    name: "Ahmed Al Mansouri",

    avatar: "/Images/users/u1.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Luxury experience with outstanding service and incredible city views.",

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

    name: "Sophia Williams",

    avatar: "/Images/users/u2.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "Everything felt premium from check-in to checkout.",

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

  {
    id: 3,

    name: "Omar Hassan",

    avatar: "/Images/users/u3.jpg",

    time: new Date().toLocaleString(),

    rating: 5,

    description:
      "One of the best luxury hotels I have visited.",

    likes: 11,

    dislikes: 0,

    hearts: 4,

    replies: [],

    userActions: {
      liked: false,
      disliked: false,
      loved: false,
    },
  }

],

hotelInfo: {
  maxRooms: 28,
  maxGuests: 8,
  hotelType: "Luxury Towers",
  hotelStars: 5,
  minimumStay: 2,
  extraPeople: "Extra Charge",
  securityDeposit: 350,
  safetySecurity: "Premium Security",
  cancellation: "Flexible",
},


},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 15,

slug: "istanbul-heritage-palace",

//==================================================
// Card Data
//==================================================

title: "Istanbul Heritage Palace",

type: "Hotel",

image: "/Images/Img Hotels/photo15.webp",

location: {
address: "Sultanahmet Historic District",
city: "Istanbul",
country: "Turkey",
},

category: "city",

tag: "Very Good",

rating: 4.5,

reviewsCount: 1750,

price: 230,

oldPrice: 280,

quantity: 1,

views: 3472,

//==================================================
// Booking
//==================================================

date: "Apr 01 - Apr 06",

duration: 5,

durationLabel: "Historic Istanbul Tour",

language: "turkish",

//==================================================
// Description
//==================================================

description: [

"Istanbul Heritage Palace delivers a refined Ottoman-inspired hospitality experience located near Istanbul’s historic landmarks and cultural treasures. The hotel combines traditional Turkish architecture, handcrafted interiors, and modern comfort to create an elegant stay that reflects the rich identity of the city. Guests enjoy stylish rooms, peaceful courtyards, and premium services while staying within walking distance of some of Istanbul’s most iconic attractions.",

"Designed for travelers who appreciate history and comfort, the property offers authentic Turkish experiences, premium dining options, personalized guest support, and carefully designed accommodations. Whether visiting Istanbul for culture, relaxation, or exploration, Istanbul Heritage Palace creates a memorable atmosphere that combines heritage with modern hospitality."

],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"tv",
"air_condition",
"parking",

"coffee",
"room_service"
],

//==================================================
// Services
//==================================================

services: [
"guided tours",
"traditional breakfast",
"airport transfer",
"room service",
"daily housekeeping"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Blue Mosque",
"Hagia Sophia",
"Grand Bazaar",
"Topkapi Palace",
"Bosphorus"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 2:00 PM",
"Government ID required",
"Family friendly",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {

gallery: [
"/Images/Img Hotels/photo15-hotel1.webp",
"/Images/Img Hotels/photo15-hotel2.webp",
"/Images/Img Hotels/photo15-hotel3.webp",
"/Images/Img Hotels/photo15-hotel4.webp",
"/Images/Img Hotels/photo15-hotel5.webp"
],

availableRooms: [

{
id: 1,

image: "/Images/Img Hotels/photo15-hotel6.webp",

title: "Classic Ottoman Room",

pricePerDay: 145,

size: "22 m²",

beds: {
count: 1,
type: "Queen",
},

bathroom: "Traditional Marble Bathroom",

wifi: "High-Speed WiFi",

freeToiletries: "Turkish Luxury Kit",
},

{
id: 2,

image: "/Images/Img Hotels/photo15-hotel7.webp",

title: "Sultan Executive Room",

pricePerDay: 220,

size: "30 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Premium Ottoman Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Premium Heritage Collection",
},

{
id: 3,

image: "/Images/Img Hotels/photo15-hotel8.webp",

title: "Golden Bosphorus Suite",

pricePerDay: 290,

size: "40 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Luxury Spa Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Exclusive Palace Set",
},

{
id: 4,

image: "/Images/Img Hotels/photo15-hotel9.webp",

title: "Family Heritage Residence",

pricePerDay: 350,

size: "52 m²",

beds: {
count: 3,
type: "Single",
},

bathroom: "Large Family Bathroom",

wifi: "Free WiFi",

freeToiletries: "Family Comfort Package",
},

{
id: 5,

image: "/Images/Img Hotels/photo15-hotel10.webp",

title: "Imperial Palace Suite",

pricePerDay: 480,

size: "70 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Private Turkish Hammam Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Royal Ottoman Collection",
}

],

amenities: [
{ name: "Free WiFi", icon: "wifi" },

{ name: "Restaurant", icon: "restaurant" },

{ name: "Coffee Shop", icon: "coffee" },

{ name: "Room Service", icon: "room_service" },

{ name: "Parking", icon: "parking" },

{ name: "Airport Transfer", icon: "transfer" },

{ name: "Television", icon: "tv" },

{ name: "Security Vault", icon: "vault" },

{ name: "Traditional Hammam", icon: "spa" },

{ name: "Air Conditioning", icon: "air_condition" }
],

faq: [

{
id: 1,

question: "Is the hotel located close to Istanbul’s historical attractions?",

answer:
"Yes. The hotel is positioned in one of Istanbul’s most popular historic areas and allows guests to reach major attractions such as Hagia Sophia, Blue Mosque, and local markets within a short distance, making it ideal for travelers interested in history and city exploration.",

defaultChecked: true,
},

{
id: 2,

question: "Does the hotel provide traditional Turkish experiences?",

answer:
"Yes. Guests can enjoy Turkish breakfast options, local hospitality experiences, traditional interior design elements, and selected cultural recommendations arranged through the hotel’s guest services team.",

defaultChecked: false,
},

{
id: 3,

question: "Are family stays comfortable in this hotel?",

answer:
"Absolutely. Family room options provide larger spaces, additional bedding arrangements, and services designed to create a comfortable experience for both adults and children during extended stays.",

defaultChecked: false,
}

],

reviews: [

{
id: 1,

name: "Mustafa Kaya",

avatar: "/Images/users/u1.jpg",

time: new Date().toLocaleString(),

rating: 5,

description:
"Excellent historical atmosphere and amazing hospitality.",

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

name: "Ahmed Samir",

avatar: "/Images/users/u2.jpg",

time: new Date().toLocaleString(),

rating: 4,

description:
"Perfect location and very comfortable stay.",

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

{
id: 3,

name: "Emily Johnson",

avatar: "/Images/users/u3.jpg",

time: new Date().toLocaleString(),

rating: 5,

description:
"Beautiful hotel with authentic Turkish feeling.",

likes: 9,

dislikes: 0,

hearts: 4,

replies: [],

userActions: {
liked: false,
disliked: false,
loved: false,
},
}

],

hotelInfo: {
maxRooms: 18,
maxGuests: 5,
hotelType: "Historic Hotel",
hotelStars: 4,
minimumStay: 2,
extraPeople: "Extra Charge",
securityDeposit: 120,
safetySecurity: "High Security",
cancellation: "Flexible",
},

},
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 16,

slug: "canadian-lake-house",

//==================================================
// Card Data
//==================================================

title: "Canadian Lake House",

type: "Hotel",

image: "/Images/Img Hotels/photo16.webp",

location: {
address: "Crystal Lake Road",
city: "Ontario",
country: "Canada",
},

category: "lake",

tag: "Excellent",

rating: 4.6,

reviewsCount: 980,

price: 310,

oldPrice: 370,

quantity: 1,

views: 2863,

//==================================================
// Booking
//==================================================

date: "Jul 15 - Jul 20",

duration: 5,

durationLabel: "Lake Family Vacation",

language: "english",

//==================================================
// Description
//==================================================

description: [

"Canadian Lake House delivers a peaceful lakeside escape surrounded by crystal-clear water, forests, and relaxing natural scenery. Designed for families and travelers seeking comfort and outdoor experiences, the property combines traditional Canadian architecture with modern hospitality to create a warm and memorable stay.",

"Guests can enjoy boating activities, private lake access, outdoor dining spaces, cozy interiors, and scenic sunset views directly from their accommodations. Whether visiting for relaxation or adventure, Canadian Lake House offers a premium nature experience with spacious living areas and carefully designed facilities."

],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"tv",
"air_condition",
"parking",

"fireplace",
"pool"
],

//==================================================
// Services
//==================================================

services: [
"boat rental",
"family activities",
"daily housekeeping",
"private dinner",
"room service"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Crystal Lake",
"Forest Trails",
"Sunset Point",
"Water Sports Area",
"Nature Park"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 2:00 PM",
"Pets allowed",
"Government ID required",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {

gallery: [
"/Images/Img Hotels/photo16-hotel1.webp",
"/Images/Img Hotels/photo16-hotel2.webp",
"/Images/Img Hotels/photo16-hotel3.webp",
"/Images/Img Hotels/photo16-hotel4.webp",
"/Images/Img Hotels/photo16-hotel5.webp"
],

//==================================================
// Available Rooms
//==================================================

availableRooms: [

{
id: 1,

image: "/Images/Img Hotels/photo16-hotel6.webp",

title: "Classic Lake Room",

pricePerDay: 180,

size: "24 m²",

beds: {
count: 1,
type: "Queen",
},

bathroom: "Modern Lake Bathroom",

wifi: "High-Speed WiFi",

freeToiletries: "Nature Comfort Kit",
},

{
id: 2,

image: "/Images/Img Hotels/photo16-hotel7.webp",

title: "Lake View Suite",

pricePerDay: 250,

size: "34 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Panoramic Lake Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Premium Relax Package",
},

{
id: 3,

image: "/Images/Img Hotels/photo16-hotel8.webp",

title: "Family Lake Residence",

pricePerDay: 320,

size: "45 m²",

beds: {
count: 3,
type: "Single",
},

bathroom: "Large Family Bathroom",

wifi: "Free WiFi",

freeToiletries: "Family Travel Kit",
},

{
id: 4,

image: "/Images/Img Hotels/photo16-hotel9.webp",

title: "Premium Wooden Cabin",

pricePerDay: 420,

size: "58 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Luxury Spa Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Luxury Cabin Collection",
},

{
id: 5,

image: "/Images/Img Hotels/photo16-hotel10.webp",

title: "Private Lake Villa",

pricePerDay: 550,

size: "78 m²",

beds: {
count: 2,
type: "King",
},

bathroom: "Private Jacuzzi Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Exclusive Villa Package",
}

],

//==================================================
// Amenities
//==================================================

amenities: [
{ name: "Free WiFi", icon: "wifi" },

{ name: "Swimming Pool", icon: "pool" },

{ name: "Restaurant", icon: "restaurant" },

{ name: "Room Service", icon: "room_service" },

{ name: "Parking", icon: "parking" },

{ name: "Coffee Shop", icon: "coffee" },

{ name: "Television", icon: "tv" },

{ name: "Security Vault", icon: "vault" },

{ name: "Fire Place", icon: "fireplace" },

{ name: "Boat Access", icon: "boat" }
],

//==================================================
// FAQ
//==================================================

faq: [

{
id: 1,

question: "Does the hotel provide direct access to the lake?",

answer:
"Yes. Guests staying at Canadian Lake House receive access to designated lake areas where they can relax, enjoy views, and participate in selected water activities depending on season and weather conditions.",

defaultChecked: true,
},

{
id: 2,

question: "Are boating and family activities available during the stay?",

answer:
"Yes. The hotel offers optional lake activities including boat rentals, family experiences, and outdoor recreation designed for both adults and children throughout most seasons.",

defaultChecked: false,
},

{
id: 3,

question: "Is the destination suitable for long relaxing vacations?",

answer:
"Absolutely. Spacious accommodations, peaceful surroundings, and natural scenery make the property especially popular for extended family vacations and guests seeking quiet escapes.",

defaultChecked: false,
}

],

//==================================================
// Reviews
//==================================================

reviews: [

{
id: 1,

name: "Daniel Moore",

avatar: "/Images/users/u1.jpg",

time: new Date().toLocaleString(),

rating: 5,

description:
"Beautiful location with amazing lake views.",

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

{
id: 2,

name: "Sara Ahmed",

avatar: "/Images/users/u2.jpg",

time: new Date().toLocaleString(),

rating: 4,

description:
"Very peaceful and perfect for family vacations.",

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

{
id: 3,

name: "Michael Brown",

avatar: "/Images/users/u3.jpg",

time: new Date().toLocaleString(),

rating: 5,

description:
"Private villa experience was incredible.",

likes: 9,

dislikes: 0,

hearts: 4,

replies: [],

userActions: {
liked: false,
disliked: false,
loved: false,
},
}

],

//==================================================
// Hotel Info
//==================================================

hotelInfo: {
maxRooms: 14,
maxGuests: 8,
hotelType: "Lake House",
hotelStars: 4,
minimumStay: 2,
extraPeople: "Extra Charge",
securityDeposit: 180,
safetySecurity: "High Security",
cancellation: "Flexible",
},

},

},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 17,

slug: "bangkok-riverside-resort",

//==================================================
// Card Data
//==================================================

title: "Bangkok Riverside Resort",

type: "Hotel",

image: "/Images/Img Hotels/photo17.webp",

location: {
address: "Chao Phraya Riverside District",
city: "Bangkok",
country: "Thailand",
},

category: "resort",

badge: "Featured",

tag: "Excellent",

rating: 4.8,

reviewsCount: 2600,

price: 360,

oldPrice: 430,

quantity: 1,

views: 6418,

//==================================================
// Booking
//==================================================

date: "Aug 01 - Aug 06",

duration: 5,

durationLabel: "Thailand Luxury Resort",

language: "thai",

//==================================================
// Description
//==================================================

description: [

"Bangkok Riverside Resort is a luxury riverside destination located along the famous Chao Phraya River, offering a perfect combination of modern comfort, tropical landscapes, and premium Thai hospitality. Designed with elegant architecture and relaxing outdoor spaces, the resort provides guests with panoramic river views, private balconies, and world-class facilities for an unforgettable stay in Bangkok.",

"The resort creates a peaceful escape while remaining close to the vibrant heart of the city. Guests enjoy river cruises, authentic Thai dining experiences, luxury wellness treatments, and beautifully designed accommodations suitable for couples, families, and premium travelers looking to experience Thailand in comfort and style."

],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"tv",
"air_condition",
"parking",
"pool",

"spa",
"gym",
],

//==================================================
// Services
//==================================================

services: [
"thai massage",
"boat rides",
"private dinner",
"room service",
"daily housekeeping"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Chao Phraya River",
"Grand Palace",
"Floating Market",
"Wat Arun",
"Asiatique Riverfront"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 2:00 PM",
"Government ID required",
"Family friendly",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {

gallery: [
"/Images/Img Hotels/photo17-hotel1.webp",
"/Images/Img Hotels/photo17-hotel2.webp",
"/Images/Img Hotels/photo17-hotel3.webp",
"/Images/Img Hotels/photo17-hotel4.webp",
"/Images/Img Hotels/photo17-hotel5.webp"
],

//==================================================
// Available Rooms
//==================================================

availableRooms: [

{
id: 1,

image: "/Images/Img Hotels/photo17-hotel6.webp",

title: "Classic Riverside Room",

pricePerDay: 190,

size: "26 m²",

beds: {
count: 1,
type: "Queen",
},

bathroom: "Modern River Bathroom",

wifi: "High-Speed WiFi",

freeToiletries: "Thai Comfort Set",
},

{
id: 2,

image: "/Images/Img Hotels/photo17-hotel7.webp",

title: "Deluxe River View Suite",

pricePerDay: 280,

size: "36 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Luxury Marble Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Premium Spa Collection",
},

{
id: 3,

image: "/Images/Img Hotels/photo17-hotel8.webp",

title: "Family Tropical Residence",

pricePerDay: 340,

size: "48 m²",

beds: {
count: 3,
type: "Single",
},

bathroom: "Family Luxury Bathroom",

wifi: "Free WiFi",

freeToiletries: "Family Vacation Kit",
},

{
id: 4,

image: "/Images/Img Hotels/photo17-hotel9.webp",

title: "Golden Riverside Suite",

pricePerDay: 470,

size: "60 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Private Spa Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Luxury Thai Collection",
},

{
id: 5,

image: "/Images/Img Hotels/photo17-hotel10.webp",

title: "Royal Floating Villa",

pricePerDay: 650,

size: "85 m²",

beds: {
count: 2,
type: "King",
},

bathroom: "Private Jacuzzi Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "VIP Resort Package",
}

],

//==================================================
// Amenities
//==================================================

amenities: [
{ name: "Free WiFi", icon: "wifi" },

{ name: "Infinity Pool", icon: "pool" },

{ name: "Luxury Spa", icon: "spa" },

{ name: "Restaurant", icon: "restaurant" },

{ name: "Gym", icon: "gym" },

{ name: "Private Parking", icon: "parking" },

{ name: "Room Service", icon: "room_service" },

{ name: "Airport Transfer", icon: "transfer" },

{ name: "Coffee Shop", icon: "coffee" },

{ name: "Television", icon: "tv" },

{ name: "Security Vault", icon: "vault" },

{ name: "River Cruise", icon: "boat" },

{ name: "Entertainment", icon: "party" },

{ name: "Wellness Center", icon: "spa" }
],

//==================================================
// FAQ
//==================================================

faq: [

{
id: 1,

question: "Does the resort provide river activities and sightseeing experiences?",

answer:
"Yes. Guests can access optional river cruises, sightseeing routes, and curated experiences across Bangkok’s waterfront areas. Availability may vary depending on weather and seasonal schedules, but the resort provides assistance with reservations and transportation.",

defaultChecked: true,
},

{
id: 2,

question: "Are wellness and relaxation facilities included during the stay?",

answer:
"Yes. The resort includes access to selected wellness facilities including pools, relaxation areas, and premium spa services. Additional luxury treatments and private sessions may require separate reservations.",

defaultChecked: false,
},

{
id: 3,

question: "Is the resort suitable for families and couples at the same time?",

answer:
"Absolutely. The resort offers room categories designed for romantic stays and larger accommodations for families. Shared recreational areas and premium services allow different guest types to enjoy a balanced experience together.",

defaultChecked: false,
}

],

//==================================================
// Reviews
//==================================================

reviews: [

{
id: 1,

name: "Somchai Kittipong",

avatar: "/Images/users/u1.jpg",

time: new Date().toLocaleString(),

rating: 5,

description:
"Beautiful resort with incredible river atmosphere.",

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

{
id: 2,

name: "Nora Ahmed",

avatar: "/Images/users/u2.jpg",

time: new Date().toLocaleString(),

rating: 5,

description:
"The sunset views and river experience were unforgettable.",

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

{
id: 3,

name: "Daniel Cooper",

avatar: "/Images/users/u3.jpg",

time: new Date().toLocaleString(),

rating: 4,

description:
"Luxury stay with excellent hospitality and location.",

likes: 9,

dislikes: 0,

hearts: 3,

replies: [],

userActions: {
liked: false,
disliked: false,
loved: false,
},
}

],

//==================================================
// Hotel Info
//==================================================

hotelInfo: {
maxRooms: 22,
maxGuests: 6,
hotelType: "River Resort",
hotelStars: 5,
minimumStay: 2,
extraPeople: "Extra Charge",
securityDeposit: 250,
safetySecurity: "Premium Security",
cancellation: "Flexible",
},

},

},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
id: 18,

slug: "berlin-urban-hostel",

//==================================================
// Card Data
//==================================================

title: "Berlin Urban Hostel",

type: "Hotel",

image: "/Images/Img Hotels/photo18.webp",

location: {
address: "AlexanderPlatz District",
city: "Berlin",
country: "Germany",
},

category: "budget",

tag: "Average",

rating: 3.9,

reviewsCount: 760,

price: 90,

oldPrice: 120,

quantity: 1,

views: 1734,

//==================================================
// Booking
//==================================================

date: "Oct 05 - Oct 08",

duration: 3,

durationLabel: "Budget City Stay",

language: "german",

//==================================================
// Description
//==================================================

description: [

"Berlin Urban Hostel offers a practical and affordable accommodation experience designed for solo travelers, backpackers, students, and visitors looking to explore Berlin while staying within budget. Located in one of the city's active urban areas, the hostel combines modern minimalist interiors with social common spaces that encourage meeting travelers from around the world.",

"The property provides comfortable rooms, shared lounges, fast internet access, and convenient connections to public transportation and major attractions. Guests enjoy a lively atmosphere, flexible services, and easy access to Berlin’s cultural landmarks, nightlife districts, and local cafés while maintaining affordable accommodation costs."

],

//==================================================
// Facilities
//==================================================

facilities: [
"wifi",
"restaurant",
"tv",
"air_condition",

"coffee",
"locker"
],

//==================================================
// Services
//==================================================

services: [
"shared kitchen",
"laundry service",
"city tours",
"self check-in",
"daily housekeeping"
],

//==================================================
// Attractions
//==================================================

attractions: [
"Berlin Wall",
"Brandenburg Gate",
"Museum Island",
"Alexanderplatz",
"Checkpoint Charlie"
],

//==================================================
// Policies
//==================================================

policies: [
"No smoking",
"Check-in starts at 3:00 PM",
"Government ID required",
"Shared spaces must be respected",
"Flexible cancellation"
],

//==================================================
// Details
//==================================================

details: {

gallery: [
"/Images/Img Hotels/photo18-hotel1.webp",
"/Images/Img Hotels/photo18-hotel2.webp",
"/Images/Img Hotels/photo18-hotel3.webp",
"/Images/Img Hotels/photo18-hotel4.webp",
"/Images/Img Hotels/photo18-hotel5.webp"
],

//==================================================
// Available Rooms
//==================================================

availableRooms: [

{
id: 1,

image: "/Images/Img Hotels/photo18-hotel6.webp",

title: "Single Urban Room",

pricePerDay: 55,

size: "14 m²",

beds: {
count: 1,
type: "Single",
},

bathroom: "Shared Modern Bathroom",

wifi: "Free WiFi",

freeToiletries: "Basic Travel Kit",
},

{
id: 2,

image: "/Images/Img Hotels/photo18-hotel7.webp",

title: "Twin Explorer Room",

pricePerDay: 85,

size: "18 m²",

beds: {
count: 2,
type: "Single",
},

bathroom: "Shared Contemporary Bathroom",

wifi: "High-Speed WiFi",

freeToiletries: "Urban Essentials Set",
},

{
id: 3,

image: "/Images/Img Hotels/photo18-hotel8.webp",

title: "Private City Room",

pricePerDay: 110,

size: "20 m²",

beds: {
count: 1,
type: "Queen",
},

bathroom: "Private Compact Bathroom",

wifi: "High-Speed WiFi",

freeToiletries: " ",
},

{
id: 4,

image: "/Images/Img Hotels/photo18-hotel9.webp",

title: "Group Traveler Room",

pricePerDay: 145,

size: "28 m²",

beds: {
count: 4,
type: "Single",
},

bathroom: "Shared Premium Bathroom",

wifi: "Free WiFi",

freeToiletries: "Group Travel Kit",
},

{
id: 5,

image: "/Images/Img Hotels/photo18-hotel10.webp",

title: "Urban Studio Suite",

pricePerDay: 190,

size: "35 m²",

beds: {
count: 1,
type: "King",
},

bathroom: "Modern Private Bathroom",

wifi: "Ultra Fast WiFi",

freeToiletries: "Premium Hostel Collection",
}

],

//==================================================
// Amenities
//==================================================

amenities: [
{ name: "Free WiFi", icon: "wifi" },

{ name: "Shared Kitchen", icon: "restaurant" },

{ name: "Coffee Shop", icon: "coffee" },

{ name: "Television", icon: "tv" },

{ name: "Laundry", icon: "laundry" },

{ name: "Security Lockers", icon: "vault" },

{ name: "Room Service", icon: "room_service" },

{ name: "Air Conditioning", icon: "air_condition" },

{ name: "24/7 Reception", icon: "doorman" },

{ name: "Entertainment Area", icon: "party" }
],

//==================================================
// FAQ
//==================================================

faq: [

{
id: 1,

question: "Is this hostel suitable for solo travelers visiting Berlin for the first time?",

answer:
"Yes. Berlin Urban Hostel is especially popular among solo travelers thanks to its central location, social atmosphere, and practical room options. Guests often choose it because it allows easy movement around the city while offering opportunities to meet travelers from different countries.",

defaultChecked: true,
},

{
id: 2,

question: "Are private rooms available or only shared accommodation?",

answer:
"The hostel provides both shared and private room options. Travelers who prefer privacy can choose upgraded rooms with private bathrooms, while budget-focused visitors can enjoy shared facilities at lower rates.",

defaultChecked: false,
},

{
id: 3,

question: "Does the hostel provide work-friendly spaces and internet access?",

answer:
"Yes. Guests have access to stable internet and shared seating areas suitable for remote work, planning trips, studying, or casual online activities throughout their stay.",

defaultChecked: false,
}

],

//==================================================
// Reviews
//==================================================

reviews: [

{
id: 1,

name: "Felix Wagner",

avatar: "/Images/users/u1.jpg",

time: new Date().toLocaleString(),

rating: 4,

description:
"Affordable stay with great location in Berlin.",

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

{
id: 2,

name: "Mariam Hassan",

avatar: "/Images/users/u2.jpg",

time: new Date().toLocaleString(),

rating: 4,

description:
"Clean rooms and good atmosphere for travelers.",

likes: 6,

dislikes: 0,

hearts: 2,

replies: [],

userActions: {
liked: false,
disliked: false,
loved: false,
},
},

{
id: 3,

name: "Lukas Meyer",

avatar: "/Images/users/u3.jpg",

time: new Date().toLocaleString(),

rating: 3,

description:
"Good value for the price and easy transportation.",

likes: 5,

dislikes: 0,

hearts: 1,

replies: [],

userActions: {
liked: false,
disliked: false,
loved: false,
},
}

],

//==================================================
// Hotel Info
//==================================================

hotelInfo: {
maxRooms: 40,
maxGuests: 8,
hotelType: "Urban Hostel",
hotelStars: 2,
minimumStay: 1,
extraPeople: "Extra Charge",
securityDeposit: 50,
safetySecurity: "Standard Security",
cancellation: "Flexible",
},

},

},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  id: 19,
  slug: "safari-wild-resort",

  //==================================================
  // Card Data
  //==================================================

  title: "Safari Wild Resort",

  type: "Hotel",

  image: "/Images/Img Hotels/photo19.webp",

  location: {
    address: "Near Nairobi National Park",
    city: "Nairobi",
    country: "Kenya",
  },

  category: "adventure",
  tag: "Excellent",
  rating: 4.7,
  reviewsCount: 1480,
  price: 410,
  oldPrice: 470,
  quantity: 1,
  views: 2890,

  //==================================================
  // Booking
  //==================================================

  date: "Dec 01 - Dec 06",
  duration: 5,
  durationLabel: "African Safari Experience",
  language: "english",

  //==================================================
  // Description
  //==================================================

  description: [
    "Safari Wild Resort offers a unique African adventure experience surrounded by breathtaking wildlife and natural landscapes near Nairobi National Park. Guests stay in luxury-style safari tents designed to combine comfort with the raw beauty of nature.",
    "The resort provides guided safari tours, evening campfires, and close encounters with wildlife in a safe and controlled environment. It is ideal for travelers seeking adventure, nature photography, and an unforgettable African escape."
  ],

  //==================================================
  // Facilities
  //==================================================

  facilities: [
    "wifi",
    "restaurant",

    "pool",
    "air_condition",
    "parking",
  ],

  //==================================================
  // Services
  //==================================================

  services: [
    "safari tours",
    "campfire dinner",
    "airport pickup",
    "guided wildlife trips"
  ],

  //==================================================
  // Attractions
  //==================================================

  attractions: [
    "Nairobi National Park",
    "Maasai Cultural Village",
    "Savannah Wildlife Reserve"
  ],

  //==================================================
  // Policies
  //==================================================

  policies: [
    "No smoking in tents",
    "Check-in starts at 2:00 PM",
    "Wildlife safety instructions must be followed",
    "Government ID required",
    "Flexible cancellation"
  ],

  //==================================================
  // Details
  //==================================================

  details: {
    gallery: [
      "/Images/Img Hotels/photo19-hotel1.webp",
      "/Images/Img Hotels/photo19-hotel2.webp",
      "/Images/Img Hotels/photo19-hotel3.webp",
      "/Images/Img Hotels/photo19-hotel4.webp",
      "/Images/Img Hotels/photo19-hotel5.webp"
    ],

    //==================================================
    // Available Rooms
    //==================================================

    availableRooms: [
      {
        id: 1,
        image: "/Images/Img Hotels/photo19-hotel16.webp",
        title: "Safari Tent Standard",
        pricePerDay: 250,
        size: "25 m²",
        beds: { count: 1, type: "Queen" },
        bathroom: "Private Outdoor Bathroom",
        wifi: "Basic WiFi",
        freeToiletries: "Safari Kit"
      },
      {
        id: 2,
        image: "/Images/Img Hotels/photo19-hotel7.webp",
        title: "Safari Tent Deluxe",
        pricePerDay: 320,
        size: "30 m²",
        beds: { count: 1, type: "King" },
        bathroom: "Private Modern Bathroom",
        wifi: "High-Speed WiFi",
        freeToiletries: "Premium Safari Kit"
      },
      {
        id: 3,
        image: "/Images/Img Hotels/photo19-hotel8.webp",
        title: "Family Safari Lodge",
        pricePerDay: 450,
        size: "45 m²",
        beds: { count: 3, type: "Mixed" },
        bathroom: "Private Lodge Bathroom",
        wifi: "High-Speed WiFi",
        freeToiletries: "Family Kit"
      },
      {
        id: 4,
        image: "/Images/Img Hotels/photo19-hotel9.webp",
        title: "Luxury Safari Suite",
        pricePerDay: 600,
        size: "55 m²",
        beds: { count: 1, type: "King" },
        bathroom: "Luxury Private Bathroom",
        wifi: "Ultra Fast WiFi",
        freeToiletries: "Luxury Package"
      }
    ],

    //==================================================
    // Amenities
    //==================================================

    amenities: [
      { name: "Free WiFi", icon: "wifi" },

      { name: "Safari Tours", icon: "safari" },

      { name: "Swimming Pool", icon: "pool" },

      { name: "Restaurant", icon: "restaurant" },
      
      { name: "Parking", icon: "parking" },

      { name: "24/7 Security", icon: "security" },

      { name: "Campfire Area", icon: "fire" },

      { name: "Airport Transfer", icon: "car" }
    ],

    //==================================================
    // FAQ
    //==================================================

    faq: [
      {
        id: 1,
        question: "Is the safari experience safe for beginners?",
        answer:
          "Yes, all safari tours are guided by professional experts ensuring maximum safety while enjoying wildlife experiences.",
        defaultChecked: true
      },
      {
        id: 2,
        question: "Do rooms include wildlife views?",
        answer:
          "Most tents and suites are designed to offer direct views of the surrounding savannah and wildlife zones.",
        defaultChecked: false
      }
    ],

    //==================================================
    // Reviews
    //==================================================

    reviews: [
      {
        id: 1,
        name: "John Carter",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Incredible wildlife experience and amazing staff.",
        likes: 12,
        dislikes: 0,
        hearts: 5,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      },
      {
        id: 2,
        name: "Amina Yusuf",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Beautiful location and well organized safari tours.",
        likes: 8,
        dislikes: 0,
        hearts: 3,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      }
    ],

    //==================================================
    // Hotel Info
    //==================================================

    hotelInfo: {
      maxRooms: 60,
      maxGuests: 5,
      hotelType: "Safari Resort",
      hotelStars: 4,
      minimumStay: 2,
      extraPeople: "Extra Charge",
      securityDeposit: 100,
      safetySecurity: "High Security (Wildlife Protected Area)",
      cancellation: "Flexible"
    }
  }
},

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  id: 20,
  slug: "sydney-harbor-suites",

  //==================================================
  // Card Data
  //==================================================

  title: "Sydney Harbor Suites",

  type: "Hotel",
  
  image: "/Images/Img Hotels/photo20.webp",

  location: {
    address: "Circular Quay District",
    city: "Sydney",
    country: "Australia",
  },

  category: "luxury",
  tag: "Excellent",
  rating: 5,
  reviewsCount: 3400,
  price: 620,
  oldPrice: 700,
  quantity: 1,
  views: 5120,

  //==================================================
  // Booking
  //==================================================

  date: "Feb 10 - Feb 15",
  duration: 5,
  durationLabel: "Sydney Harbor Vacation",
  language: "english",

  //==================================================
  // Description
  //==================================================

  description: [
    "Sydney Harbor Suites delivers a world-class luxury experience located in the heart of Circular Quay, offering breathtaking views of the Sydney Opera House and Harbor Bridge. The suites are designed with modern elegance and premium comfort for high-end travelers.",
    "Guests enjoy exclusive services including private yacht trips, fine dining, and spa access, making it an ideal destination for honeymooners, luxury seekers, and business travelers looking for a premium stay in Sydney."
  ],

  //==================================================
  // Facilities
  //==================================================

  facilities: [
    "wifi",
    "restaurant",
    "pool",
    "air_condition",

    "spa",
    "fitness-center",
  ],

  //==================================================
  // Services
  //==================================================

  services: [
    "private yacht",
    "airport transfer",
    "concierge service",
    "luxury tours"
  ],

  //==================================================
  // Attractions
  //==================================================

  attractions: [
    "Sydney Opera House",
    "Harbor Bridge",
    "Darling Harbour",
    "Royal Botanic Garden"
  ],

  //==================================================
  // Policies
  //==================================================

  policies: [
    "No smoking",
    "Check-in starts at 3:00 PM",
    "Government ID required",
    "Luxury service standards apply",
    "Flexible cancellation"
  ],

  //==================================================
  // Details
  //==================================================

  details: {
    gallery: [
      "/Images/Img Hotels/photo20-hotel1.webp",
      "/Images/Img Hotels/photo20-hotel2.webp",
      "/Images/Img Hotels/photo20-hotel3.webp",
      "/Images/Img Hotels/photo20-hotel4.webp",
      "/Images/Img Hotels/photo20-hotel5.webp"
    ],

    //==================================================
    // Available Rooms
    //==================================================

    availableRooms: [
      {
        id: 1,
        image: "/Images/Img Hotels/photo20-hotel6.webp",
        title: "Harbor View Room",
        pricePerDay: 480,
        size: "32 m²",
        beds: { count: 1, type: "King" },
        bathroom: "Luxury Private Bathroom",
        wifi: "High-Speed WiFi",
        freeToiletries: "Premium Set"
      },
      {
        id: 2,
        image: "/Images/Img Hotels/photo20-hotel7.webp",
        title: "Opera View Suite",
        pricePerDay: 650,
        size: "40 m²",
        beds: { count: 1, type: "King" },
        bathroom: "Luxury Marble Bathroom",
        wifi: "Ultra Fast WiFi",
        freeToiletries: "Luxury Kit"
      },
      {
        id: 3,
        image: "/Images/Img Hotels/photo20-hotel8.webp",
        title: "Executive Harbor Suite",
        pricePerDay: 780,
        size: "55 m²",
        beds: { count: 2, type: "King + Sofa" },
        bathroom: "Premium Spa Bathroom",
        wifi: "Ultra Fast WiFi",
        freeToiletries: "Executive Package"
      },
      {
        id: 4,
        image: "/Images/Img Hotels/photo20-hotel9.webp",
        title: "Presidential Suite",
        pricePerDay: 1200,
        size: "85 m²",
        beds: { count: 2, type: "King" },
        bathroom: "Luxury Spa Bathroom",
        wifi: "Dedicated High-Speed WiFi",
        freeToiletries: "Premium Luxury Set"
      }
    ],

    //==================================================
    // Amenities
    //==================================================

    amenities: [
      { name: "Free WiFi", icon: "wifi" },

      { name: "Spa & Wellness", icon: "spa" },

      { name: "Swimming Pool", icon: "pool" },

      { name: "Fitness Center", icon: "fitness" },

      { name: "Fine Dining", icon: "restaurant" },

      { name: "Concierge Service", icon: "concierge" },

      { name: "Airport Transfer", icon: "car" },
      
      { name: "Luxury Lounge", icon: "lounge" }
    ],

    //==================================================
    // FAQ
    //==================================================

    faq: [
      {
        id: 1,
        question: "Do the suites have direct harbor views?",
        answer:
          "Yes, most suites offer direct panoramic views of Sydney Harbour, including the Opera House and Harbour Bridge.",
        defaultChecked: true
      },
      {
        id: 2,
        question: "Is airport transfer included in the stay?",
        answer:
          "Yes, complimentary airport transfer is available for selected suite categories.",
        defaultChecked: false
      }
    ],

    //==================================================
    // Reviews
    //==================================================

    reviews: [
      {
        id: 1,
        name: "Oliver Smith",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Absolutely stunning view and world-class service.",
        likes: 15,
        dislikes: 0,
        hearts: 7,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      },
      {
        id: 2,
        name: "Emma Johnson",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Perfect luxury stay in the heart of Sydney.",
        likes: 11,
        dislikes: 0,
        hearts: 5,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      }
    ],

    //==================================================
    // Hotel Info
    //==================================================

    hotelInfo: {
      maxRooms: 80,
      maxGuests: 3,
      hotelType: "Luxury Suites",
      hotelStars: 5,
      minimumStay: 2,
      extraPeople: "Premium Extra Charge",
      securityDeposit: 200,
      safetySecurity: "High-End Security",
      cancellation: "Flexible Premium Policy"
    }
  }
}
];