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
