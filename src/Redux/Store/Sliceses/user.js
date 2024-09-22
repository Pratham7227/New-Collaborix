import { createSlice } from "@reduxjs/toolkit"


const initialState={
    userData:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
    token:localStorage.getItem('token')?JSON.parse(localStorage.getItem('token')):null,
}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setUserData(state,value){
            state.userData=value.payload
            console.log("This is redux store data is",state.userData);
            
        },
        setToken(state,value){
            state.token=value.payload
            console.log("This is redux store data token is",state.token);
        },
        
    }
})
export const {setUserData,setToken}=userSlice.actions
export default userSlice.reducer