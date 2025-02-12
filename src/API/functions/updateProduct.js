import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";

export const updateProduct = async(name)=>{
    try {

        const {data} = await axiosinstance.post(`${endpoints.product.update}`,name);
        return data;
        
    } catch (error) {
        console.log(error);
    }
}