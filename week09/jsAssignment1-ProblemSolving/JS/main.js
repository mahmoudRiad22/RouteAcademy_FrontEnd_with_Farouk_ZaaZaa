//////////////////////////// week09 jsAssignment1-ProblemSolving ////////////////////////////

/********************************************/
/********************************************/
// #region Btns declerations
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
const btn12_2 = document.getElementById("btn12_2");
const btn13 = document.getElementById("btn13");
const btn14 = document.getElementById("btn14");
const btn15 = document.getElementById("btn15");
const btn16 = document.getElementById("btn16");
const btn17 = document.getElementById("btn17");
const btn18 = document.getElementById("btn18");
const btn19 = document.getElementById("btn19");
const btn20 = document.getElementById("btn20");

// #endregion Btns holders
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region BTNs eventListeners

btn1.addEventListener("click", function () {
    problem1Input();
});
btn2.addEventListener("click", function () {
    problem2Input();
});
btn3.addEventListener("click", function () {
    problem3Input();
});
btn4.addEventListener("click", function () {
    problem4Input();
});
btn5.addEventListener("click", function () {
    problem5Input();
});
btn6.addEventListener("click", function () {
    problem6Input();
});
btn8.addEventListener("click", function () {
    problem8Input();
});
btn9.addEventListener("click", function () {
    problem9Input();
});
btn10.addEventListener("click", function () {
    problem10Input();
});
btn11.addEventListener("click", function () {
    problem11Input();
});
btn12.addEventListener("click", function () {
    problem12Input();
});
btn12_2.addEventListener("click", function () {
    problem12_2Input();
});
btn13.addEventListener("click", function () {
    problem13Input();
});
btn14.addEventListener("click", function () {
    problem14Input();
});
btn15.addEventListener("click", function () {
    problem15Input();
});
btn16.addEventListener("click", function () {
    problem16Input();
});
btn17.addEventListener("click", function () {
    problem17Input();
});
btn18.addEventListener("click", function () {
    problem18Input();
});
btn19.addEventListener("click", function () {
    problem19Input();
});
btn20.addEventListener("click", function () {
    problem20Input();
});

// #endregion BTNs eventListeners
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 01

// 1- Write a program that allow to user enter number then print it Example
// Input: 5
// Output: 5

function problem1Input() {
    let input = prompt("Enter a number");
    alert(`${problem1(input)}`);
}
function problem1(x) {
    if (x === 0) return 0;
    if (typeof x === "boolean") return "not number";
    if (Number(x)) {
        return x;
    } else if (Number(x) && x !== "") {
        return 0;
    } else if (!Number(x) || x === "") {
        return "not number";
    }
}

// #endregion Problem 01
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 02

// 2- Write a program that take number from user then print yes if that number can
// divide by 3 and 4 otherwise print no
// Example1
// Input: 12 Output Yes Example 2
// Input: 9 Output No

// problem2Input();

function problem2Input() {
    let input = prompt("Enter a number:");
    alert(problem2(input));
}

function problem2(input) {
    if (input !== "") {
        if (input == 0) return "yes";
        if (Number(input)) {
            if (input % 3 == 0 && input % 4 == 0) return "yes";
            else return "no";
        } else return "no";
    }
    return "no";
}

// #endregion Problem 02
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 03

// 3- Write a program that allows the user to insert 2 integers then print the max Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10

function problem3Input() {
    let n1 = prompt("Enter 1st number:");
    let n2 = prompt("Enter 2nd number:");
    let output = problem3(n1, n2);
    alert(output);
}
function problem3(n1, n2) {
    if (n1 == 0 && n2 == 0) return 0;

    if (n1 !== "" && n2 != "") {
        if ((!!Number(n1) || n1 === 0) && (!!Number(n2) || n2 === 0)) {
            console.log("n1, n2 :>> ", n1, n2);
            if (Number(n1) >= Number(n2)) return Number(n1);
            else if (Number(n1) < Number(n2)) return Number(n2);
        } else return "error";
    } else return "error";
}

// #endregion Problem 03
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 04

// 4- Write a program that allows the user to insert an integer
// then print negative if it is negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative Example2
// Input: 10
// Output positive

// problem4Input();
function problem4Input() {
    let n1 = prompt("Enter a number:");
    let output = problem4(n1);
    alert(output);
}
function problem4(x) {
    if (typeof x !== "boolean") {
        if (x !== "") {
            if (Number(x)) {
                if (Number(x) >= 0) return "positive";
                else return "negative";
            } else return "error";
        } else return "error";
    }
    return "error";
}

