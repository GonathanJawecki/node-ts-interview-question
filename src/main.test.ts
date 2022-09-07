import { describe, expect, test } from "@jest/globals";
import { main } from "./main";

import {
  getMean,
  getMedian,
  getMode,
  getStandardDeviation,
} from "./utils/math";

const mean = 1;
const median = 2;
const mode = [0, 1, 2];
const standardDeviation = 3;

jest.mock("./utils/math", () => ({
  getMean: jest.fn().mockImplementation(() => mean),
  getMedian: jest.fn().mockImplementation(() => median),
  getMode: jest.fn().mockImplementation(() => mode),
  getStandardDeviation: jest.fn().mockImplementation(() => standardDeviation),
}));

describe("Main module tests", () => {
  test("Runs through successfully", () => {
    const testInput = [1, 2, 3];

    const result = main(testInput);

    expect(getMean).toBeCalledWith(testInput);
    expect(getMedian).toBeCalledWith(testInput);
    expect(getMode).toBeCalledWith(testInput);
    expect(getStandardDeviation).toBeCalledWith(testInput);

    expect(result.mean).toBe(mean);
    expect(result.median).toBe(median);
    expect(result.mode).toBe(mode);
    expect(result.standardDeviation).toBe(standardDeviation);
  });
});
