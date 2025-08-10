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

  const loadTodos = async () => {
    try {
      const data: Todo[] = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="border rounded p-4">
      {todos.length === 0 && <p className="text-gray-500">Tidak ada todo.</p>}
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} refresh={loadTodos} />
      ))}
    </div>
  );
}
