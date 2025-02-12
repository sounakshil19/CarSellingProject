import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const newSignin = async(newuser)=>{
    try {

        const {data} = await axiosinstance.post(endpoints.user.signin,newuser);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}