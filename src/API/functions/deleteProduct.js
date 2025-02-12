import { axiosinstance } from "../axiosinstance/axiosinstance";
import { endpoints } from "../endpoints/endpoints";


export const deleteProduct = async(id)=>{
    try {

        // const { data } = await axiosinstance.delete(endpoints.product.delete);
        const { data } = await axiosinstance.post(`${endpoints.product.delete}`,{id});
        return data;
        
    } catch (error) {
        console.log(error);
    }
}