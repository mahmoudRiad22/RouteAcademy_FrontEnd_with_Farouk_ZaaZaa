function testLoginFunctions() {
    // Mock DOM elements
    userEmail.value = "test@example.com";
    userPassword.value = "123456";

    // Mock users array
    users = [
        { email: "test@example.com", password: "123456" },
        { email: "user2@mail.com", password: "pass2" }
    ];

    // Test takeInput
    const input = takeInput();
    console.assert(input.email === "test@example.com", "takeInput email failed");
    console.assert(input.password === "123456", "takeInput password failed");

    // Test logInValidation - correct credentials
    let result = logInValidation();
    console.assert(result[0] === 1, "logInValidation should succeed for correct credentials");

    // Test logInValidation - wrong password
    userPassword.value = "wrong";
    result = logInValidation();
    console.assert(result[0] === 0 && result[1].includes("Wrong Password"), "logInValidation should fail for wrong password");

    // Test logInValidation - email not found
    userEmail.value = "notfound@mail.com";
    result = logInValidation();
    console.assert(result[0] === 0 && result[1].includes("Email Not Found"), "logInValidation should fail for unknown email");

    console.log("All tests completed.");
}

function testAll(){
    testLoginFunctions();
}