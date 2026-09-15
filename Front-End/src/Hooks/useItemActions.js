/*======================================================================
 start Step ( 1 ) ==>  imports
========================================================================
*/
import { useToast } from "./useToast";
/*======================================================================
 end Step ( 1 ) ==>  imports
========================================================================
*/





export function useItemActions(
{
//
get,
set,

//
setModal,

//
selectItemId,
setSelectItemId,

//
textToast,
conditionConfirmDelete,
}
) {

/*======================================================================
  start Step ( 2 ) ==>  states
========================================================================
*/
  //modal add || delete == NO


 //Select Item Id == NO

 //Hook is useToast
   const { toastError } = useToast();
/*======================================================================
  end Step ( 2 ) ==>  states
========================================================================
*/





////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;





/*======================================================================
  start Step ( 3 ) ==>  Functions
========================================================================
*/
// Function ❌ Show Model Delete == ( 1 )
  function ShowModelDelete(selectItemId) {
    //Show Model delete
    setModal("delete");



    //set Select Item Id
    setSelectItemId(selectItemId);
  }



/////////////////////////////////////////////////////////////////,
/////////////////////////////////////////////////////////////////,



// Function ❌ Delete item == ( 2 )
  function DeleteItem() {
    const deleteItem = get.filter((item) => item.documentId !== selectItemId);

    set(deleteItem);
  }



/////////////////////////////////////////////////////////////////,
/////////////////////////////////////////////////////////////////,



// Function ❌ DeleteALLItems == ( 3 )
  function DeleteALLItems() {
    const deleteALLItems = get.filter((item) => item !== item);

    set(deleteALLItems);
  }



/////////////////////////////////////////////////////////////////,
/////////////////////////////////////////////////////////////////,

// Function ❌ Confirm Delete == ( 4 )
  const confirmDelete = () => 
  {
    if(conditionConfirmDelete == "Item")
    {
      // Cal Function ❌ DeleteItem
      DeleteItem();
    }
    else
    {
      // Cal Function ❌ DeleteALLItems
      DeleteALLItems();
    }

    // toast Alert success
    toastError(textToast);


    // block model
    setModal(null);
  };
/*======================================================================
  end Step ( 3 ) ==>  Functions
========================================================================
*/




////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;
////////////////////////////////////////////////////////////////////////////////////;


  return {
    ShowModelDelete,
    confirmDelete,
    //
    DeleteItem,
  };
}
