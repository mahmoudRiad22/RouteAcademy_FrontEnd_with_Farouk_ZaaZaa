/********************************************/
/********************************************/
// #region EventListeners
console.clear();

const nameBar = document.getElementById("nameInput");
nameBar.addEventListener("input", function () {
    const nameLabel = document.getElementById("nameLabel");
    if (nameBar.value) {
        nameLabel.classList.add("d-none");
        getCurrentWeather(nameBar.value);
    } else {
        nameLabel.classList.remove("d-none");
    }
});

const emailBar = document.getElementById("emailInput");
emailBar.addEventListener("input", function () {
    const emailLabel = document.getElementById("emailLabel");
    if (emailBar.value) {
        emailLabel.classList.add("d-none");
        getCurrentWeather(emailBar.value);
    } else {
        emailLabel.classList.remove("d-none");
    }
});

const companyBar = document.getElementById("companyInput");
companyBar.addEventListener("input", function () {
    const companyLabel = document.getElementById("companyLabel");
    if (companyBar.value) {
        companyLabel.classList.add("d-none");
        getCurrentWeather(companyBar.value);
    } else {
        companyLabel.classList.remove("d-none");
    }
});

const websiteBar = document.getElementById("websiteInput");
websiteBar.addEventListener("input", function () {
    const websiteLabel = document.getElementById("websiteLabel");
    if (websiteBar.value) {
        websiteLabel.classList.add("d-none");
        getCurrentWeather(websiteBar.value);
    } else {
        websiteLabel.classList.remove("d-none");
    }
});

const MsgBar = document.getElementById("MsgInput");
MsgBar.addEventListener("input", function () {
    const MsgLabel = document.getElementById("MsgLabel");
    if (MsgBar.value) {
        MsgLabel.classList.add("d-none");
        getCurrentWeather(MsgBar.value);
    } else {
        MsgLabel.classList.remove("d-none");
    }
});
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(){
    console.log("submit btn is pressed");
})

// #endregion EventListeners
/********************************************/
/********************************************/

