import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const createProduct = async(name)=>{
    try {

        const {data} = await axiosinstance.post(`${endpoints.product.create}`,name);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}