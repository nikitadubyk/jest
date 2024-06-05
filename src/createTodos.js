import { v4 } from "uuid";

export const createTodo = (title) => {
  if (!title) throw new Error("Title is require field");
  return {
    title,
    id: v4(),
    complete: true,
  };
};

export const createTodoOnServer = async (title) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(createTodo(title)),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) throw new Error("Cannot create todo");

  return response.json();
};
