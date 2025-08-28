////////////////////////// Document Object Modal //////////////////////////////

/********************************************/
/********************************************/
// #region Element Selectors
console.clear();

// return a single element oo null
let x = document.getElementById("hello22");
console.log("return :>> ", x);

// returns htmlCollection, or legnth=0
let x1 = document.getElementsByClassName("space seperated list of classes");
console.log("x1 :>> ", x1, x1.length);

// return the element or null
let x2 = document.querySelector("cc");
console.log("x2 :>> ", x2);

// return nodelist of elements or length=0
let x3 = document.querySelectorAll("xzxz");
console.log("x3, x3.length :>> ", x3, x3.length);

// return htmlCollection or length=0
let x4 = document.getElementsByTagName("edeed");
console.log("x4, x4.length :>> ", x4, x4.length);

// return nodelist of the elements or length=0
let x5 = document.getElementsByName("hello3");
console.log("x5, x5.length :>> ", x5, x5.length);

// return the root node
let x6 = document.getRootNode();
console.log("RootNode :>> ", x6);

// #endregion Element Selectors
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Stringify() VS parse()
console.clear();

// JSON.stringify() ===>
//  return a string contain all the data
// it reads all data types EXCEPT undefined
// it stringify ANYTHING inside the brackets

// JSON.parse() ===>
// reverse the string back to original js type
// you can check the parsed value and it will pass the !! checker.

// So in general you check the data
// before a storage.set
// after a storage.get

let x8;
let x7 = JSON.stringify("");
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify("");
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify(null);
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify(0);
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify(true);
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify(false);
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify(1);
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7));

x7 = JSON.stringify([]);
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7).length);

x7 = JSON.stringify({});
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7).length);

x7 = JSON.stringify("madhmoud");
console.log("x7, x7.length :>> ", x7, x7.length);
console.log("x8 :>> ", JSON.parse(x7), !!JSON.parse(x7).length);

// #endregion Stringify() VS parse()
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Session / Local Storage Functions
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

// send value to storage
// always stringify the data before send
sessionStorage.setItem("people", JSON.stringify(people));

// return a string type info or null
// after retrive always parse
sessionStorage.getItem("people");

// removes the key/value pair from storage
sessionStorage.removeItem("");

// removes all data i storage
sessionStorage.clear();

// #endregion Session / Local Storage Functions
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Change HTML-Element Content
console.clear();

let x9 = `
<p>asdasdasdasd</p>

`;
document.getElementById("hello2").innerHTML += x9;
document.getElementById("hello2").innerHTML += x9;

console.log("x9 :>> ", x9);
// #endregion Change HTML-Element Content
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Attributes in JS
console.clear();

let x10 = document.getElementById("hello2");
console.log(x10);

// console.log(x10.toggleAttribute('name'));
// console.log('x10 :>> ', x10);

console.log(x10.setAttribute("name", "x"));
console.log("x10 :>> ", x10);

console.log(x10.toggleAttribute("id"));
console.log("x10 :>> ", x10);

console.log(x10.toggleAttribute("id"));
console.log("x10 :>> ", x10);

console.log(x10.removeAttribute("name"));
console.log("x10 :>> ", x10);

console.log("x10.id = 10 :>> ", (x10.id = 10));

// #endregion Attributes in JS
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region For...of VS For...in
console.clear();

// the key difference is that:
// for item of arrayOfItems ==> gives you the actual value; used for [arrays, strings, maps, sets, etc]
// for key in ObjectOfKeys ==> gives you the keys to use it to get a value; [objects]

// for...of:
//      iterates over the actual value of each index
//      used for used for [arrays, strings, maps, sets, etc]

// for...in:
//      iterates overkeys (for arrays → indexes, for objects → property names)
//      used for Objects

// uses the iterable and value
for (const person of people) {
    console.log("person :>> ", person);
}

for (const person in people) {
    if (Object.prototype.hasOwnProperty.call(people, person)) {
        const currentPerson = people[person];
        // console.log('currentPerson :>> ', currentPerson);
    }
}

