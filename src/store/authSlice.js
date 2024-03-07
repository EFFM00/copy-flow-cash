import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../service/authService";
import {PENDING, SUCCEEDED, FAILED} from "../constants/status"

const initialState = {
    status: null,
    userData: null,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.status =  "";
            state.userData =  null
            state.error =  null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = PENDING;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = SUCCEEDED;
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = FAILED;
                state.userData = null;
                state.error = action.error.message;
            });
    }
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;