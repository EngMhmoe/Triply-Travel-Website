//import Stor usePagination
import { usePagination } from "../../../../Store/APIS/usePaginationStor";


export default function useHotelFilterCards(setFilterCards) {

    const { pagination , setPagination } = usePagination();





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*=================================================================
Step 2 ==> START ==>  Function filter { NEW Hotel } ==> OK
===================================================================*/

    const FilterStar = (starName) => {
    
        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*====================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.details.hotelInfo.hotelStars === starName,
            );

            setALLFilteredData(resultFilter);
            
        =======================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {
            
        //Step 1 ==>  Check IS starName  ===> [4,5].includes(4) == True IS [5] ==> Delete 4
        
// [] == 2 ==> false == [2]
// [2] == 3 ==> false == [2,3]
// [2,3] == 5 ==> false == [2,3,5]
// [2,3,5] == 2 ==> false == [2,3,5].filter(s => s !== 2)  ==> [3,5] 

            if(prev.stars.includes(starName))
            {
                const resultStars = {
                    ...prev,

                    stars: prev.stars.filter(s => s !== starName)
                }
                
                return resultStars
            }



            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> IF Step 2 Check IS False ==> Add
            const resultStars = {
                ...prev,

                stars: [...prev.stars , starName],
            } 
            return resultStars;
        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilterFacility = (facilityName) => {
        
        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        setFilterCards(prev => {

            if(prev.facilities.includes(facilityName))
            {
                const resultFacilities = {
                    ...prev,

                    facilities: prev.facilities.filter(s => s !== facilityName)
                }         
                return resultFacilities;
            }



            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> IF Step 2 Check IS False ==> Add
            const resultFacilities = {
                ...prev,

                facilities: [...prev.facilities , facilityName],
            } 
            return resultFacilities;

        })
    };

/*=================================================================
Step 2 ==> END ==>  Function filter { NEW Hotel }
===================================================================*/





    return {
        FilterStar,
        //
        FilterFacility,
    }
}
