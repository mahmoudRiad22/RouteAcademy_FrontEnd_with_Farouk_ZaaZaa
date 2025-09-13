function init(){
    return "Hello";
}
// const output = document.getElementById("output");
// const clear = document.getElementById("clear");
// clear.addEventListener("click",()=>{
//     output.innerHTML = ''
// })
/********************************************/
/********************************************/
// #region Basic I/O and conditions
console.clear();

/////////////////////////
// Problem 01:
// document.getElementById("problem01Btn").addEventListener("click",()=>{
//     let y = document.getElementById("problem01Input");
//     problem01(y.value)
// })
function problem01(x){
    const regex = /^\w+$/
    
    if ( !x)
        return "error";
    if (!regex.test(x))
        return 'error'
    if (x==0)
        return 'error'
    if (Number(x))
        return 'error'
    // if (regex.test(x))
    //     return `Hello, ${x}! Welcome to the program`
    let out = `Hello, ${x}! Welcome to the program`;
    // output.innerHTML = out;
    return out;
}
/////////////////////////
// problem 02:
// document.getElementById("problem02Btn").addEventListener("click",()=>{
//     let y = document.getElementById("problem02Input");
//     problem02(y.value)
// })
function problem02(x){

    let out = `Hello, ${x}! Welcome to the program`;
    // output.innerHTML = out;
    return out;
}
/////////////////////////

// #endregion Basic I/O and conditions
/********************************************/
/********************************************/
module.exports = {
    init,
    problem01,
    problem02,
}; 