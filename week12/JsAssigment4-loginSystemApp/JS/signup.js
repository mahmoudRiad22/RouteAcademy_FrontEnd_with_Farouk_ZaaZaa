/********************************************/
/********************************************/
// #region Login section
console.clear();

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const infoBar = document.getElementById("infoBar");
const signUpBtn = document.getElementById("signup-btn");
const LogInBtn = document.getElementById("login-btn");
const users = JSON.parse(sessionStorage.getItem("allUsers"));

// console.log('users :>> ', users);
// Letters and spaces, 2-30 chars
const NameRegex = /^[a-zA-Z\s]{2,30}$/;

// Standard email pattern
const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// At least 8 chars, at least one letter and one number, allows special chars
const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

function takeInput() {
    const user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
    };
    return user;
}

function SignUpValidation() {
    const user = takeInput();
    const isNameValid = NameRegex.test(user.name);
    const isEmailValid = EmailRegex.test(user.email);
    const isPasswordValid = PasswordRegex.test(user.password);
    console.log("isNameValid :>> ", isNameValid);
    console.log("isEmailValid :>> ", isEmailValid);
    console.log("isPasswordValid :>> ", isPasswordValid);

    infoBar.innerHTML = "";
    if (isNameValid)
        if (isEmailValid)
            if (isPasswordValid) {
                infoBar.classList.add("successBar");
                infoBar.innerHTML += "<p>Sucess, you can Log-In now :)</p";
                return user;
            } else {
                infoBar.innerHTML += "<p>Error: In-valid Password</p";
                infoBar.classList.add("errorBar");
                // console.log("user.password :>> ", user.password);
                return 0;
            }
        else {
            infoBar.innerHTML += "<p>Error: In-valid Email</p";
            infoBar.classList.add("errorBar");
            // console.log("user.email :>> ", user.email);
            return 0;
        }
    else {
        infoBar.innerHTML += "<p>Error: In-valid Name</p";
        infoBar.classList.add("errorBar");
        // console.log("user.name :>> ", user.name);
        return 0;
    }
}

try {
    signUpBtn.addEventListener("click", function (e) {
        // console.log("signupbtn event", e.target);
        const isPass = SignUpValidation();
        // console.log('isPass :>> ', isPass);
        if (isPass) {
            users.push(isPass);
            // console.log("users :>> ", users);
            clearInputs()
            sessionStorage.setItem("allUsers", JSON.stringify(users));
        }
    });
} catch (error) {
    console.log("error @ signup eventListener :>> ", error);
}

function clearInputs() {
    userName.value = ''
    userEmail.value = '';
    userPassword.value = '';
}
// #endregion Login section
/********************************************/
/********************************************/
