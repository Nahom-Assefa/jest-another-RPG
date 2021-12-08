const Potion = require("../lib/Potion.js");
console.log('line 2', Potion)

test('creates a health potion object', () => {
    const potion = new Potion('health');
    console.log(potion);
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number))

})

test("creates a random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.types.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});