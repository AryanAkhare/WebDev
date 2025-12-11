import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
}
export const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state) =>{
            state.value+=1
        }
        ,
        remove:(state)=>{
            state.value-=1
        }
    }
});
export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;