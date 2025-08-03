"use client";
import { useState } from "react";
import { addTodo } from "@/lib/api";

export default function AddTodoForm() {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    try {
      await addTodo(task);
      setTask("");
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Tulis todo baru..."
        className="flex-1 border rounded p-2"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
}
