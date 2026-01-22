import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : JSON.parse(localStorage.getItem('wishlist')) || [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers : {
        addtoWishlist : (state, action) => {
           const item = action.payload
           const existing = state.items.find(i => i.id === item.id);
           if(existing) {
            existing.quantity += item.quantity
           }else {
            state.items.push(item)
           }
           localStorage.setItem('wishlist', JSON.stringify(state.items))
        },
        wishlistUpdateQuantities: (state, action) =>{
            const {id, quantity} = action.payload;
            const product = state.items.find(i => i.id === id);
            if(product){
                product.quantity = quantity;
            }
            localStorage.setItem('wishlist', JSON.stringify(state.items))
        },
        removeWishlist: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload)
            localStorage.setItem('wishlist', JSON.stringify(state.items))
        }
    }
})

export const { addtoWishlist, wishlistUpdateQuantities, removeWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer