import { NextRequest } from 'next/server'
import * as fs from 'fs'
import * as path from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ day: string; type: string }> }
) {
  try {
    const { day, type } = await params
    
    // Construct path to backend codes directory
    const filePath = path.join(
      process.cwd(), // Current working directory (frontend/aoc-2024)
      '..',         // Up one level to frontend
      '..',         // Up one level to project root
      'backend',    // Into backend directory
      'codes',      // Into codes directory
      `day${day}`,  // Into specific day directory
      `${type}.${type === 'input' ? 'txt' : 'py'}`  // Get correct file extension
    )

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new Response(
        `File not found: ${type} for day${day}`, 
        { status: 404 }
      )
    }

    const content = await fs.promises.readFile(filePath, 'utf-8')
    return new Response(content)
  } catch (error) {
    console.error('Error reading file:', error)
    return new Response('Error reading file: ' + (error instanceof Error ? error.message : 'Unknown error'), { status: 500 })
  }
}