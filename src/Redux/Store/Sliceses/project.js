import { createSlice } from "@reduxjs/toolkit"


const initialState={
    project:null
}

const projectSlice=createSlice({
    name:"project",
    initialState:initialState,
    reducers:{
        setProjectInfo(state,value){
            state.project=value.payload
        } 
    }
})

export const {setProjectInfo}=projectSlice.actions
export default projectSlice.reducer