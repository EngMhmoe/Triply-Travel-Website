export const tours = [
{
  
    //==================================================
    // Identity
    //==================================================
    id: 1,

    //ده اسم للرابط بدل الـ id.
    ///details/paris-romantic-escape لكن الأحسن:
    slug: "paris-romantic-escape",


    



    //==================================================
    // Card (صفحة الرحلات)
    //==================================================
    title: "Paris Romantic Escape",

    type: "Tour",

    //دي الصورة الأساسية للرحلة
    image: "/Images/Img Tours/photo1.webp",

    location: {
      address: "France",
      city: "Paris",
      country: "France",
    },

    category: "romantic",

  badge: "Featured",

  tag: "Excellent",

    rating: 4.9,

    reviewsCount: 384,





    //==================================================
    // Pricing
    //==================================================
    price: 450,

    oldPrice: 590,

    quantity: 1,





    //==================================================
    // Tour Info
    //==================================================
    date: "Jun 10 - Jun 15",

    durationLabel: "5 Days Romantic Trip",

    nights: 4,

    duration: 5,

    groupSize: 15,

    places: 6,

    tourType: "Romantic Tour",

    language: "French",





    
    //==================================================
    // Description (قسمين)
    //==================================================
    description: [
"Experience the romance of Paris with iconic landmarks and unforgettable moments.",

         "This carefully curated Paris Romantic Escape takes you through the heart of the City of Love. Enjoy breathtaking views from the Eiffel Tower, a luxury Seine River cruise at sunset, world-class dining experiences, and charming streets filled with culture and history. Perfect for couples seeking unforgettable memories in one of the world's most romantic destinations."
      
    ],
    attractions: [
      "Eiffel Tower", "Louvre Museum", "Seine River Cruise", "Montmartre", "Notre Dame"

    ],
    services: ["Pickup", "Breakfast", "Guide", "Transport"],





    //==================================================
    // UI States
    //==================================================
    views: 250,





    //==================================================
    // Details Page
    //==================================================
    //ده كأنه كرتونة كبيرة بتحط فيها كل بيانات صفحة التفاصيل.
    //كل اللي جواها = محتوى صفحة الـ Details
    details: {
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //       ده إيه؟

      // 🟢 صور الرحلة كلها (Slider / Grid)

      // بيظهر فين؟
      // Image Slider في التفاصيل
      gallery: [
        "/Images/Img Tours/photo1-Tour1.webp",
        "/Images/Img Tours/photo1-Tour2.webp",
        "/Images/Img Tours/photo1-Tour3.webp",
        "/Images/Img Tours/photo1-Tour4.webp",
        "/Images/Img Tours/photo1-Tour5.webp",
      ],

      



      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





      //       ده إيه؟

      // 🟢 أهم مميزات الرحلة (selling points)

      // بيظهر فين؟
      // List فيها check icons

      // 📌 مثال:

      // Luxury Hotel
      // Dinner
      // Cruise
      // 4) included
      // included: ["Breakfast", "Pickup"]
      // بيظهر فين؟
      highlights: [
      "Eiffel Tower Sunset View",
      "Seine River Luxury Cruise",
      "Romantic Candlelight Dinner",
      "Luxury 4-Star Hotel Stay",
      "Professional Local Tour Guide",
      "Skip-the-line Museum Access",
      "Private Airport Transfers",
      ],





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





      //       ده إيه؟

      // 🟢 الحاجات اللي داخلة في السعر

      // بيظهر فين؟

      // قسم اسمه:

      // What’s Included
      included: [
        "Hotel Accommodation (4 Nights)",
        "Daily Breakfast",
        "Airport Pickup & Drop-off",
        "Seine River Cruise Ticket",
        "Eiffel Tower Entry Ticket",
        "Professional Tour Guide",
        "City Transportation Pass",
      ],





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





      //       ده إيه؟

      // 🔴 الحاجات اللي مش داخلة في السعر

      // بيظهر فين؟

      // قسم اسمه:

      // What’s Not Included
      excluded: [
        "International Flights",
        "Travel Insurance",
        "Personal Expenses",
        "Lunch & Dinner (Optional)",
        "Visa Fees",
        "Tips & Gratuities",
      ],





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




      
      //       ده إيه؟

      // 🟢 خطة الرحلة يوم بيوم

      // بيظهر فين؟

      // Timeline / Schedule

      // 📌 مثال UI:

      // Day 1 → Arrival → Airport pickup

      // Day 2 → Tour → City visit
      //==================================================
      // Itinerary (واقعي + صور + وقت + وصف طويل)
      //==================================================
       itinerary: [
      {
        day: 1,
        time: "09:00AM - 12:00PM",
        title: "Arrival in Paris",
        location: "Charles de Gaulle Airport",
        image: "/Images/Img Tours/photo1-Tour6.webp",
        description:
          "Arrive at Paris airport where our representative will welcome you and transfer you to your luxury hotel."
      },
      {
        day: 2,
        time: "09:00AM - 12:00PM",
        title: "Eiffel Tower Experience",
        location: "Eiffel Tower",
        image: "/Images/Img Tours/photo1-Tour7.webp",
        description:
          "Enjoy guided access to the Eiffel Tower with panoramic city views and photo opportunities."
      },
      {
        day: 3,
        time: "09:00AM - 12:00PM",
        title: "Seine River Cruise",
        location: "Seine River",
        image: "/Images/Img Tours/photo1-Tour8.webp",
        description:
          "Luxury cruise along the Seine River with romantic dinner and live music."
      },
      {
        day: 4,
        time: "09:00AM - 12:00PM",
        title: "Louvre Museum Discovery",
        location: "Louvre Museum",
        image: "/Images/Img Tours/photo1-Tour9.webp",
        description:
          "Explore world-famous art pieces including Mona Lisa with expert guide."
      },
      {
        day: 5,
        time: "09:00AM - 12:00PM",
        title: "Montmartre & Shopping",
        location: "Montmartre District",
        image: "/Images/Img Tours/photo1-Tour10.webp",
        description:
          "Walk through artistic streets, visit cafés and enjoy last-day shopping."
      },
    ],





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




      
      //==================================================
      // FAQ (جديد 🔥)
      //==================================================
faq: [
      {
        id: 1,
        question: "Is this trip suitable for honeymoon?",
        answer: "Yes, this package is specially designed for couples and honeymooners.",
        defaultChecked: true,
      },
      {
        id: 2,
        question: "Are meals included?",
        answer: "Breakfast is included daily. Lunch and dinner are optional.",
        defaultChecked: false,
      },
      {
        id: 3,
        question: "Can I customize the itinerary?",
        answer: "Yes, customization is available based on request.",
        defaultChecked: false,
      },
      {
        id: 4,
        question: "Is airport pickup included?",
        answer: "Yes, airport pickup and drop-off are included.",
        defaultChecked: false,
      },
    ],





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




      
      //       ده إيه؟

      // 🟢 تقييمات الناس

      // بيظهر فين؟

      // Review Section

      // 📌 كل review = كومنت واحد
      reviews: [
        {
          id: 1,

          name: "Ahmed Mohamed",

          // avatar: "/Images/users/u1.jpg",

          time: new Date(),

          rating: 5,

          description:
            "Amazing trip. Everything was organized and the hotel was excellent.",

          likes: 13,

          dislikes: 0,

          hearts: 8,

          replies: [
            {
              id: 1,
              name: "Agency",
              time: new Date(),
              message: "Thank you ❤️",
            },
          ],

          userActions: {
            liked: false,
            disliked: false,
            loved: false,
          },
        },

        {
          id: 2,

          name: "Sara Ali",

          // avatar: "/Images/users/u2.jpg",

          time: new Date(),

          rating: 5,

          description: "The cruise was wonderful but I wanted more free time.",

          likes: 7,

          dislikes: 1,

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





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 2,
  slug: "rome-historical-journey",

  title: "Rome Historical Journey",

      type: "Tour",

  image: "/Images/Img Tours/photo2.jfif",

      location: {
      address: "Italy",
      city: "Rome",
      country: "Italy",
    },

  category: "historical",
    badge: "Popular",
  tag: "Excellent",
  rating: 4.7,
  reviewsCount: 384,

  price: 300,
  oldPrice: 420,
  quantity: 1,

  date: "Jul 1 - Jul 6",
  duration: 5,
  nights: 4,
  durationLabel: "5 Days Historical Trip",

  groupSize: 25,
  places: 7,
tourType: "Historical Tour",
  language: "Italian",

  description: [
    "Discover the timeless beauty of Rome, a city that holds centuries of ancient history, powerful empires, and world-famous architectural wonders that still stand today as a symbol of greatness.",
    "This journey takes you deep into the heart of the Italian capital where you will explore the Colosseum, Roman Forum, Vatican City, and charming streets filled with traditional Italian culture, food, and lifestyle."
  ],

  attractions: ["Colosseum", "Vatican City", "Trevi Fountain", "Pantheon", "Roman Forum"],

  services: ["Hotel Stay", "Breakfast", "Guide", "Transport", "Entry Tickets", "Airport Pickup"],

  views: 300,

  details: {
    gallery: [
      "/Images/Img Tours/photo2-Tour1.webp",
      "/Images/Img Tours/photo2-Tour2.webp",
      "/Images/Img Tours/photo2-Tour3.webp",
      "/Images/Img Tours/photo2-Tour4.webp",
      "/Images/Img Tours/photo2-Tour5.webp"
    ],

    highlights: [
      "Colosseum Guided Tour",
      "Vatican Museum Visit",
      "Ancient Roman Ruins Walk",
      "Trevi Fountain Experience",
      "Authentic Italian Cuisine",
      "Historic City Exploration"
    ],

    included: [
      "4 Nights Hotel Stay",
      "Daily Breakfast",
      "Colosseum Ticket",
      "Vatican Entry",
      "Tour Guide",
      "City Transport"
    ],

    excluded: [
      "Flights",
      "Visa Fees",
      "Lunch & Dinner",
      "Personal Expenses",
      "Insurance",
      "Optional Tours"
    ],

  
    itinerary: [
      {
        day: 1,
        time: "11:00AM - 02:00PM",
        title: "Arrival in Rome",
        location: "Rome City Center",
        image: "/Images/Img Tours/photo2-Tour6.webp",
        description: "Arrive in Rome and settle into your hotel with free time to explore nearby streets."
      },
      {
        day: 2,
        time: "09:00AM - 01:00PM",
        title: "Colosseum Tour",
        location: "Colosseum, Rome",
        image: "/Images/Img Tours/photo2-Tour7.webp",
        description: "Explore the ancient Colosseum and learn about gladiator history with a professional guide."
      },
      {
        day: 3,
        time: "10:00AM - 03:00PM",
        title: "Vatican City Visit",
        location: "Vatican City",
        image: "/Images/Img Tours/photo2-Tour8.webp",
        description: "Discover Vatican museums, St. Peter’s Basilica, and artistic masterpieces."
      },
      {
        day: 4,
        time: "05:00PM - 08:00PM",
        title: "Trevi Fountain & Walk",
        location: "Trevi Fountain",
        image: "/Images/Img Tours/photo2-Tour9.webp",
        description: "Enjoy evening walking tours and throw a coin in the famous Trevi Fountain."
      },
      {
        day: 5,
        time: "10:00AM - 01:00PM",
        title: "Roman Forum Exploration",
        location: "Roman Forum",
        image: "/Images/Img Tours/photo2-Tour10.webp",
        description: "Walk through ancient ruins and experience the heart of ancient Roman civilization."
      }
    ],

    faq: [
      {
        id: 1,
        question: "Is Rome suitable for history lovers?",
        answer: "Yes, Rome is one of the richest historical cities in the world with ancient monuments, ruins, and museums."
      },
      {
        id: 2,
        question: "Are entry tickets included?",
        answer: "Yes, major attractions like Colosseum and Vatican are included in the package."
      },
      {
        id: 3,
        question: "Is the tour guided?",
        answer: "Yes, a professional guide is included for historical explanations and tours."
      }
    ],

    reviews: [
      {
        id: 1,
        name: "Omar Hassan",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Rome was incredible, full of history and beautiful architecture. Very well organized trip.",
        likes: 10,
        dislikes: 0,
        hearts: 5,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      },
      {
        id: 2,
        name: "Mona Ali",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Great experience visiting ancient places. I loved the Colosseum and Vatican.",
        likes: 6,
        dislikes: 1,
        hearts: 3,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      }
    ]

  }
},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      
{
  id: 3,
  slug: "dubai-luxury-experience",

  title: "Dubai Luxury Experience",
  image: "/Images/Img Tours/photo3.jfif",

  

        location: {
      address: "UAE",
      city: "Dubai",
      country: "UAE",
    },

    type: "Tour",

  category: "luxury",
  badge: "Luxury",
  tag: "Excellent",

  rating: 4.9,
  reviewsCount: 612,

  price: 600,
  oldPrice: 850,
  quantity: 1,

  date: "Aug 1 - Aug 6",
  duration: 6,
  nights: 5,
  durationLabel: "6 Days Luxury Trip",

  groupSize: 18,
  places: 7,
  tourType: "Luxury Tour",
  language: "English",

  description: [
    "Dubai is a futuristic city that combines luxury living, modern architecture, and desert adventure in one destination, offering travelers a unique world-class experience.",
    "This trip takes you through iconic landmarks, luxury shopping malls, beaches, and an unforgettable desert safari experience."
  ],

  attractions: [
    "Burj Khalifa",
    "Dubai Mall",
    "Palm Jumeirah",
    "Dubai Marina",
    "Desert Safari",
    "Global Village"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Professional Guide",
    "City Transport",
    "Safari Experience"
  ],

  views: 520,

  details: {
    gallery: [
      "/Images/Img Tours/photo3-Tour1.webp",
      "/Images/Img Tours/photo3-Tour2.webp",
      "/Images/Img Tours/photo3-Tour3.webp",
      "/Images/Img Tours/photo3-Tour4.webp", 
      "/Images/Img Tours/photo3-Tour5.webp"
    ],

    highlights: [
      "Burj Khalifa Sky Observation",
      "Luxury Shopping Experience",
      "Desert Safari Adventure",
      "Dubai Marina Night Cruise",
      "Palm Jumeirah Visit",
      "Modern City Skyline Tour"
    ],

    included: [
      "5 Nights Hotel Accommodation",
      "Daily Breakfast Buffet",
      "Airport Transfers",
      "Professional Tour Guide",
      "Desert Safari Trip",
      "City Transport Pass"
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Personal Expenses",
      "Lunch & Dinner",
      "Travel Insurance",
      "Optional Activities"
    ],

    itinerary: [
      {
        day: 1,
        time: "11:00AM - 02:30PM",
        title: "Arrival & Hotel Check-in",
    location: "Downtown Dubai",
        image: "/Images/Img Tours/photo3-Tour6.webp",
        description: "Arrival in Dubai, meet your guide, and transfer to your luxury hotel in the heart of the city."
      },
      {
        day: 2,
        time: "09:30AM - 01:00PM",
        title: "Burj Khalifa & Dubai Mall Tour",
    location: "Burj Khalifa, Dubai",
        image: "/Images/Img Tours/photo3-Tour7.webp",
        description: "Explore the tallest building in the world and enjoy luxury shopping and entertainment experiences."
      },
      {
        day: 3,
        time: "03:00PM - 09:00PM",
        title: "Desert Safari Adventure",
    location: "Dubai Desert",
        image: "/Images/Img Tours/photo3-Tour8.webp",
        description: "Enjoy dune bashing, camel rides, cultural shows, and traditional Arabian dinner under the stars."
      },
      {
        day: 4,
        time: "10:00AM - 01:30PM",
        title: "Palm Jumeirah & Marina Cruise",
    location: "Dubai Marina",
        image: "/Images/Img Tours/photo3-Tour9.webp",
        description: "Discover man-made islands and enjoy a luxury cruise in one of the most modern marinas in the world."
      },
      {
        day: 5,
        time: "09:00AM - 05:30PM",
        title: "City Landmarks Exploration",
    location: "Old & New Dubai",
        image: "/Images/Img Tours/photo3-Tour10.webp",
        description: "Visit iconic landmarks, cultural areas, and enjoy a full city sightseeing experience."
      },
      {
        day: 6,
        time: "10:00AM - 12:30PM",
        title: "Departure Transfer",
        location: "Dubai Hotel District",
        image: "/Images/Img Tours/photo3-Tour11.webp",
        description: "Check-out and transfer to airport after an unforgettable luxury experience."
      }
    ],

    faq: [
      {
        id: 1,
        question: "Is the Dubai desert safari included in this package and what does it include exactly?",
        answer: "Yes, the desert safari is fully included and covers dune bashing, camel riding, cultural performances, and traditional dinner in the desert camp."
      },
      {
        id: 2,
        question: "Are luxury hotel accommodations and daily breakfast included in the package price?",
        answer: "Yes, all travelers get 5-star hotel accommodation with daily breakfast buffet included in the package."
      },
      {
        id: 3,
        question: "Can the itinerary be customized or adjusted based on personal preferences?",
        answer: "Minor adjustments can be made depending on availability, season, and group preferences while keeping main attractions included."
      }
    ],

    reviews: [
      {
        id: 1,
        name: "Ahmed Mohamed",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Dubai trip was absolutely amazing. Everything from hotels to safari was perfectly organized and luxurious.",
        likes: 14,
        dislikes: 0,
        hearts: 7,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      },
      {
        id: 2,
        name: "Sara Ali",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 4,
        description: "Very enjoyable experience especially the desert safari. I would recommend it for anyone visiting Dubai.",
        likes: 9,
        dislikes: 1,
        hearts: 4,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      }
    ]
  }
},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 4,
  slug: "bali-beach-escape",

  title: "Bali Beach Escape",
  image: "/Images/Img Tours/photo4.jfif",


          location: {
      address: "Indonesia",
      city: "Bali",
      country: "Bali, Indonesia",
    },

        type: "Tour",

  category: "beach",
  badge: "Relax Deal",
  tag: "Very Good",

  rating: 4.8,
  reviewsCount: 384,

  price: 500,
  oldPrice: 650,
    quantity: 1,

  date: "Sep 10 - Sep 15",
  duration: 5,
  nights: 4,
  durationLabel: "5 Days Beach Trip",

  groupSize: 15,
  places: 6,
  tourType: "Beach Tour",
  language: "English",

  description: [
    "A relaxing tropical escape in Bali where white sandy beaches, blue oceans, and peaceful nature create the perfect vacation mood.",
    "Enjoy island hopping, spa relaxation, and breathtaking sunset views in one of the world’s most beautiful destinations."
  ],

  attractions: ["Kuta Beach", "Ubud", "Tanah Lot", "Uluwatu Temple", "Nusa Penida"
    
  ],

  services: ["Hotel Stay", "Breakfast", "Guide", "Airport Pickup", "Transport", "Spa Access"],

  views: 280,

  details: {
    gallery: [
      "/Images/Img Tours/photo4-Tour1.webp",
      "/Images/Img Tours/photo4-Tour2.webp",
      "/Images/Img Tours/photo4-Tour3.webp",
      "/Images/Img Tours/photo4-Tour4.webp",
      "/Images/Img Tours/photo4-Tour5.webp"
    ],

    highlights: [
      "Sunset Beach View",
      "Island Hopping Tour",
      "Luxury Spa Experience",
      "Ubud Nature Walk",
      "Temple Visits",
      "Ocean Adventure"
    ],

    included: [
      "4 Nights Hotel Stay",
      "Daily Breakfast",
      "Airport Pickup",
      "Island Tours",
      "Spa Session",
      "Transport Service"
    ],

    excluded: [
      "Flights",
      "Visa Fees",
      "Personal Expenses",
      "Lunch & Dinner",
      "Insurance",
      "Optional Activities"
    ],

    itinerary: [
      {
        day: 1,
        time: "12:00PM - 03:00PM",
        title: "Arrival in Bali",
        location: "Denpasar Airport",
        image: "/Images/Img Tours/photo4-Tour6.webp",
        description: "Arrival and transfer to your beach resort with free relaxation time."
      },
      {
        day: 2,
        time: "09:00AM - 02:00PM",
        title: "Ubud Nature Tour",
        location: "Ubud",
        image: "/Images/Img Tours/photo4-Tour7.webp",
        description: "Explore rice terraces, waterfalls, and natural landscapes in Ubud."
      },
      {
        day: 3,
        time: "03:00PM - 07:00PM",
        title: "Beach Sunset",
        location: "Kuta Beach",
        image: "/Images/Img Tours/photo4-Tour8.webp",
        description: "Relax on the beach and enjoy one of the most beautiful sunsets in the world."
      },
      {
        day: 4,
        time: "10:00AM - 04:00PM",
        title: "Island Trip",
        location: "Nusa Penida",
        image: "/Images/Img Tours/photo4-Tour9.webp",
        description: "Discover crystal clear waters and stunning island views."
      },
      {
        day: 5,
        time: "11:00AM - 02:00PM",
        title: "Departure",
        location: "Bali Resort Area",
        image: "/Images/Img Tours/photo4-Tour10.webp",
        description: "Check-out and transfer to airport after a relaxing vacation."
      }
    ],

    faq: [
      {
        id: 1,
        question: "Is Bali good for relaxation trips?",
        answer: "Yes, Bali is one of the best destinations for relaxation, beaches, and spa experiences."
      },
      {
        id: 2,
        question: "Are island tours included?",
        answer: "Yes, island hopping and major attractions are included in the package."
      },
      {
        id: 3,
        question: "Is it suitable for couples?",
        answer: "Yes, Bali is perfect for couples and honeymoon vacations."
      }
    ],

    reviews: [
      {
        id: 1,
        name: "Youssef Adel",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Bali was peaceful and beautiful. The beaches and nature were amazing.",
        likes: 11,
        dislikes: 0,
        hearts: 6,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      },
      {
        id: 2,
        name: "Nour Ali",
        avatar: "/Images/users/u2.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "Perfect relaxing trip with great hotels and amazing views.",
        likes: 8,
        dislikes: 0,
        hearts: 4,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      }
    ]
  }
},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 5,
  slug: "new-york-city-tour",
  title: "New York City Tour",
  image: "/Images/Img Tours/photo5.jfif",

            location: {
      address: "USA",
      city: "New York",
      country: "New York, USA",
    },

        type: "Tour",

  category: "city",
  badge: "Popular",
  tag: "Excellent",

  rating: 4.6,
  reviewsCount: 420,

  price: 400,
  oldPrice: 550,
      quantity: 1,

  date: "Oct 5 - Oct 10",
  duration: 5,
  nights: 4,
  durationLabel: "5 Days New York Experience",

  groupSize: 25,
  places: 9,
  tourType: "City Adventure Tour",
  language: "English",

  description: [
    "New York City is the heart of modern lifestyle, culture, and iconic landmarks.",
    "This tour gives you a full experience of Manhattan, famous attractions, and unforgettable city energy."
  ],

  attractions: [
    "Times Square",
    "Central Park",
    "Statue of Liberty",
    "Brooklyn Bridge",
    "5th Avenue"
  ],

  services: [
    "Hotel Stay",
    "Breakfast",
    "Guide",
    "Transport",
    "Airport Pickup",
    "City Pass"
  ],

  views: 290,

  details: {
    gallery: [
      "/Images/Img Tours/photo5-Tour1.webp",
      "/Images/Img Tours/photo5-Tour2.webp",
      "/Images/Img Tours/photo5-Tour3.webp",
      "/Images/Img Tours/photo5-Tour4.webp",
      "/Images/Img Tours/photo5-Tour5.webp"
    ],

    highlights: [
      "Times Square Night View",
      "Statue of Liberty Cruise",
      "Central Park Walk",
      "Brooklyn Bridge Experience",
      "5th Avenue Shopping",
      "Manhattan Skyline View"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfer",
      "Statue of Liberty Ticket",
      "City Tour Guide",
      "Metro Pass"
    ],

    excluded: [
      "International Flights",
      "Visa Fees",
      "Lunch & Dinner",
      "Personal Expenses",
      "Travel Insurance",
      "Optional Activities"
    ],

    itinerary: [
      {
        day: 1,
        time: "11:00AM - 02:00PM",
        title: "Arrival in New York",
        location: "Manhattan Hotel Transfer",
        image: "/Images/Img Tours/photo5-Tour6.webp",
        description: "Arrival and hotel check-in with free time to explore nearby area."
      },
      {
        day: 2,
        time: "09:00AM - 01:00PM",
        title: "Statue of Liberty Tour",
        location: "Liberty Island Cruise Experience",
        image: "/Images/Img Tours/photo5-Tour7.webp",
        description: "Ferry ride to Liberty Island and exploration of the Statue of Liberty."
      },
      {
        day: 3,
        time: "10:00AM - 02:00PM",
        title: "Central Park Experience",
        location: "Central Park Manhattan",
        image: "/Images/Img Tours/photo5-Tour8.webp",
        description: "Relaxing walk and sightseeing inside New York’s most famous park."
      },
      {
        day: 4,
        time: "04:00PM - 09:00PM",
        title: "Times Square Night Tour",
        location: "Times Square Manhattan",
        image: "/Images/Img Tours/photo5-Tour9.webp",
        description: "Explore the glowing lights, shops, and energy of Times Square at night."
      },
      {
        day: 5,
        time: "10:00AM - 01:00PM",
        title: "Shopping & Departure",
        location: "5th Avenue Manhattan",
        image: "/Images/Img Tours/photo5-Tour10.webp",
        description: "Final shopping time before airport transfer."
      }
    ],

    faq: [
      {
        id: 1,
        question: "Is New York safe for tourists?",
        answer: "Yes, it is generally safe especially in tourist areas with proper guidance."
      },
      {
        id: 2,
        question: "Is Statue of Liberty included?",
        answer: "Yes, ferry tickets and visit are included in the package."
      },
      {
        id: 3,
        question: "Can I customize the itinerary?",
        answer: "Yes, minor customization is available based on request."
      }
    ],

    reviews: [
      {
        id: 1,
        name: "Ahmed Mohamed",
        avatar: "/Images/users/u1.jpg",
        time: new Date().toLocaleString(),
        rating: 5,
        description: "New York was amazing, everything was well organized and fun.",
        likes: 12,
        dislikes: 0,
        hearts: 6,
        replies: [],
        userActions: { liked: false, disliked: false, loved: false }
      }
    ]
  }
},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 6,

  slug: "london-explorer",

  title: "London Explorer",

  image: "/Images/Img Tours/photo6.webp",

              location: {
      address: "UK",
      city: "London",
      country: "UK",
    },

        type: "Tour",

  category: "city",

  badge: "Popular",

  tag: "Very Good",

  rating: 4.5,

  reviewsCount: 390,

  //=====================
  // Pricing
  //=====================

  price: 350,

  oldPrice: 480,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Nov 1 - Nov 7",

  duration: 7,

  nights: 6,

  durationLabel: "7 Days London Experience",

  groupSize: 20,

  places: 7,

  tourType: "City Explorer Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Explore London through a journey that combines iconic landmarks, historic streets, and modern city experiences.",

    "This London Explorer package is designed to provide a balanced experience between sightseeing, culture, shopping, and relaxation. Discover royal attractions, enjoy river views, visit museums, and experience one of the world's most exciting capitals."
  ],

  attractions: [
    "Big Ben",
    "London Eye",
    "Buckingham Palace",
    "Tower Bridge",
    "British Museum"
  ],

  services: [
    "Airport Pickup",
    "Breakfast",
    "Tour Guide",
    "Transportation",
    "Hotel Stay",
    "City Pass"
  ],

  views: 340,

  details: {

    gallery: [
      "/Images/Img Tours/photo6-Tour1.webp",
      "/Images/Img Tours/photo6-Tour2.webp",
      "/Images/Img Tours/photo6-Tour3.webp",
      "/Images/Img Tours/photo6-Tour4.webp",
      "/Images/Img Tours/photo6-Tour5.webp"
    ],

    highlights: [
      "Visit Big Ben",
      "Ride the London Eye",
      "Explore Buckingham Palace",
      "Thames River Experience",
      "Museum Access",
      "Guided City Walk"
    ],

    included: [
      "6 Nights Hotel",
      "Daily Breakfast",
      "Airport Transfer",
      "Tour Guide",
      "Transportation",
      "Entry Tickets"
    ],

    excluded: [
      "International Flights",
      "Lunch & Dinner",
      "Travel Insurance",
      "Shopping Expenses",
      "Visa Fees",
      "Personal Activities"
    ],

    itinerary: [


      {
        day: 1,
        time: "10:00AM - 01:00PM",

        title: "Arrival in London",

        location: "Heathrow Airport",
        image: "/Images/Img Tours/photo6-Tour6.webp",

        description:
          "Arrival at Heathrow Airport followed by transfer to the hotel and free time to enjoy nearby areas and cafés."
      },

      {
        day: 2,
        time: "09:00AM - 02:00PM",

        title: "Big Ben & Parliament",

        location: "Westminster",

        image: "/Images/Img Tours/photo6-Tour7.webp",

        description:
          "Visit London's famous historical center and enjoy guided sightseeing through Westminster."
      },

      {
        day: 3,
        time: "01:00PM - 05:00PM",

        title: "London Eye Experience",

        location: "South Bank",

        image: "/Images/Img Tours/photo6-Tour8.webp",

        description:
          "Enjoy panoramic city views and spend free time walking beside the Thames River."
      },

      {
        day: 4,
        time: "10:30AM - 03:00PM",

        title: "Royal Palace Visit",

        location: "Buckingham Palace",

        image: "/Images/Img Tours/photo6-Tour9.webp",

        description:
          "Explore royal history and enjoy one of London's most famous attractions."
      },

      {
        day: 5,
        time: "11:00AM - 04:00PM",

        title: "Museum & Shopping",

        location: "British Museum",

        image: "/Images/Img Tours/photo6-Tour10.webp",

        description:
          "Visit museum collections followed by shopping and local exploration."
      },

      {
        day: 6,
        time: "09:30AM - 01:30PM",

        title: "Tower Bridge Tour",

        location: "Tower Bridge",

        image: "/Images/Img Tours/photo6-Tour11.webp",

        description:
          "Discover historical London and enjoy city views."
      },

      {
        day: 7,
        time: "10:00AM - 12:00PM",

        title: "Departure",

        location: "London Airport",

        image: "/Images/Img Tours/photo6-Tour12.webp",

        description:
          "Final breakfast and transfer for departure."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does the package include transportation inside London?",

        answer:
          "Yes, city transportation and transfers between planned activities are included.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Can I join this trip as a solo traveler?",

        answer:
          "Yes, solo travelers are welcome and accommodation options are available.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is there free time for shopping?",

        answer:
          "Yes, the schedule includes free periods for shopping and personal activities.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Amazing London experience. The organization was excellent and the attractions were worth every moment.",

        likes: 8,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 4,

        description:
          "Very enjoyable trip with enough time for sightseeing and city exploration.",

        likes: 5,

        dislikes: 0,

        hearts: 2,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 7,

  slug: "maldives-paradise",

  title: "Maldives Paradise",

  image: "/Images/Img Tours/photo7.jfif",

                location: {
      address: "Maldives",
      city: "Male",
      country: "Maldives",
    },

        type: "Tour",

  category: "beach",

  badge: "Luxury",

  tag: "Excellent",

  rating: 5.0,

  reviewsCount: 462,

  //=====================
  // Pricing
  //=====================

  price: 900,

  oldPrice: 1200,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Dec 1 - Dec 6",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Luxury Beach Escape",

  groupSize: 10,

  places: 5,

  tourType: "Luxury Beach Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Escape to the Maldives and experience crystal-clear waters, peaceful beaches, and luxury island living.",

    "This Maldives Paradise package combines relaxation, ocean adventures, premium accommodation, and unforgettable sunset moments. Enjoy beautiful beaches, private island experiences, and a perfect balance between leisure and exploration."
  ],

  attractions: [
    "Private Island",
    "Overwater Villas",
    "Coral Reefs",
    "Sunset Cruise",
    "Ocean Activities"
  ],

  services: [
    "Airport Pickup",
    "Breakfast",
    "Luxury Hotel",
    "Boat Transfer",
    "Tour Guide",
    "Beach Activities"
  ],

  views: 510,

  details: {

    gallery: [
      "/Images/Img Tours/photo7-Tour1.webp",
      "/Images/Img Tours/photo7-Tour2.webp",
      "/Images/Img Tours/photo7-Tour3.webp",
      "/Images/Img Tours/photo7-Tour4.webp",
      "/Images/Img Tours/photo7-Tour5.webp"
    ],

    highlights: [
      "Luxury Overwater Villa",
      "Private Beach Access",
      "Sunset Cruise",
      "Snorkeling Experience",
      "Island Exploration",
      "Ocean Dining"
    ],

    included: [
      "Luxury Resort Stay",
      "Daily Breakfast",
      "Airport Transfers",
      "Boat Transportation",
      "Beach Activities",
      "Guided Excursions"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Visa Costs",
      "Optional Activities"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:30AM - 02:30PM",

        title: "Arrival & Resort Check-In",

        location: "Malé Resort Area",

        image: "/Images/Img Tours/photo7-Tour6.webp",

        description:
          "Arrive in the Maldives and enjoy a comfortable transfer to your luxury resort before relaxing and enjoying the island atmosphere."
      },

      {
        day: 2,

        time: "09:00AM - 01:00PM",

        title: "Beach & Resort Experience",

        location: "Private Beach",

        image: "/Images/Img Tours/photo7-Tour7.webp",

        description:
          "Spend time enjoying the white sandy beaches, relaxing by the sea, and discovering resort facilities."
      },

      {
        day: 3,

        time: "02:00PM - 07:00PM",

        title: "Sunset Cruise",

        location: "Indian Ocean",

        image: "/Images/Img Tours/photo7-Tour8.webp",

        description:
          "Experience a luxury sunset cruise with stunning ocean views and unforgettable scenery."
      },

      {
        day: 4,

        time: "10:00AM - 03:00PM",

        title: "Snorkeling Adventure",

        location: "Coral Reef Area",

        image: "/Images/Img Tours/photo7-Tour9.webp",

        description:
          "Explore marine life and coral reefs during a guided snorkeling activity."
      },

      {
        day: 5,

        time: "11:00AM - 04:00PM",

        title: "Island Exploration",

        location: "Local Island",

        image: "/Images/Img Tours/photo7-Tour10.webp",

        description:
          "Visit nearby islands and discover local culture while enjoying island landscapes."
      },

      {
        day: 6,

        time: "10:00AM - 12:00PM",

        title: "Departure",

        location: "Resort Transfer",

        image: "/Images/Img Tours/photo7-Tour11.webp",

        description:
          "Enjoy breakfast and prepare for departure with transfer arrangements."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Is this package suitable for honeymoon couples?",

        answer:
          "Yes, this package is one of the most popular choices for honeymoon travelers seeking privacy and luxury.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Are water activities included in the package?",

        answer:
          "Several activities are included while additional premium experiences can be booked separately.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Do I need previous snorkeling experience?",

        answer:
          "No, beginner-friendly guidance and support are available for all guests.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "One of the most relaxing and beautiful trips I have ever experienced. The resort and ocean views were incredible.",

        likes: 11,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent organization and amazing luxury experience from arrival until departure.",

        likes: 9,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 8,

  slug: "istanbul-culture-trip",

  title: "Istanbul Culture Trip",

  image: "/Images/Img Tours/photo8.webp",

      type: "Tour",

                  location: {
      address: "Turkey",
      city: "Istanbul",
      country: "Turkey",
    },


  category: "historical",

  badge: "Cultural",

  tag: "Excellent",

  rating: 4.7,

  reviewsCount: 428,

  //=====================
  // Pricing
  //=====================

  price: 250,

  oldPrice: 340,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Jan 5 - Jan 10",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Cultural Experience",

  groupSize: 20,

  places: 8,

  tourType: "Cultural Discovery Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Discover Istanbul through a unique mix of history, architecture, traditional markets, and unforgettable city views.",

    "This Istanbul Culture Trip takes you across iconic historical sites and cultural experiences. Walk through ancient streets, enjoy Turkish traditions, explore famous landmarks, and experience the connection between Europe and Asia in one destination."
  ],

  attractions: [
    "Blue Mosque",
    "Hagia Sophia",
    "Grand Bazaar",
    "Bosphorus Cruise",
    "Galata Tower"
  ],

  services: [
    "Airport Pickup",
    "Breakfast",
    "Hotel Stay",
    "Tour Guide",
    "Transportation",
    "City Excursions"
  ],

  views: 365,

  details: {

    gallery: [
      "/Images/Img Tours/photo8-Tour1.webp",
      "/Images/Img Tours/photo8-Tour2.webp",
      "/Images/Img Tours/photo8-Tour3.webp",
      "/Images/Img Tours/photo8-Tour4.webp",
      "/Images/Img Tours/photo8-Tour5.webp"
    ],

    highlights: [
      "Historic City Tour",
      "Bosphorus Cruise",
      "Traditional Turkish Markets",
      "Ancient Architecture",
      "Guided Cultural Experience",
      "City Panoramic Views"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfer",
      "Transportation",
      "Tour Guide",
      "Entry Tickets"
    ],

    excluded: [
      "International Flights",
      "Lunch & Dinner",
      "Travel Insurance",
      "Visa Costs",
      "Personal Shopping",
      "Optional Tours"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:00AM - 02:30PM",

        title: "Arrival in Istanbul",

        location: "Istanbul Airport",

        image: "/Images/Img Tours/photo8-Tour6.webp",

        description:
          "Arrival, hotel transfer, and free evening to enjoy nearby cafés and city atmosphere."
      },

      {
        day: 2,

        time: "09:00AM - 01:00PM",

        title: "Blue Mosque Visit",

        location: "Sultanahmet",

        image: "/Images/Img Tours/photo8-Tour7.webp",

        description:
          "Explore one of Istanbul’s most iconic landmarks and enjoy guided historical insights."
      },

      {
        day: 3,

        time: "10:00AM - 03:30PM",

        title: "Hagia Sophia Experience",

        location: "Historic Center",

        image: "/Images/Img Tours/photo8-Tour8.webp",

        description:
          "Visit Hagia Sophia and discover centuries of architecture and cultural history."
      },

      {
        day: 4,

        time: "02:00PM - 06:00PM",

        title: "Bosphorus Cruise",

        location: "Bosphorus Strait",

        image: "/Images/Img Tours/photo8-Tour9.webp",

        description:
          "Enjoy scenic views and experience Istanbul from the water."
      },

      {
        day: 5,

        time: "11:00AM - 04:00PM",

        title: "Grand Bazaar Tour",

        location: "Grand Bazaar",

        image: "/Images/Img Tours/photo8-Tour10.webp",

        description:
          "Explore local markets, traditional products, and Turkish culture."
      },

      {
        day: 6,

        time: "10:00AM - 12:00PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo8-Tour11.webp",

        description:
          "Breakfast and transfer to airport for departure."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does the package include historical attraction tickets?",

        answer:
          "Yes, the package includes access to selected attractions included in the itinerary.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Is free time available during the trip?",

        answer:
          "Yes, several periods are available for shopping and personal exploration.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Can this trip suit families?",

        answer:
          "Yes, the itinerary is suitable for couples, families, and cultural travelers.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Amazing historical experience in Istanbul. Everything was organized and enjoyable.",

        likes: 9,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "The Bosphorus cruise and cultural atmosphere made this trip unforgettable.",

        likes: 7,

        dislikes: 0,

        hearts: 3,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 9,

  slug: "tokyo-experience",

  title: "Tokyo Experience",

  image: "/Images/Img Tours/photo9.jfif",

      type: "Tour",


                    location: {
      address: "Japan",
      city: "Tokyo",
      country: "Japan",
    },


  category: "modern",

  badge: "Urban",

  tag: "Excellent",

  rating: 4.8,

  reviewsCount: 455,

  //=====================
  // Pricing
  //=====================

  price: 650,

  oldPrice: 820,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Feb 15 - Feb 20",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Tokyo Discovery",

  groupSize: 15,

  places: 7,

  tourType: "Modern City Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Experience Tokyo through a journey that combines advanced technology, modern city life, cultural heritage, and unforgettable attractions.",

    "This Tokyo Experience package gives travelers the opportunity to explore iconic districts, enjoy local traditions, discover futuristic architecture, and experience one of the most dynamic cities in the world."
  ],

  attractions: [
    "Shibuya Crossing",
    "Tokyo Tower",
    "Asakusa",
    "Akihabara",
    "Tokyo Skytree"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Breakfast",
    "Transportation",
    "Tour Guide",
    "City Activities"
  ],

  views: 402,

  details: {

    gallery: [
      "/Images/Img Tours/photo9-Tour1.webp",
      "/Images/Img Tours/photo9-Tour2.webp",
      "/Images/Img Tours/photo9-Tour3.webp",
      "/Images/Img Tours/photo9-Tour4.webp",
      "/Images/Img Tours/photo9-Tour5.webp"
    ],

    highlights: [
      "Tokyo Skyline Views",
      "Technology District Tour",
      "Traditional Culture Experience",
      "Modern Architecture",
      "Shopping Experience",
      "Local Food Discovery"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "City Transportation",
      "Tour Guide",
      "Selected Attraction Tickets"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Visa Costs",
      "Shopping Expenses",
      "Optional Experiences"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:30AM - 02:30PM",

        title: "Arrival in Tokyo",

        location: "Tokyo Airport",

        image: "/Images/Img Tours/photo9-Tour6.webp",

        description:
          "Arrival, hotel transfer, and free evening to experience Tokyo’s atmosphere."
      },

      {
        day: 2,

        time: "09:00AM - 01:00PM",

        title: "Shibuya & City Center",

        location: "Shibuya District",

        image: "/Images/Img Tours/photo9-Tour7.webp",

        description:
          "Visit Tokyo's famous crossing area and enjoy modern city exploration."
      },

      {
        day: 3,

        time: "10:00AM - 03:00PM",

        title: "Tokyo Tower Experience",

        location: "Tokyo Tower",

        image: "/Images/Img Tours/photo9-Tour8.webp",

        description:
          "Enjoy panoramic city views and explore nearby attractions."
      },

      {
        day: 4,

        time: "01:30PM - 06:00PM",

        title: "Traditional Tokyo",

        location: "Asakusa",

        image: "/Images/Img Tours/photo9-Tour9.webp",

        description:
          "Discover historical districts and experience traditional Japanese culture."
      },

      {
        day: 5,

        time: "11:00AM - 05:00PM",

        title: "Akihabara Tour",

        location: "Akihabara",

        image: "/Images/Img Tours/photo9-Tour10.webp",

        description:
          "Explore Japan’s famous electronics and entertainment district."
      },

      {
        day: 6,

        time: "10:00AM - 12:00PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo9-Tour11.webp",

        description:
          "Enjoy breakfast and prepare for departure."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Is Tokyo suitable for first-time international travelers?",

        answer:
          "Yes, Tokyo is highly organized and traveler-friendly with excellent transportation.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Does the package include transportation inside the city?",

        answer:
          "Yes, transportation between scheduled activities is included.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Will there be free time during the trip?",

        answer:
          "Yes, free periods are available for shopping and personal activities.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Tokyo exceeded expectations. Everything felt modern, organized, and exciting.",

        likes: 10,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "A fantastic experience with a great mix of culture and technology.",

        likes: 7,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},





      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





{
  id: 10,

  slug: "egypt-pyramids-tour",

  title: "Egypt Pyramids Tour",

  image: "/Images/Img Tours/photo10.jfif",

      type: "Tour",

               location: {
      address: "Egypt",
      city: "Giza",
      country: "Egypt",
    },

  category: "historical",

  badge: "Historical",

  tag: "Excellent",

  rating: 4.9,

  reviewsCount: 538,

  //=====================
  // Pricing
  //=====================

  price: 150,

  oldPrice: 220,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Mar 13 - Mar 16",

  duration: 4,

  nights: 3,

  durationLabel: "4 Days Ancient Egypt Experience",

  groupSize: 28,

  places: 5,

  tourType: "Historical Discovery Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Explore one of the most famous historical destinations in the world and discover thousands of years of Egyptian civilization.",

    "This Egypt Pyramids Tour combines iconic monuments, cultural experiences, local atmosphere, and guided historical exploration to create an unforgettable journey through ancient Egypt."
  ],

  attractions: [
    "Great Pyramid",
    "Sphinx",
    "Grand Egyptian Museum",
    "Saqqara",
    "Historic Cairo"
  ],

  services: [
    "Airport Pickup",
    "Breakfast",
    "Hotel Stay",
    "Transportation",
    "Tour Guide",
    "Entry Tickets"
  ],

  views: 620,

  details: {

    gallery: [
      "/Images/Img Tours/photo10-Tour1.webp",
      "/Images/Img Tours/photo10-Tour2.webp",
      "/Images/Img Tours/photo10-Tour3.webp",
      "/Images/Img Tours/photo10-Tour4.webp",
      "/Images/Img Tours/photo10-Tour5.webp"
    ],

    highlights: [
      "Great Pyramid Visit",
      "Sphinx Experience",
      "Ancient Egyptian History",
      "Museum Discovery",
      "Traditional Atmosphere",
      "Guided Historical Tour"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Tour Transportation",
      "Professional Guide",
      "Attraction Tickets"
    ],

    excluded: [
      "International Flights",
      "Lunch & Dinner",
      "Travel Insurance",
      "Personal Purchases",
      "Optional Activities",
      "Visa Fees"
    ],

    itinerary: [

      {
        day: 1,

        time: "10:30AM - 02:30PM",

        title: "Arrival & City Orientation",

        location: "Giza",

        image: "/Images/Img Tours/photo10-Tour6.webp",

        description:
          "Arrival, hotel check-in, and a short introductory city experience with free evening time."
      },

      {
        day: 2,

        time: "09:00AM - 03:30PM",

        title: "Pyramids & Sphinx",

        location: "Giza Plateau",

        image: "/Images/Img Tours/photo10-Tour7.webp",

        description:
          "Explore the Great Pyramid area and discover the fascinating history behind the monuments."
      },

      {
        day: 3,

        time: "10:00AM - 02:30PM",

        title: "Museum Experience",

        location: "Grand Egyptian Museum",

        image: "/Images/Img Tours/photo10-Tour8.webp",

        description:
          "Visit museum collections and enjoy a guided experience through Egyptian history."
      },

      {
        day: 4,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo10-Tour9.webp",

        description:
          "Breakfast and transfer arrangements before departure."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package include entry tickets to the pyramids?",

        answer:
          "Yes, tickets to scheduled attractions inside the itinerary are included in the package.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Is the trip suitable for families and children?",

        answer:
          "Yes, the experience is suitable for families and designed for comfortable sightseeing.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Will there be time for shopping or local exploration?",

        answer:
          "Yes, the itinerary allows some free time depending on daily activities.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Amazing historical experience. Seeing the pyramids in real life was unforgettable.",

        likes: 14,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very organized tour with excellent historical explanations and comfortable transportation.",

        likes: 10,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},






      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






{
  id: 11,

  slug: "barcelona-vibes",

  title: "Barcelona Vibes",

      type: "Tour",

  image: "/Images/Img Tours/photo11.jpg",

                 location: {
      address: "Spain",
      city: "Barcelona",
      country: "Spain",
    },
  
  category: "city",

  badge: "Popular",

  tag: "Excellent",

  rating: 4.7,

  reviewsCount: 476,

  //=====================
  // Pricing
  //=====================

  price: 320,

  oldPrice: 420,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Apr 13 - Apr 18",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Barcelona Lifestyle Journey",

  groupSize: 24,

  places: 6,

  tourType: "City Exploration Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Discover the energy of Barcelona through architecture, beaches, local culture, and unforgettable city experiences.",

    "This Barcelona Vibes journey combines famous landmarks, relaxed coastal moments, traditional neighborhoods, and modern city attractions to create a balanced and memorable European travel experience."
  ],

  attractions: [
    "Sagrada Familia",
    "Park Güell",
    "La Rambla",
    "Barceloneta Beach",
    "Gothic Quarter"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Tour Guide",
    "Activity Access"
  ],

  views: 386,

  details: {

    gallery: [
      "/Images/Img Tours/photo11-Tour1.webp",
      "/Images/Img Tours/photo11-Tour2.webp",
      "/Images/Img Tours/photo11-Tour3.webp",
      "/Images/Img Tours/photo11-Tour4.webp",
      "/Images/Img Tours/photo11-Tour5.webp"
    ],

    highlights: [
      "Barcelona City Discovery",
      "Beach Experience",
      "Architectural Landmarks",
      "Local Food Atmosphere",
      "Historic District Walk",
      "Professional Guided Tour"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Transportation",
      "Guided Experiences",
      "Selected Entry Tickets"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Shopping Costs",
      "Optional Activities"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:00AM - 02:30PM",

        title: "Arrival & Relaxed City Introduction",

        location: "Barcelona Center",

        image: "/Images/Img Tours/photo11-Tour6.webp",

        description:
          "Arrive in Barcelona, complete hotel check-in, and enjoy a relaxed introduction to the surrounding area with time to explore nearby streets."
      },

      {
        day: 2,

        time: "09:00AM - 01:30PM",

        title: "Sagrada Familia Experience",

        location: "Sagrada Familia",

        image: "/Images/Img Tours/photo11-Tour7.webp",

        description:
          "Visit Barcelona’s iconic architectural masterpiece and enjoy guided explanations about its history and artistic design."
      },

      {
        day: 3,

        time: "10:30AM - 03:30PM",

        title: "Park Güell & Local Exploration",

        location: "Park Güell",

        image: "/Images/Img Tours/photo11-Tour8.webp",

        description:
          "Walk through colorful spaces, panoramic viewpoints, and experience Barcelona's creative atmosphere."
      },

      {
        day: 4,

        time: "01:00PM - 06:00PM",

        title: "Beach & City Lifestyle",

        location: "Barceloneta",

        image: "/Images/Img Tours/photo11-Tour9.webp",

        description:
          "Enjoy free time along the beach area and discover cafés, local culture, and scenic city views."
      },

      {
        day: 5,

        time: "10:00AM - 02:00PM",

        title: "Historic Quarter Walk",

        location: "Gothic Quarter",

        image: "/Images/Img Tours/photo11-Tour10.webp",

        description:
          "Explore historical streets and hidden corners while learning about the city's rich cultural identity."
      },

      {
        day: 6,

        time: "10:30AM - 12:00PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo11-Tour11.webp",

        description:
          "Breakfast and departure preparation before heading to the airport."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package combine sightseeing and free exploration time?",

        answer:
          "Yes, the experience balances guided activities with personal time to enjoy Barcelona independently.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Are transportation and attraction access included during the trip?",

        answer:
          "Most transportation and selected activities included in the itinerary are covered.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is this trip suitable for travelers who enjoy walking and exploring cities?",

        answer:
          "Yes, this package is designed for travelers who enjoy discovering neighborhoods and attractions on foot.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Barcelona had a perfect mix of city life and relaxing moments. The organization was excellent.",

        likes: 11,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Great experience with beautiful places and enough time to enjoy the city comfortably.",

        likes: 9,

        dislikes: 0,

        hearts: 4,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},







      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 12,

  slug: "cape-town-safari",

  title: "Cape Town Safari",

  image: "/Images/Img Tours/photo12.jfif",

      type: "Tour",

                   location: {
      address: "South Africa",
      city: "Cape Town",
      country: "South Africa",
    },

  category: "adventure",

  badge: "Adventure",

  tag: "Excellent",

  rating: 4.8,

  reviewsCount: 512,

  //=====================
  // Pricing
  //=====================

  price: 500,

  oldPrice: 650,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "May 19 - May 24",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Safari Adventure",

  groupSize: 18,

  places: 8,

  tourType: "Safari Experience",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Discover the beauty of South Africa through wildlife encounters, scenic landscapes, and unforgettable outdoor experiences.",

    "This Cape Town Safari combines adventure, guided exploration, natural landmarks, and unique safari activities while allowing travelers to enjoy both nature and the vibrant atmosphere of Cape Town."
  ],

  attractions: [
    "Safari Reserve",
    "Table Mountain",
    "Cape Point",
    "Boulders Beach",
    "City Waterfront"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Breakfast",
    "Safari Transportation",
    "Professional Guide",
    "Activity Access"
  ],

  views: 468,

  details: {

gallery: [
          "/Images/Img Tours/photo12-Tour1.webp",
          "/Images/Img Tours/photo12-Tour2.webp",
          "/Images/Img Tours/photo12-Tour3.webp",
          "/Images/Img Tours/photo12-Tour4.webp",
          "/Images/Img Tours/photo12-Tour5.webp"
        ],

    highlights: [
      "Wildlife Safari Experience",
      "Scenic Mountain Views",
      "Guided Nature Exploration",
      "Photography Opportunities",
      "Cape Town Discovery",
      "Outdoor Adventure Activities"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Safari Transportation",
      "Professional Tour Guide",
      "Selected Entry Tickets"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Purchases",
      "Optional Tours",
      "Visa Costs"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:00AM - 03:00PM",

        title: "Arrival & Cape Town Introduction",

        location: "Cape Town Center",

        image: "/Images/Img Tours/photo12-Tour6.webp",

        description:
          "Arrive in Cape Town, transfer to the hotel, and enjoy a relaxed introduction to the city surroundings and local atmosphere."
      },

      {
        day: 2,

        time: "08:30AM - 02:30PM",

        title: "Safari Adventure Experience",

        location: "Private Safari Reserve",

        image: "/Images/Img Tours/photo12-Tour7.webp",

        description:
          "Spend the day exploring wildlife areas while learning about local ecosystems and observing animals in their natural environment."
      },

      {
        day: 3,

        time: "09:30AM - 01:30PM",

        title: "Table Mountain Visit",

        location: "Table Mountain",

        image: "/Images/Img Tours/photo12-Tour8.webp",

        description:
          "Enjoy panoramic views over Cape Town and experience one of South Africa’s most iconic natural landmarks."
      },

      {
        day: 4,

        time: "10:30AM - 04:30PM",

        title: "Cape Point Discovery",

        location: "Cape Peninsula",

        image: "/Images/Img Tours/photo12-Tour9.webp",

        description:
          "Travel along scenic coastal roads and discover impressive ocean views and famous viewpoints."
      },

      {
        day: 5,

        time: "11:00AM - 05:00PM",

        title: "Beach & Waterfront Day",

        location: "Waterfront District",

        image: "/Images/Img Tours/photo12-Tour10.webp",

        description:
          "Enjoy free exploration time, local restaurants, and relaxing moments near the waterfront."
      },

      {
        day: 6,

        time: "10:00AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo12-Tour11.webp",

        description:
          "Breakfast and departure arrangements before leaving Cape Town."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Is the safari experience suitable for travelers who have never joined safari activities before?",

        answer:
          "Yes, this trip is designed for all experience levels and includes guided activities to ensure comfort and safety.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will transportation between attractions be provided throughout the itinerary?",

        answer:
          "Yes, scheduled transportation during the entire journey is included for participating travelers.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Are wildlife observation opportunities included as part of the organized activities?",

        answer:
          "Yes, safari sessions are included and planned to maximize opportunities to observe wildlife responsibly.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "One of the most exciting trips I have experienced. The safari and natural scenery were unforgettable.",

        likes: 12,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Everything was organized professionally and the safari experience exceeded expectations.",

        likes: 10,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},







      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 13,

  slug: "sydney-opera-trip",

  title: "Sydney Opera Trip",

  image: "/Images/Img Tours/photo13.jfif",

      type: "Tour",

                     location: {
      address: "Australia",
      city: "Sydney",
      country: "Australia",
    },

  category: "city",

  badge: "City Escape",

  tag: "Excellent",

  rating: 4.8,

  reviewsCount: 548,

  //=====================
  // Pricing
  //=====================

  price: 550,

  oldPrice: 720,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Jun 10 - Jun 18",

  duration: 8,

  nights: 7,

  durationLabel: "8 Days Sydney Discovery",

  groupSize: 22,

  places: 7,

  tourType: "City & Coastal Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Explore Sydney through iconic architecture, coastal beauty, and memorable city experiences designed for travelers who enjoy culture and relaxation.",

    "This Sydney Opera Trip combines famous landmarks, modern city life, scenic beaches, and guided exploration to deliver a complete Australian travel experience with balanced activities and free time."
  ],

  attractions: [
    "Sydney Opera House",
    "Sydney Harbour",
    "Bondi Beach",
    "Royal Botanic Garden",
    "Darling Harbour"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Tour Guide",
    "Attraction Access"
  ],

  views: 445,

  details: {

        gallery: [
          "/Images/Img Tours/photo13-Tour1.webp",
          "/Images/Img Tours/photo13-Tour2.webp",
          "/Images/Img Tours/photo13-Tour3.webp",
          "/Images/Img Tours/photo13-Tour4.webp",
          "/Images/Img Tours/photo13-Tour5.webp"
        ],

        

    highlights: [
      "Sydney Opera House Experience",
      "Harbour Exploration",
      "Beach Lifestyle Discovery",
      "Scenic City Views",
      "Guided Cultural Experience",
      "Relaxed Coastal Activities"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "City Transportation",
      "Professional Tour Guide",
      "Selected Attraction Tickets"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Optional Experiences",
      "Visa Costs"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:30AM - 03:30PM",

        title: "Arrival & Sydney Introduction",

        location: "Sydney Center",

        image: "/Images/Img Tours/photo13-Tour6.webp",

        description:
          "Arrive in Sydney, complete hotel check-in, and enjoy a comfortable introduction to the city with time to explore nearby areas."
      },

      {
        day: 2,

        time: "09:00AM - 01:30PM",

        title: "Opera House Experience",

        location: "Sydney Opera House",

        image: "/Images/Img Tours/photo13-Tour7.webp",

        description:
          "Visit one of Australia's most famous landmarks and enjoy guided insights into its architecture and cultural importance."
      },

      {
        day: 3,

        time: "10:30AM - 03:00PM",

        title: "Sydney Harbour Exploration",

        location: "Sydney Harbour",

        //لسه
        image: "/Images/Img Tours/photo13-Tour8.webp",

        description:
          "Spend the day exploring the harbour area and enjoying scenic views and local experiences."
      },

      {
        day: 4,

        time: "11:00AM - 05:30PM",

        title: "Bondi Beach Escape",

        location: "Bondi Beach",

        image: "/Images/Img Tours/photo13-Tour9.webp",

        description:
          "Relax along Sydney’s famous coastline and enjoy time for walking, photography, and beach activities."
      },

      {
        day: 5,

        time: "09:30AM - 02:30PM",

        title: "Garden & Local Discovery",

        location: "Royal Botanic Garden",

        image: "/Images/Img Tours/photo13-Tour10.webp",

        description:
          "Experience green spaces and discover another side of Sydney's city lifestyle."
      },

      {
        day: 6,

        time: "10:00AM - 03:00PM",

        title: "Darling Harbour Experience",

        location: "Darling Harbour",

        image: "/Images/Img Tours/photo13-Tour11.webp",

        description:
          "Enjoy restaurants, city views, and local attractions throughout the harbour district."
      },

      {
        day: 7,

        time: "12:00PM - 05:00PM",

        title: "Free Exploration Day",

        location: "Sydney Downtown",

        image: "/Images/Img Tours/photo13-Tour12.webp",

        description:
          "Use free time for shopping, personal activities, or discovering local neighborhoods."
      },

      {
        day: 8,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo13-Tour13.webp",

        description:
          "Enjoy breakfast and complete departure arrangements before leaving Sydney."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package combine city exploration with free time for personal activities?",

        answer:
          "Yes, the itinerary includes guided experiences and dedicated free time to explore Sydney independently.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Are transportation and attraction access included during scheduled activities?",

        answer:
          "Yes, transportation and selected attraction access included in the itinerary are covered.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is this trip suitable for travelers who enjoy both beaches and urban experiences?",

        answer:
          "Yes, this trip is designed to provide a balanced mix of coastal relaxation and modern city discovery.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Sydney was incredible. The Opera House and beach days made the entire trip feel complete and enjoyable.",

        likes: 13,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very comfortable schedule with enough time to enjoy attractions without feeling rushed.",

        likes: 10,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},







      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 14,

  slug: "thailand-phuket-trip",

  title: "Thailand Phuket Trip",

      type: "Tour",

  image: "/Images/Img Tours/photo14.jfif",

                       location: {
      address: "Thailand",
      city: "Phuket",
      country: "Thailand",
    },

  category: "beach",

  badge: "Beach Escape",

  tag: "Excellent",

  rating: 4.7,

  reviewsCount: 501,

  //=====================
  // Pricing
  //=====================

  price: 300,

  oldPrice: 390,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Jul 20 - Jul 26",

  duration: 7,

  nights: 6,

  durationLabel: "7 Days Island Adventure",

  groupSize: 20,

  places: 6,

  tourType: "Beach & Relax Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Enjoy tropical beaches, island scenery, and relaxing moments while discovering one of Thailand’s most famous travel destinations.",

    "This Thailand Phuket Trip combines coastal exploration, island experiences, local culture, and leisure activities to create a balanced vacation filled with memorable moments and beautiful landscapes."
  ],

  attractions: [
    "Patong Beach",
    "Phi Phi Islands",
    "Big Buddha",
    "Old Phuket Town",
    "Promthep Cape"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Tour Guide",
    "Island Activities"
  ],

  views: 431,

  details: {

        gallery: [
          "/Images/Img Tours/photo14-Tour1.webp",
          "/Images/Img Tours/photo14-Tour2.webp",
          "/Images/Img Tours/photo14-Tour3.webp",
          "/Images/Img Tours/photo14-Tour4.webp",
          "/Images/Img Tours/photo14-Tour5.webp"
        ],


    highlights: [
      "Island Boat Experience",
      "Tropical Beach Relaxation",
      "Sunset Viewing Spots",
      "Local Cultural Discovery",
      "Guided Coastal Activities",
      "Scenic Ocean Landscapes"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Transportation",
      "Selected Activities",
      "Professional Tour Guide"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Shopping Costs",
      "Optional Activities"
    ],

    itinerary: [

      {
        day: 1,

        time: "12:00PM - 03:30PM",

        title: "Arrival & Resort Check-In",

        location: "Phuket Center",

        image: "/Images/Img Tours/photo14-Tour6.webp",

        description:
          "Arrive in Phuket, complete check-in procedures, and enjoy free time to relax and explore the surrounding resort area."
      },

      {
        day: 2,

        time: "08:30AM - 02:00PM",

        title: "Patong Beach Experience",

        location: "Patong Beach",

        image: "/Images/Img Tours/photo14-Tour7.webp",

        description:
          "Spend the day enjoying beach activities, ocean views, and the lively atmosphere of Phuket’s coastline."
      },

      {
        day: 3,

        time: "09:00AM - 04:00PM",

        title: "Phi Phi Islands Tour",

        location: "Phi Phi Islands",

        image: "/Images/Img Tours/photo14-Tour8.webp",

        description:
          "Travel by boat to explore famous islands and experience crystal-clear water and scenic surroundings."
      },

      {
        day: 4,

        time: "10:30AM - 02:30PM",

        title: "Big Buddha Visit",

        location: "Big Buddha",

        image: "/Images/Img Tours/photo14-Tour9.webp",

        description:
          "Visit one of Phuket’s most iconic landmarks and enjoy elevated panoramic views of the island."
      },

      {
        day: 5,

        time: "01:00PM - 06:00PM",

        title: "Old Town Discovery",

        location: "Old Phuket Town",

        image: "/Images/Img Tours/photo14-Tour10.webp",

        description:
          "Walk through colorful streets and discover local architecture and cultural attractions."
      },

      {
        day: 6,

        time: "03:00PM - 07:00PM",

        title: "Sunset Experience",

        location: "Promthep Cape",

        image: "/Images/Img Tours/photo14-Tour11.webp",

        description:
          "Enjoy one of the island’s most beautiful sunset viewpoints with relaxed evening moments."
      },

      {
        day: 7,

        time: "10:00AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo14-Tour12.webp",

        description:
          "Breakfast and transfer arrangements before departure from Phuket."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this trip include island activities and beach experiences during the itinerary?",

        answer:
          "Yes, selected island and beach activities are included to provide a complete Phuket experience.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Is there enough free time available for relaxation during the vacation?",

        answer:
          "Yes, the schedule is balanced between organized activities and free personal time.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is this package suitable for travelers looking for a calm and scenic holiday?",

        answer:
          "Yes, this experience focuses on relaxation, sightseeing, and enjoying tropical surroundings.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Beautiful beaches and a relaxing atmosphere. The island trip was my favorite experience.",

        likes: 12,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Everything was comfortable and organized. Phuket was perfect for a relaxing vacation.",

        likes: 9,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},






      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 15,

  slug: "germany-berlin-tour",

  title: "Germany Berlin Tour",

      type: "Tour",

  image: "/Images/Img Tours/photo15.jfif",

                   location: {
      address: "Germany",
      city: "Berlin",
      country: "Germany",
    },

  category: "historical",

  badge: "History",

  tag: "Excellent",

  rating: 4.6,

  reviewsCount: 493,

  //=====================
  // Pricing
  //=====================

  price: 280,

  oldPrice: 360,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Aug 20 - Aug 24",

  duration: 5,

  nights: 4,

  durationLabel: "5 Days Berlin Heritage Tour",

  groupSize: 30,

  places: 6,

  tourType: "Historical City Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Discover Berlin through its historical landmarks, cultural heritage, and modern urban atmosphere.",

    "This Germany Berlin Tour combines important historical locations, guided city exploration, museums, and local experiences to create a journey that connects the past with the modern identity of Berlin."
  ],

  attractions: [
    "Brandenburg Gate",
    "Berlin Wall",
    "Museum Island",
    "Reichstag Building",
    "Checkpoint Charlie"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Tour Guide",
    "Historical Activities"
  ],

  views: 401,

  details: {

        gallery: [
          "/Images/Img Tours/photo15-Tour1.webp",
          "/Images/Img Tours/photo15-Tour2.webp",
          "/Images/Img Tours/photo15-Tour3.webp",
          "/Images/Img Tours/photo15-Tour4.webp",
          "/Images/Img Tours/photo15-Tour5.webp"
        ],


    highlights: [
      "Historical Landmark Visits",
      "Guided Heritage Exploration",
      "Museum Experiences",
      "Berlin City Discovery",
      "Cultural Activities",
      "Historic Storytelling Sessions"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "City Transportation",
      "Professional Guide",
      "Selected Attraction Access"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Optional Experiences",
      "Visa Fees"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:00AM - 03:00PM",

        title: "Arrival & Berlin Introduction",

        location: "Berlin Center",

        image: "/Images/Img Tours/photo15-Tour6.webp",

        description:
          "Arrive in Berlin, transfer to the hotel, and spend time exploring nearby streets and getting familiar with the city atmosphere."
      },

      {
        day: 2,

        time: "09:00AM - 02:30PM",

        title: "Historical Landmarks Tour",

        location: "Brandenburg Area",

        image: "/Images/Img Tours/photo15-Tour7.webp",

        description:
          "Visit major historical attractions and learn about Berlin’s important role in European history."
      },

      {
        day: 3,

        time: "10:30AM - 03:30PM",

        title: "Museum Exploration",

        location: "Museum Island",

        image: "/Images/Img Tours/photo15-Tour8.webp",

        description:
          "Discover museum collections and experience historical exhibitions through guided visits."
      },

      {
        day: 4,

        time: "01:00PM - 05:30PM",

        title: "Modern Berlin Experience",

        location: "City District",

        image: "/Images/Img Tours/photo15-Tour9.webp",

        description:
          "Explore another side of Berlin through local culture, architecture, and city life."
      },

      {
        day: 5,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo15-Tour10.webp",

        description:
          "Enjoy breakfast and prepare for departure after completing the Berlin experience."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package focus mainly on historical attractions and cultural experiences?",

        answer:
          "Yes, this journey is designed around historical exploration while still offering time to enjoy Berlin’s modern atmosphere.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will transportation and guided activities be available during sightseeing days?",

        answer:
          "Yes, transportation and selected guided activities included in the itinerary are provided.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is this trip suitable for travelers interested in museums and historical learning?",

        answer:
          "Yes, the itinerary includes museum experiences and important historical locations throughout the journey.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Berlin was full of history and the guided explanations made the experience much more interesting.",

        likes: 10,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very organized historical tour with enough time to enjoy museums and city landmarks.",

        likes: 8,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},







      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 16,

  slug: "canada-nature-trip",

  title: "Canada Nature Trip",

      type: "Tour",

  image: "/Images/Img Tours/photo16.jfif",

             location: {
      address: "Canada",
      city: "Banff",
      country: "Canada",
    },

  category: "nature",

  badge: "Nature",

  tag: "Excellent",

  rating: 4.9,

  reviewsCount: 524,

  //=====================
  // Pricing
  //=====================

  price: 600,

  oldPrice: 760,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Sep 17 - Sep 22",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Canadian Nature Escape",

  groupSize: 18,

  places: 8,

  tourType: "Nature Discovery Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Experience breathtaking mountains, crystal-clear lakes, and unforgettable outdoor adventures in one of Canada’s most scenic destinations.",

    "This Canada Nature Trip combines peaceful landscapes, guided exploration, natural landmarks, and relaxing moments to create a memorable travel experience surrounded by the beauty of Banff and the Canadian Rockies."
  ],

  attractions: [
    "Lake Louise",
    "Banff National Park",
    "Moraine Lake",
    "Bow Falls",
    "Sulphur Mountain"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Professional Guide",
    "Nature Activities"
  ],

  views: 472,

  details: {

                                    gallery: [
          "/Images/Img Tours/photo16-Tour1.webp",
          "/Images/Img Tours/photo16-Tour2.webp",
          "/Images/Img Tours/photo16-Tour3.webp",
          "/Images/Img Tours/photo16-Tour4.webp",
          "/Images/Img Tours/photo16-Tour5.webp"
        ],


    highlights: [
      "Mountain View Experiences",
      "Scenic Lake Exploration",
      "Outdoor Adventure Activities",
      "Nature Photography Opportunities",
      "Guided National Park Visits",
      "Relaxing Natural Atmosphere"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Transportation Services",
      "Professional Tour Guide",
      "Selected Attraction Access"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Purchases",
      "Optional Activities",
      "Visa Expenses"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:30AM - 03:30PM",

        title: "Arrival & Mountain Town Discovery",

        location: "Banff Center",

        image: "/Images/Img Tours/photo16-Tour6.webp",

        description:
          "Arrive in Banff and settle into the hotel before spending time exploring the surrounding mountain atmosphere and nearby local areas."
      },

      {
        day: 2,

        time: "08:30AM - 02:30PM",

        title: "Lake Louise Experience",

        location: "Lake Louise",

        image: "/Images/Img Tours/photo16-Tour7.webp",

        description:
          "Visit one of Canada's most famous lakes and enjoy scenic views, peaceful surroundings, and memorable photo opportunities."
      },

      {
        day: 3,

        time: "09:30AM - 03:00PM",

        title: "National Park Adventure",

        location: "Banff National Park",

        image: "/Images/Img Tours/photo16-Tour8.webp",

        description:
          "Explore protected landscapes, wildlife areas, and enjoy guided experiences inside the national park."
      },

      {
        day: 4,

        time: "10:00AM - 02:30PM",

        title: "Mountain Scenic Tour",

        location: "Sulphur Mountain",

        image: "/Images/Img Tours/photo16-Tour9.webp",

        description:
          "Enjoy elevated panoramic views and discover one of the region’s most iconic natural attractions."
      },

      {
        day: 5,

        time: "11:30AM - 05:30PM",

        title: "Relaxation & Free Exploration",

        location: "Banff Town",

        image: "/Images/Img Tours/photo16-Tour10.webp",

        description:
          "Spend free time exploring local shops, enjoying nature walks, and experiencing the peaceful atmosphere."
      },

      {
        day: 6,

        time: "10:00AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo16-Tour11-.webp",

        description:
          "Enjoy breakfast and complete departure arrangements after finishing your Canadian adventure."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Is this trip designed mainly for travelers who enjoy nature and outdoor experiences?",

        answer:
          "Yes, this package focuses on natural landscapes, outdoor exploration, and relaxing scenic experiences.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will there be enough time to enjoy the lakes and natural surroundings comfortably?",

        answer:
          "Yes, the itinerary is balanced to allow both guided activities and time for enjoying the scenery.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Are transportation and guided experiences included throughout the trip?",

        answer:
          "Yes, transportation and scheduled guided experiences included in the itinerary are provided.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "The scenery was absolutely incredible and every day felt peaceful and refreshing.",

        likes: 12,

        dislikes: 0,

        hearts: 7,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Beautiful landscapes and excellent organization. One of the most relaxing trips I experienced.",

        likes: 10,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},








      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 17,

  slug: "brazil-rio-carnival",

  title: "Brazil Rio Carnival",

      type: "Tour",

  image: "/Images/Img Tours/photo17.jfif",

               location: {
      address: "Brazil",
      city: "Rio",
      country: "Brazil",
    },

  category: "festival",

  badge: "Festival",

  tag: "Excellent",

  rating: 4.8,

  reviewsCount: 587,

  //=====================
  // Pricing
  //=====================

  price: 550,

  oldPrice: 690,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Oct 15 - Oct 20",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Rio Carnival Experience",

  groupSize: 40,

  places: 7,

  tourType: "Festival Celebration Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Experience the energy of Rio through music, colorful performances, famous landmarks, and unforgettable celebrations.",

    "This Brazil Rio Carnival journey combines world-famous carnival experiences, cultural discovery, city sightseeing, and moments to enjoy the vibrant atmosphere of one of the most iconic festivals in the world."
  ],

  attractions: [
    "Rio Carnival",
    "Copacabana Beach",
    "Christ the Redeemer",
    "Sugarloaf Mountain",
    "Sambadrome"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Festival Access",
    "Professional Guide"
  ],

  views: 543,

  details: {

  
                                    gallery: [
          "/Images/Img Tours/photo17-Tour1.webp",
          "/Images/Img Tours/photo17-Tour2.webp",
          "/Images/Img Tours/photo17-Tour3.webp",
          "/Images/Img Tours/photo17-Tour4.webp",
          "/Images/Img Tours/photo17-Tour5.webp"
        ],


    highlights: [
      "Rio Carnival Access",
      "Beach Exploration",
      "Cultural Experiences",
      "Night Celebrations",
      "Landmark Visits",
      "Local Entertainment"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Festival Activities",
      "Professional Guide",
      "Transportation Services"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Optional Activities",
      "Visa Fees"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:00AM - 03:00PM",

        title: "Arrival & City Introduction",

        location: "Rio City Center",

        image: "/Images/Img Tours/photo17-Tour6.webp",

        description:
          "Arrive in Rio, complete hotel check-in, and enjoy your first experience discovering the atmosphere, nearby attractions, and vibrant local environment."
      },

      {
        day: 2,

        time: "02:00PM - 10:30PM",

        title: "Rio Carnival Experience",

        location: "Sambadrome Area",

        image: "/Images/Img Tours/photo17-Tour7.webp",

        description:
          "Attend one of the most famous celebrations in the world and enjoy music, costumes, performances, and unforgettable energy."
      },

      {
        day: 3,

        time: "09:30AM - 02:30PM",

        title: "Landmarks & Sightseeing",

        location: "Christ the Redeemer",

        image: "/Images/Img Tours/photo17-Tour8.webp",

        description:
          "Visit iconic attractions and enjoy panoramic city views while exploring Rio’s cultural identity."
      },

      {
        day: 4,

        time: "11:30AM - 05:00PM",

        title: "Beach Relaxation Day",

        location: "Copacabana Beach",

        image: "/Images/Img Tours/photo17-Tour9.webp",

        description:
          "Spend time relaxing near the ocean and enjoying the lively atmosphere surrounding one of Brazil’s most famous beaches."
      },

      {
        day: 5,

        time: "04:00PM - 11:00PM",

        title: "Night Entertainment Experience",

        location: "Entertainment District",

        image: "/Images/Img Tours/photo17-Tour10.webp",

        description:
          "Enjoy music, performances, local entertainment, and a memorable evening atmosphere."
      },

      {
        day: 6,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo17-Tour11.webp",

        description:
          "Complete departure arrangements and finish your Rio Carnival journey with unforgettable memories."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package include experiences connected to the famous Rio Carnival celebrations?",

        answer:
          "Yes, the itinerary includes experiences designed around enjoying the atmosphere and cultural spirit of Rio Carnival.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will there be enough free time to explore beaches and local attractions during the journey?",

        answer:
          "Yes, the trip combines scheduled activities with time for personal exploration and relaxation.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is this trip suitable for travelers looking for entertainment and city experiences?",

        answer:
          "Yes, this experience combines entertainment, sightseeing, culture, and memorable festival moments.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "The carnival atmosphere was unforgettable and every activity felt exciting and full of energy.",

        likes: 14,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent organization and a perfect balance between celebrations and sightseeing.",

        likes: 9,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},








      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  
  

{
  id: 18,

  slug: "india-taj-mahal-tour",

  title: "India Taj Mahal Tour",

      type: "Tour",

  image: "/Images/Img Tours/photo18.jfif",

                 location: {
      address: "India",
      city: "Agra",
      country: "India",
    },

  category: "historical",

  badge: "Heritage",

  tag: "Excellent",

  rating: 4.7,

  reviewsCount: 468,

  //=====================
  // Pricing
  //=====================

  price: 200,

  oldPrice: 260,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Nov 15 - Nov 18",

  duration: 4,

  nights: 3,

  durationLabel: "4 Days Taj Mahal Discovery",

  groupSize: 35,

  places: 5,

  tourType: "Historical Landmark Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Discover one of the most iconic architectural wonders in the world while experiencing culture, history, and unforgettable local moments.",

    "This India Taj Mahal Tour combines historical exploration, cultural experiences, guided city visits, and opportunities to discover the unique atmosphere of Agra through carefully planned activities and memorable sightseeing experiences."
  ],

  attractions: [
    "Taj Mahal",
    "Agra Fort",
    "Mehtab Bagh",
    "Local Markets",
    "Historic City Areas"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Professional Guide",
    "Transportation",
    "Historical Activities"
  ],

  views: 425,

  details: {

                                    gallery: [
          "/Images/Img Tours/photo18-Tour1.webp",
          "/Images/Img Tours/photo18-Tour2.webp",
          "/Images/Img Tours/photo18-Tour3.webp",
          "/Images/Img Tours/photo18-Tour4.webp",
          "/Images/Img Tours/photo18-Tour5.webp"
        ],


    highlights: [
      "Taj Mahal Guided Visit",
      "Historical Storytelling",
      "Cultural Exploration",
      "Traditional Experiences",
      "Architectural Discovery",
      "City Heritage Activities"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Transportation Services",
      "Professional Guide",
      "Selected Attraction Access"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Expenses",
      "Optional Activities",
      "Visa Charges"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:00AM - 03:30PM",

        title: "Arrival & Agra Exploration",

        location: "Agra City",

        image: "/Images/Img Tours/photo18-Tour6.webp",

        description:
          "Arrive in Agra and begin discovering the city atmosphere through local areas and a comfortable introduction to the upcoming experiences."
      },

      {
        day: 2,

        time: "08:30AM - 01:30PM",

        title: "Taj Mahal Experience",

        location: "Taj Mahal",

        image: "/Images/Img Tours/photo18-Tour7.webp",

        description:
          "Enjoy a guided visit to the Taj Mahal and learn about its history, architecture, and cultural significance while exploring the surrounding area."
      },

      {
        day: 3,

        time: "10:00AM - 04:30PM",

        title: "Historical Sites Discovery",

        location: "Agra Fort",

        image: "/Images/Img Tours/photo18-Tour8.webp",

        description:
          "Continue the journey through important historical landmarks and experience more of Agra’s rich heritage."
      },

      {
        day: 4,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo18-Tour9.webp",

        description:
          "Complete departure preparations and finish the journey with unforgettable memories from India."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package focus mainly on visiting historical landmarks and cultural attractions?",

        answer:
          "Yes, the trip is designed to provide historical experiences combined with guided cultural exploration and local activities.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will there be enough time to enjoy and explore the Taj Mahal comfortably?",

        answer:
          "Yes, dedicated time is included for exploring the site and enjoying the surrounding environment.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is transportation included during visits between attractions and activities?",

        answer:
          "Yes, transportation included within the itinerary is provided throughout the journey.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Visiting the Taj Mahal was an unforgettable experience and the organization made everything smooth and enjoyable.",

        likes: 11,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Very well planned historical trip with enough time to explore and enjoy the atmosphere.",

        likes: 8,

        dislikes: 0,

        hearts: 5,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},








      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  

{
  id: 19,

  slug: "norway-northern-lights",

  title: "Norway Northern Lights",

      type: "Tour",

  image: "/Images/Img Tours/photo19.jfif",
  
                 location: {
      address: "Norway",
      city: "Tromso",
      country: "Norway",
    },

  category: "nature",

  badge: "Special",

  tag: "Excellent",

  rating: 5.0,

  reviewsCount: 538,

  //=====================
  // Pricing
  //=====================

  price: 750,

  oldPrice: 920,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "Dec 15 - Dec 20",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Northern Lights Adventure",

  groupSize: 12,

  places: 4,

  tourType: "Nature Experience Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Experience the magic of Norway through snowy landscapes, Arctic adventures, and unforgettable moments under the Northern Lights.",

    "This Norway Northern Lights journey combines natural scenery, relaxing winter experiences, guided exploration, and opportunities to witness one of the world’s most breathtaking natural phenomena while enjoying the peaceful atmosphere of Tromso."
  ],

  attractions: [
    "Northern Lights",
    "Arctic Landscape",
    "Tromso City",
    "Snow Activities",
    "Mountain Views"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Professional Guide",
    "Transportation",
    "Nature Experiences"
  ],

  views: 497,

  details: {

                                gallery: [
          "/Images/Img Tours/photo19-Tour1.webp",
          "/Images/Img Tours/photo19-Tour2.webp",
          "/Images/Img Tours/photo19-Tour3.webp",
          "/Images/Img Tours/photo19-Tour4.webp",
          "/Images/Img Tours/photo19-Tour5.webp"
        ],


    highlights: [
      "Northern Lights Viewing",
      "Arctic Exploration",
      "Scenic Winter Landscapes",
      "Guided Nature Activities",
      "Photography Opportunities",
      "Relaxing Winter Atmosphere"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Transportation Services",
      "Professional Guide",
      "Selected Experiences"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Purchases",
      "Optional Experiences",
      "Visa Expenses"
    ],

    itinerary: [

      {
        day: 1,

        time: "12:00PM - 04:00PM",

        title: "Arrival & Arctic Welcome",

        location: "Tromso Center",

        image: "/Images/Img Tours/photo19-Tour6.webp",

        description:
          "Arrive in Tromso and begin the experience with a relaxed introduction to the city and surrounding winter scenery before preparing for upcoming adventures."
      },

      {
        day: 2,

        time: "06:00PM - 11:30PM",

        title: "Northern Lights Observation",

        location: "Aurora Viewing Area",

        image: "/Images/Img Tours/photo19-Tour7.webp",

        description:
          "Travel to carefully selected observation areas and enjoy the possibility of witnessing the spectacular Northern Lights under clear Arctic skies."
      },

      {
        day: 3,

        time: "10:00AM - 03:30PM",

        title: "Arctic Landscape Discovery",

        location: "Mountain Route",

        image: "/Images/Img Tours/photo19-Tour8.webp",

        description:
          "Explore snowy landscapes and enjoy panoramic scenery while experiencing the calm atmosphere of Northern Norway."
      },

      {
        day: 4,

        time: "11:30AM - 05:00PM",

        title: "Winter Experience Day",

        location: "Outdoor Activity Area",

        image: "/Images/Img Tours/photo19-Tour9.webp",

        description:
          "Spend time enjoying seasonal activities and discovering more of the region’s unique winter environment."
      },

      {
        day: 5,

        time: "07:00PM - 11:00PM",

        title: "Final Aurora Evening",

        location: "Scenic Viewing Point",

        image: "/Images/Img Tours/photo19-Tour10.webp",

        description:
          "Enjoy one final evening experience with opportunities to relax, take photos, and admire the Arctic surroundings."
      },

      {
        day: 6,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo19-Tour11.webp",

        description:
          "Complete departure arrangements and conclude your Norway adventure with memorable experiences and stunning photos."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Does this package provide opportunities to experience and observe the Northern Lights during the journey?",

        answer:
          "Yes, the itinerary includes experiences designed around increasing opportunities to enjoy Northern Lights viewing conditions.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will winter conditions affect the activities included in the schedule?",

        answer:
          "Activities are planned according to seasonal conditions while maintaining a comfortable and enjoyable experience.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Is this trip suitable for travelers looking for relaxation and natural scenery?",

        answer:
          "Yes, this journey combines peaceful landscapes with memorable outdoor experiences and comfortable travel arrangements.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Watching the Northern Lights was one of the most beautiful travel experiences I’ve ever had.",

        likes: 13,

        dislikes: 0,

        hearts: 8,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Excellent planning and unforgettable scenery. Every day felt unique and enjoyable.",

        likes: 10,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},








      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






  
  

{
  id: 20,

  slug: "greece-santorini-sunset",

  title: "Greece Santorini Sunset",

      type: "Tour",
      
  image: "/Images/Img Tours/photo20.jpg",

                   location: {
      address: "Greece",
      city: "Santorini",
      country: "Greece",
    },

  category: "romantic",

  badge: "Romantic",

  tag: "Excellent",

  rating: 4.9,

  reviewsCount: 562,

  //=====================
  // Pricing
  //=====================

  price: 480,

  oldPrice: 620,

  quantity: 1,

  //=====================
  // Tour Info
  //=====================

  date: "May 15 - May 20",

  duration: 6,

  nights: 5,

  durationLabel: "6 Days Santorini Sunset Escape",

  groupSize: 16,

  places: 6,

  tourType: "Romantic Island Tour",

  language: "English",

  //=====================
  // Description
  //=====================

  description: [
    "Experience the charm of Santorini through white villages, peaceful beaches, unforgettable sunsets, and moments designed for relaxation and memorable travel.",

    "This Greece Santorini Sunset journey combines island exploration, scenic viewpoints, relaxing experiences, cultural discovery, and beautiful evening moments while enjoying one of the most iconic destinations in the Mediterranean."
  ],

  attractions: [
    "Santorini Sunset",
    "Oia Village",
    "Volcanic Beaches",
    "Island Viewpoints",
    "Traditional Streets"
  ],

  services: [
    "Airport Pickup",
    "Hotel Stay",
    "Daily Breakfast",
    "Transportation",
    "Professional Guide",
    "Island Activities"
  ],

  views: 533,

  details: {

                                    gallery: [
          "/Images/Img Tours/photo20-Tour1.webp",
          "/Images/Img Tours/photo20-Tour2.webp",
          "/Images/Img Tours/photo20-Tour3.webp",
          "/Images/Img Tours/photo20-Tour4.webp",
          "/Images/Img Tours/photo20-Tour5.webp"
        ],


    highlights: [
      "Sunset Viewing Experience",
      "Island Exploration",
      "Traditional Village Visits",
      "Scenic Photography Spots",
      "Relaxing Beach Activities",
      "Romantic Evening Atmosphere"
    ],

    included: [
      "Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Transportation Services",
      "Professional Guide",
      "Selected Island Activities"
    ],

    excluded: [
      "International Flights",
      "Travel Insurance",
      "Lunch & Dinner",
      "Personal Purchases",
      "Optional Experiences",
      "Visa Expenses"
    ],

    itinerary: [

      {
        day: 1,

        time: "11:30AM - 03:30PM",

        title: "Arrival & Island Introduction",

        location: "Santorini Center",

        image: "/Images/Img Tours/photo20-Tour6.webp",

        description:
          "Arrive in Santorini and begin your experience with hotel check-in followed by a relaxed introduction to the island atmosphere and surrounding areas."
      },

      {
        day: 2,

        time: "09:00AM - 02:30PM",

        title: "Village Discovery Experience",

        location: "Oia Village",

        image: "/Images/Img Tours/photo20-Tour7.webp",

        description:
          "Walk through traditional white streets, enjoy sea views, and discover local places known for their beauty and peaceful environment."
      },

      {
        day: 3,

        time: "12:30PM - 07:30PM",

        title: "Beach Relaxation & Sunset",

        location: "Island Coast",

        image: "/Images/Img Tours/photo20-Tour8.webp",

        description:
          "Spend time enjoying beach experiences before ending the day with one of Santorini’s famous sunset moments."
      },

      {
        day: 4,

        time: "10:30AM - 03:00PM",

        title: "Island Scenic Tour",

        location: "Viewpoint Route",

        image: "/Images/Img Tours/photo20-Tour9.webp",

        description:
          "Visit scenic locations across the island and experience breathtaking panoramic views and memorable photography opportunities."
      },

      {
        day: 5,

        time: "05:00PM - 10:00PM",

        title: "Romantic Evening Experience",

        location: "Sunset Area",

        image: "/Images/Img Tours/photo20-Tour10.webp",

        description:
          "Enjoy a relaxed evening atmosphere with beautiful surroundings and unforgettable sunset moments."
      },

      {
        day: 6,

        time: "10:30AM - 12:30PM",

        title: "Departure",

        location: "Airport Transfer",

        image: "/Images/Img Tours/photo20-Tour11.webp",

        description:
          "Complete departure arrangements and finish the Santorini experience with memorable moments and beautiful island memories."
      }

    ],

    faq: [

      {
        id: 1,

        question:
          "Is this package suitable for couples and travelers looking for a relaxing island experience?",

        answer:
          "Yes, this trip is designed to combine relaxation, scenic experiences, and romantic moments throughout the journey.",

        defaultChecked: true
      },

      {
        id: 2,

        question:
          "Will there be enough time to enjoy the beaches and famous sunset locations?",

        answer:
          "Yes, the itinerary balances organized activities with opportunities to relax and enjoy Santorini’s atmosphere.",

        defaultChecked: false
      },

      {
        id: 3,

        question:
          "Does the package include guided experiences and transportation between activities?",

        answer:
          "Yes, transportation and selected guided experiences included in the itinerary are provided.",

        defaultChecked: false
      }

    ],

    reviews: [

      {
        id: 1,

        name: "Sara Ali",

        avatar: "/Images/users/u2.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "The sunset views were unforgettable and the trip atmosphere felt relaxing from beginning to end.",

        likes: 14,

        dislikes: 0,

        hearts: 9,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      },

      {
        id: 2,

        name: "Ahmed Mohamed",

        avatar: "/Images/users/u1.jpg",

        time: new Date().toLocaleString(),

        rating: 5,

        description:
          "Beautiful organization and very enjoyable experiences across the island with excellent timing.",

        likes: 10,

        dislikes: 0,

        hearts: 6,

        replies: [],

        userActions: {
          liked: false,
          disliked: false,
          loved: false
        }
      }

    ]

  }

},

];