// #endregion Problem 04
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 05

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
function problem5Input() {
    let n1 = prompt("Enter 1st number:");
    let n2 = prompt("Enter 2nd number:");
    let n3 = prompt("Enter 3rd number:");
    let output = problem5(n1, n2, n3);

    alert(output);
}
function problem5(n1, n2, n3) {
    let min = 0,
        max = 0;
    if (n1 === 0 && n2 === 0) return `max element = 0 , min element = 0`;

    if (!!n1 && !!n2 && n3) {
        if (n1 !== "" && n2 !== "" && n3 !== "") {
            if (Number(n1) && Number(n2) && Number(n3)) {
                if (n1 >= n2) {
                    max = n1;
                    min = n2;
                } else {
                    max = n2;
                    min = n1;
                }
                if (n1 >= max) max = n1;
                if (n1 < min) min = n1;
                if (n2 >= max) max = n2;
                if (n2 < min) min = n2;
                if (n3 >= max) max = n3;
                if (n3 < min) min = n3;
                return `max element = ${max} , min element = ${min}`;
            } else return `max element = ${max} , min element = ${min}`;
        } else return "error";
    }
    return "error";
}

// #endregion Problem 05
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 06

// 6- Write a program that allows the user to insert integer number
// then check If a number is oven or odd

function problem6Input() {
    let x = prompt("Enter a Number");
    let output = problem6(x);
    alert(output);
}
function problem6(x) {
    // -0.5
    if (x || x === 0) {
        if (x !== "") {
            if (Number(x)) {
                if (x % 1) x -= x % 1; // take the int part only
                if (!(x % 2)) return "even";
                else return "odd";
            } else return "even";
        } else return "error";
    }
    return "error";
}

// #endregion Problem 06
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 07

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant

function problem8Input() {
    let c = prompt("Enter a single letter");
    let output = problem8(c);
    alert(output);
}
function problem8(c) {
    if (c) {
        if (c.length >= 1 && !Number(c) && c != "") {
            let flag = 0;
            letters = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"]; // make the string into array of letters;
            for (let i = 0; i < letters.length; i++) {
                if (c == letters[i])
                    // it is a letter
                    flag = 1;
            }
            if (!flag) return "error";

            let voewls = [..."aeiouAEIOU"];
            for (let i = 0; i < voewls.length; i++) if (voewls[i] == c) return "vowel";
            return "consonant";
        }
        return "error";
    }
    return "error";
}

// #endregion Problem 07
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 08

// 9- Write a program that allows user to insert integer
// then print all numbers between 1 to that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

function problem9Input() {
    let x = prompt("Enter a Number");
    let output = problem9(x);
    alert(output);
}
function problem9(x) {
    let first_number = 1;
    let numbers = "";
    if (Number(x) && x != "") {
        if (x >= 0) {
            for (let i = 1; i <= x; i++) {
                numbers += `${i}`;
                if (i < x) numbers += `,`;
            }
            return numbers;
        }
        if (x == 0) return "0";
        else return "error";
    }
    return "error";
}

// #endregion Problem 08
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 09

// 10- Write a program that allows user to insert integer
// then print a multiplication table up to 12.
// Example Input: 5 Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

function problem10Input() {
    let x = prompt("Enter a Number");
    let output = problem10(x);
    alert(output);
}
function problem10(x) {
    let numbers = "";
    let last = 0;
    if ((Number(x) && x != "") || x === 0) {
        for (let i = 1; i <= 12; i++) {
            numbers += i * x;
            if (i < 12) numbers += " ";
        }
        return numbers;
    } else return "error";
}

// #endregion Problem 09
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 10

// 11- Write a program that allows to user to insert number
// then print all even numbers between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14
function problem11Input() {
    let x = prompt("Enter a Number");
    let output = problem11(x);
    alert(output);
}
function problem11(x) {
    let minusFlag = 0;
    if (Number(x) && x != "" && x != 0) {
        if (x < 0) {
            minusFlag = 1;
            x *= -1;
        }
        let numbers = "";
        let newNumbers = "";
        if (minusFlag) {
            for (let i = 1; i <= x; i++) {
                if (i % 2 == 0) {
                    numbers += "-" + i;
                    if (i < x) numbers += " ";
                } else continue;
            }
        } else {
            for (let i = 1; i <= x; i++) {
                if (i % 2 == 0) {
                    numbers += i;
                    // if there is a next even add the space
                    if (i < x) {
                        numbers += " ";
                    }
                } else continue;
            }
        }
        //remove last space
        if (numbers[numbers.length - 1] === " ") {
            for (let i = 0; i < numbers.length - 1; i++) newNumbers += numbers[i];
            return newNumbers;
        } else return numbers;
    }
    return "error";
}

// #endregion Problem 10
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 11

// 12- Write a program that take two integers then print the power Example:
// Input: 4 3
// Output: 64 Hint how to calculate 4^3 = 4 * 4 * 4 =64

