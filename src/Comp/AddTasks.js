import { useState } from "react"
import { useDispatch } from "react-redux"
import { Handeladd } from "../Redux/Action"

const AddTasks=()=>{
    const [desc,setDesc]= useState("")
    const dispatch= useDispatch()
    return(
        <div>
            <input type="text" onChange={(e)=>setDesc(e.target.value)} />
            <button onClick={()=> dispatch(Handeladd(desc))}>Add</button>
        </div>
    )
}

export default AddTasks