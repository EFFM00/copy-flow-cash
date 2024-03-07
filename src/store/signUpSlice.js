import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../service/registrationService";
import {PENDING, SUCCEEDED, FAILED} from "../constants/status"

const initialState = {
    status: null,
    result: null,
    error: null
};

const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        cleanStates: (state) => {
            state.status = "";
            state.result = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = PENDING;
                state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = SUCCEEDED;
                state.result = action;
                state.error = null;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = FAILED;
                state.result = null;
                state.error = action.error.message;
            });
    }
});

export const {cleanStates} = signUpSlice.actions;

export default signUpSlice.reducer;