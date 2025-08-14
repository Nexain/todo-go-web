"use client";
import { useState } from "react";
import { addTodo } from "@/lib/api";

export default function AddTodoForm() {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");  // Add error state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Todo tidak boleh kosong");
      return;
    }
    
    try {
      await addTodo(task);
      setTask("");
      setError(""); // Clear error on success
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      setError("Gagal menambahkan todo"); // Show error on failure
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            setError(""); // Clear error when typing
          }}
          placeholder="Tulis todo baru..."
          className={`flex-1 border rounded p-2 transition-all duration-200 ease-in-out
            placeholder:text-gray-400
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-500 
            focus:border-transparent
            hover:border-blue-300
            ${error ? 'border-red-500' : ''}`}
        />
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-200 ease-in-out 
            hover:scale-105 active:scale-95"
        >
          Add
        </button>
      </form>
      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
