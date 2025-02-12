import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const getproductdetail = async(id)=>{
    try {

        const {data} = await axiosinstance.get(endpoints.product.pdetail(id));
        return data;
        
    } catch (error) {
        console.log(error);
    }
}