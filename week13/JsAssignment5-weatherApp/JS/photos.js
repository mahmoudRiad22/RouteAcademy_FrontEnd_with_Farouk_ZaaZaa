import {UNSPLASH_ACCESS_KEY} from "../config.js";

const baseUrl = "https://api.unsplash.com/search/photos?";

const city = `us`;

async function getPhotoss(city) {
    const photosUrl = `${baseUrl}` + `query=${city}` + `&client_id=${UNSPLASH_ACCESS_KEY}`;
    console.log("photosUrl :>> ", photosUrl);
    const response = await fetch(photosUrl);
    const resData = await response.json();

    console.log("resData :>> ", resData.results);
    displayPhotots(await resData);
}
const rows = document.getElementById("rows");
// console.log("rows :>> ", rows);
function displayPhotots(resData) {
    let box = "";
    console.log(resData.results[0].urls.regular);

    for (const index in resData.results) {
        box += `
            <div class="pic col-4">
                <div class="inner shadow rounded-4 overflow-hidden">
                    <div class="img">
                        <img class="w-100 d-block" src="${resData.results[index].urls.regular}" alt="" />
                    </div>
                </div>
            </div>
`;
    }

    document.getElementById("rows").innerHTML = box;
}

getPhotoss("cairo");