describe("Demo test", () => {
  test("should return true", () => {
    const message = "Hello World";
    const message2 = `Hello World`;

    expect(message).toBe(message2);
  });
});
