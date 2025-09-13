const API = "https://forkify-api.herokuapp.com/api/search?q=";
const searchInput = document.getElementById("searchBar");
const offCanvasTitle = document.getElementById("offcanvasExampleLabel");
const offCanvasImage = document.getElementById("offcanvasExampleImage");
const offcanvasInfo = document.getElementById("offcanvasExampleInfo");
const offcanvasSource = document.getElementById("offcanvasExampleSource");
const errorBar = document.getElementById("errorBar");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
function requestApi(key = "") {
    let api;
    if (!!key && key.trim()) {
        api = API + key;
        // console.log("api :>> ", api);
    } else {
        api = API;
        // console.log("api :>> ", api);
    }
    let GET_req = new XMLHttpRequest();

    GET_req.open("get", api);
    GET_req.send();

    GET_req.responseType = "json";

    GET_req.addEventListener("load", function () {
        if (GET_req.status >= 200 && GET_req.status < 400) {
            // console.log("Sucessfull request \n");
            errorBar.classList.add("d-none");
            createCards(GET_req.response);
        } else {
            // console.log("Bad request \n");
            errorBar.innerHTML = `<p>${GET_req.response.error}</p>`;
            errorBar.classList.remove("d-none");
        }
    });
}

function createCards(cardsArray) {
    let box = "";

    for (let i = 0; i < cardsArray.count; i++) {
        // console.log(`cardsArray.recipes[${i}] :>> `, cardsArray.recipes[i]);
        // console.log(`cardsArray.recipes[${i}].title :>> `, cardsArray.recipes[i].title);
        // console.log(`cardsArray.recipes[${i}].title :>> `, cardsArray.recipes[i].image_url);
        box += `
        <div class="card-item col-md-6 col-lg-4 col-xl-3 col-xxl-2">
            <div class="image p-0 overflow-hidden rounded-3 shadow accent-bg">
                <button class="btn p-0 w-100 recipeLink border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="${cardsArray.recipes[i].recipe_id}">

                    <img class="w-100" src="${cardsArray.recipes[i].image_url}"
                    alt="${cardsArray.recipes[i].title}.jpg" />
                    <h5 class="text-truncate px-3 py-2 text-black">${cardsArray.recipes[i].title}</h5>
                </button>

            </div>
        </div>
        `;
    }
    displayBox(box);
}
function displayBox(box) {
    document.getElementById("box").innerHTML = box;
    let recipeLinks = document.querySelectorAll(".recipeLink");
    // console.log("recipeLinks :>> ", recipeLinks);
    for (let i = 0; i < recipeLinks.length; i++) {
        recipeLinks[i].addEventListener("click", function (e) {
            // console.log("e.target :>> ", e.target);
            getRecipeById(recipeLinks[i].id);
        });
    }
}

searchInput.addEventListener("input", function () {
    requestApi(searchInput.value);
});

function getRecipeById(id) {
    let getReq = new XMLHttpRequest();
    getReq.open("get", `https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    getReq.send();
    getReq.responseType = "json";

    getReq.addEventListener("load", function () {
        if (getReq.status >= 200 && getReq.status < 400) {
            // console.log("Sucessfull request for single recipe");
            // console.log("getReq.response :>> ", getReq.response.recipe);
            // console.log("getReq.response :>> ", getReq.response.recipe.title);
            // console.log("getReq.response :>> ", getReq.response.recipe.ingredients);
            errorBar.classList.add("d-none");
            updateOffCanvas(getReq.response.recipe);
        } else {
            // console.log("BAD request for single recipe");
            // console.log("getReq.response :>> ", getReq.response);
            errorBar.innerHTML = `<p>${getReq.response.error}</p>`;
            errorBar.classList.remove("d-none");
        }
    });
}

function updateOffCanvas(recipe) {
    offCanvasTitle.innerHTML = recipe.title;
    offCanvasImage.src = recipe.image_url;
    offcanvasInfo.innerHTML = "";
    offcanvasSource.innerHTML = `
        <a class="text-black text-decoration-underline" href="${recipe.source_url}" target = _blank>
        Source: <b><i>${recipe.publisher}</i></b></a>
`;
    for (let i = 0; i < recipe.ingredients.length; i++) {
        offcanvasInfo.innerHTML += `<li class="list-group-item list-group-item-success">${recipe.ingredients[i]}</li>`;
    }
}
