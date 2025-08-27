/********************************************/
/********************************************/
// #region Mini Quote Generator
console.clear();
const quotesList = [
    {
        image: "./images/QuoteImages/image- (23).jpg",
        quote: "“Be yourself; everyone else is already taken.”",
        owner: "― Oscar Wilde",
    },
    {
        image: "./images/QuoteImages/image- (3).jpg",
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        owner: "― Marilyn Monroe",
    },
    {
        image: "./images/QuoteImages/image- (22).jpg",
        quote: "“So many books, so little time.”",
        owner: "― Frank Zappa",
    },
    {
        image: "./images/QuoteImages/image- (21).jpg",
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        owner: "― Albert Einstein",
    },
    {
        image: "./images/QuoteImages/image- (20).jpg",
        quote: "“A room without books is like a body without a soul.”",
        owner: "― Marcus Tullius Cicero",
    },
    {
        image: "./images/QuoteImages/image- (19).jpg",
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        owner: "― Bernard M. Baruch",
    },
    {
        image: "./images/QuoteImages/image- (18).jpg",
        quote: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
        owner: "― William W. Purkey",
    },
    {
        image: "./images/QuoteImages/image- (17).jpg",
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        owner: "― Dr. Seuss",
    },
    {
        image: "./images/QuoteImages/image- (16).jpg",
        quote: "“You only live once, but if you do it right, once is enough.”",
        owner: "― Mae West",
    },
    {
        image: "./images/QuoteImages/image- (15).jpg",
        quote: "“Be the change that you wish to see in the world.”",
        owner: "― Mahatma Gandhi",
    },
    {
        image: "./images/QuoteImages/image- (14).jpg",
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        owner: "― Robert Frost",
    },
];
const minIndex = 0;
const maxIndex = quotesList.length - 1;
const random = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
let counter = 0;
console.log("quotesList :>> ", quotesList);
console.log("random :>> ", random);

function noRepeate(oldRandom) {
    let newRandom = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;

    for (; newRandom == random; ) {
        newRandom = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
    }
    displayQuote(newRandom);
}

function displayQuote(id) {
    console.log("Qoute :>> ", quotesList[id].quote);
    console.log("Owner: :>> ", quotesList[id].owner);
    console.log("counter :>> ", ++counter, "random :>> ", id);

    const content = `
        <div class="col-2">
            <img class="d-block cicle" src="${quotesList[id].image}" alt="" />
        </div>
        <p class="col-10">${quotesList[id].quote}</p><br/>
        <p class="col-12">${quotesList[id].owner}</p>
`;
    const quoteBox = document.getElementById("quoteBox");
    quoteBox.innerHTML = "";
    quoteBox.innerHTML += content;
}

// #endregion Mini Quote Generator
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Local/Session Storage
console.clear();

const people = [
    {name: "Emma Johnson", city: "New York"},
    {name: "Liam Smith", city: "Los Angeles"},
    {name: "Olivia Brown", city: "Chicago"},
    {name: "Noah Williams", city: "Houston"},
    {name: "Ava Jones", city: "Phoenix"},
    {name: "William Garcia", city: "Philadelphia"},
    {name: "Sophia Miller", city: "San Antonio"},
    {name: "James Davis", city: "San Diego"},
    {name: "Isabella Rodriguez", city: "Dallas"},
    {name: "Benjamin Martinez", city: "San Jose"},
    {name: "Mia Hernandez", city: "Austin"},
    {name: "Lucas Lopez", city: "Jacksonville"},
    {name: "Charlotte Gonzalez", city: "Fort Worth"},
    {name: "Henry Wilson", city: "Columbus"},
    {name: "Amelia Anderson", city: "Charlotte"},
];
sessionStorage.setItem("people.json", JSON.stringify(people));
console.log("sessionStorage :>> ", sessionStorage.getItem("people.json"));

console.log("get key name using index  :>> ", sessionStorage.getItem("people.obj"));

const myPpl = JSON.parse(sessionStorage.getItem("people.json"));
console.log("people :>> ", people);

// #endregion Local/Session Storage
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Ternary Operator

console.clear();

const inputArray = [];
function TernaryReadInput() {
    const input0 = document.getElementById("userInput0");
    console.log("input0 :>> ", input0.value);

    inputArray.push(input0.value ? input0.value : "dummy data");
    console.log("inputArray.length :>> ", inputArray.length);

    inputArray.forEach((name) => {
        console.log("name :>> ", name);
    });
}

// #endregion Ternary Operator
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Input Form and Validation
console.clear();

const Name = document.getElementById("userName");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const rePassword = document.getElementById("userRePassword");
const phone = document.getElementById("userPhone");
const img = document.getElementById("userImage");
const msg = document.getElementById("userMsg");

const submitBtn = document.getElementById("submitBtn");

const allUsers = JSON.parse(sessionStorage.getItem("allUsers"));

const IMAGES_PATH = "./images";
const DEFAULT_IMG_SRC = "./images/images3/imgi_26_09.jpg";

