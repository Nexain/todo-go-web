const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getTodos() {
  const res = await fetch(`${API_BASE}/todos`, { cache: "no-store" });
  if (!res.ok) throw new Error("Gagal memuat todos");
  return res.json();
}

export async function addTodo(task: string) {
  const res = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task }),
  });
  if (!res.ok) throw new Error("Gagal menambah todo");
  return res.json();
}

export async function completeTodo(id: number) {
  const res = await fetch(`${API_BASE}/todos/${id}/complete`, { method: "PATCH" });
  if (!res.ok) throw new Error("Gagal menyelesaikan todo");
  return res.json();
}

export async function deleteTodo(id: number) {
  const res = await fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Gagal menghapus todo");
  return res.json();
}
