import {createSlice} from "@reduxjs/toolkit";
import {summarySlice} from "./summary-slice";
import {taskSlice} from "./task-slice";

export const productSlice= createSlice({
    name: "product",
    initialState: {
        Total:0,
        AllProduct: []
    },

    reducers:{
        setTotal:(state, action)=>{
            state.Total=action.payload
        },
        setAllProduct:(state, action)=>{
            state.AllProduct=action.payload
        }
    }
})

export const {setTotal, setAllProduct} = productSlice.actions;
export default productSlice.reducer;