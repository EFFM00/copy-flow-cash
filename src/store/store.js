import { configureStore,combineReducers } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import menuSlice from "./menuSlice";
import registrationFormSlice from "./registrationFormSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import signUpSlice from "./signUpSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['auth', 'menu', 'registrationForm']
}

const rootReducer = combineReducers({
    auth: authSlice,
    menu: menuSlice,
    registrationForm: registrationFormSlice,
    signUp: signUpSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});


export default store;
