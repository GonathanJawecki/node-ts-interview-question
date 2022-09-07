import {
  getMean,
  getMedian,
  getMode,
  getStandardDeviation,
} from "./utils/math";

export const main = (input: any): any => {
  const mean: any = getMean(input);
  const median: any = getMedian(input);
  const mode: any = getMode(input);
  const standardDeviation: any = getStandardDeviation(input);

  const response = {
    mean: mean,
    median: median,
    standardDeviation: standardDeviation,
    mode: mode,
  };

  console.log("response: ", response);

  return response;
};
