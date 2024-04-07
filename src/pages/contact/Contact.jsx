import { useEffect, useState } from "react"
import Button from "../../components/Button"
const Contact = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  // useEffect (()=>{

  //   console.log("Contact page loaded")
  // },[])
  // useEffect (()=>{
  //   console.log("suru ma ni execute hunxa ani count ma change aauda pni change hunxa")
  // },[count])
  useEffect(()=>{
    console.log("jti bela ma ni execute hunchha")
  })
  return (
    <div>
        <h1>This is contact page</h1>
        <h2>{count}</h2>
        <h3>{count2}</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
   <Button />
   <button onClick={()=>setCount2(count2-1)}>Decrease</button>
    </div>
  )
}

export default Contact
