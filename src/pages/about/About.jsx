import { useState } from "react"

const About = () => {
  const [number, setNumber]= useState(3)
  const increaseCount =()=>{
    setNumber(number+1)
  }
  const decreaseCount =()=>{
    setNumber(number-1)
  }
  // useState()
  return (
    <div>
      <h1>About page</h1>
        <h2>{number}</h2>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default About