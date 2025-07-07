import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">MedPortal</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link href="/">🏠 Dashboard</Link></li>
          <li><Link href="/emails">✉️ Emails</Link></li>
          <li><Link href="/feedback">📊 Feedback</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
