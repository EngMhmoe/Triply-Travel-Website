//import Stor usePagination
import { usePagination } from "../../../../Store/APIS/usePaginationStor";


export default function useTourFilterCards(setFilterCards) {

    const { pagination , setPagination } = usePagination();





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*=================================================================
Step 1 ==> START ==>  Function filter { NEW Tour } ==> OK
===================================================================*/

    const FilterDuration = (durationDay) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*====================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.duration === durationDay,
            );

            setALLFilteredData(resultFilter);
            
        =======================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==>  Check IS True  ===> [4,5].includes(4) == True IS [5]
            if(prev.durations.includes(durationDay))
            {
                const resultALLfilters = {
                    ...prev,

                    durations: prev.durations.filter(d => d !== durationDay)
                }
                return resultALLfilters;
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> IF Step 2 Check IS False ==> Add
            const resultDurations = {
                ...prev,

                durations: [...prev.durations , durationDay]
            };
            return resultDurations;

        })
    }



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilterAttraction = (attractionName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++



        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Check True == ["ahmed","Ali"].includes("Ali")  ==> Check False ==  ["ahmed","Ali"].includes("Omar")
            if (prev.attractions.includes(attractionName)) {
    
                return {
                    ...prev,

                    attractions: prev.attractions.filter(item => item !== attractionName),
                };
    
            }

            
            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Add
            return {
                ...prev,

                attractions: [...prev.attractions , attractionName]
            };

        });

    };

/*=================================================================
Step 1 ==> END ==>  Function filter { NEW Tour }
===================================================================*/





    return {
        FilterDuration,
        //
        FilterAttraction,
    }
}
