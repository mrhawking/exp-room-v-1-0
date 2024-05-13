import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { bgImg } from "../../models/styleTypes";

interface IStyle {
  bg: bgImg;
}

const initialState: IStyle = {
  bg: bgImg.MAIN
}

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setStyle(state, action: PayloadAction<bgImg>) {
      state.bg = action.payload;
    }
  }
});

export default styleSlice.reducer;