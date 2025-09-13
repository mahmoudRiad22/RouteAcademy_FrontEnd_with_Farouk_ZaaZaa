/********************************************/
/********************************************/
// #region init
console.clear();

const main = require("../JS/main.js");

test('test for init', ()=>{

expect(main.init()).toBe("Hello");
})

// #endregion init
/********************************************/
/********************************************/

test('test for problem01', ()=>{

expect(main.problem01("mahmoud")).toBe(`Hello, mahmoud! Welcome to the program`);
expect(main.problem01("mahmo-ud")).toBe(`Hello, mahmo-ud! Welcome to the program`);
expect(main.problem01("")).toBe(`error`);
expect(main.problem01(null)).toBe(`error`);
expect(main.problem01(undefined)).toBe(`error`);
expect(main.problem01(" ")).toBe(`error`);
expect(main.problem01(0)).toBe(`error`);
expect(main.problem01("0")).toBe(`error`);
expect(main.problem01("1221")).toBe(`error`);

})