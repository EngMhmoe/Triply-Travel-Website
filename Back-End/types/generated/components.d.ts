import type { Schema, Struct } from '@strapi/strapi';

export interface IndependentActivitiesDestination
  extends Struct.ComponentSchema {
  collectionName: 'components_independent_activities_destinations';
  info: {
    displayName: 'Activities_DESTINATION';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface IndependentAmenitiesHotel extends Struct.ComponentSchema {
  collectionName: 'components_independent_amenities_hotels';
  info: {
    displayName: 'Amenities_HOTEL';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface IndependentAuthorBlog extends Struct.ComponentSchema {
  collectionName: 'components_independent_author_blogs';
  info: {
    displayName: 'Author_BLOG';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    socials: Schema.Attribute.Component<
      'independent.author-socials-blog',
      false
    >;
  };
}

export interface IndependentAuthorSocialsBlog extends Struct.ComponentSchema {
  collectionName: 'components_independent_author_socials_blogs';
  info: {
    displayName: 'Author-Socials_BLOG';
  };
  attributes: {
    facebook: Schema.Attribute.Text;
    instagram: Schema.Attribute.Text;
    twitter: Schema.Attribute.Text;
    whatsapp: Schema.Attribute.Text;
  };
}

export interface IndependentAvailableRooms extends Struct.ComponentSchema {
  collectionName: 'components_independent_available_rooms';
  info: {
    displayName: 'AvailableRooms_HoteL';
  };
  attributes: {
    bathroom: Schema.Attribute.String;
    beds: Schema.Attribute.Component<'independent.beds-hotel', false>;
    freeToiletries: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pricePerDay: Schema.Attribute.Decimal;
    size: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    wifi: Schema.Attribute.String;
  };
}

export interface IndependentBedsHotel extends Struct.ComponentSchema {
  collectionName: 'components_independent_beds_hotels';
  info: {
    displayName: 'Beds_HOTEL';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    type: Schema.Attribute.String;
  };
}

export interface IndependentBlockquoteBlog extends Struct.ComponentSchema {
  collectionName: 'components_independent_blockquote_blogs';
  info: {
    displayName: 'Blockquote_BLOG';
  };
  attributes: {
    author: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface IndependentDestinationInfo extends Struct.ComponentSchema {
  collectionName: 'components_independent_destination_infos';
  info: {
    displayName: 'Destination_Info';
  };
  attributes: {
    airport: Schema.Attribute.String;
    averageStay: Schema.Attribute.Integer;
    bestSeason: Schema.Attribute.String;
    climate: Schema.Attribute.String;
    currency: Schema.Attribute.String;
    emergencyNumber: Schema.Attribute.Integer;
    language: Schema.Attribute.String;
    timezone: Schema.Attribute.String;
    transport: Schema.Attribute.String;
    visaRequired: Schema.Attribute.Boolean;
  };
}

export interface IndependentDetailsBlog extends Struct.ComponentSchema {
  collectionName: 'components_independent_details_blogs';
  info: {
    displayName: 'details_BLOG';
  };
  attributes: {
    author: Schema.Attribute.Component<'independent.author-blog', false>;
    postBody: Schema.Attribute.Component<'independent.post-body-blog', false>;
    reviews: Schema.Attribute.Component<'shared.reviews', true>;
  };
}

export interface IndependentDetailsCar extends Struct.ComponentSchema {
  collectionName: 'components_independent_details_cars';
  info: {
    displayName: 'details_CAR';
  };
  attributes: {
    faq: Schema.Attribute.Component<'shared.faq', true>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    highlights: Schema.Attribute.JSON;
    rentalPolicies: Schema.Attribute.JSON;
    reviews: Schema.Attribute.Component<'shared.reviews', true>;
  };
}

export interface IndependentDetailsDestination extends Struct.ComponentSchema {
  collectionName: 'components_independent_details_destinations';
  info: {
    displayName: 'details_DESTINATION';
  };
  attributes: {
    activities: Schema.Attribute.Component<
      'independent.top-attractions-destination',
      true
    >;
    destinationInfo: Schema.Attribute.Component<
      'independent.destination-info',
      false
    >;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    highlights: Schema.Attribute.JSON;
    reviews: Schema.Attribute.Component<'shared.reviews', true>;
    topAttractions: Schema.Attribute.Component<
      'independent.top-attractions-destination',
      true
    >;
    travelTips: Schema.Attribute.JSON;
  };
}

export interface IndependentDetailsFood extends Struct.ComponentSchema {
  collectionName: 'components_independent_details_foods';
  info: {
    displayName: 'details_FOOD';
  };
  attributes: {
    faq: Schema.Attribute.Component<'shared.faq', true>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    highlights: Schema.Attribute.JSON;
    ingredients: Schema.Attribute.JSON;
    menuInfo: Schema.Attribute.Component<'independent.menu-info-food', false>;
    reviews: Schema.Attribute.Component<'shared.reviews', true>;
  };
}

export interface IndependentDetailsHotel extends Struct.ComponentSchema {
  collectionName: 'components_independent_details_hotels';
  info: {
    displayName: 'details_HOTEL';
  };
  attributes: {
    amenities: Schema.Attribute.Component<'independent.amenities-hotel', true>;
    availableRooms: Schema.Attribute.Component<
      'independent.available-rooms',
      true
    >;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    hotelInfo: Schema.Attribute.Component<'independent.hotel-info', false>;
    reviews: Schema.Attribute.Component<'shared.reviews', true>;
  };
}

export interface IndependentHotelInfo extends Struct.ComponentSchema {
  collectionName: 'components_independent_hotel_infos';
  info: {
    displayName: 'HotelInfo_HOTEL';
  };
  attributes: {
    cancellation: Schema.Attribute.String;
    extraPeople: Schema.Attribute.String;
    hotelStars: Schema.Attribute.Integer;
    hotelType: Schema.Attribute.String;
    maxGuests: Schema.Attribute.Integer;
    maxRooms: Schema.Attribute.Integer;
    minimumStay: Schema.Attribute.Integer;
    safetySecurity: Schema.Attribute.String;
    securityDeposit: Schema.Attribute.Integer;
  };
}

export interface IndependentMenuInfoFood extends Struct.ComponentSchema {
  collectionName: 'components_independent_menu_info_foods';
  info: {
    displayName: 'menuInfo_FOOD';
  };
  attributes: {
    allergens: Schema.Attribute.JSON;
    calories: Schema.Attribute.Integer;
    carbs: Schema.Attribute.Integer;
    cookingStyle: Schema.Attribute.String;
    dishWeight: Schema.Attribute.Integer;
    fat: Schema.Attribute.Integer;
    mealType: Schema.Attribute.String;
    preparationTime: Schema.Attribute.Integer;
    protein: Schema.Attribute.Integer;
    recommendedDrink: Schema.Attribute.String;
    servingSize: Schema.Attribute.Integer;
    servingTemperature: Schema.Attribute.String;
    spicyLevel: Schema.Attribute.String;
  };
}

export interface IndependentPostBodyBlog extends Struct.ComponentSchema {
  collectionName: 'components_independent_post_body_blogs';
  info: {
    displayName: 'PostBody_BLOG';
  };
  attributes: {
    blockquote: Schema.Attribute.Component<
      'independent.blockquote-blog',
      false
    >;
    description: Schema.Attribute.JSON;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    tags: Schema.Attribute.Relation<'oneToMany', 'api::feature.feature'>;
  };
}

export interface IndependentTopAttractionsDestination
  extends Struct.ComponentSchema {
  collectionName: 'components_independent_top_attractions_destinations';
  info: {
    displayName: 'TopAttractions  AND activities - DESTINATION';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    duration: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    price: Schema.Attribute.Decimal;
    rating: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface SharedDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_descriptions';
  info: {
    displayName: 'Description';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_details';
  info: {
    displayName: 'details_TOUR';
  };
  attributes: {
    excluded: Schema.Attribute.JSON;
    faq: Schema.Attribute.Component<'shared.faq', true>;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    highlights: Schema.Attribute.JSON;
    included: Schema.Attribute.JSON;
    itinerary: Schema.Attribute.Component<'shared.itinerary', true>;
    reviews: Schema.Attribute.Component<'shared.reviews', true>;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    defaultChecked: Schema.Attribute.Boolean;
    question: Schema.Attribute.String;
  };
}

export interface SharedItinerary extends Struct.ComponentSchema {
  collectionName: 'components_shared_itineraries';
  info: {
    displayName: 'Itinerary';
  };
  attributes: {
    day: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    location: Schema.Attribute.String;
    time: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    country: Schema.Attribute.String;
  };
}

export interface SharedReplies extends Struct.ComponentSchema {
  collectionName: 'components_shared_replies';
  info: {
    displayName: 'Replies';
  };
  attributes: {
    message: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    time: Schema.Attribute.DateTime;
  };
}

export interface SharedReviews extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    description: Schema.Attribute.Text;
    dislikes: Schema.Attribute.Integer;
    hearts: Schema.Attribute.Integer;
    likes: Schema.Attribute.Integer;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Decimal;
    replies: Schema.Attribute.Component<'shared.replies', true>;
    time: Schema.Attribute.DateTime;
    userActions: Schema.Attribute.Component<'shared.user-actions', false>;
  };
}

export interface SharedUserActions extends Struct.ComponentSchema {
  collectionName: 'components_shared_user_actions';
  info: {
    displayName: 'UserActions';
  };
  attributes: {
    disliked: Schema.Attribute.Boolean;
    liked: Schema.Attribute.Boolean;
    loved: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'independent.activities-destination': IndependentActivitiesDestination;
      'independent.amenities-hotel': IndependentAmenitiesHotel;
      'independent.author-blog': IndependentAuthorBlog;
      'independent.author-socials-blog': IndependentAuthorSocialsBlog;
      'independent.available-rooms': IndependentAvailableRooms;
      'independent.beds-hotel': IndependentBedsHotel;
      'independent.blockquote-blog': IndependentBlockquoteBlog;
      'independent.destination-info': IndependentDestinationInfo;
      'independent.details-blog': IndependentDetailsBlog;
      'independent.details-car': IndependentDetailsCar;
      'independent.details-destination': IndependentDetailsDestination;
      'independent.details-food': IndependentDetailsFood;
      'independent.details-hotel': IndependentDetailsHotel;
      'independent.hotel-info': IndependentHotelInfo;
      'independent.menu-info-food': IndependentMenuInfoFood;
      'independent.post-body-blog': IndependentPostBodyBlog;
      'independent.top-attractions-destination': IndependentTopAttractionsDestination;
      'shared.description': SharedDescription;
      'shared.details': SharedDetails;
      'shared.faq': SharedFaq;
      'shared.itinerary': SharedItinerary;
      'shared.location': SharedLocation;
      'shared.replies': SharedReplies;
      'shared.reviews': SharedReviews;
      'shared.user-actions': SharedUserActions;
    }
  }
}
