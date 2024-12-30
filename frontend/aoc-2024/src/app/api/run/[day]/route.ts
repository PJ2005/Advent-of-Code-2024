import { NextRequest } from 'next/server'
import * as path from 'path'
import * as fs from 'fs'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ day: string }> }
) {
  try {
    const { day } = await params
    
    const outputPath = path.join(
      process.cwd(),
      '..',
      '..',
      'backend',
      'codes',
      `day${day}`,
      'output.txt'
    )
    
    if (!fs.existsSync(outputPath)) {
      return new Response(`Output file not found for $day{day}`, { status: 404 })
    }

    const content = await fs.promises.readFile(outputPath, 'utf-8')
    return new Response(content)
  } catch (error) {
    console.error('Error reading output file:', error)
    return new Response('Error reading output file: ' + (error instanceof Error ? error.message : 'Unknown error'), { status: 500 })
  }
}