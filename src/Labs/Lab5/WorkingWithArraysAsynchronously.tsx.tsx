import React, { useState, useEffect } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      setTodos(todos);
    } catch (error: any) {
      setErrorMessage("Failed to fetch todos.");
      console.error(error);
    }
  };

  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to remove todo.");
    }
  };

  const createTodo = async () => {
    try {
      const todos = await client.createTodo();
      setTodos(Array.isArray(todos) ? todos : []);
    } catch (error: any) {
      setErrorMessage("Failed to create a new todo.");
    }
  };

  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({
        title: "New Posted Todo",
        completed: false,
      });
      setTodos([...todos, newTodo]);
    } catch (error: any) {
      setErrorMessage("Failed to post a new todo.");
    }
  };

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };

  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Failed to update todo.");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          id="wd-create-todo"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          id="wd-post-todo"
        />
      </h4>
      {/* 错误信息展示 */}
      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2"
        >
          {errorMessage}
        </div>
      )}
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              id="wd-remove-todo"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
            />
            <input
              type="checkbox"
              defaultChecked={todo.completed}
              className="form-check-input me-2 float-start"
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className="form-control"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onBlur={() => updateTodo({ ...todo, editing: false })}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              />
            )}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