function problem12Input() {
    let x = prompt("Enter 1st Number");
    let y = prompt("Enter 2nd Number");
    let output = problem12(x, y);
    alert(output);
}
function problem12(x, y) {
    // ' ', ''
    let n = 0;
    if (
        (Number(x) || x === 0) &&
        (Number(y) || y === 0) &&
        (x !== "" || x !== " ") &&
        (y !== "" || y !== " ")
    ) {
        return `${x ** y}`;
    }
    return "error";
}

// #endregion Problem 11
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 12

// 12_2- Write a program to enter marks of five subjects and
// calculate total, average and percentage.
// Example
// Input: - Enter Marks of five subjects:
// 95
// 76
// 58
// 90
// 89
// Output:-.Total marks = 408
// Average Marks =87
// Percentage =87

function problem12_2Input() {
    let grades = [];
    for (i = 0; i < 5; i++) {
        grades[i] = prompt(`Grade ${i + 1} = `);
    }

    let output = problem12_2(grades);
    alert(output);
}
function problem12_2(grades) {
    let maxMark = 150;
    let sum = 0,
        avg = 0,
        percent = 0;
    if (grades.length == 5) {
        for (let i = 0; i < grades.length; i++) {
            if ((!Number(grades[i]) && grades[i] !== 0) || grades[i] === "" || grades[i] === " ")
                return "error";
            sum += Number(grades[i]);
        }
        avg = sum / grades.length;
        percent = (sum / (5 * maxMark)) * 100;
        return `Total marks = ${sum}, Average Marks = ${avg}, Percentage = ${percent}%`;
    }
    return "error";
}

// #endregion Problem 12
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 13

// 13-Write a program to input month number and print number of days in that month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31

function problem13Input() {
    let x = prompt("Month Number: ");
    let output = problem13(x);
    alert(output);
}
function problem13(x) {
    const daysInMonths = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
    };

    if (!x || !Number(x) || x === " ") return "error";
    if (Number(x) > 12) return "error";
    return `Days in month: ${daysInMonths[x]}`;
}

// #endregion Problem 13
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 14

// 14- Write a program to input marks of five subjects
// Physics, Chemistry, Biology, Mathematics and Computer
// , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

function problem14Input() {
    let subjects = ["Physics", "Chemisrty", "Biology", "Mathmatics", "Computer"];
    let grades = [];

    for (let i = 0; i < subjects.length; i++) {
        grades[i] = prompt(`Enter grade for ${subjects[i]}`);
    }
    let output = problem14(grades);
    alert(output);
}
function problem14(grades) {
    let sum = 0,
        percent = 0,
        grad = "";
    if (grades.length < 5 || grades.length > 5) return "error";
    for (const subject in grades) {
        // if (
        //     (!Number(grades[subject]) && grades[subject] !== 0 && grades[subject] < 0) ||
        //     grades[subject] === "" ||
        //     grades[subject] === " "
        // );
        if (
            (!grades[subject] && grades[subject] !== 0) ||
            (!Number(grades[subject]) && grades[subject] !== 0)
        )
            return "error";
        sum += Number(grades[subject]);
    }
    percent = sum / grades.length;
    if (percent >= 90) grad = "A";
    else if (percent >= 80) grad = "B";
    else if (percent >= 70) grad = "C";
    else if (percent >= 60) grad = "D";
    else if (percent >= 40) grad = "E";
    else grad = "F";
    return `percentage = ${percent}%,  grade: ${grad}`;
}

// #endregion Problem 14
/********************************************/
/********************************************/

// *********************************************************************************
// ******************************** Using switch case*******************************
// *********************************************************************************

/********************************************/
/********************************************/
// #region Probelm 15

// 15- Write a program to print total number of days in month

function problem15Input() {
    let x = prompt("Enter a month number");
    let output = problem15(x);
    alert(output);
}
function problem15(x) {
    let days = "";
    switch (x) {
        case "1":
            days = "Days in month: 31";
            break;
        case "2":
            days = "Days in month: 28";
            break;
        case "3":
            days = "Days in month: 31";
            break;
        case "4":
            days = "Days in month: 30";
            break;
        case "5":
            days = "Days in month: 31";
            break;
        case "6":
            days = "Days in month: 30";
            break;
        case "7":
            days = "Days in month: 31";
            break;
        case "8":
            days = "Days in month: 31";
            break;
        case "9":
            days = "Days in month: 30";
            break;
        case "10":
            days = "Days in month: 31";
            break;
        case "11":
            days = "Days in month: 30";
            break;
        case "12":
            days = "Days in month: 31";
            break;
        default:
            days = "error";
    }
    return days;
}

// #endregion Probelm 15
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 16

// 16- Write a program to check whether an alphabet is vowel or consonant

