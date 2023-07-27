import { HANDELADD, HANDELDELETE, HANDELDELETEALL, HANDELVALID } from "./TypesActions"

const initailState={
    tasks :[
        {desc:"clean my room", valid: false , id: Math.random()},
        {desc:"make breakfast",valid: false ,id:Math.random()},
        {desc:"go to the gym"  ,valid: false,   id:Math.random()},
        {desc:"buy somethings", valid: false, id: Math.random()}
    ]
}

const Reducer=(state=initailState,action)=>{
        switch (action.type) {
        case  HANDELADD : return{...state,tasks:[...state.tasks,{desc:action.payload, valid: false, id: Math.random()}]}
        case HANDELDELETE : return{...state,tasks : state.tasks.filter((task,i,t)=> task.id != action.payload)}
        case HANDELDELETEALL : return{...state,tasks:[]}
        case HANDELVALID : return{...state,tasks : state.tasks.map((task,i,t)=> task.id == action.payload ? {...task,valid : !task.valid}:task)}
        default: return state
    }
    
}


export default Reducer


