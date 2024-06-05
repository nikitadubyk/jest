import { filterArray } from "../filterArray";
import {
  basketWithNoQuantity,
  filteredBasketWithQuantity,
} from "../__mocks__/basket.mock";

const callback = jest.fn();
const consoleLog = jest.spyOn(console, "log");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("filterArray tests", () => {
  it("should not invoke callback when array is empty", () => {
    filterArray([], callback);

    expect(callback).not.toHaveBeenCalled();
  });

  it("should callback work as array length times", () => {
    filterArray(basketWithNoQuantity, callback);

    expect(callback).toHaveBeenCalledTimes(basketWithNoQuantity.length);
    expect(consoleLog).toHaveBeenCalledTimes(basketWithNoQuantity.length);
  });

  it("should be correct filted", () => {
    const filteredArray = filterArray(
      basketWithNoQuantity,
      (product) => product.qty > 0
    );

    expect(filteredArray).toEqual(filteredBasketWithQuantity);
  });
});
