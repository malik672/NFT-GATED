import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000, // Hide the notification after 3 seconds
  });
};

export default Notification;
