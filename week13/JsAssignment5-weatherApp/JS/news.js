import {NEWS_API} from "../config.js";
const city = `us`;
const urlNewsByCity =
    `https://newsapi.org/v2/top-headlines?` +
    // `&q=?`+
    // `sources=bbc-news`+
    `apiKey=${NEWS_API}` +
    `&country=${city}` +
    `&category=general` +
    `&pageSize=20`;

console.log("urlNewsByCity :>> ", urlNewsByCity);
