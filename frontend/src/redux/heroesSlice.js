import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { searchHero } from './heroesApi'

export const searchHeroThunk = createAsyncThunk(
  "heroes/search",
  name => searchHero(name)
);

const heroeSlice = createSlice({
  name: "heroes",
  initialState: { list: [], loading: false},
  reducers: {
    clearResult(state, action) {
      state.list = []
    }
  },
  extraReducers: {
    [searchHeroThunk.pending]: (state, action) => {
      state.loading = true
    },
    [searchHeroThunk.fulfilled]: (state, action) => {
      state.list = []
      if (action.payload.results) {
        action.payload.results.forEach(hero => { state.list.push(hero) })
      }
      state.loading = false;
    }
  }
});

export const { clearResult } = heroeSlice.actions
export default heroeSlice.reducer