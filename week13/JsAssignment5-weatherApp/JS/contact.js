// Importation:
import {NameRegex, EmailRegex, websiteRegex} from "../config.js";

// notification toasters:
const toastLiveExample = document.getElementById("liveToast");
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

// Contact Form elements:
const nameBar = document.getElementById("nameInput");
const emailBar = document.getElementById("emailInput");
const companyBar = document.getElementById("companyInput");
const websiteBar = document.getElementById("websiteInput");
const MsgBar = document.getElementById("MsgInput");
const submitBtn = document.getElementById("submitBtn");

/********************************************/
/********************************************/
// #region EventListeners

nameBar.addEventListener("input", function () {
    const nameLabel = document.getElementById("nameLabel");
    if (nameBar.value) {
        nameLabel.classList.add("d-none");
    } else {
        nameLabel.classList.remove("d-none");
    }
});

emailBar.addEventListener("input", function () {
    const emailLabel = document.getElementById("emailLabel");
    if (emailBar.value) {
        emailLabel.classList.add("d-none");
    } else {
        emailLabel.classList.remove("d-none");
    }
});

companyBar.addEventListener("input", function () {
    const companyLabel = document.getElementById("companyLabel");
    if (companyBar.value) {
        companyLabel.classList.add("d-none");
    } else {
        companyLabel.classList.remove("d-none");
    }
});

websiteBar.addEventListener("input", function () {
    const websiteLabel = document.getElementById("websiteLabel");
    if (websiteBar.value) {
        websiteLabel.classList.add("d-none");
    } else {
        websiteLabel.classList.remove("d-none");
    }
});

MsgBar.addEventListener("input", function () {
    const MsgLabel = document.getElementById("MsgLabel");
    if (MsgBar.value) {
        MsgLabel.classList.add("d-none");
    } else {
        MsgLabel.classList.remove("d-none");
    }
});

submitBtn.addEventListener("click", function () {
    if (
        validateName(nameBar.value) &&
        validateEmail(emailBar.value) &&
        validateCompanyName(companyBar.value) &&
        validateWebsite(websiteBar.value)
    ) {
        console.log("ALL Passed");
        document.getElementById("toastBodyParent").classList.remove("my-bg-danger");
        document.getElementById("toastBody").classList.remove("text-danger");

        document.getElementById("toastBodyParent").classList.add("my-bg-success");
        document.getElementById("toastBody").classList.add("my-text-sucess");
        document.getElementById("toastBody").innerHTML = "Data submitted successfully!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 2500);
    } else {
        console.log("Faild to submit Data");
    }
});

// #endregion EventListeners
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Validation Functions

function validateName(name) {
    if (!NameRegex.test(name)) {
        console.log("validateName Error", NameRegex.test(name));
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "User Name Invalid!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 3000);

        return 0;
    }
    return 1;
}

function validateCompanyName(name) {
    if (!NameRegex.test(name)) {
        console.log("validateName Error", NameRegex.test(name));
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "Company Name Invalid!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 3000);

        return 0;
    }
    return 1;
}

function validateEmail(email) {
    if (!EmailRegex.test(email)) {
        console.log("validateEmail Error", EmailRegex.test(email));
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "User Email Invalid!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 3000);

        return 0;
    }
    return 1;
}

function validateWebsite(website) {
    if (!websiteRegex.test(website)) {
        console.log("validateWebsite Error", websiteRegex.test(website));
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "Website Url Invalid!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 3000);

        return 0;
    }
    return 1;
}

// #endregion Validation Functions
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Footer
console.clear();

const email2Bar = document.getElementById("email2Input");
email2Bar.addEventListener("input", function () {
    const email2Label = document.getElementById("email2Label");
    if (email2Bar.value) {
        email2Label.classList.add("d-none");
    } else {
        email2Label.classList.remove("d-none");
    }
});

const subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener("click", () => {
    if (validateEmail(email2Bar.value)) {
        document.getElementById("toastBodyParent").classList.remove("my-bg-danger");
        document.getElementById("toastBody").classList.remove("text-danger");

        document.getElementById("toastBodyParent").classList.add("my-bg-success");
        document.getElementById("toastBody").classList.add("my-text-sucess");
        document.getElementById("toastBody").innerHTML = "Subscribed Successfully!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 2500);
    } else {
        document.getElementById("toastBodyParent").classList.remove("my-bg-success");
        document.getElementById("toastBody").classList.remove("text-success");

        document.getElementById("toastBodyParent").classList.add("my-bg-danger");
        document.getElementById("toastBody").classList.add("text-danger");
        document.getElementById("toastBody").innerHTML = "Email Invalid, try again!!";

        toastBootstrap.show();
        setTimeout(() => {
            toastBootstrap.hide();
        }, 3000);
    }
});

// #endregion Footer
/********************************************/
/********************************************/
