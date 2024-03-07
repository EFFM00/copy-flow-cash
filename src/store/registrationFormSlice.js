import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isView: false
}

const registrationFormSlice = createSlice({
    name: "registrationForm",
    initialState,
    reducers: {
        handlerRegistrationForm: (state) => {
            state.isView = !state.isView
        },
        changeToView: (state) => {
            state.isView = true
        },
        changeToForm: (state) => {
            state.isView = false
        },
    }
});

export const {handlerRegistrationForm, changeToView, changeToForm} = registrationFormSlice.actions;

export default registrationFormSlice.reducer;