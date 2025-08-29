//////////////////////////////
// init a test file and make it fail for the good reasons

function main(msg) {
    return msg;
}
/////////////////////////////////////////////////////// DONE

// 1- Write a program that allow to user enter number then print it Example
// Input: 5
// Output: 5

// let input = prompt("Enter a number");
// alert("you Entered : " + problem1(input));
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

/////////////////////////////////////////////////////// Done

// 2- Write a program that take number from user then print yes if that number can
// divide by 3 and 4 otherwise print no
// Example1
// Input: 12 Output Yes Example 2
// Input: 9 Output No

// let input = prompt("Enter a number");
// alert(problem2(prompt("Enter a number")));

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
/////////////////////////////////////////////////////// DONE

// 3- Write a program that allows the user to insert 2 integers then print the max Example1
// Input: 3 5
// Output: 5
// Example 2
// Input: 10 7
// Output: 10
function problem3(n1, n2) {
    // console.log("n1, n2 :>> ", n1, n2);
    if (n1 == 0 && n2 == 0) return 0;

    if (n1 !== "" && n2 != "") {
        // console.log("n1, n2 :>> ", n1, n2);

        if ((!!Number(n1) || n1 === 0) && (!!Number(n2) || n2 === 0)) {
            // console.log("n1, n2 :>> ", n1, n2);
            if (n1 >= n2) return n1;
            else return n2;
        } else return "error";
    } else return "error";
}
/////////////////////////////////////////////////////// DONE

// 4- Write a program that allows the user to insert an integer
// then print negative if it is negative number otherwise print positive.
// Example 1
// Input: -5
// Output negative Example2
// Input: 10
// Output positive

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
/////////////////////////////////////////////////////// DONE

// 5- Write a program that take 3 integers from user then print the max element and the min element.
// Example 1
// Input:7,8,5
// Output:
// max element = 8
// min element = 5
// Example2
// Input: 3 6 9 Outputs:
// Max element = 9 Min element = 3

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

/////////////////////////////////////////////////////// DONE

// 6- Write a program that allows the user to insert integer number
// then check If a number is oven or odd

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

/////////////////////////////////////////////////////// DONE

// 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// Example1
// Input: O
// Output: vowel
// Example 2
// Input: b
// Output:
// Consonant
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
/////////////////////////////////////////////////////// DONE

// 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// Example Input 5
// Output 1, 2, 3, 4, 5

function problem9(x) {
    let first_number = 1;
    let numbers = [];
    if (Number(x) && x != "") {
        if (x >= 0) {
            for (let i = 1; i <= x; i++) {
                if (first_number && i < x) numbers[i - 1] = ",";
                // console.log(typeof (i + ","));

                numbers[i - 1] = i + "";
                first_number = 0;
            }
            // console.log('numbers :>> ', numbers);
            return numbers.toString();
        }
        if (x == 0) return "0";
        else return "error";
    }
    return "error";
}
/////////////////////////////////////////////////////// DONE

// 10- Write a program that allows user to insert integer
// then print a multiplication table up to 12.
// Example Input: 5 Outputs:
// 5 10 15 20 25 30 35 40 45 50 55 60

function problem10(x) {
    let numbers = [];
    let last = 0;
    if ((Number(x) && x != "") || x === 0) {
        for (let i = 1; i <= 12; i++) numbers[i - 1] = i * x;

        return numbers.join(" ");
    } else return "error";
}
/////////////////////////////////////////////////////// DONE

// 11- Write a program that allows to user to insert number
// then print all even numbers between 1 to this number
// Example:
// Input: 15
// Output: 2 4 6 8 10 12 14

function problem11(x) {
    let minusFlag = 0;
    // console.log("x :>> ", Number(x) && x != "" && x != 0);
    if (Number(x) && x != "" && x != 0) {
        if (x < 0) {
            minusFlag = 1;
            x *= -1;
        }
        // console.log("minusFlag :>> ", minusFlag);
        let numbers = [];
        for (let i = 1; i <= x; i++) {
            if (minusFlag) {
                if (i % 2 == 0) {
                    numbers.push("-" + i);
                } else continue;
            } else {
                if (i % 2 == 0) {
                    numbers.push(i);
                    numbers.unshift;
                } else continue;
            }
        }
        return numbers.join(" ");
    }
    return "error";
}
/////////////////////////////////////////////////////// DONE

// 12- Write a program that take two integers then print the power Example:
// Input: 4 3
// Output: 64 Hint how to calculate 4^3 = 4 * 4 * 4 =64
function problem12(x, y) {
    // ' ', ''
    let n = 0;
    if (
        (Number(x) || x === 0) &&
        (Number(y) || y === 0) &&
        (x !== "" || x !== " ") &&
        (y !== "" || y !== " ")
    ) {
        return (x ** y).toString();
    }
    return "error";
}
/////////////////////////////////////////////////////// DONE

// 12_2- Write a program to enter marks of five subjects and calculate total, average and percentage.
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

// let grades = [];
// for (i = 0; i < 5; i++)
//     grades[i] = prompt(`Grade ${i + 1} = `);
// problem12_2(grades);
function problem12_2(grades) {
    let sum = 0,
        avg = 0;
    if (grades.length == 5) {
        for (let i = 0; i < grades.length; i++) {
            if ((!Number(grades[i]) && grades[i] !== 0) || grades[i] === "" || grades[i] === " ")
                return "error";
            sum += grades[i];
        }
        avg = sum / grades.length;
        return `Total marks = ${sum}, Average Marks = ${avg}, Percentage = ${avg}%`;
    }
    return "error";
}
/////////////////////////////////////////////////////// DONE

// 13-Write a program to input month number and print number of days in that month.
// Example:
// Input: - Month Number: 1
// Output:-. Days in Month: 31
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

function problem14Input() {
    let grades = [];
    grades.push({Physics: prompt("Grade of Physics :")});
    grades.push({Chemisrty: prompt("Grade of Chemisrty :")});
    grades.push({Biology: prompt("Grade of Biology :")});
    grades.push({Mathmatics: prompt("Grade of Mathmatics :")});
    grades.push({Computer: prompt("Grade of Computer :")});
    return grades;
}
function problem14(grades) {
    let sum = 0,
        percent = 0,
        grad = "";
    // console.log("grades, grades.length :>> ", grades, grades.length);
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
        sum += grades[subject];
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
/////////////////////////////////////////////////////// DONE

// ******************************** Using switch case*******************************
// 15- Write a program to print total number of days in month

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
truthyVsFalsy();

function truthyVsFalsy(){
    if (!!(-4)){
console.log("yes its truthy");}
else console.log("no its falsy");
    console.log(
        `!!null = ${null}, 
!!undefined = ${!!undefined}, 
!!NaN = ${!!NaN}, 
!!'' = ${!!""}, 
!!" " = ${!!" "}, 
Number('-4') = ${!!Number(-4)}
if (null) :>> `
    );
}
/////////////////////////////////////////////////////// NOT DONE

// 16- Write a program to check whether an alphabet is vowel or consonant
/////////////////////////////////////////////////////// NOT DONE

// 17- Write a program to find maximum between two numbers
/////////////////////////////////////////////////////// NOT DONE

// 18- Write a program to check whether a number is even or odd
/////////////////////////////////////////////////////// NOT DONE

// 19- Write a program to check whether a number is positive or negative or zero
/////////////////////////////////////////////////////// NOT DONE

// 20- Write a program to create Simple Calculator
/////////////////////////////////////////////////////// NOT DONE

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
};

// week09 jsAssignment1-ProblemSolving
