import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const profiledetails = async()=>{
    try {

        const {data} = await axiosinstance.get(endpoints.user.profile);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}