// 'use strict'
/********************************************/
/********************************************/
// #region recape or whatever it is

function recape() {
    console.clear();
    function f1() {
        return new Promise(function (resolved, rejected) {
            console.log("function 1");
            let error = 0;
            if (!error) resolved();
            else rejected();
        });
    }

    function f2() {
        return new Promise(function (resolved, rejected) {
            console.log("function 2");
            let error = 0;
            if (!error) resolved();
            else rejected();
        });
    }

    function f3() {
        return new Promise(function (resolved, rejected) {
            console.log("function 3");
            let error = 0;
            if (!error) resolved();
            else rejected();
        });
    }

    function f4() {
        return new Promise(function (resolved, rejected) {
            console.log("function 4");
            let error = 0;
            if (!error) resolved();
            else rejected();
        });
    }

    function f5() {
        return new Promise(function (resolved, rejected) {
            console.log("function 5");
            let error = 0;
            if (!error) resolved();
            else rejected();
        });
    }

    ///// call back hell

    /// promise && promise status

    // promise status:
    // 1- pending
    // 2- settled: ===>  fulfilled (success, resolved)  or fail (rejected)

    //  create a promise:
    //  1- build a promise as a constractor
    //  2- use it;

    // make the function "return a promise" to be used by the "then" and "catch"
    // const p1 = new Promise(
    //     function (resolved, rejected){
    //         f1();
    //     }
    // )

    // p1.then(f2).catch(f3)

    async function steps() {
        await f1();
        await f2();
        await f3();
        await f4();
        await f5();
        console.log("Finished");
    }
    // steps();

    let recipes = [];
    const Box = document.getElementById("box");
    async function getMeals(meal) {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
        const data = await response.json();
        console.log("data :>> ", data);
        recipes = data.recipes;
        displayMeals();
    }

    function displayMeals() {
        let box = "";

        for (let i = 0; i < recipes.length; i++) {
            box += `
                        <div class="card-item col-md-2 col-lg-4 col-xl-3 col-xxl-2">
                            <div class="inner">
                                <img class="w-100 d-block" src="${recipes[i].image_url}" alt="${recipes[i].image_url}"/>
                                <div class="info">
                                    <h2 class="text-truncate">${recipes[i].title}</h2>
                                </div>
                                <div class="px-1">
                                    <button class="btn btn-info w-100">view recipe</button>
                                </div>
                            </div>
                        </div>

        `;
        }
        Box.innerHTML = box;
    }
    // getMeals('pizza')
}

// recape()

// #endregion recape or whatever it is
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region string manibulation

function stringManibulation() {
    console.clear();
    let str = "          ,this, is, the, first, string, to, use, for, manibulation,   z";

    // to uppercase
    // to lowercase
    // chatAT()
    // includes
    // split
    // replace
    // trim

    console.log("str.toUpperCase() :>> ", str.toUpperCase());
    console.log("str.toLowerCase() :>> ", str.toLowerCase());
    console.log("str.charAt(15) :>> ", str.charAt(15));
    console.log('str.includes("i") :>> ', str.includes());
    console.log("str.split(/ b/) :>> ", str.split(/\b/));
    console.log("str.split(/s/) :>> ", str.split(/\s/));
    console.log("str.split(/,/) :>> ", str.split(/,/));
    console.log("str.split().join() :>> ", str.split(/\b/).join(""));
    console.log("str.trim() :>> ", str.trim().split(/,/));
    console.log(
        "str.trimStart().trimEnd().split(/,/) :>> ",
        str.trimStart().trimEnd().split(/\x2c/)
    );
}
// stringManibulation();

// #endregion string manibulation
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region  Slobby VS strict mode

// in future frameworks the strict mode is on by defualt and in classes too

function slobbyVsStrictMode() {
    console.clear();
    ("use strict");
    // if no decleration is found the variable is declared Golbal by default
    // fixed in "use strict"
    function test() {
        const x = 200;
    }
    test();
    let x = 4000;
    console.log("x :>> ", x);

    // dublicated parameters with no initialization override each other by sequence.
    // fixed in "use strict"
    function test2(x, y, z, m) {
        console.log(y);
    }

    test2(30, 40, 50, 1000);

    // the keyword "arguments" can be used for declerations of variables
    // fixed in "use strict"
    function test3(x, y) {
        console.log(arguments);
    }
    test3(40, 50);
    function argumentss() {
        console.log("WTF");
    }
    argumentss();
    // let arguments = 40;
    console.log(arguments);
}
// slobbyVsStrictMode();

// #endregion Slobby VS strict mode
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region var vs let vs const

function VarVsLetVsConst() {
    // var is deprecated from js after EC6
    // we use let and const for declaration and assignment.
    // let and const has a TDZ before the initalization.
    // you can't access the variables in the TDZ[Temporary Dead Zone].

    // all vriables are const unless you want that variable to be changed then use let

    console.clear();
    let x = 300;
    console.log(x);
    // let x = 300; // error: can't access x before initialization
}
// VarVsLetVsConst();

