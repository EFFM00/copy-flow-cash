import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("auth/loginUser", async (userData) => {
    try {
        const url = import.meta.env.VITE_REACT_APP_API_URL_BASE
        
        const params = {
            "email": userData.email,
            "password": userData.password
        }

        const response = await axios.post(`${url}/Prod/login` , params);
        return response.data;

    } catch (error) {
        throw error.response.data.error;
    }
});