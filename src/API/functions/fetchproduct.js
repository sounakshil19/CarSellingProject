import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const fetchproduct = async()=>{
    try {

        const {data} = await axiosinstance.post(`${endpoints.product.lists}`);
        return data.data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}