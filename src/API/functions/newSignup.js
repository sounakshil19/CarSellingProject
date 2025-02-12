
import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const newSignup = async(newuser)=>{
    try {

        const {data} = await axiosinstance.post(endpoints.user.singup,newuser);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}