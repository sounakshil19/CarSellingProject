import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchproduct } from "../../API/functions/fetchproduct"
import { useNavigate } from "react-router-dom"
import { deleteProduct } from "../../API/functions/deleteProduct"
import { createProduct } from "../../API/functions/createProduct"
import { updateProduct } from "../../API/functions/updateProduct"
import { getproductdetail } from "../../API/functions/getproductdetail"


export const useFetchProductQuery = ()=>{
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchproduct,
    })
}

export const useDeleteProductQuery = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    return useMutation({
        mutationFn: deleteProduct,
        onSuccess:(data)=>{
            if(data?.status === 200){
                queryClient.invalidateQueries({queryKey: ['products']});
                navigate("/products")
            }
        }
    })
}



export const useCreateProductQuery = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    return useMutation({
        mutationFn: createProduct,
        onSuccess:(data)=>{
            if(data?.status === 200){
                queryClient.invalidateQueries({queryKey: ['products']});
                navigate("/products")
            }
        }
    })
}

export const useProductdetailQuery = (id)=>{
    return useQuery({
        queryKey: ['products',id],
        queryFn: ()=>getproductdetail(id),
    })
}

export const updateProductQuery = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    return useMutation({
        mutationFn: updateProduct,
        onSuccess:(data)=>{
            if(data?.status === 200){
                queryClient.invalidateQueries({queryKey: ['products']});
                navigate("/products")
            }
        }
    })
}