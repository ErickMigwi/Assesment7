import React, { useState } from 'react'

export default function Question1() {
  const [num, setNum] = useState(0)
  const [sum, setSum] = useState(0)

  const handleChange = (e) => {
    setNum(e.target.value)
  }

  const handleSum = () => {
    const numArray = [...num];
    const sumResult = numArray.reduce((accumulator, currentValue) => {
      return parseInt(accumulator) + parseInt(currentValue);
    }, 0); 
    setSum(sumResult); 
    setNum(0); 
  }

  return (
    <div>
      <h1>Enter a number</h1>
      <input type="text" value={num} onChange={handleChange} />
      <button onClick={handleSum}>Add to sum</button>
      <p>Sum: {sum}</p>
    </div>
  )
}