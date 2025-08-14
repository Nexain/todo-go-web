import TodoList from "@/components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto p-4 text-center flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Todo-Go Web</h1>
      <Link href="/add" className="inline-block m-10 p-10 bg-blue-500 text-white rounded transition-all duration-200 ease-in-out 
          hover:scale-105 active:scale-95">
        Tambah Todo
      </Link>
      <TodoList />
    </main>
  );
}
