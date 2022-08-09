describe("Routing testing", () => {
  it("Teste 1: Valida rota /product", () => {
    cy.visit("http://localhost:5000/product");
  });

  it("Teste 2: Valida rota /cart", () => {
    cy.visit("http://localhost:5000/cart");
  });

  it("Teste 3: Valida rota /profile", () => {
    cy.visit("http://localhost:5000/profile");
  });
});
