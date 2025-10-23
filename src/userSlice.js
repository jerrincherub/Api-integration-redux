import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userThunk";
const initialState={
    users:[],
    loading:false,
    error:null ,  
};
 const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{
        clearUser:(state)=>{
            state.users=[];
            state.error=null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users=action.payload;
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload ;
        })

    }

}
)
export const {clearUser}=usersSlice.actions;
export default usersSlice.reducer;