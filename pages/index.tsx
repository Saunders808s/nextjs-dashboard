import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">MedSoc Dashboard</h1>
        <p className="text-gray-700">Welcome! This is your starting dashboard.</p>
      </main>
    </div>
  )
}
