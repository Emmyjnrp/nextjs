import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-60 min-h-screen bg-gray-900 text-white p-5">
        <div className="mb-4 flex flex-col gap-2">
          <Link href="/dashboard">Dashboard</Link>

          <Link href="/dashboard/users">Users</Link>

          <Link href="/dashboard/settings">Settings</Link>
        </div>
      </aside>

      <main className="p-5">{children}</main>
    </div>
  );
}
