import { ToastContainer, toast } from "react-toastify";

export const notifyWarning = (message: string) =>
	toast.warning(message, {
		position: "bottom-left",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
