import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("White")

  return (
    <>
      <div className='page' style={{backgroundColor: color}}>
        <div className="bar">
          <button onClick={()=>setColor("Red")} style={{backgroundColor: "Red", color: "white"}}>Red</button>
          <button onClick={()=>setColor("Yellow")} style={{backgroundColor: "Yellow"}}>Yellow</button>
          <button onClick={()=>setColor("Olive")} style={{backgroundColor: "Olive"}}>Olive</button>
          <button onClick={()=>setColor("Pink")} style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick={()=>setColor("Green")} style={{backgroundColor: "Green", color: "white"}}>Green</button>
          <button onClick={()=>setColor("Blue")} style={{backgroundColor: "Blue", color: "white"}}>Blue</button>
          <button onClick={()=>setColor("Purple")} style={{backgroundColor: "Purple", color: "white"}}>Purple</button>
          <button onClick={()=>setColor("Lavender")} style={{backgroundColor: "Lavender"}}>Lavender</button>
          <button onClick={()=>setColor("Gray")} style={{backgroundColor: "Gray", color: "white"}}>Gray</button>
          <button onClick={()=>setColor("White")} style={{backgroundColor: "White"}}>White</button>
          <button onClick={()=>setColor("Black")} style={{backgroundColor: "Black", color: "white"}}>Black</button>
        </div>
      </div>
    </>
  )
}

export default App