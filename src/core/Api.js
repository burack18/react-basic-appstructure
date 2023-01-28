import axios from "axios";
import { toastMessage } from "./Toastify/toastMessage";

export const api=axios.create({
    baseURL:process.env.REACT_APP_APIURL
})

api.interceptors.request.use((conf)=>{
    const token=localStorage.getItem('token');
    if (token!==null && token!=='' ) {
        conf.headers={token}
    }
    return conf;
})

api.interceptors.response.use(conf=>{
    toastMessage.success("Request Successfull")
    return {isSuccess:true,data:conf.data}
},err=>{
        toastMessage.error('🦄 Server Error!');
        console.log(err)
        return {isSuccess:false,message:err.message}
})


