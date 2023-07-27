import { useDispatch } from "react-redux"
import {  useSelector } from "react-redux/es/hooks/useSelector"
import { HandelDelete, HandelValid } from "../Redux/Action"
import Button from 'react-bootstrap/Button';

const IsDoneTasks=()=>{
  const tasks = useSelector(state=>state.tasks)  
  const dispatch = useDispatch()
  return(
    <div>
      {
        tasks.filter(task => task.valid == true).map(task=> 
        <div>
        <h3 className={task.valid && "aka"}>{task.desc}</h3>
        <Button variant="warning">Edit</Button>
        <Button variant="success" onClick={()=>dispatch(HandelValid(task.id))}>Valid</Button>
        <Button variant="danger" onClick={()=>dispatch(HandelDelete(task.id))}>Delete</Button>
        </div>
        )}
    </div>
      )
      }
 

export default IsDoneTasks