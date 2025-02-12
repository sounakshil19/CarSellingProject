import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState:{
        isloggedin : false,
        // token: null,

    },
    reducers:{
        login:(state)=>{
            state.isloggedin = true
        },
        logout:(state)=>{
            state.isloggedin = false,
            localStorage.clear()

        }
    }

})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;