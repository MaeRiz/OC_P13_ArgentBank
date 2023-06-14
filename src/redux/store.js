import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice"
import accountReducer from "./slices/account.slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        accounts: accountReducer
    }
})

export default store;