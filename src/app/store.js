import { configureStore } from '@reduxjs/toolkit';
import productreducer from '../features/product/produitSlice'

export default configureStore({
    reducer: {
        product: productreducer,
        
    },
    
});