let people2 = ["mahmoud", "islam", "aya"];
for (const index in people2) {
    console.log(index, people2[index]);
}
// Output:
// "0" "mahmoud"
// "1" "islam"
// "2" "aya"

let obj1 = {
    prop1: "1",
    prop2: "2",
    prop3: "3",
    prop4: "4",
    prop5: "5",
};

// #endregion For...of VS For...in
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region EventListener Applying
console.clear();

const bigImg = document.getElementById("big-img");

let bigImgSrc = bigImg.getAttribute("src");

const miniImgs = document.querySelectorAll(".mini-img");

for (const index in miniImgs) {
    if (Object.prototype.hasOwnProperty.call(miniImgs, index)) {
        const miniImg = miniImgs[index];
        miniImg.addEventListener("click", function (e) {
            const bigImgSrcHolder = bigImgSrc;

            bigImgSrc = e.target.src;
            bigImg.setAttribute("src", bigImgSrc); //update with new src

            e.target.src = bigImgSrcHolder;
        });
    }
}
console.log("bigImg.getBoundingClientRect() :>> ", bigImg.getBoundingClientRect());
// #endregion EventListener Applying
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Events Types
console.clear();

// we will apply the following events on the bigImg from ubove code

////////////////////////////////////////////////////////////
// 1- mouse Events
//////////.... most useful info are [e.target] .....////////


bigImg.addEventListener("click", function (e) {

    console.log("e.type :>> ", e.type);
    // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.target);
});

bigImg.addEventListener("mouseup", function (e) {

    console.log("e.type :>> ", e.type);
    // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.target);
});

bigImg.addEventListener("mousedown", function (e) {
    console.log("e.type :>> ", e.type);
    // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.target);
});


bigImg.addEventListener("mouseleave", function (e) {
    console.log("e.type :>> ", e.type);
    // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.target);
});


bigImg.addEventListener("mouseenter", function (e) {
    console.log("e.type :>> ", e.type);
    // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.target);
});


// bigImg.addEventListener("scroll", function (e) {
//     console.log("e.type :>> ", e.type);
//     console.log("e :>> ", e);
//     console.log("e.target :>> ", e.target);
// });
////////////////////////////////////////////////////////////

// 2- Keyboard Events : Cant Read it unless its on window

//////////.... most useful info are 
// [e.target ,  e.code, e.key] .....////////



window.addEventListener("keydown", function (e) {
    // console.log("e.type :>> ", e.type);
    // // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.code);
});


window.addEventListener("keyup", function (e) {
    // console.log("e.type :>> ", e.type);
    // // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.code);
});

window.addEventListener("keypress", function (e) { // only take input from letter-keys
    // console.log("e.type :>> ", e.type);
    // // console.log("e :>> ", e);
    // console.log("e.target :>> ", e.code);
});

////////////////////////////////////////////////////////////

// 3- Form Events:

//////////.... most useful info are 
// e.type ===> "input" // happens every keyup in input element
// e.data ===> input value
// e.inputytype ===> has teh input type//

document.getElementById('input1').addEventListener("input", function (e) { 
    // console.log("e.type :>> ", e.type);
    // console.log("e :>> ", e);
    console.log("e.data :>> ", e.data);
});


document.getElementById('input1').addEventListener("blur", function (e) { 
    // console.log("e.type :>> ", e.type);
    console.log("e :>> ", e);
    // console.log("e.data :>> ", e.data);
});



document.getElementById('input1').addEventListener("focus", function (e) { 
    // console.log("e.type :>> ", e.type);
    console.log("e :>> ", e);
    // console.log("e.data :>> ", e.data);
});


document.getElementById('input1').addEventListener("submit", function (e) { 
    console.log("e.type :>> ", e.type);
    console.log("e :>> ", e);
    // console.log("e.data :>> ", e.data);
});
///// e.type ====> "blur"
// e.//


///////////////////////////////////////////////////////
// #endregion Events Types
/********************************************/
/********************************************/
