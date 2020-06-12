import { createSlice } from "@reduxjs/toolkit";

const heroeSlice = createSlice({
  name: "heroes",
  initialState: [],
  reducers: {
    searchHero(state, action) {},
    getHero(state, action) {
      state.list.push({name: action.payload})
    }
  },
});

export const { searchHero, getHero } = heroeSlice.actions
export default heroeSlice.reducer