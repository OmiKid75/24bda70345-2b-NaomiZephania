"use client"

import { SelectOption } from "@/types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  selectLabel: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
}

export function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <label>{selectLabel}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-52">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
