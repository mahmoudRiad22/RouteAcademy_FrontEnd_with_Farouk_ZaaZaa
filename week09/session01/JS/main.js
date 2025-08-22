/*

window ======> browser

document =====> HTML file

console =====> the console log

*/

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

function readInput(){
    let userText = document.getElementById('userText').value;
    return userText;
}

function displayInput(){
    let userMsg = readInput();
    let type = typeof(userMsg);
    console.log(userMsg, "type of: " + type);

    document.getElementById('msgArea').innerHTML = `${userMsg} "type of : ${type}"`;
}

function clearInput(){
    document.getElementById('msgArea') = "";
    document.getElementById('msgArea').innerHTML = "";
}