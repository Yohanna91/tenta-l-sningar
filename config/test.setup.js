import { beforeAll } from "vitest";
import { solution1, solution2, solution3, solution4 } from "../solutions";

beforeAll(() => {
  // SET GLOBALS VARIABLES THAT ARE NEEDED FOR THE TESTS - DO NOT EDIT
  global.solution1 = solution1;
  global.solution2 = solution2;
  global.solution3 = solution3;
  global.solution4 = solution4;
});
