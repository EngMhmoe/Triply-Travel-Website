//import Stor usePagination
import { usePagination } from "../../../../Store/APIS/usePaginationStor";


export default function useFoodFilterCards(setFilterCards) {

    const { pagination , setPagination } = usePagination();





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*=================================================================
Step 4 ==> START ==>  Function filter { NEW Food } ==> OK
===================================================================*/

    const FilteredCuisineType = (cuisineTypeName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.cuisine === cuisineTypeName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is cuisineTypeName
            if(prev.cuisineType.includes(cuisineTypeName))
            {
                return {
                    ...prev,

                    cuisineType: prev.cuisineType.filter(c => c !== cuisineTypeName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return{
                ...prev,

                cuisineType: [...prev.cuisineType , cuisineTypeName]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredRating = (ratingNumber) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.rating >= RatingNumber,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is ratingNumber
            if(prev.ratings.includes(ratingNumber))
            {
                return {
                    ...prev,

                    ratings: prev.ratings.filter(c => c !== ratingNumber)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return{
                ...prev,

                ratings: [...prev.ratings , ratingNumber]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredServingSize = (servingSizeNumber) => {
            
        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.details.menuInfo.servingSize === ServingSizeNumber,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is servingSizeNumber
            if(prev.servingSize.includes(servingSizeNumber))
            {
                return {
                    ...prev,

                    servingSize: prev.servingSize.filter(c => c !== servingSizeNumber)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return{
                ...prev,

                servingSize: [...prev.servingSize , servingSizeNumber]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredSpicyLevel = (spicyLevelName) => {
                
        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.details.menuInfo.spicyLevel === spicyLevelName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is spicyLevelName
            if(prev.spicyLevel.includes(spicyLevelName))
            {
                return {
                    ...prev,

                    spicyLevel: prev.spicyLevel.filter(c => c !== spicyLevelName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return{
                ...prev,

                spicyLevel: [...prev.spicyLevel , spicyLevelName]
            }

        })
    };

/*=================================================================
Step 4 ==> END ==>  Function filter { NEW Food }
===================================================================*/





    return {
        FilteredCuisineType,
        //
        FilteredRating,
        //
        FilteredServingSize,
        // 
        FilteredSpicyLevel,
    }
}
