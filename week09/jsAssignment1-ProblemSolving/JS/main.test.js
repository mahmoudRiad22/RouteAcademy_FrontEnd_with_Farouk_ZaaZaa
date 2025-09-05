const main = require("./main");

/////////////////////////////////////////////////////// DONE
test("init test", () => {
    expect(main.main("WTF")).toBe("WTF");
});

/////////////////////////////////////////////////////// DONE
// 1- Write a program that allow to user enter number then print it
test("test for problem1", () => {
    expect(main.problem1("ddd")).toBe("not number");
    expect(main.problem1(5)).toBe(5);
    expect(main.problem1(5)).toBe(5);
});
test("problem1 edge cases", () => {
    expect(main.problem1(null)).toBe("not number");
    expect(main.problem1(undefined)).toBe("not number");
    expect(main.problem1(NaN)).toBe("not number");
    expect(main.problem1(Infinity)).toBe(Infinity);
    expect(main.problem1(-Infinity)).toBe(-Infinity);
    expect(main.problem1(0)).toBe(0);
    expect(main.problem1("123")).toBe("123");
    expect(main.problem1(true)).toBe("not number");
    expect(main.problem1([])).toBe("not number");
    expect(main.problem1({})).toBe("not number");
});


/////////////////////////////////////////////////////// DONE
// 2- Write a program that take number from user then print yes if that number can
// divide by 3 and 4 otherwise print no

test("test for problem2", () => {
    expect(main.problem2("")).toBe("no");

    expect(main.problem2(15)).toBe("no");
    expect(main.problem2(28)).toBe("no");
    expect(main.problem2(14)).toBe("no");
    expect(main.problem2(12)).toBe("yes");
    expect(main.problem2(9)).toBe("no");
    expect(main.problem2(24)).toBe("yes");
});
// Edge cases for problem2
test("problem2 edge cases", () => {
    expect(main.problem2(0)).toBe("yes");
    expect(main.problem2(-12)).toBe("yes");
    expect(main.problem2(3)).toBe("no");
    expect(main.problem2(4)).toBe("no");
    expect(main.problem2(-3)).toBe("no");
    expect(main.problem2(-4)).toBe("no");
    expect(main.problem2(null)).toBe("no");
    expect(main.problem2(undefined)).toBe("no");
    expect(main.problem2(NaN)).toBe("no");
    expect(main.problem2("12")).toBe("yes");
});


/////////////////////////////////////////////////////// DONE

