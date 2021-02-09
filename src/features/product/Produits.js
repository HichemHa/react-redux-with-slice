import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addproduct, deleteproduct, filterproduct,editproduct } from './produitSlice';

function Produits() {
    const prod = useSelector((state => state.product));
    const dispatch = useDispatch();
    const newproduct = {
             name: 'my add product',
                id: Math.random(),
                description:'hello first product add it'
    }
    const eproduct = {
             name: '**************',
                id: 2,
                description:'*****************'
    }
    const onClickHandler = () => {
        dispatch(filterproduct("produit 1"))
    }
    const onClickHandlerAdd = () => {
        dispatch(addproduct(newproduct))
    }
    const onClickHandlerdel = () => {
        dispatch(deleteproduct(1))
    }
    const onClickHandleredit = () => {
        dispatch(editproduct(eproduct))
    }
    return (
        <div>
            hello
            <button onClick={onClickHandler}>
                filter
               </button>
            <button onClick={onClickHandlerAdd}>
                add
               </button>
            <button onClick={onClickHandlerdel}>
                delete
               </button>
            <button onClick={onClickHandleredit}>
                edit
               </button>
        </div>
    )
}
export default Produits
