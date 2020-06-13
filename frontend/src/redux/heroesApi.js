import axios from 'axios';
import { range } from 'lodash-fp'

const HEROES_COUNT = 731 // Total number of heroes in Heroes API

const client = axios.create({
  baseURL: process.env.REACT_APP_HERO_API
})

export const getHero = id => client.get(`/${id}`).then(res => res.data)
export const searchHero = name => client.get(`/search/${name}`).then(res => res.data)
export const getAllHeroes = () => range(1, HEROES_COUNT + 1).map(id => getHero(id)); // Use with caution!