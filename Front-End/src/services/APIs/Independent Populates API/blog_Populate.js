export const BLOG_POPULATE = {
  image: true,



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



  //NEW 
  details: {
    populate: {
      // populate: true


      /////////////////////////////////////
      /////////////////////////////////////


      //NEW
      author:{
        populate: {
          populate: true,
          
          socials: true,
        }
      },


      /////////////////////////////////////
      /////////////////////////////////////


      //NEW
      postBody:{
        populate:{
          // populate: true

          blockquote: true,

          gallery: true,

          tags: true,
        }
      },


      /////////////////////////////////////
      /////////////////////////////////////


      reviews: {
        populate: {
          // populate: true

          replies: true,

          userActions: true,
        }
      },

    },
  },

};