// 3- Write a program that allows the user to insert 2 integers then print the max Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10
test("test for problem3", () => {
    expect(main.problem3(3, 5)).toBe(5);
    expect(main.problem3(10, 7)).toBe(10);
});
// Edge cases for problem3
test("problem3 edge cases", () => {
    expect(main.problem3(5, 5)).toBe(5);
    expect(main.problem3(-5, -10)).toBe(-5);
    expect(main.problem3(0, 5)).toBe(5);
    expect(main.problem3(0, 0)).toBe(0);
    expect(main.problem3("a", 5)).toBe("error");
    expect(main.problem3(5, "b")).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative Example2
// Input: 10
// Output positive

test("test for problem4", () => {
    expect(main.problem4(-5)).toBe("negative");
    expect(main.problem4(10)).toBe("positive");
    expect(main.problem4(false)).toBe("error");
    expect(main.problem4(0)).toBe("error");
    expect(main.problem4(-8000)).toBe("negative");

    expect(main.problem4(null)).toBe("error");
    expect(main.problem4("gg")).toBe("error");
});
// Edge cases for problem4
test("problem4 edge cases", () => {
    expect(main.problem4(0)).toBe("error");
    expect(main.problem4(null)).toBe("error");
    expect(main.problem4(undefined)).toBe("error");
    expect(main.problem4(NaN)).toBe("error");
    expect(main.problem4("0")).toBe("error");
    expect(main.problem4(true)).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 5- Write a program that take 3 integers from user
// then print the max element and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9 Outputs:
// Max element = 9 Min element = 3

test("test for problem5", () => {
    expect(main.problem5(7, 8, 5)).toBe("max element = 8 , min element = 5");
    expect(main.problem5(3, 9, 6)).toBe("max element = 9 , min element = 3");
    expect(main.problem5(1, 1, 1)).toBe("max element = 1 , min element = 1");
    expect(main.problem5(0, 0, 0)).toBe("max element = 0 , min element = 0");
    expect(main.problem5(-1, -5, -9)).toBe("max element = -1 , min element = -9");
});
// Edge cases for problem5
test("problem5 edge cases", () => {
    expect(main.problem5(2, 2, 2)).toBe("max element = 2 , min element = 2");
    expect(main.problem5(-1, -2, -3)).toBe("max element = -1 , min element = -3");
    expect(main.problem5("1", 2, 3)).toBe("max element = 3 , min element = 1");
    expect(main.problem5(null, 2, 3)).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 6- Write a program that allows the user to insert integer number
// then check If a number is even or odd

test("test for problem6", () => {
    expect(main.problem6(2)).toBe("even");
    expect(main.problem6(0)).toBe("even");
    expect(main.problem6(-1)).toBe("odd");
    expect(main.problem6(7)).toBe("odd");
    expect(main.problem6(999)).toBe("odd");
    expect(main.problem6(-212)).toBe("even");
    expect(main.problem6(2)).toBe("even");
    expect(main.problem6(0.2)).toBe("even");
    expect(main.problem6(89.2)).toBe("odd");
});
// Edge cases for problem6
test("problem6 edge cases", () => {
    expect(main.problem6(0)).toBe("even");
    expect(main.problem6(-2)).toBe("even");
    expect(main.problem6(-3)).toBe("odd");
    expect(main.problem6(null)).toBe("error");
    expect(main.problem6(undefined)).toBe("error");
    expect(main.problem6(NaN)).toBe("error");
    expect(main.problem6("2")).toBe("even");
});


/////////////////////////////////////////////////////// DONE

// 8- Write a program that take character from user
// then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant

test("test for problem8", () => {
    expect(main.problem8("a")).toBe("vowel");
    expect(main.problem8("e")).toBe("vowel");
    expect(main.problem8("i")).toBe("vowel");
    expect(main.problem8("o")).toBe("vowel");
    expect(main.problem8("u")).toBe("vowel");
    expect(main.problem8("b")).toBe("consonant");
    expect(main.problem8(5)).toBe("error");
    expect(main.problem8(-5)).toBe("error");
    expect(main.problem8(0.8)).toBe("error");

    expect(main.problem8(";")).toBe("error");

    expect(main.problem8("r")).toBe("consonant");
    expect(main.problem8("v")).toBe("consonant");

    expect(main.problem8(".")).toBe("error");
    expect(main.problem8(".")).toBe("error");
    expect(main.problem8("xxxx")).toBe("error");
    expect(main.problem8("_")).toBe("error");
});
// Edge cases for problem8
test("problem8 edge cases", () => {
    expect(main.problem8("A")).toBe("vowel");
    expect(main.problem8("E")).toBe("vowel");
    expect(main.problem8("I")).toBe("vowel");
    expect(main.problem8("O")).toBe("vowel");
    expect(main.problem8("U")).toBe("vowel");
    expect(main.problem8("1")).toBe("error");
    expect(main.problem8("@")).toBe("error");
    expect(main.problem8("")).toBe("error");
    expect(main.problem8(null)).toBe("error");
    expect(main.problem8(undefined)).toBe("error");
    expect(main.problem8("ae")).toBe("error");
    expect(main.problem8("abc")).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 9- Write a program that allows user to insert integer
// then print all numbers between 1 to that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

test("test for problem9", () => {
    expect(main.problem9(5)).toBe("1,2,3,4,5");
    expect(main.problem9(10)).toBe("1,2,3,4,5,6,7,8,9,10");
});
// Edge cases for problem9
test("problem9 edge cases", () => {
    expect(main.problem9(0)).toBe("error");
    expect(main.problem9(-5)).toBe("error");
    expect(main.problem9(null)).toBe("error");
    expect(main.problem9(undefined)).toBe("error");
    expect(main.problem9("5")).toBe("1,2,3,4,5");
});


/////////////////////////////////////////////////////// DONE

// 10- Write a program that allows user to insert integer
// then print a multiplication table up to 12.
// Example Input: 5 Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

test("test for problem10", () => {
    expect(main.problem10(5)).toBe("5 10 15 20 25 30 35 40 45 50 55 60");
    expect(main.problem10(10)).toBe("10 20 30 40 50 60 70 80 90 100 110 120");
    expect(main.problem10(0)).toBe("0 0 0 0 0 0 0 0 0 0 0 0");
    expect(main.problem10("g")).toBe("error");
});
// Edge cases for problem10
test("problem10 edge cases", () => {
    expect(main.problem10(-5)).toBe("-5 -10 -15 -20 -25 -30 -35 -40 -45 -50 -55 -60");
    expect(main.problem10("a")).toBe("error");
    expect(main.problem10(null)).toBe("error");
    expect(main.problem10(undefined)).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 11- Write a program that allows to user to insert number
// then print all even numbers between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14

test("test for problem11", () => {
    expect(main.problem11(15)).toBe("2 4 6 8 10 12 14");
    expect(main.problem11(0)).toBe("error");
    expect(main.problem11(-5)).toBe("-2 -4");
    expect(main.problem11("bn")).toBe("error");
});
// Edge cases for problem11
test("problem11 edge cases", () => {
    expect(main.problem11(1)).toBe("");
    expect(main.problem11(-1)).toBe("");
    expect(main.problem11(null)).toBe("error");
    expect(main.problem11(undefined)).toBe("error");
    expect(main.problem11("10")).toBe("2 4 6 8 10");
});


/////////////////////////////////////////////////////// DONE

// 12- Write a program that take two integers then print the power Example:
// Input: 4 3
// Output: 64 Hint how to calculate 4^3 = 4 * 4 * 4 =64

test("test for problem12", () => {
    expect(main.problem12(4, 3)).toBe("64");
    expect(main.problem12("x", "v")).toBe("error");
    expect(main.problem12(" ", "")).toBe("error");
    expect(main.problem12(-1, 4)).toBe("1");
    expect(main.problem12(0, 8)).toBe("0");
    expect(main.problem12(800, 0)).toBe("1");
});
// Edge cases for problem12
test("problem12 edge cases", () => {
    expect(main.problem12(null, 3)).toBe("error");
    expect(main.problem12(4, null)).toBe("error");
    expect(main.problem12(undefined, 3)).toBe("error");
    expect(main.problem12(4, undefined)).toBe("error");
    expect(main.problem12(NaN, 3)).toBe("error");
    expect(main.problem12(4, NaN)).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 12_2- Write a program to enter marks of five subjects and
// calculate total, average and percentage.
// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 435
// Average Marks =87
// Percentage =87
test("test for problem12_2", () => {
    expect(main.problem12_2([95, 76, 58, 90, 89])).toBe(
        `Total marks = 408, Average Marks = 81.6, Percentage = 81.6%`
    );
    expect(main.problem12_2([100, 100, 100, 100, 100])).toBe(
        `Total marks = 500, Average Marks = 100, Percentage = 100%`
    );
    expect(main.problem12_2([0, 0, 0, 0, 0])).toBe(
        `Total marks = 0, Average Marks = 0, Percentage = 0%`
    );
    expect(main.problem12_2([0, 0, 0, 0, 0])).toBe(
        `Total marks = 0, Average Marks = 0, Percentage = 0%`
    );
    expect(main.problem12_2([0, 0, "", 0, 0])).toBe(`error`);
    expect(main.problem12_2([40, 56, "", 0, " "])).toBe(`error`);
    expect(main.problem12_2([40, 56, "", 0, " "])).toBe(`error`);
});
// Edge cases for problem12_2
test("problem12_2 edge cases", () => {
    expect(main.problem12_2([null, 0, 0, 0, 0])).toBe("error");
    expect(main.problem12_2([undefined, 0, 0, 0, 0])).toBe("error");
    expect(main.problem12_2([NaN, 0, 0, 0, 0])).toBe("error");
    expect(main.problem12_2([1, 2, 3, 4])).toBe("error");
    expect(main.problem12_2([1, 2, 3, 4, 5, 6])).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// 13-Write a program to input month number and print number of days in that month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31
test("test for problem13", () => {
    expect(main.problem13(1)).toBe("Days in month: 31");
    expect(main.problem13(11)).toBe("Days in month: 30");
    expect(main.problem13(5)).toBe("Days in month: 31");
    expect(main.problem13(2)).toBe("Days in month: 28");
    expect(main.problem13(7)).toBe("Days in month: 31");
});
// Edge cases for problem13
test("problem13 edge cases", () => {
    expect(main.problem13(0)).toBe("error");
    expect(main.problem13(13)).toBe("error");
    expect(main.problem13(null)).toBe("error");
    expect(main.problem13(undefined)).toBe("error");
    expect(main.problem13("2")).toBe("Days in month: 28");
});


/////////////////////////////////////////////////////// DONE

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F
test("test for problem14", () => {
    let grades;

    grades = [55, 69, 41, 75, 80];
    expect(main.problem14(grades)).toBe(`percentage = 64%,  grade: D`);

    grades = [0, 0, 0, 0, 0];
    expect(main.problem14(grades)).toBe(`percentage = 0%,  grade: F`);

    grades = [55, 69, 4, "", -75];
    expect(main.problem14(grades)).toBe(`error`);
});
// Edge cases for problem14
test("problem14 edge cases", () => {
    expect(main.problem14([null, 0, 0, 0, 0])).toBe("error");
    expect(main.problem14([undefined, 0, 0, 0, 0])).toBe("error");
    expect(main.problem14([NaN, 0, 0, 0, 0])).toBe("error");
    expect(main.problem14([1, 2, 3, 4])).toBe("error");
    expect(main.problem14([1, 2, 3, 4, 5, 6])).toBe("error");
});


/////////////////////////////////////////////////////// DONE

// ******************************** Using switch case*******************************
// 15- Write a program to print total number of days in month
test("test for problem15", () => {
    expect(main.problem15("1")).toBe("Days in month: 31");
    expect(main.problem15("18")).toBe("error");
    expect(main.problem15("11")).toBe("Days in month: 30");
    expect(main.problem15("5")).toBe("Days in month: 31");
    expect(main.problem15("2")).toBe("Days in month: 28");
    expect(main.problem15("7")).toBe("Days in month: 31");
});
// Edge cases for problem15
test("problem15 edge cases", () => {
    expect(main.problem15("0")).toBe("error");
    expect(main.problem15("13")).toBe("error");
    expect(main.problem15(null)).toBe("error");
    expect(main.problem15(undefined)).toBe("error");
    expect(main.problem15("")).toBe("error");
});
/////////////////////////////////////////////////////// DONE

// 16- Write a program to check whether an alphabet is vowel or consonant
test("test for problem16", () => {
    // Vowels lowercase
    expect(main.problem16("a")).toBe("vowel");
    expect(main.problem16("e")).toBe("vowel");
    expect(main.problem16("i")).toBe("vowel");
    expect(main.problem16("o")).toBe("vowel");
    expect(main.problem16("u")).toBe("vowel");
    // Vowels uppercase
    expect(main.problem16("A")).toBe("vowel");
    expect(main.problem16("E")).toBe("vowel");
    expect(main.problem16("I")).toBe("vowel");
    expect(main.problem16("O")).toBe("vowel");
    expect(main.problem16("U")).toBe("vowel");
    // Consonants lowercase
    expect(main.problem16("b")).toBe("consonant");
    expect(main.problem16("z")).toBe("consonant");
    expect(main.problem16("m")).toBe("consonant");
    // Consonants uppercase
    expect(main.problem16("B")).toBe("consonant");
    expect(main.problem16("Z")).toBe("consonant");
    expect(main.problem16("M")).toBe("consonant");
    // Not a letter
    expect(main.problem16("1")).toBe("error");
    expect(main.problem16("@")).toBe("error");
    expect(main.problem16(" ")).toBe("error");
    expect(main.problem16("")).toBe("error");
    expect(main.problem16(null)).toBe("error");
    expect(main.problem16(undefined)).toBe("error");
    expect(main.problem16("ae")).toBe("error");
    expect(main.problem16("abc")).toBe("error");
    expect(main.problem16("-")).toBe("error");
});
/////////////////////////////////////////////////////// DONE

// 17- Write a program to find maximum between two numbers

test("test for problem17", () => {
    expect(main.problem17("4", "-1")).toBe("max = 4, min = -1");
    expect(main.problem17(null, "-1")).toBe("error");
    expect(main.problem17("0", "-1")).toBe("max = 0, min = -1");
    expect(main.problem17("-5", "-1")).toBe("max = -1, min = -5");
    expect(main.problem17(undefined, "-1")).toBe("error");
    expect(main.problem17("", "5")).toBe("error");
    expect(main.problem17(" ", "80")).toBe("error");

    // Additional test cases
    expect(main.problem17("10", "10")).toBe("max = 10, min = 10"); // equal numbers
    expect(main.problem17("-10", "-10")).toBe("max = -10, min = -10"); // equal negative numbers
    expect(main.problem17("100", "50")).toBe("max = 100, min = 50");
    expect(main.problem17("50", "100")).toBe("max = 100, min = 50");
    expect(main.problem17("0", "0")).toBe("max = 0, min = 0");
    expect(main.problem17("abc", "5")).toBe("error"); // non-numeric string
    expect(main.problem17("5", "xyz")).toBe("error"); // non-numeric string
    expect(main.problem17("5", null)).toBe("error");
    expect(main.problem17("5", undefined)).toBe("error");
    expect(main.problem17(NaN, 5)).toBe("error");
    expect(main.problem17(5, NaN)).toBe("error");
    expect(main.problem17("-999999999", "999999999")).toBe("max = 999999999, min = -999999999");
    expect(main.problem17("1.5", "2.5")).toBe("max = 2.5, min = 1.5"); // decimal numbers
    expect(main.problem17("-1.5", "-2.5")).toBe("max = -1.5, min = -2.5"); // negative decimals
    expect(main.problem17("0.0", "0")).toBe("max = 0, min = 0");
    expect(main.problem17("Infinity", "5")).toBe("max = Infinity, min = 5");
    expect(main.problem17("-Infinity", "5")).toBe("max = 5, min = -Infinity");
    expect(main.problem17("5", "Infinity")).toBe("max = Infinity, min = 5");
    expect(main.problem17("5", "-Infinity")).toBe("max = 5, min = -Infinity");
});
/////////////////////////////////////////////////////// DONE

// 18- Write a program to check whether a number is even or odd
test("test for problem18", () => {
    // Standard cases
    expect(main.problem18(2)).toBe("even");
    expect(main.problem18(3)).toBe("odd");
    expect(main.problem18(0)).toBe("even");
    expect(main.problem18(-2)).toBe("even");
    expect(main.problem18(-3)).toBe("odd");
    expect(main.problem18("4")).toBe("even");
    expect(main.problem18("5")).toBe("odd");
    expect(main.problem18("0")).toBe("even");
    expect(main.problem18("-8")).toBe("even");
    expect(main.problem18("-7")).toBe("odd");

    // Edge cases
    expect(main.problem18(null)).toBe("error");
    expect(main.problem18(undefined)).toBe("error");
    expect(main.problem18("")).toBe("error");
    expect(main.problem18(" ")).toBe("error");
    expect(main.problem18(NaN)).toBe("error");
    expect(main.problem18("abc")).toBe("error");
    expect(main.problem18(Infinity)).toBe("even");
    expect(main.problem18(-Infinity)).toBe("even");
    expect(main.problem18(2.0)).toBe("even");
    expect(main.problem18(3.0)).toBe("odd");
    expect(main.problem18(2.5)).toBe("odd");
    expect(main.problem18(-2.5)).toBe("odd");
    expect(main.problem18("2.0")).toBe("even");
    expect(main.problem18("3.0")).toBe("odd");
    expect(main.problem18("2.5")).toBe("odd");
    expect(main.problem18("-2.5")).toBe("odd");
    expect(main.problem18(2)).toBe("even");
    expect(main.problem18(3)).toBe("odd");
    expect(main.problem18(0)).toBe("even");
    expect(main.problem18(-2)).toBe("even");
    expect(main.problem18(-3)).toBe("odd");
    expect(main.problem18("4")).toBe("even");
    expect(main.problem18("5")).toBe("odd");
    expect(main.problem18("0")).toBe("even");
    expect(main.problem18("-8")).toBe("even");
    expect(main.problem18("-7")).toBe("odd");

});
/////////////////////////////////////////////////////// DONE

// 19- Write a program to check whether a number is positive or negative or zero
test("test for problem19", () => {
    // Standard cases
    expect(main.problem19(5)).toBe("positive");
    expect(main.problem19(-5)).toBe("negative");
    expect(main.problem19(0)).toBe("zero");
    expect(main.problem19("10")).toBe("positive");
    expect(main.problem19("-10")).toBe("negative");
    expect(main.problem19("0")).toBe("zero");
    expect(main.problem19(100)).toBe("positive");
    expect(main.problem19(-100)).toBe("negative");

    // Edge cases
    expect(main.problem19(null)).toBe("error");
    expect(main.problem19(undefined)).toBe("error");
    expect(main.problem19("")).toBe("error");
    expect(main.problem19(" ")).toBe("error");
    expect(main.problem19(NaN)).toBe("error");
    expect(main.problem19("abc")).toBe("error");
    expect(main.problem19(Infinity)).toBe("positive");
    expect(main.problem19(-Infinity)).toBe("negative");
    expect(main.problem19(0.0)).toBe("zero");
    expect(main.problem19("0.0")).toBe("zero");
    expect(main.problem19(2.5)).toBe("positive");
    expect(main.problem19(-2.5)).toBe("negative");
    expect(main.problem19("2.5")).toBe("positive");
    expect(main.problem19("-2.5")).toBe("negative");
    // expect(main.problem19({})).toBe("error");
    // expect(main.problem19([])).toBe("error");
    expect(main.problem19(true)).toBe("error");
    expect(main.problem19(false)).toBe("error");
});
/////////////////////////////////////////////////////// DONE

// 20- Write a program to create Simple Calculator

test("test for problem20 - invalid operator", () => {
    expect(main.problem20(5, "%", 2)).toBe("error");
    expect(main.problem20(5, "^", 2)).toBe("error");
    expect(main.problem20(5, "", 2)).toBe("error");
});

test("test for problem20 - invalid inputs", () => {
    expect(main.problem20(null, "+", 2)).toBe("error");
    expect(main.problem20(2, "+", undefined)).toBe("error");
    expect(main.problem20("abc", "+", 2)).toBe("error");
    expect(main.problem20(2, "+", "xyz")).toBe("error");
    expect(main.problem20(true, "+", 2)).toBe("error");
    expect(main.problem20(2, "+", false)).toBe("error");
});

test("test for problem20 - addition", () => {
    expect(main.problem20(2, "+", 3)).toBe(5);
    expect(main.problem20("10", "+", "5")).toBe(15);
    expect(main.problem20(-2, "+", 3)).toBe(1);
    expect(main.problem20(0, "+", 0)).toBe(0);
});
test("test for problem20 - subtraction", () => {
    expect(main.problem20(5, "-", 3)).toBe(2);
    expect(main.problem20("10", "-", "5")).toBe(5);
    expect(main.problem20(-2, "-", 3)).toBe(-5);
    expect(main.problem20(0, "-", 0)).toBe(0);
});
test("test for problem20 - multiplication", () => {
    expect(main.problem20(2, "*", 3)).toBe(6);
    expect(main.problem20("10", "*", "5")).toBe(50);
    expect(main.problem20(-2, "*", 3)).toBe(-6);
    expect(main.problem20(0, "*", 5)).toBe(0);
});
test("test for problem20 - division", () => {
    expect(main.problem20(6, "/", 3)).toBe(2);
    expect(main.problem20("10", "/", "5")).toBe(2);
    expect(main.problem20(-6, "/", 3)).toBe(-2);
    expect(main.problem20(0, "/", 5)).toBe(0);
});
test("test for problem20 - division by zero", () => {
    expect(main.problem20(5, "/", 0)).toBe("error");
    expect(main.problem20(0, "/", 0)).toBe("error");
});
/////////////////////////////////////////////////////// DONE
