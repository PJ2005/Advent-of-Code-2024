// 'use client'

// import { useEffect, useState } from "react"
// import Header from "@/components/header"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"

// export default function DayPage({ params }: { params: Promise<{ day: string }> }) {
//   const [input, setInput] = useState('')
//   const [solution, setSolution] = useState('')
//   const [isInputLoading, setIsInputLoading] = useState(true)
//   const [isSolutionLoading, setIsSolutionLoading] = useState(true)
//   const [output, setOutput] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [currentDay, setCurrentDay] = useState<string>('')

//   useEffect(() => {
//     const initDay = async () => {
//       const { day } = await params
//       setCurrentDay(day)
//     }
//     initDay()
//   }, [params])

//   useEffect(() => {
//     if (currentDay) {
//       fetchFiles()
//     }
//   }, [currentDay])

//   const fetchFiles = async () => {
//     setIsInputLoading(true)
//     setIsSolutionLoading(true)
//     try {
//       const inputResponse = await fetch(`/api/files/${currentDay}/input`)
//       const solutionResponse = await fetch(`/api/files/${currentDay}/solution`)
      
//       const inputText = await inputResponse.text()
//       const solutionText = await solutionResponse.text()
      
//       setInput(inputText)
//       setSolution(solutionText)
//     } catch (error) {
//       console.error('Error fetching files:', error)
//     } finally {
//       setIsInputLoading(false)
//       setIsSolutionLoading(false)
//     }
//   }

//   const runSolution = async () => {
//     setIsLoading(true)
//     try {
//       const response = await fetch(`/api/run/${currentDay}`, {
//         method: 'POST'
//       })
//       const result = await response.text()
//       setOutput(result)
//     } catch (error) {
//       console.error('Error running solution:', error)
//       setOutput('Error running solution')
//     }
//     setIsLoading(false)
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header currentDay={currentDay} />
//       <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="w-full lg:w-1/2">
//             <h2 className="text-xl font-semibold mb-4">Solution</h2>
//             <pre className="bg-white p-4 rounded-lg shadow h-[calc(100vh-200px)] overflow-auto">
//               {isSolutionLoading ? 'Loading...' : 
//                solution.trim() === '' ? 'The file is empty' : solution}
//             </pre>
//           </div>
//           <div className="w-full lg:w-1/2 flex flex-col">
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-4">Input</h2>
//               <ScrollArea className="h-[calc(50vh-100px)] lg:h-[calc(50vh-150px)]">
//                 <pre className="bg-white p-4 rounded-lg shadow">
//                   {isInputLoading ? 'Loading...' : 
//                    input.trim() === '' ? 'The file is empty' : input}
//                 </pre>
//               </ScrollArea>
//             </div>
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Output</h2>
//                 <Button 
//                   onClick={runSolution} 
//                   disabled={isLoading || !currentDay}
//                 >
//                   {isLoading ? 'Running...' : 'Run Solution'}
//                 </Button>
//               </div>
//               <pre className="bg-white p-4 rounded-lg shadow h-[calc(50vh-125px)] overflow-auto">
//                 {output || 'Run the code to see the output'}
//               </pre>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

'use client'

import { useEffect, useState } from "react"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const [input, setInput] = useState('')
  const [solution, setSolution] = useState('')
  const [isInputLoading, setIsInputLoading] = useState(true)
  const [isSolutionLoading, setIsSolutionLoading] = useState(true)
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentDay, setCurrentDay] = useState<string>('')

  useEffect(() => {
    const initDay = async () => {
      const { day } = await params
      setCurrentDay(day)
    }
    initDay()
  }, [params])

  useEffect(() => {
    if (currentDay) {
      fetchFiles()
    }
  }, [currentDay])

  const fetchFiles = async () => {
    setIsInputLoading(true)
    setIsSolutionLoading(true)
    try {
      const inputResponse = await fetch(`/api/files/${currentDay}/input`)
      const solutionResponse = await fetch(`/api/files/${currentDay}/solution`)
      
      const inputText = await inputResponse.text()
      const solutionText = await solutionResponse.text()
      
      setInput(inputText)
      setSolution(solutionText)
    } catch (error) {
      console.error('Error fetching files:', error)
    } finally {
      setIsInputLoading(false)
      setIsSolutionLoading(false)
    }
  }

  const runSolution = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/run/${currentDay}`, {
        method: 'POST'
      })
      const result = await response.text()
      setOutput(result)
    } catch (error) {
      console.error('Error running solution:', error)
      setOutput('Error running solution')
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header currentDay={currentDay} />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Solution</h2>
            <ScrollArea className="h-[calc(100vh-200px)]">
              <pre className="bg-white p-4 rounded-lg shadow">
                {isSolutionLoading ? 'Loading...' : 
                 solution.trim() === '' ? 'The file is empty' : solution}
              </pre>
            </ScrollArea>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Input</h2>
              <ScrollArea className="h-[calc(50vh-100px)] lg:h-[calc(50vh-150px)]">
                <pre className="bg-white p-4 rounded-lg shadow">
                  {isInputLoading ? 'Loading...' : 
                   input.trim() === '' ? 'The file is empty' : input}
                </pre>
              </ScrollArea>
            </div>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Output</h2>
                <Button 
                  onClick={runSolution} 
                  disabled={isLoading || !currentDay}
                >
                  {isLoading ? 'Running...' : 'Run Solution'}
                </Button>
              </div>
              <pre className="bg-white p-4 rounded-lg shadow h-[calc(50vh-125px)] overflow-auto">
                {output || 'Run the code to see the output'}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}