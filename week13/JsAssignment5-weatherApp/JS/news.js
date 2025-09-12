import {NEWS_API} from "../config.js";
const city = `us`;


async function getNews(keyword) {
    document.getElementById("loaders").innerHTML = `
    <span class="loader"></span>
    `;

    try {
        const urlNewsByCity =
            `https://newsapi.org/v2/everything?` +
            `apiKey=${NEWS_API}` +
            `&q=${keyword}` +
            `&language=en` +
            `&sortBy=popularity` +
            `&page=1` +
            `&pageSize=25`;
        const response = await fetch(urlNewsByCity);
        const resData = await response.json();
        document.getElementById("loaders").innerHTML = ``;  
        return await resData.articles;
    } catch (err) {
        console.error("Error Fetching Data :>> ", err);
    }
}

function displayNews(newsArticles) {
    let box = "";

    for (const i in newsArticles) {
        box += `
        <div class="inner shadow-lg rounded-4 overflow-hidden mb-3">
            <div class="img">
                <img class="w-100 d-block" src="${newsArticles[i].urlToImage}" alt="" />
            </div>
            <div class="article p-4">
                <article>
                    <h4 class="text-white">${newsArticles[i].title}</h4>
                    <p class="h6">By:<b><i>${newsArticles[i].author}</i></b></p>
                    <caption class="text-truncate">
                    <details>
                    <summary>${newsArticles[i].description
                        .split(" ")
                        .slice(0, 15)
                        .join(" ")}</summary>
                    ${newsArticles[i].description.split(" ").slice(15).join(" ")}</details>
                    <a href="${
                        newsArticles[i].url
                    }" target="_blank" class="btn btn-primary rounded-4 my-2 read-more">Read More >></a>
                    </caption>
                </article>
            </div>
        </div>
`;
    }
    document.getElementById("row").innerHTML = box;
}

const searchBar = document.getElementById("searchInput");
searchBar.addEventListener("input", function () {
    const searchLabel = document.getElementById("searchLabel");
    if (searchBar.value) {
        searchLabel.classList.add("d-none");
        searchfor(searchBar.value);
    } else {
        searchLabel.classList.remove("d-none");
    }
});

async function searchfor(keywords) {
    const newsArticles = await getNews(keywords);
    displayNews(newsArticles);
}

searchfor("global");
/********************************************/
/********************************************/
// #region Footer

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

// #endregion Footer
/********************************************/
/********************************************/
