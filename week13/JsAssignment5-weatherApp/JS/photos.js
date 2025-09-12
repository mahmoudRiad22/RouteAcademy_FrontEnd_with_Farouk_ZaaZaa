import {UNSPLASH_ACCESS_KEY} from "../config.js";

const baseUrl = "https://api.unsplash.com/search/photos?";

async function getPhotos(city) {
    document.getElementById("loaders").innerHTML = `
    <span class="loader"></span>
    `;

    try {
        console.clear();
        const photosUrl =
            `${baseUrl}` + `query=${city}` + `&client_id=${UNSPLASH_ACCESS_KEY}` + `&per_page=30`;
        const response = await fetch(photosUrl);
        const resData = await response.json();

        displayPhotots(await resData);
            document.getElementById("loaders").innerHTML = ``;
    } catch (err) {
        console.error("Error Fetching Data :>> ", err);

    }
}

const rows = document.getElementById("rows");
function displayPhotots(resData) {
    let box = "";
    for (const index in resData.results) {
        box += `
            <div class="masonry-item mb-4 pic">
                <div class="inner shadow-lg rounded-3 overflow-hidden">
                    <div class="img">
                        <img class="w-100 d-block" src="${resData.results[index].urls.regular}" alt="" />
                    </div>
                </div>
            </div>
`;
    }

    document.getElementById("rows").innerHTML = box;
}

getPhotos("egypt");
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
    // console.log("searchInput :>> ", searchInput.value);
    const searchLabel = document.getElementById("searchLabel");
    if (searchInput.value) {
        searchLabel.classList.add("d-none");
        getPhotos(searchInput.value);
    } else {
        searchLabel.classList.remove("d-none");
    }
});

/********************************************/
/********************************************/
// #region footer

const emailBar = document.getElementById("emailInput");
emailBar.addEventListener("input", function () {
    const emailLabel = document.getElementById("emailLabel");
    if (emailBar.value) {
        emailLabel.classList.add("d-none");
    } else {
        emailLabel.classList.remove("d-none");
    }
});

const subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener("click", () => {
    const toastLiveExample = document.getElementById("liveToast");
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    if (emailValidation(emailBar.value)) {
        document.getElementById("toastBodyParent").classList.remove("my-bg-danger");
        document.getElementById("toastBody").classList.remove("text-danger");

        document.getElementById("toastBodyParent").classList.add("my-bg-success");
        document.getElementById("toastBody").classList.add("my-text-sucess");
        document.getElementById("toastBody").innerHTML = "Success!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 1500);
    } else {
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "Invalid Email!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 1500);
    }
});

function emailValidation(input) {
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegEx.test(input);
}

// #endregion footer
/********************************************/
/********************************************/
