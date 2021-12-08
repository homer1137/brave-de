import { configureStore } from "@reduxjs/toolkit";
import { paymentsApi } from "./paymentsApi";

export const store = configureStore ({
    reducer: {
        [paymentsApi.reducerPath]: paymentsApi.reducer,
    },
    middleware: (getDefaultMiddlware)=> getDefaultMiddlware().concat(paymentsApi.middleware)
});