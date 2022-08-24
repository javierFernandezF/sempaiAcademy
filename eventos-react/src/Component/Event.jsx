import { useState } from "react"


const Event = () => {
    const [valor, setvalor] = useState("")
    const actualizarValor = (e) => {
        setvalor(e.target.value)
    }

    return (
      
        <>
          
        
        
        <input placeholder="Enter text" type="text" value={valor} onChange={actualizarValor}/>
        <p>{valor}</p>
        
        
        
        
        </>
    )
}

export default Event;
