import { createSlice } from "@reduxjs/toolkit"

const initialState={
   empData:null,
   empFulldetailData:null
}

const empSlice=createSlice({
    name:'emp',
    initialState:initialState,
    reducers:{
        setEmpData(state,value){
            state.empData=value.payload
            console.log("EMPLOYEESS DATA FROM REDUX",state.empData);
            
        },
        setEmpFullDetailsData(state,value){
            state.empFulldetailData=value.payload
        }
    }
})
export const {setEmpData,setEmpFullDetailsData}=empSlice.actions
export default empSlice.reducer
