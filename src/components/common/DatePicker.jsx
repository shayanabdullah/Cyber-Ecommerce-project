import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



function formatDate(date) {
  if (!date) return ""

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

export default function DatePicker({isActive, label, className}) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(new Date())
  const [month, setMonth] = React.useState(date)
  const [value, setValue] = React.useState(formatDate(date))

  return (
    <div className="flex flex-col gap-3">
      <Label    className={`font-poppins font-medium text-sm md:text-base leading-6  ${className}  ${
                            isActive == 3 ? "text-[#17183B]" : "text-[#A2A3B1]" 
                          }`}>{label}</Label>

      <div className="relative flex gap-2 ">
        <Input
          value={value}
          placeholder="January 01, 2026"
            className={`font-poppins font-normal text-sm md:text-base leading-6  pr-10 bg-background not-last:  ${
                            isActive == 3 ? "text-[#17183B] border-black!" : "text-[#A2A3B1]" 
                          }`}
          onChange={(e) => {
            const val = e.target.value
            setValue(val)

            const parsed = new Date(val)
            if (isValidDate(parsed)) {
              setDate(parsed)
              setMonth(parsed)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              setOpen(true)
            }
          }}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 size-6"
            >
              <CalendarIcon    className={`size-4  ${
                            isActive == 3 ? "text-[#17183B]" : "text-[#A2A3B1]" 
                          }`}/>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              onSelect={(d) => {
                if (!d) return
                setDate(d)
                setValue(formatDate(d))
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
