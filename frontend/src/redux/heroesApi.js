import axios from 'axios'

const client = axios.create({
    baseURL: process.env.REACT_APP_HERO_API
})

export const getHero = id => {
    client.get(`/${id}`).then(res => res.data);
}

export const searchHero = name => {
    client.get(`/search/${name}`).then((res) => res.data);
}