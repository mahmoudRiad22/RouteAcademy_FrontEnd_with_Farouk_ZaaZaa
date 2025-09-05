/********************************************/
/********************************************/
// #region Login section
console.clear();

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const infoBar = document.getElementById("infoBar");
const LogInBtn = document.getElementById("login-btn");

const users = JSON.parse(sessionStorage.getItem("allUsers"));

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
        if (users[index].email === currentUser.email) {
            const user = users[index];
            console.log("user is found:>> ", user);
            return user;
        }
    }
    return 0;
}

function displayWelcomePg(user) {
    let box = `
    <nav class="navbar navbar-expand-lg fixed-top bg-transparent shadow">
        <div class="container">
            <a class="navbar-brand shine" href="#">SmartLogIn</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item logout">
                        <button class="btn login-btn p-0 border-0 shine">
                            <a class="nav-link logout-btn" href="./index.html">Log Out</a>
                        </button>
                    </li>
                </ul>
    
            </div>
        </div>
    </nav>

    <section class="d-flex justify-content-center align-items-center min-vh-100">
        <div class="container ">
            <div class="glass shine welcome w-50 m-auto shadow rounded-4">
                <h2 class="text-center text-capitalize">Welcome <b><i><span class="userName"
                    id="userName">${user.name}</span></i></b></h2><br />
            </div>
        </div>

    </section>
    `;
    document.body.innerHTML = box;
}

try {
    LogInBtn.addEventListener("click", function (e) {
    console.log("e.target :>> ", e.target);
    const isPass = logInValidation();
    if (isPass) {
        console.log("Sucess should load the welcome screen now");
        displayWelcomePg(isPass);
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
