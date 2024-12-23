"use client"

import * as React from "react"
import { Progress } from "@mijn-ui/react-progress"

const ProgressExample = () => {
  const [value, setValue] = React.useState<number>(0)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setValue((val) => {
        if (val >= 75) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          return val
        }
        return val + 1
      })
    }, 20)

    // Clear the interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="w-80 space-y-1">
      <div className="flex items-center justify-between text-sm font-medium text-main-text">
        <h5>Progress Label</h5>
        <p>{value}%</p>
      </div>
      <Progress value={value} />
      <div className="flex items-center justify-between text-xs text-muted-text">
        <p>min</p>
        <p>max</p>
      </div>
    </div>
  )
}

export default ProgressExample
