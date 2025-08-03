import AddTodoForm from "@/components/AddTodoForm";
import Link from "next/link";

export default function AddPage() {
  return (
    <main className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tambah Todo</h1>
      <AddTodoForm />
      <Link href="/" className="inline-block mt-4 text-blue-500">← Kembali</Link>
    </main>
  );
}
