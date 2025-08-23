/******************************************************************************/
/******************************************************************************/
// #region Variables

const myEmailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const myPasswordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

let blackScreen = document.getElementById("blackScreen");
let selectTag = document.getElementById("selectTag");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// #endregion Variables
/******************************************************************************/
/******************************************************************************/

array.forEach((value, i) => {
    console.log(`index:  ${i}   ======>     value: ${value}`);
});

/******************************************************************************/
/******************************************************************************/
// #region Decleration Functions

function clearBlackScreen() {
    blackScreen.innerHTML = "";
}
function printEvenNumbers() {
    let range = window.prompt("Enter the range to search for even numbers");

    for (let i = 0; i < range; i++) {
        if (!(i % 2)) addHTMLToBlackScreen(blackScreen, i + "   ");
    }
}

function printOddNumbers() {
    let range = window.prompt("Enter the range to search for Odd numbers");

    for (let i = 0; i < range; i++) {
        if (i % 2) addHTMLToBlackScreen(blackScreen, i + "   ");
    }
}

function createSelection() {
    let startYear = window.prompt("Enter a Starting Year before 2025:");
    let counter = 0;
    for (let i = startYear; i < 2025; i++) {
        addHTMLToBlackScreen(selectTag, `<option>${i}</option>`);
        counter++;
    }
    addTextToBlackScreen(blackScreen, `Created ${counter} options`);
}
function clearSelection() {
    selectTag.innerHTML = `<option hidden>Select a Year</option>`;
    clearBlackScreen();
}

function addTextToBlackScreen(target, content) {
    target.insertAdjacentText("beforeend", content);
}
function addHTMLToBlackScreen(target, content) {
    target.insertAdjacentHTML("beforeend", content);
}

function signUpValidation() {
    let userEmail = window.prompt("Enter your Email");
    let userPassword = window.prompt("Enter your Password");

    if (myEmailRegExp.test(userEmail)) {
        console.log(userEmail);
        addHTMLToBlackScreen(blackScreen, "Email is Valid <br/>");
    } else {
        addHTMLToBlackScreen(
            blackScreen,
            `Invalid Email: Email must be "example@example.example" <br/>`
        );
    }

    if (myPasswordRegExp.test(userPassword)) {
        console.log(userPassword);
        addHTMLToBlackScreen(blackScreen, "Password is Valid <br/>");
    } else {
        addHTMLToBlackScreen(
            blackScreen,
            `Invalid Password: Minimum eight characters.<br/>
            at least one letter.<br/> 
            one number and one special character.<br/>`
        );
    }
}

// #endregion Decleration Functions
/******************************************************************************/
/******************************************************************************/

/******************************************************************************/
/******************************************************************************/
// #region Expression Functions

let clearBlackScreen2 = function(){
    blackScreen.innerHTML = "";
}


let DisplayViaPrompt = function(){
    let userInput = window.prompt("Enter Any Thing");

    blackScreen.insertAdjacentText("beforeend", userInput);
}
// #endregion Expression Functions
/******************************************************************************/
/******************************************************************************/

/******************************************************************************/
/******************************************************************************/
// #region Self Invoked Function

// not usable any more

// #endregion Self Invoked Function
/******************************************************************************/
/******************************************************************************/