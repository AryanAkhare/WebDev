import { createSlice } from "@reduxjs/toolkit";

// Cart slice will hold an array of product objects.
const initialState = [];

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((p) => p.id !== action.payload);
        },
    },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;