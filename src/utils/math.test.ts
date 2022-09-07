import { describe, expect, test } from "@jest/globals";
import { getMean, getMedian, getMode, getStandardDeviation } from "./math";

const testInput1 = [0, 3, 6, 7, 10, 15, 2, 3, 4, 5, 6, 33, 0];
const testInput2 = [
  4, 5, 6, 6, 7, 1, 2, 34, 4, 4, 4, 5, 54, 4, 5, 325, 76, 7.5, 8, 7, 7, 65, 5,
  4, 34, 5, 6, 0, 0, 0, 80, 40, 30, 20, 10, 40, 30, 50,
];

describe("Math module tests", () => {
  test("Successful mean", () => {
    const mean1 = 7.23;
    const mean2 = 26.17;

    const result1 = getMean(testInput1);
    const result2 = getMean(testInput2);

    expect(result1).toBe(mean1);
    expect(result2).toBe(mean2);
  });

  test("Successful median", () => {
    const median1 = 5;
    const median2 = 6.5;

    const result1 = getMedian(testInput1);
    const result2 = getMedian(testInput2);

    expect(result1).toBe(median1);
    expect(result2).toBe(median2);
  });

  test("Successful mode", () => {
    const mode1 = [0, 3, 6];
    const mode2 = [4];

    const result1 = getMode(testInput1);
    const result2 = getMode(testInput2);

    expect(result1).toBe(mode1);
    expect(result2).toBe(mode2);
  });

  test("Successful standard deviation", () => {
    const standardDeviation1 = 8.74;
    const standardDeviation2 = 8.74;

    const result1 = getStandardDeviation(testInput1);
    const result2 = getStandardDeviation(testInput2);

    expect(result1).toBe(standardDeviation1);
    expect(result2).toBe(standardDeviation2);
  });
});
