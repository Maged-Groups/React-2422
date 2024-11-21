import { createSlice } from '@reduxjs/toolkit'

const settingSlice = createSlice({
    name: 'settingSlice',

    initialState: {
        showModal: null
    },

    reducers: {
        rdxShowModal: (state, { payload }) => {
            state.showModal = payload
        }

    }
});

export default settingSlice.reducer;

export const { rdxShowModal } = settingSlice.actions;