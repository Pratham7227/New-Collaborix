import { configureStore } from "@reduxjs/toolkit";

import userSlice from '../../Redux/Store/Sliceses/user'
import empSlice from '../../Redux/Store/Sliceses/emp'
import projectSlice from '../Store/Sliceses/project'
export const store =configureStore({
    reducer:{
        user:userSlice,
        emp:empSlice,
        project:projectSlice
    }
})