// #endregion var vs let vs const
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Default params & backtick aka template literal === ``

function defaultParams() {
    console.clear();
    // simply assign a value to the params directly
    // the value will be ignored if there is a value in the call

    function test(name = "mahmoud", age = 30, salary = 4000) {
        console.log("name :>> ", name);
        console.log("age :>> ", age);
        console.log("salary :>> ", salary);
    }
    test();
    test("ayman", 25, 6000);

    /////////////////////////////////////////////
    /////////////////////////////////////////////
    // tagged backtick
    function compine(strings, ...values) {
        let box = "";

        strings.forEach((value, i) => {
            box += value + (values[i] || "");
        });

        console.log(box);
    }

    const x = 100,
        y = 200,
        z = 300,
        m = 400;
    compine`this is 1st string = ${x}, 
    here is the 2nd string = ${y},
    here is the 3rd string = ${z},
    here is the 4th string = ${m},
    and so on...
    `;
}
// defaultParams();

// #endregion Default params
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region spread operator

function spreadOperatorWithIterables() {
    console.clear();
    // the spread operator uses " " as a seperator when spreading the values.
    // the spread opertor is used to spread out the values of an iterable [string, array, obj]
    // if used with func parameter it collect all the parameters in a single array.

    // spread with strings
    let str = "hello";
    console.log("...str :>> ", ...str); // h e l l o

    //spread with array
    let arr = ["mahmoud", "isalm", "mohamed", "zienab", "aya", "omar"];
    console.log("...arr :>> ", ...arr); // 'mahmoud' 'islam' 'mohamed' 'zienab' 'aya' 'omar'

    // spread with objects
    let obj1 = {name: "mahmoud", age: 30};

    let obj1Info = {
        city: "tanta",
        country: "Egypt",
    };

    const obj1Full = {...obj1, ...obj1Info};
    console.log("obj1Full :>> ", {...obj1, ...obj1Info});

    // spread with array of objects
    let obj = [
        {
            name: "mahmoud",
            age: 30,
            city: "tanta",
            country: "Egypt",
        },
        {
            name: "isalm",
            age: 23,
            city: "mansora",
            country: "Egypt",
        },
    ];

    console.log("...obj :>> ", ...obj);

    // spread with iterables: i.e Nodelist
    const allP = document.querySelectorAll("p");

    console.log("allP :>> ", allP);
    console.log("...allP :>> ", ...allP); // space seperated html p objects
}
// spreadOperatorWithIterables();
// #endregion spread operator
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region destructing object
function destructingObject() {
    console.clear();

    // the idea is to create the variables based on the properties of the boject iteslf

    const user = {
        name: "mahmoud",
        age: 30,
        slikks: ["html", "css", "javaScript"],
        job: "front-end",
        city: "tanta",
        country: "Egypt",
        salary: 4000,
        family: {
            sisters: ["aya", "bassma"],
            mother: "mona",
            father: "mustafa",
        },
        location: "106 El-shorbagy st",
    };

    // simply type out the properties you need.
    // then after the = write the obj where these properites belongs to.
    const {
        location: userLocation,
        family: {sisters: userSisters},
    } = user;

    console.log("location :>> ", userLocation);
    console.log("sisters :>> ", userSisters);
}

// destructingObject();

// #endregion destructing object
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region this keyword

/** summary
 * the RULE IS: "this" points to the leftside of the dot at call time;
 * 
 * identify the call time {find where clog of "this" is called}
 * if there is no dot, it goes back to window or undefined[if 'use strict']
 * if there is a dot, it points to the left side of the dot
 */
console.clear();
/** a function that tests the "this" keyword
 *
 */
function thisKeyword() {
    "use strict";
    console.log("inside thisKeyword this :>> ", this);
    /**this function is to test "this" inside a function */
    function test() {
        console.log("inside test this :>> ", this);
    }
    test();

    // now we see this inside an object
}
let obj;
const user = {
    name: "mahmoud",
    age: 30,
    slikks: ["html", "css", "javaScript"],
    job: "front-end",
    city: "tanta",
    country: "Egypt",
    salary: 4000,
    family: {
        sisters: ["aya", "bassma"],
        mother: "mona",
        father: "mustafa",
        doSomthing: function () {
            console.log("this :>> ", this);
            const obj = {
                doAnotherThing: function () {
                    console.log("this :>> ", this);
                },
            };
            obj.doAnotherThing();

            function test6(){
                console.log('this :>> ', this);
            }
            test6();
        },
    },
    location: "106 El-shorbagy st",
};

let ret = user.family.doSomthing();
thisKeyword();
// #endregion this keyword
/********************************************/
/********************************************/
