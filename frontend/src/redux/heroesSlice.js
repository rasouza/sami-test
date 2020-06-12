import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getAllHeroes } from './heroesApi'

export const getAllHeroesThunk = createAsyncThunk(
  "heroes/getAll",
  () => axios.all(getAllHeroes())
);

const heroeSlice = createSlice({
  name: "heroes",
  initialState: { heroes: [], heroesLoading: false },
  reducers: {
    insertHero(state, action) {
      state.heroes.push(action.payload);
    }
  },
  extraReducers: {
    [getAllHeroesThunk.pending]: (state, action) => {
      state.heroesLoading = true
    },
    [getAllHeroesThunk.fulfilled]: (state, action) => {
      action.payload.forEach(hero => { state.heroes.push(hero) })
      state.heroesLoading = false;
    }
  }
});

export default heroeSlice.reducer