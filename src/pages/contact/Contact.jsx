import { useEffect, useState } from "react"
import Button from "../../components/Button"
const Contact = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
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
        <h2>{count3}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button> <br />
   <Button />
   <button onClick={()=>setCount2(count2-1)}>Decrease</button> <br />
<button onClick={()=>setCount3(count3 +2 )}>Increase by 2</button>
    </div>
  )
}

export default Contact
