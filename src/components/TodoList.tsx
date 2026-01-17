"use client";
import { useEffect, useState } from "react";
import { getTodos } from "@/lib/api";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const loadTodos = async () => {
    try {
      setIsLoading(true);
      const data = await getTodos();
      // Handle null or undefined response
      setTodos(data ?? []);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Gagal memuat todo");
      setTodos([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="border rounded p-4">
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : todos.length === 0 ? (
        <p className="text-gray-500">Tidak ada todo.</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} {...todo} refresh={loadTodos} />
        ))
      )}
    </div>
  );
}
