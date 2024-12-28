import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const days = Array.from({ length: 25 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Advent of Code</h1>
          <p className="text-xl text-gray-600 mb-8">Select a day to view its challenge and solution:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {days.map((day) => (
              <Link href={`/day/${day}`} key={day}>
                <Button className="w-full">Day {day}</Button>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

