/********************************************/
/********************************************/
// #region Login section
console.clear();

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const infoBar = document.getElementById("infoBar");
const LogInBtn = document.getElementById("login-btn");

const users = JSON.parse(sessionStorage.getItem("allUsers"));
if (users == null)
    users = [];

function takeInput() {
    const currentUser = {
        email: userEmail.value,
        password: userPassword.value,
    };
    return currentUser;
}


function logInValidation() {
    const currentUser = takeInput();
    for (const index in users) {
        if (users[index].email === currentUser.email && users[index].password === currentUser.password) {
            const user = users[index];
            console.log("user is found:>> ", user);
            return user;
        }
    }
    return 0;
}


try {
    LogInBtn.addEventListener("click", function (e) {
    console.log("e.target :>> ", e.target);
    const isPass = logInValidation();
    if (isPass) {
        // console.log("Sucess should load the welcome screen now");
        // displayWelcomePg(isPass);
        sessionStorage.setItem('currentUser', JSON.stringify(isPass));
        window.location.href = 'home.html'
    } else {
        infoBar.innerHTML = `<p class="errorBar">Error: invalid Email or Password</p>`;
    }
});
} catch (error) {
    console.log('error @ logInBtn.addeventListener :>> ', error);
}

// #endregion Login section
/********************************************/
/********************************************/
