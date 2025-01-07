import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import mycartSlice from "./myCartToggler";
const store =configureStore({
    reducer:{cart:cartSlice.reducer,mycart:mycartSlice.reducer}
})
export default store