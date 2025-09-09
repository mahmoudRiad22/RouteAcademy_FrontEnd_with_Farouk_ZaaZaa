// window ======> browser

// document =====> HTML file

// console =====> the console log

let msg;

function showAlert() {
    window.alert(' mahmoud says "HI"');
}

function showError() {
    console.error("ERORRRRRRR!!!!!!"); // does not stop the code.
    throw new Error("ERROR!"); // throw an error to the console and stops the code.
}

function showWarning() {
    console.warn("WARNING!!!!");
}

function showInputInConsole() {
    let userInput = document.getElementById("userInput");

    console.log(userInput.value);
}

function readInput() {
    let userText = document.getElementById("userText").value;
    return userText;
}
function displayInput(promptMsg) {
    let userMsg = readInput();

    if (userMsg == "") {
        userMsg = "nothing";
    }
    console.log(`Prompt message is : ${promptMsg}`);
    console.log(`User Message is: ${userMsg}`);

    document.getElementById("msgArea").innerHTML = `
    User Message is: ${userMsg} <br />
    Prompt message is : ${promptMsg} <br />
    `;
}

function clearInput() {
    document.getElementById("msgArea").innerHTML = "";
}

function showPrompt() {
    let userName = window.prompt("Write you Name:");
    console.log(userName);
    displayInput(userName);
}
