import { add } from "../src/math";

test("add test", () => {
  expect(add(1, 1)).toEqual(1 + 1);
  expect(add(-1, 1)).toEqual(-1 + 1);
  //expect(add(100, 100)).toEqual(100 + 100);
});
