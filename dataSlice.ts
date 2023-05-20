import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { dataState } from "./types"

const initialState: dataState = {
  cardData: [],
}

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCardData: (state, action: PayloadAction<any[]>) => {
      state.cardData = action.payload
    },
  },
})

export const { setCardData } = dataSlice.actions

export default dataSlice.reducer