function problem16Input() {
    let c = prompt("Enter a letter");
    let output = problem16(c);
    alert(output);
}
function problem16(x) {
    let alphabet = "qazxswedcvfrtgbnhyujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP";
    let isAlphapet = 0;
    if (!x || x.length > 1) return "error";
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === x) isAlphapet = 1;
    }
    if (isAlphapet) {
        switch (x) {
            case "a":
                return "vowel";
            case "A":
                return "vowel";
            case "e":
                return "vowel";
            case "E":
                return "vowel";
            case "i":
                return "vowel";
            case "I":
                return "vowel";
            case "o":
                return "vowel";
            case "O":
                return "vowel";
            case "u":
                return "vowel";
            case "U":
                return "vowel";
            default:
                return "consonant";
        }
    } else return "error";
}

// #endregion Problem 16
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 17

// 17- Write a program to find maximum between two numbers
function problem17Input() {
    let x = prompt("Enter 1st number");
    let y = prompt("Enter 2nd Number");
    let output = problem17(x, y);
    alert(output);
}
function problem17(n1, n2) {
    let max = 0,
        min = 0;
    if (n1 !== "" && n1 !== " " && n2 !== "") {
        if ((!!Number(n1) || n1 == 0) && (!!Number(n2) || n2 == 0)) {
            if (n1 !== " " || n2 !== " ") {
                switch (true) {
                    case Number(n1) > Number(n2):
                        max = Number(n1);
                        min = Number(n2);
                        break;
                    case Number(n1) < Number(n2):
                        max = Number(n2);
                        min = Number(n1);
                        break;
                    case Number(n1) === Number(n2):
                        max = min = Number(n1);
                        break;
                }
                return `max = ${Number(max)}, min = ${Number(min)}`;
            } else return "error";
        } else return "error";
    } else return "error";
}

// #endregion Problem 17
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 18

// 18- Write a program to check whether a number is even or odd
function problem18Input() {
    let x = prompt("Enter a number");
    let output = problem18(x);
    alert(output);
}
function problem18(x) {
    if (x < 0) x *= -1; //reverse to positive as the sign doesn't matter
    switch (true) {
        case x == "0":
            return "even";
        case x == Infinity:
            return "even";
        case x == -Infinity:
            return "even";
        case !Number(x):
            return "error";
        case x === "":
            return "error";
        case x === " ":
            return "error";
        case Number(x) % 2 == 0:
            return "even";
        case Number(x) % 2 > 0:
            return "odd";
        default:
            return "error";
    }
}

// #endregion Problem 18
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 19

// 19- Write a program to check whether a number is positive or negative or zero
function problem19Input() {
    let x = prompt("Enter a number");
    let output = problem19(x);
    alert(output);
}
function problem19(x) {
    switch (true) {
        case x == Infinity:
            return "positive";
        case x == -Infinity:
            return "negative";
        case typeof x === "undefined":
            return "error";
        case x === null:
            return "error";
        case x === true:
            return "error";
        case x === false:
            return "error";
        case x === "":
            return "error";
        case x === " ":
            return "error";
        case x === "0":
            return "zero";
        case Number(x) > 0:
            return "positive";
        case Number(x) < 0:
            return "negative";
        case Number(x) === 0:
            return "zero";
        default:
            return "error";
    }
}

// #endregion Problem 19
/********************************************/
/********************************************/

/********************************************/
/********************************************/
// #region Problem 20

// 20- Write a program to create Simple Calculator
function problem20Input() {
    let n1 = prompt("Enter 1st number");
    let exp = prompt("Enter an operation");
    let n2 = prompt("Enter 2nd number");
    let output = problem20(n1, exp, n2);
    alert(output);
}
function problem20(n1, exp, n2) {
    let result = 0;

    // check the input for invalidation
    if (typeof n1 === "undefined" || typeof n2 === "undefined") return "error";
    if (n1 === null || n2 === null) return "error";
    if (n1 === true || n2 === true) return "error";
    if (n1 === false || n2 === false) return "error";
    if ((!Number(n1) && n1 != "0") || (!Number(n2) && n2 != "0")) return "error";

    // must be a number then
    switch (exp) {
        case "+":
            result = Number(n1) + Number(n2);
            return result;
        case "-":
            result = Number(n1) - Number(n2);
            return result;
        case "*":
            result = Number(n1) * Number(n2);
            return result;
        case "/":
            if (Number(n2) == 0) return "error";
            result = Number(n1) / Number(n2);
            return result;
        default:
            return "error";
    }
}

// #endregion Problem 20
/********************************************/
/********************************************/

module.exports = {
    main,
    problem1,
    problem2,
    problem3,
    problem4,
    problem5,
    problem6,
    problem8,
    problem9,
    problem10,
    problem11,
    problem12,
    problem12_2,
    problem13,
    problem14,
    problem15,
    problem16,
    problem17,
    problem18,
    problem19,
    problem20,
};
