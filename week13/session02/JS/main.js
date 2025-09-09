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
steps();

let recipes = []
const Box = document.getElementById('box');
async function getMeals(meal){
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    const data = await response.json();
    console.log('data :>> ', data);
    recipes = data.recipes
    displayMeals()

}   

function displayMeals(){
    let box = '';

    for (let i =0; i< recipes.length; i++){
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

        `
    }
    Box.innerHTML = box;
}
getMeals('pizza')