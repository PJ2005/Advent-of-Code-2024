import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUpDownIcon as ChevronUpDown } from 'lucide-react'
import Link from "next/link"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Header() {
  const components: { title: string; href: string }[] = [];

  for (let i = 1; i <= 25; i++) {
    components.push({
      title: `Day ${i}`,
      href: `/day${i}`,
    });
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold">Advent of Code</span>
            </div>
          </div>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-40">
                  Choose Day
                  <ChevronUpDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40">
                <ScrollArea className="h-[200px]">
                  {components.map((component) => (
                    <DropdownMenuItem key={component.href}>
                      <Link href={component.href} className="w-full">
                        {component.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

