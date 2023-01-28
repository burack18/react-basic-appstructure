import { Slide, toast } from "react-toastify";

export const toastMessage = {
    error: (errorMessage) => toast.error(errorMessage, toastConfig),
    success:(successMessage)=>toast.success(successMessage, toastConfigSuccess)
}

const toastConfig={
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
    theme: "light",
    transition:Slide
}
const toastConfigSuccess={
    ...toastConfig,
    position:'top-right'
}


