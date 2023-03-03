import React, { useState, useEffect } from 'react'

export default function Question3() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>The time is {time.toLocaleTimeString()}</h1>
    </div>
  )
}