function formReadInput() {
    const user = {
        name: Name.value ? Name.value : "error404",
        email: email.value ? email.value : "error404",
        password: password.value ? password.value : "error4041",
        rePassword: rePassword.value ? rePassword.value : "error4042",
        phone: phone.value ? phone.value : 0,
        img: img.value ? IMAGES_PATH + img.value.name : DEFAULT_IMG_SRC,
        msg: msg.value ? msg.value : "error404",
    };

    if (validateAll()) {
        saveUser(user);
    } else {
        console.warn("Not all data are given");
        submitBtn.setAttribute("disabled", "");
    }


}
function saveUser(user) {
    console.log("Sucess Validation");
    console.log("New allUsers.length :>> ", allUsers.push(user));
    sessionStorage.setItem("allUsers", JSON.stringify(allUsers));
    Swal.fire({
        title: `Welcome ${user.name} !`,
        icon: "success",
    });

    formClearInput();
}
function validateAll() {
    return (
        validateName() * validateEmail() * validatePassword() * passwordMatch() * validatePhone()
    );
}
function validateName() {
    const nameRegExp = /^[A-Z]\w{2,20}$/; //any word with min 3chars and max 20chars
    const msg = "start with Captial letter and be 3-20 word-char long";
    if (nameRegExp.test(Name.value)) {
        Name.classList.add("is-valid");
        Name.classList.remove("is-invalid");
        removeAlert("userNameAlert");
        return 1;
    } else {
        Name.classList.remove("is-valid");
        Name.classList.add("is-invalid");
        displayALert("userNameAlert", msg, "danger");
        return 0;
    }
}

function validateEmail() {
    const emailRegExp = /^\w+@[a-z]+\.[a-z]{2,}$/i; //word@word.word
    const msg = "should be: example@example.example";
    if (emailRegExp.test(email.value)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        removeAlert("userEmailAlert");
        return 1;
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        displayALert("userEmailAlert", msg, "danger");
    }
    return 0;
}
// TODO: DONE!!

// 1- validate password ====> DONE
// 2- repassword matches ===> Done
// 3- validate phone number > Done
// 4- user sweet alert for submit error ==> Done

function validatePassword() {
    const passwordRegExp = /^.{8,40}$/; // anything between 8 to 40 chars
    const msg = "must be 8-40 chars long long";
    if (passwordRegExp.test(password.value)) {
        removeAlert("userPasswordAlert");
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
        passwordMatch();
        return 1;
    } else {
        displayALert("userPasswordAlert", msg, "danger");
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
        return 0;
    }
}

function passwordMatch() {
    const userRePasswordAlert = document.getElementById("userRePasswordAlert");
    const msg = "NOT a match";
    if (rePassword.value === password.value) {
        rePassword.classList.add("is-valid");
        rePassword.classList.remove("is-invalid");
        removeAlert("userRePasswordAlert");
        return 1;
    } else {
        rePassword.classList.add("is-invalid");
        rePassword.classList.remove("is-valid");
        displayALert("userRePasswordAlert", msg, "danger");
        return 0;
    }
}
function validatePhone() {
    const userPhoneAlert = document.getElementById("userPhoneAlert");
    const phoneRegExp = /^(\+20)?\ (\(?[\d]{3}\)?)\ ([\d]{3}-[\d]{4})$/; // +20 (xxx) xxx-xxxx
    const msg = "should be 11-digits with format 01{0,1,2,5} XXXXXXX";
    const msg2 = "formal: +20 (xxx) xxx-xxxx";

    if (phoneRegExp.test(phone.value)) {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
        removeAlert("userPhoneAlert");
        return 1;
    } else {
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");
        displayALert("userPhoneAlert", msg2, "danger");
        return 0;
    }
}
function displayALert(target, message, type) {
    submitBtn.setAttribute("disabled", "");
    const alertPlaceholder = document.getElementById(target);

    alertPlaceholder.innerHTML = `<div class="alert alert-${type} alert-dismissible mt-1" role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
}
function removeAlert(target) {
    submitBtn.removeAttribute("disabled");
    const alertPlaceholder = document.getElementById(target);
    alertPlaceholder.innerHTML = "";
}

function formClearInput() {
    Name.value = "";
    email.value = "";
    password.value = "";
    rePassword.value = "";
    phone.value = null;
    img.value = "";
    msg.value = "";

    Name.classList.remove("is-invalid");
    Name.classList.remove("is-valid");
    email.classList.remove("is-invalid");
    email.classList.remove("is-valid");
    password.classList.remove("is-invalid");
    password.classList.remove("is-valid");
    rePassword.classList.remove("is-invalid");
    rePassword.classList.remove("is-valid");
    phone.classList.remove("is-invalid");
    phone.classList.remove("is-valid");
}

// #endregion Input Form
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Using Sweet Alert
console.clear();

document.getElementById("btn5").addEventListener("click", () => {
    Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "error",
    });
});

// #endregion Using Sweet Alert
/********************************************/
/********************************************/
