import TodoList from "@/components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo-Go Web</h1>
      <Link href="/add" className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        Tambah Todo
      </Link>
      <TodoList />
    </main>
  );
}
