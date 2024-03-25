/// <reference types="Cypress" />

const { should } = require("chai");

describe("home page", () => {
  it("should render the main page", () => {
    cy.visit("http://localhost:5173/forgottenkingdom/");
  });

  it("should have a form", () => {
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("#forms").get("#login").contains("BEJELENTKEZÉS");
    cy.get("form").find("input").should("have.length", 2);
    cy.get("form").find("button").should("have.length", 1).contains("BELÉPÉS");
  });

  it("should login with correct credentials and redirect to game page", () => {
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("form").find("input").eq(0).type("teszt@teszt.hu");
    cy.get("form").find("input").eq(1).type("123456789");
    cy.get("form").find("button").click();

    cy.url().should(
      "include",
      "http://127.0.0.1:5500/Frontend/GamePage/index.html"
    );
  });

  it("should handle login with incorrect credentials", () => { // el kell buknia
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("form").find("input").eq(0).type("rossz@teszt.hu");
    cy.get("form").find("input").eq(1).type("rosszjelszo");
    cy.get("form").find("button").click();

    cy.get("#forms").find("p").eq(0).should("be.visible");

    cy.url().should("eq", "http://localhost:5173/forgottenkingdom/");
  });
});

describe("registration page", () => {
  it("should render the registration page", () => {
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("#forms").contains("REGISZTRÁCIÓ").click();

    cy.url().should(
      "eq",
      "http://localhost:5173/forgottenkingdom/regisztracio"
    );
  });

  it("should have a form", () => {
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("#forms").contains("REGISZTRÁCIÓ").click();

    cy.url().should(
      "eq",
      "http://localhost:5173/forgottenkingdom/regisztracio"
    );

    cy.get("form").get("h3").contains("Regisztráció");
    cy.get("form").find("input").should("have.length", 3);
    cy.get("form")
      .find("button")
      .should("have.length", 1)
      .contains("REGISZTRÁCIÓ");
  });

  it("should register with correct credentials", () => {
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("#forms").contains("REGISZTRÁCIÓ").click();

    cy.url().should(
      "eq",
      "http://localhost:5173/forgottenkingdom/regisztracio"
    );

    cy.get("form").find("input").eq(0).type("teszt1");
    cy.get("form").find("input").eq(1).type("teszt1@teszt.hu");
    cy.get("form").find("input").eq(2).type("123456789");
    cy.get("form").find("button").click();

    cy.get("form").find("p").contains("Sikeres regisztráció!");
  });

  it("should handle registration with incorrect credentials", () => { // el kell buknia
    cy.visit("http://localhost:5173/forgottenkingdom/");
    cy.get("#forms").contains("REGISZTRÁCIÓ").click();

    cy.url().should(
      "eq",
      "http://localhost:5173/forgottenkingdom/regisztracio"
    );

    cy.get("form").find("input").eq(0).type("teszt");
    cy.get("form").find("input").eq(1).type("teszt@teszt.hu");
    cy.get("form").find("input").eq(2).type("123456789");
    cy.get("form").find("button").click();

    cy.get("form").find("p").should("not.contain", "Sikeres regisztráció!");
  });
});
