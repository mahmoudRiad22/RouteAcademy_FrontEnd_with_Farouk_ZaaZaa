let x = 10;

x /= 5;

// console.log(x);

// AND && ======>
// return the last true as sucess
console.log(15 && 10 && 8000 && "sucess");
// return the first false
console.log(15 && 5 && "" && true);

// OR || ======>
//return the 1st true as sucess
console.log("sucess at first" || -0 || 0 || null || 500);
// return the last false as failure
console.log(0 || -0 || null || NaN || undefined || "" || 0);

// falsy valuse
console.log("Falsy Values =============== ALWAYS FALSE ===============================");
console.log("false statment: ", !!false);
console.log("number 0: ", !!0);
console.log("number -0: ", !!-0);
console.log("undefined: ", !!undefined);
console.log("null: ", !!null);
console.log("NaN: ", !!NaN);
console.log("Empty string: ", !!"");

let blackScreen = document.getElementById("blackScreen");
function userPrompt() {
    let userPromptInput = window.prompt("Enter a Number: ");
    diplayPrompt(userPromptInput);
}
function diplayPrompt(userInput) {
    if (+userInput && Number(userInput)) {
        console.log("its a number");
        displayAsNumber(userInput);
    } else {
        console.log("its not a number");
        displayAsString(userInput);
    }
}
function displayAsString(text) {
    let displayMsg = `You Entered [ ${text} ] <br /> typeof ======> "String"`;
    blackScreen.innerHTML = displayMsg;
}
function displayAsNumber(text) {
    let displayMsg = `You Entered [ ${text} ] <br /> typeof ======> "Number"`;
    blackScreen.innerHTML = displayMsg;
}
function clearScreen() {
    blackScreen.innerHTML = "";
}

function promptIfs() {
    let userSkills = window.prompt("Enter you Skills:");

    if (userSkills == "javaScript" || userSkills == "js") {
        blackScreen.innerHTML = "you can learn FrontEnd";
    } else if (userSkills == "php") {
        blackScreen.innerHTML = "you can learn Laravel";
    } else if (userSkills == "c++") {
        blackScreen.innerHTML = "you can learn C++ Framework";
    } else if (userSkills == "c#") {
        blackScreen.innerHTML = "you can learn .NET";
    } else {
        blackScreen.innerHTML = "your limits is the sky";
    }
}

function switchIfs() {
    let userAge = window.prompt("Enter your Age plz:");
    let age = Number(userAge);
    console.log(age);
    switch (true) {
        case age <= 10:
            console.log("you are a child");
            blackScreen.innerHTML = "you are a child";
            break;
        case age > 10 && age <= 18:
            console.log("you are a teenager");
            blackScreen.innerHTML = "you are a teenager";
            break;
        case age > 18 && age <= 22:
            console.log("you are a young person");
            blackScreen.innerHTML = "you are a young person";
            break;
        case age > 22 && age <= 30:
            console.log("you are now around your thirty");
            blackScreen.innerHTML = "you are now around your thirty";
            break;
        case age > 30 && age <= 40:
            console.log("you are a Dad / Mom by now");
            blackScreen.innerHTML = "you are a Dad / Mom by now";
            break;
        default:
            console.log("you are too fucken OLD!!");
    }
}
