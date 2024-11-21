import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cartSlice',

    initialState: {
        cartItems: [],
        cartIds: []
    },

    reducers: {
        rdxAddItem: (state, { payload }) => {

            // create a copy of the received product
            const product = { ...payload } // spread operator

            console.log(product)

            const { id } = product;

            const indx = state.cartIds.indexOf(id);

            if (indx >= 0) {

                // Copy the current cartItems into new array
                const curentItems = [...state.cartItems];

                // increase the count by 1
                curentItems[indx].count++;

                // Update the cartItms
                state.cartItems = curentItems;

            } else {
                // add count to it, then push to both arrays

                product.count = 1;

                state.cartItems.push(product);
                state.cartIds.push(id);
            }
        },
        rdxRemoveItem: (state, { payload: id }) => {

            const indx = state.cartIds.indexOf(id);


            // Copy the current cartItems into new array
            const curentItems = [...state.cartItems];

            if (curentItems[indx].count > 1) {
                // decrease the count by 1
                curentItems[indx].count--;
            } else {
                // remove the item from both arrays
                curentItems.splice(indx, 1);
                state.cartIds.splice(indx, 1);
            }

            // Update the cartItms
            state.cartItems = curentItems;

        },
    },
});


export default cartSlice.reducer;

export const { rdxAddItem, rdxRemoveItem } = cartSlice.actions