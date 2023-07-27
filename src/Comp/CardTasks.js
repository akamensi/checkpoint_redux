import { useDispatch } from "react-redux"
import { HandelDelete, HandelValid } from "../Redux/Action"
import Button from 'react-bootstrap/Button';

const CradTasks=({task})=>{
    const dispatch= useDispatch()
    return(
        <div className="akaCard">
            <h3 className={task.valid && "aka"}>{task.desc}</h3>
            <Button variant="warning">Edit</Button>
            <Button variant="success" onClick={()=>dispatch(HandelValid(task.id))}>Valid</Button>
            <Button variant="danger" onClick={()=>dispatch(HandelDelete(task.id))}>Delete</Button>
        </div>
    )
}

export default CradTasks