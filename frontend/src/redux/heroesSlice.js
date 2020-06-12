import { createSlice } from "@reduxjs/toolkit";

const heroeSlice = createSlice({
  name: "heroes",
  initialState: { heroes: [], heroesLoading: false },
  reducers: {
    searchHero(state, action) {},
    getHero(state, action) {}
  },
});

export const { searchHero, getHero } = heroeSlice.actions
export default heroeSlice.reducer