// ShikiTiki - Module for getting anime from shikimori.one

// Copyright (c) 2023 Group Reflection

const axios = require('axios');
let animes = [];
let page = 1
let count = 20


async function getAnime(search=false, searchText="") {
    const url = `https://shikimori.one/api/animes?page=${page}&limit=${count}`;
    const searchUrl = `https://shikimori.one/api/animes?search=${searchText}&page=${page}&limit=${count}`;
    if (search) {
        const response = await axios.get(searchUrl);
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
            animes.push([{
                index: i,
                id: data[i].id,
                name: data[i].name,
                score: data[i].score
            }])
        }
    } else {
        const response = await axios.get(url);
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
            animes.push([{
                index: i,
                id: data[i].id,
                name: data[i].name,
                score: data[i].score
            }])
        }
    }
}

module.exports = animes;