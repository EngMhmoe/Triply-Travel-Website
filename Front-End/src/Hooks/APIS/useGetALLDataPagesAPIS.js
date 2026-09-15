//import React 
import { useEffect, useState } from "react";

//import axios API
import axios from "axios";

//import services BASE_URL
import { BASE_URL } from "../../services/APIs/server_URL";

//import services APIS {Build API Params}
import { BuildAPI_Params } from "../../services/APIs/BuildAPI_Params";

//import Stor usePagination
import { usePagination } from "../../Store/APIS/usePaginationStor";

export function useGetALLDataPagesAPIS({
    endpoint= "" , 
    populate={} , 
    customPageFilters = {},
    pageSize = 6,
}){



/*=================================================================
Step 1 ==> START ==>  Clone All Data Page ==>  ALL Data [Section Left]
===================================================================*/
    const [GetALLDataPageSpider , setALLDataPageSpider] = useState([]);



    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////



/*=================================================================
Step 2 ==> START ==>  Clone Filtered Data Page ==>  ALL Data [Section Right]
===================================================================*/
    const [GetALLFilteredDataCards , setALLFilteredDataCards] = useState([]);



    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////



/*=================================================================
Step 3 ==> START ==>  State [ Filters ] AND [ Paginations ] APIS
===================================================================*/
    const [ALLfilters, setFilters] = useState({
        //Step 1 ==> Shared Filters API
        categories: [],
        price: null,
        languages: [],
        reviewScores: [],
        search: "",
        sort: "",

        
        
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        //Step 2 ==> Independent Filters API
        
        // Home Page
        badge: "",
        
        // Tour
        durations: [],
        attractions: [],

        // Hotel
        stars: [],
        facilities: [],

        // Car
        brands: [],
        conditions: [],
        listedBy: [],
        fuels: [],
        transmissions: [],

        // Food
        cuisineType: [],
        ratings: [],
        servingSize: [],
        spicyLevel: [],

        // Blog
        tag: "",
        category: "",
    });


    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////


    const {

        pagination,

        setPagination
    } = usePagination();





{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}






/*=================================================================
Step 4 ==> START ==>  Get AND Set ALL Data API Spider { Section Left }
===================================================================*/
    useEffect(() => {
        axios
            .get(
                `${BASE_URL}/api/${endpoint}`,
                {
                    params: {
                    populate: populate,
                    },
                },
            )
            .then((response) => {
                const allData = response?.data?.data;

                setALLDataPageSpider(allData);
            })
            .catch((error) => console.log(error));
        
        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////

    }, []);






{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}






/*=================================================================
Step 6 ==> START ==>  Get AND Set ALL Data API Cards { Section Right }
===================================================================*/
    useEffect(() => {

        //params API HOOK
        const params = BuildAPI_Params({
            populate,
            ALLfilters,
            customFilters: customPageFilters({ALLfilters}) || {},

            pagination: {
                ...pagination,

                pageSize,
            },
        });



        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////



        // console.log(params)
        // console.log(JSON.stringify(params, null, 2));


        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////


        axios
            .get(
                // "http://localhost:1337/api/tours?populate=*"
                // "http://localhost:1337/api/tours?populate=*populate[details][populate]=*",
                // "http://localhost:1337/api/tours",
                `${BASE_URL}/api/${endpoint}`,
                {
                    // params: {
                    //         populate: TOUR_POPULATE,

                    //         ...(DataFilterCategory.length > 0 && {
                    //             filters: {
                    //                 category: {
                    //                     // $eq: "Adventure",
                    //                     $in: DataFilterCategory,
                    //                 },
                    //             },
                    //         }),
                    // },


                    /////////////////////////////////////////////////////////
                    /////////////////////////////////////////////////////////

                    params
                },
            )
            .then((response) => {
                const allData = response?.data?.data;

                setALLFilteredDataCards(allData);

                console.log(endpoint);
                console.log(allData);
                
                setPagination(response?.data?.meta.pagination);

            })
            .catch((error) => console.log(error));

            
            ///////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////

            
        }, [ALLfilters , pagination.page ]);






{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}






    return {
        GetALLDataPageSpider,
        //
        GetALLFilteredDataCards,
    
        ////////////////////////////////////
        ////////////////////////////////////
    
        setFilters,
    };
} 