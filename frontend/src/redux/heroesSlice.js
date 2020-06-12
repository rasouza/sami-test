import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getHero as getHeroAPI } from './heroesApi'

export const getHeroThunk = createAsyncThunk(
  "heroes/getHero",
  async id => (await getHeroAPI(id))
);

const heroeSlice = createSlice({
  name: "heroes",
  initialState: { heroes: [], heroesLoading: false },
  reducers: {
  },
  extraReducers: {
    [getHeroThunk.pending]: (state, action) => {
      state.heroesLoading = true
    },
    [getHeroThunk.fulfilled]: (state, action) => {
      state.heroes.push(action.payload)
      state.heroesLoading = false;
    }
  }
});

export default heroeSlice.reducer