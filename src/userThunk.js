import {  createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser=createAsyncThunk(
    'user/fetchUser',async(_,thunkAPI)=>{
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await response.json();
            return data   
        }
        catch(err)
        {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)