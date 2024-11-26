import { configureStore } from "@reduxjs/toolkit";

import { loadingSlice } from "./loading/loadingslice";
import { adminSlice } from "./admin/adminSlice";


const store = configureStore ({
    reducer: {
        loading: loadingSlice.reducer,
        admin:    adminSlice.reducer
    }
}) 

export default store