import { useDispatch, useSelector } from "react-redux"
import { HandelDelete, HandelValid } from "../Redux/Action"
import Button from 'react-bootstrap/Button';


const NotDoneTasks=()=>{
    const tasks = useSelector(state=>state.tasks)
    const dispatch = useDispatch()
    return(
    <div>
    {
tasks.filter(tasks=> tasks.valid == false).map(task=>
    <div>
    <h3>{task.desc}</h3>
    <Button variant="warning">Edit</Button>
    <Button variant="success" onClick={()=>dispatch(HandelValid(task.id))}>Valid</Button>
    <Button variant="danger" onClick={()=>dispatch(HandelDelete(task.id))}>Delete</Button>
    
    </div>
    )
    }
    </div>
    )
}

export default NotDoneTasks