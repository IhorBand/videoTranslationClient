import { ToastContainer, toast } from "react-toastify";

export const notifySuccess = (message: string) =>
	toast.success(message, {
		position: "bottom-left",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
