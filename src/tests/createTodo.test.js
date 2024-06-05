import { createTodo, createTodoOnServer } from "../createTodos";

const mockTodoId = "mock-id";
const getMockedTodo = (title) => ({
  title,
  id: mockTodoId,
  complete: true,
});

const mockedV4 = jest.fn(() => mockTodoId);

jest.mock("uuid", () => ({
  v4: () => mockedV4(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(getMockedTodo("Test server")),
  })
);

describe("createTodo", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return todo object with info", () => {
    const title = "Test todo";
    const createdTodo = createTodo(title);

    expect(mockedV4).toHaveBeenCalled();
    expect(createdTodo).toEqual(getMockedTodo(title));
  });

  it("should create todo on server", async () => {
    const title = "Test server";
    const result = await createTodoOnServer(title);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(getMockedTodo(title));
  });

  it("should throw error if fetch is not ok", async () => {
    const errorMessage = "Cannot create todo";
    fetch.mockRejectedValueOnce(errorMessage);
    const title = "Test server";
    await expect(createTodoOnServer(title)).rejects.toMatch(errorMessage);
  });

  it("should throw error", async () => {
    const errorMessage = "Cannot create todo";
    fetch.mockResolvedValueOnce({ ok: false });
    const title = "Test server";
    await expect(() => createTodoOnServer(title)).rejects.toThrow(errorMessage);
  });

  it("should throw error w/o title", () => {
    const errorMessage = "Title is require field";
    const functionToThrow = () => createTodo();

    expect(functionToThrow).toThrow(errorMessage);
  });
});
