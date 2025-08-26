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
sessionStorage.clear();
sessionStorage.setItem("people.json", JSON.stringify(people));
console.log("sessionStorage :>> ", sessionStorage.getItem("people.json"));

// sessionStorage.setItem('people.obj', people); // does not worrk at all its just all objects
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

const allUsers = [];
const IMAGES_PATH = "./images";
const DEFAULT_IMG_SRC = "./images/images3/imgi_26_09.jpg";

function formReadInput() {
    const user = {
        name: Name.value ? Name.value : "Unknown",
        email: email.value ? email.value : "Unknown",
        password: password.value ? password.value : "Unknown1",
        rePassword: rePassword.value ? rePassword.value : "Unknown2",
        phone: phone.value ? phone.value : 0,
        img: img.value ? IMAGES_PATH + img.value.name : DEFAULT_IMG_SRC,
        msg: msg.value ? msg.value : "Unknown",
    };

    if (
        user.name != "Unknown" &&
        user.email != "Unknown" &&
        user.password != "Unknown1" &&
        user.phone != 0 &&
        user.img != "Unknown" &&
        user.msg != "Unknown"
    ) {
        console.log("All data are recieved");
        console.log("user :>> ", user);
        if (validateAll) {
            console.log("allUsers.length :>> ", allUsers.push(user));
            sessionStorage.setItem("allUsers", JSON.stringify(allUsers));
            console.log("User data is saved in sorage :>> ", true);
            formClearInput();
        }
    } else {
        console.warn("Not all data are given");
        formClearInput();
    }
}

function validateAll() {
    return validateName() * validateEmail();
}
function validateName() {
    // const name = Name.value;
    // console.log('name :>> ', name);
    const nameRegExp = /^[A-Z]\w{2,20}$/i; //any word with min 3chars and max 20chars

    if (nameRegExp.test(Name.value)) {
        submitBtn.removeAttribute("disabled", "");
        Name.classList.add("is-valid");
        Name.classList.remove("is-invalid");
        removeAlert("userNameAlert");
        return 1;
    } else {
        submitBtn.setAttribute("disabled", "");
        Name.classList.remove("is-valid");
        Name.classList.add("is-invalid");
        displayALert("userNameAlert", "Invalid Name", "danger");
        return 0;
    }
}

function validateEmail() {
    const emailRegExp = /^\w+@[a-z]+\.[a-z]{2,}$/i;

    if (emailRegExp.test(email.value)) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        removeAlert("userEmailAlert");
        submitBtn.removeAttribute("disabled", "");
    } else {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        displayALert("userEmailAlert", "Invalid Email", "danger");
        submitBtn.setAttribute("disabled", "");
    }
    return;
}
// TODO:
// 1- validate password
// 2- repassword matches
// 3- validate phone number

function displayALert(target, message, type) {
    const alertPlaceholder = document.getElementById(target);

    // const wrapper = document.createElement("div");
    alertPlaceholder.innerHTML = `<div class="alert alert-${type} alert-dismissible mt-1" role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
    // alertPlaceholder.append(wrapper);
}
function removeAlert(target) {
    const alertPlaceholder = document.getElementById(target);
    alertPlaceholder.innerHTML = "";
}

function formClearInput() {
    Name.value = "";
    email.value = "";
    password.value = "";
    rePassword.value = "";
    phone.value = 0;
    img.value = "";
    msg.value = "";
}

// validateWithKeyWord("number", Number("1231341312"));

function validateWithKeyWord(key, input0) {
    const regExp = /^[0-9]+$/;
    // const nameRegExp = new RegExp();

    switch (key) {
        case "number":
            console.log("regExp :>> ", regExp.test(input0));
            break;
        case 'email':
            validateEmail();
        default:
            console.log("validateWithKeyWord() :>> No proper Key is send");
    }
}
// #endregion Input Form
/********************************************/
/********************************************/
