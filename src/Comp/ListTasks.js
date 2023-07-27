import { useSelector } from "react-redux"
import CradTasks from "./CardTasks"

const Listtasks=()=>{
    const tasks = useSelector(state=>state.tasks)
    return(
        <div>
        {
            tasks.map((task,i,t)=><CradTasks task={task}/>)
        }
        </div>
    )
}

export default Listtasks