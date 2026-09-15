//import Navigate in react-router-dom
import { useNavigate } from "react-router-dom";

export function useAddToDetailsPage({data , navigatePath})
{
    // navigate
    const navigate = useNavigate();

    function AddToDetailsPage(SelectItemId)
    {
        const newSelectItem = data.find((item) => item.documentId === SelectItemId);
    
        localStorage.setItem("Details_Page", JSON.stringify(newSelectItem));
    
        navigate(`/${navigatePath}Details_page/${SelectItemId}`);

        //NEW
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      
  return {
    AddToDetailsPage,
  };
}  