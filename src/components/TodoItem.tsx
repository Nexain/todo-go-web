"use client";
import { completeTodo, deleteTodo } from "@/lib/api";

interface Props {
  id: number;
  task: string;
  completed: boolean;
  refresh: () => void;
}

export default function TodoItem({ id, task, completed, refresh }: Props) {
  return (
    <div className="flex justify-between p-2 border-b">
      <span className={completed ? "line-through text-gray-500" : ""}>{task}</span>
      <div className="space-x-2">
        {!completed && (
          <button
            onClick={async () => { await completeTodo(id); refresh(); }}
             className="px-2 py-1 bg-green-500 text-white rounded 
            hover:bg-green-600 transition-all duration-200 ease-in-out 
            hover:scale-105 active:scale-95"
          >
            Done
          </button>
        )}
        <button
          onClick={async () => { await deleteTodo(id); refresh(); }}
          className="px-2 py-1 bg-red-500 text-white rounded 
          hover:bg-red-600 transition-all duration-200 ease-in-out 
          hover:scale-105 active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
