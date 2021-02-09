import { createSlice } from '@reduxjs/toolkit';

const initialState = {
product:
        [
            {
                name: 'produit 1',
                id: 1,
                description:'hello first product'
            },
            {
                name: 'produit 2',
                id: 2,
                description:'hello scont product'
            },
        ],
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addproduct(state, action) {
            return {
                ...state,
                product:[...state.product,action.payload]
            }
        },
        filterproduct(state, action) {
            return {
                
                product: state.product.filter(el => el.name == action.payload)
            }
        },
        deleteproduct(state, action) {
            return {
                product: state.product.filter(el => el.id !== action.payload)
            }
        },
        editproduct(state, action) {
            return {
                
                product: state.product.map(el => el.id == action.payload.id ? { ...el, name : action.payload.name,description:action.payload.description }:el)
            }
        }

    },
    
});

export const { addproduct, filterproduct, deleteproduct,editproduct } = productSlice.actions;

export default productSlice.reducer;