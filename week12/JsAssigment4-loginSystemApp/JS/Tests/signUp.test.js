function test_TakeInput() {
    userName.value = "mahmoud";
    userEmail.value = "m@m.com";
    userPassword.value = "1234567QW";

    let testUser = takeInput();
    console.assert(testUser.name === "mahmoud", "testUserName failed assertion");
    console.assert(testUser.email === "m@m.com", "testUserEmail failed assertion");
    console.assert(testUser.password === "1234567QW", "testUserPassword failed assertion");
    return testUser;
}

function test_signUpValidation_regex() {
    const NameRegex = /^[a-zA-Z\s]{2,30}$/;
    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PasswordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

    testUser = test_TakeInput();
    const isNameValid = NameRegex.test(testUser.name);
    const isEmailValid = EmailRegex.test(testUser.email);
    const isPasswordValid = PasswordRegex.test(testUser.password);

    console.assert(isNameValid === true, "testUser.name assertion Failed ❌");
    console.assert(isEmailValid === true, "testUser.email assertion failed ❌");
    console.assert(isPasswordValid === true, "testUser.password assertion failed ❌");
}

function test_signUpValidation_errorMsgs() {
    let testUser = test_TakeInput();
    const isPass = SignUpValidation();
    console.assert(!!isPass, "Not Passed ❌");
    return testUser;
}

function test_signUpValidation_savedInStorage() {
    let testAllUsers = [
        {
            name: "user1",
            email: "user1@gmail.com",
            password: "user1user1",
        },
        {
            name: "user2",
            email: "user2@gmail.com",
            password: "user2user2",
        },
        {
            name: "user3",
            email: "user3@gmail.com",
            password: "user3user3",
        },
    ];
    let testUser = test_signUpValidation_errorMsgs();
    testAllUsers.push(testUser);
    
}
function testAll() {
    test_TakeInput();
    test_signUpValidation_regex();
    test_signUpValidation_errorMsgs();
    console.log("All tests Done! ✔️");
}
