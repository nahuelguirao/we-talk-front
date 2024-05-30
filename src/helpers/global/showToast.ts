import toast from "react-hot-toast";

//Allows to visualize only one Toast at the same time
export const showToast = (message: string, options = {}) => {
  //Deletes previous toast when there is a new one
  toast.dismiss();
  toast(message, options);
};
