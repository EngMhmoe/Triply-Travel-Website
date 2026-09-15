export function BuildAPI_FilterSort(sort) {

     /////////////////////////////////////////////
    // Sort
    /////////////////////////////////////////////

    switch (sort) {

        case "priceLow":
            return sort = ["price:asc"];

        case "priceHigh":
            return sort = ["price:desc"];

        case "topRated":
            return sort = ["rating:desc"];

        default:
            return [];
    }
}