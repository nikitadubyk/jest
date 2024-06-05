import axios from "axios";

import { getTodos } from "../getTodos";

const axiosSpy = jest.spyOn(axios, "get");
const consoleSpy = jest.spyOn(console, "error");

describe("getTodos", () => {
  it("should return empty array and print error", async () => {
    const message = "Network error";
    // axiosSpy.mockImplementationOnce(() => Promise.reject(message));
    axiosSpy.mockRejectedValueOnce(message);

    const result = await getTodos();

    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith(message);
  });

  it("should return 200 todos", async () => {
    const todos = await getTodos();

    expect(axiosSpy).toHaveBeenCalled();
    expect(todos).toHaveLength(200);
  });
});
