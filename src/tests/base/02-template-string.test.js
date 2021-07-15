import { getSaludo } from "../../base/02-template-string";

describe("Test file 02-template.js", () => {
  test('Returns "Hola Sergio"', () => {
    const name = "Sergio";
    const greeting = getSaludo(name);

    expect(greeting).toBe(`Hello ${name}`);
  });

  test("Return the default name when argument is missing", () => {
    const greeting = getSaludo();

    expect(greeting).toBe("Hello Carlos");
  });
});
