/********************************************/
/********************************************/
// #region Login section
console.clear();

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const infoBar = document.getElementById("infoBar");
const LogInBtn = document.getElementById("login-btn");

let users = JSON.parse(sessionStorage.getItem("allUsers"));
if (users == null) users = [];

function takeInput() {
    const currentUser = {
        email: userEmail.value,
        password: userPassword.value,
    };
    return currentUser;
}

function logInValidation() {
    let msg = "";
    const currentUser = takeInput();
    for (const index in users) {
        if (users[index].email === currentUser.email) {
            if (users[index].password === currentUser.password) {
                const user = users[index];
                // console.log("user is found:>> ", user);
                return [1, user];
            }
            msg = `<p class="errorBar pb-0 fs-6"><b>Error: Wrong Password!</b></p>`;
            return [0, msg];
        }
    }
    msg = `<p class="errorBar pb-0 fs-6"><b>Error: Email Not Found</b></p>`;
    return [0, msg];
}

try {
    LogInBtn.addEventListener("click", function (e) {
        // console.log("e.target :>> ", e.target);
        infoBar.innerHTML = "";
        const isPass = logInValidation();
        console.log("isPass :>> ", isPass);
        if (isPass[0]) {
            // console.log("Sucess should load the welcome screen now");
            sessionStorage.setItem("currentUser", JSON.stringify(isPass[1]));
            window.location.href = "home.html";
        } else {
            infoBar.innerHTML = isPass[1];
        }
    });
} catch (error) {
    console.log("error @ logInBtn.addeventListener :>> ", error);
}

[userEmail, userPassword].forEach((element) => {
    element.addEventListener("input", function () {
        infoBar.innerHTML = "";
    });
});

// #endregion Login section
/********************************************/
/********************************************/
