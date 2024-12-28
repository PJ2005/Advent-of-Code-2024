import Header from "./components/header";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Advent of Code</h1>
          <p className="mt-2 text-gray-600">Select a day from the dropdown menu to start solving puzzles!</p>
        </div>
      </main>
    </div>
  );
}

