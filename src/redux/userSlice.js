import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice(
    {
        name: 'userSlice',

        initialState: {
            user: null,
            loggedin: false
        },
        reducers: {
            rdxLogin: (state, { payload }) => {
                state.user = payload;
                state.loggedin = true
            },
            
            rdxLogout: (state) => {
                state.user = null;
                state.loggedin = false
            },

        }
    }
);

export default userSlice.reducer;

export const { rdxLogin, rdxLogout } = userSlice.actions;