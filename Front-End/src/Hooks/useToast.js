// react-hot-toast
import toast from "react-hot-toast";





export function useToast()
{
    const toastError = (textToastError)=>
    {

        // toast Alert error
        toast.error(textToastError);
    }


    const toastSuccess = (textToastSuccess)=>
    {

        // toast Alert success
        toast.success(textToastSuccess);
    }

    
  return {
    toastError,
    toastSuccess
  }
}
