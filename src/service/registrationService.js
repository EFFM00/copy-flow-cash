import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk("signUp/createUser", async (userData) => {
    try {
        const url = import.meta.env.VITE_REACT_APP_API_URL_BASE
        
        const params = {
            "userName": userData.first_name,
            "lastName": userData.last_name,
            "phone": userData.phone,
            "document": userData.document_id,
            "email": userData.email,
            "password": userData.password,
        }

        const response = await axios.post(`${url}/Prod/sign-in` , params);
        return response.data;

    } catch (error) {
        throw error.response.data.error;
    }
});