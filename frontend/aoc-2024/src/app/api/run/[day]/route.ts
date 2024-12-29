// import { NextRequest } from 'next/server'
// import { exec } from 'child_process'
// import * as path from 'path'
// import * as fs from 'fs'
// import { promisify } from 'util'

// const execAsync = promisify(exec)

// export async function POST(
//   request: NextRequest,
//   { params }: { params: Promise<{ day: string }> }
// ) {
//   try {
//     const { day } = await params
    
//     const solutionPath = path.join(
//       process.cwd(),
//       '..',
//       '..',
//       'backend',
//       'codes',
//       `day${day}`,
//       'solution.py'
//     )
    
//     if (!fs.existsSync(solutionPath)) {
//       return new Response(`Solution file not found for day${day}`, { status: 404 })
//     }

//     // Use python3 explicitly and add -u flag for unbuffered output
//     const { stdout, stderr } = await execAsync(`python -u "${solutionPath}"`)
    
//     if (stderr) {
//       return new Response(stderr, { status: 500 })
//     }
    
//     return new Response(stdout)
//   } catch (error) {
//     console.error('Error running solution:', error)
//     return new Response('Error running solution: ' + error.message, { status: 500 })
//   }
// }

import { NextRequest } from 'next/server'
import { exec } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'
import { promisify } from 'util'

const execAsync = promisify(exec)

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ day: string }> }
) {
  try {
    const { day } = await params
    
    const solutionPath = path.join(
      process.cwd(),
      '..',
      'backend',
      'codes',
      day,
      'solution.py'
    )
    
    if (!fs.existsSync(solutionPath)) {
      return new Response(`Solution file not found for ${day}`, { status: 404 })
    }

    // Use python3 explicitly and add -u flag for unbuffered output
    const { stdout, stderr } = await execAsync(`python -u "${solutionPath}"`)
    
    if (stderr) {
      return new Response(stderr, { status: 500 })
    }
    
    return new Response(stdout)
  } catch (error) {
    console.error('Error running solution:', error)
    return new Response('Error running solution: ' + (error instanceof Error ? error.message : 'Unknown error'), { status: 500 })
  }
}