'use client'

import { ChevronDown, Download, Filter, Plus, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'

export function Datatable1Toolbar() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <InputGroup className="flex-1 max-w-sm">
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search user" aria-label="Search user" />
      </InputGroup>
      <div className="sm:ml-auto flex items-center gap-2 flex-wrap justify-center">
        <Button variant="outline" size="sm" className="h-8 px-3 text-xs cursor-pointer">
          <Filter data-icon="inline-start" />
          Filter
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 px-3 text-xs cursor-pointer">
              <Download data-icon="inline-start" />
              Export
              <ChevronDown data-icon="inline-end" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">Export as CSV</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Export as Excel</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Export as PDF</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" className="h-8 px-3 text-xs cursor-pointer">
          <Plus data-icon="inline-start" />
          Add User
        </Button>
      </div>
    </div>
  )
}
