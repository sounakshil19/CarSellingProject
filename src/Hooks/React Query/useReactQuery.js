import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { newSignin } from "../../API/functions/newSignin"
import { newSignup } from "../../API/functions/newSignup"
import { profiledetails } from "../../API/functions/profileDetails"

export const useSigninQuery = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation({
      mutationFn : newSignin,
      onSuccess: (data) => {
        if (data?.status === 200) {
          localStorage.setItem('token', data?.token)
          localStorage.setItem('user', data?.data?.first_name)
          localStorage.setItem('profile', data?.data?.profile_pic)
          queryClient.invalidateQueries({ queryKey: ['user'] })
          navigate('/')
        }
      },
    }) 
}

export const newSignupQuery = ()=>{
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: newSignup,
        onSuccess:(data)=>{
            if(data?.status === 200){
                queryClient.invalidateQueries({queryKey:['user']});
                navigate("/login")
            }
        }
    })
}

export const getProfileDetailsQuery = ()=>{
  return useQuery({
    queryKey: ['users'],
    queryFn: profiledetails,
  })
}