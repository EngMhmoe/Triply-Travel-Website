//import Stor usePagination
import { usePagination } from "../../../../Store/APIS/usePaginationStor";


export default function useCarFilterCards(setFilterCards) {

    const { pagination , setPagination } = usePagination();





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*=================================================================
Step 3 ==> START ==>  Function filter { NEW Car } ==> Ok
===================================================================*/

    const FilteredBrand = (branName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.brand === branName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is branName
            if(prev.brands.includes(branName))
            {
                return {
                    ...prev,

                    brands: prev.brands.filter(b => b !== branName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return {
                ...prev,

                brands: [...prev.brands , branName]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredCondition = (conditionName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.condition === conditionName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is conditionName
            if(prev.conditions.includes(conditionName))
            {
                return {
                    ...prev,

                    conditions: prev.conditions.filter(c => c !== conditionName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return {
                ...prev,

                conditions: [...prev.conditions , conditionName]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredListedBy = (listedByName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.listedBy === listedByName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is listedByName
            if(prev.listedBy.includes(listedByName))
            {
                return {
                    ...prev,

                    listedBy: prev.listedBy.filter(l => l !== listedByName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return {
                ...prev,

                listedBy: [...prev.listedBy , listedByName]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredFuel = (fuelName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.fuel === fuelName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is fuelName
            if(prev.fuels.includes(fuelName))
            {
                return {
                    ...prev,

                    fuels: prev.fuels.filter(f => f !== fuelName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return {
                ...prev,

                fuels: [...prev.fuels , fuelName]
            }

        })
    };



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



    const FilteredTransmission = (transmissionName) => {

        setPagination({
            ...pagination,
            page: 1,
        });


//++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++


        /*========================================================

            const resultFilter = GetALLDataPage.filter(
                (item) => item.transmission === transmissionName,
            );

            setALLFilteredData(resultFilter);

        ==========================================================*/


// OR ==========================================================
// OR ==========================================================


        // NEW Filter Stripe ==> 
        setFilterCards(prev => {

            //Step 1 ==> Check Is transmissionName
            if(prev.transmissions.includes(transmissionName))
            {
                return {
                    ...prev,

                    transmissions: prev.transmissions.filter(f => f !== transmissionName)
                }
            }


            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////


            //Step 2 ==> Add
            return {
                ...prev,

                transmissions: [...prev.transmissions , transmissionName]
            }

        })
    };

/*=================================================================
Step 3 ==> END ==>  Function filter { NEW Car } ==> OK
===================================================================*/





    return {
        FilteredBrand,
        //
        FilteredCondition,
        //
        FilteredListedBy,
        //
        FilteredFuel,
        //
        FilteredTransmission,
    }
}
