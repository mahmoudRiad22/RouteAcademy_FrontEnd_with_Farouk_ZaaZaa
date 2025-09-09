describe("visit all pages", () => {
    it("visite login page", () => {
        cy.visit("index.html");
    });
    it("visit signup page", () => {
        cy.visit("signUp.html");
    });
    it("visit Home page", () => {
        cy.visit("home.html");
    });
});

describe("test welcome page", function () {
    beforeEach(function () {
        cy.visit("home.html");
    });

    it("all elements exists", function () {
        cy.get("h2")
            .should("contains.text", "Welcome")
            .contains(/Welcome TestUser/i);
        cy.get("button#logout-btn").should("exist");
        cy.get(".navbar-brand").should("exist").should("contains.text", "SmartLogIn");
    });
    
    it("check logout btn", function () {});

    it("test for logo exits", function () {});
});
