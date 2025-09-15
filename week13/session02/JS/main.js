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
VarVsLetVsConst();

// #endregion var vs let vs const
/********************************************/
/********************************************/

