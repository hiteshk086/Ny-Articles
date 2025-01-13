describe("NY Times Articles App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays articles list", () => {
    cy.get("h1").should("contain", "NY Times Most Popular Articles");
    // Wait for articles to load
    cy.get('[data-testid="article-item"]').should("exist");
  });

  it("navigates to article detail", () => {
    // Wait for articles to load
    cy.get('[data-testid="article-item"]').first().click();
    cy.url().should("include", "/article/");
    cy.get('[data-testid="article-detail"]').should("exist");
  });
});
