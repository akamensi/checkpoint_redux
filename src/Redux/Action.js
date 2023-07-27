import { HANDELADD, HANDELDELETE, HANDELDELETEALL, HANDELVALID } from "./TypesActions"

export const Handeladd=(payload)=>{
    return(
        {
        type : HANDELADD,
        payload
        }
    )
}

export const HandelDelete=(payload)=>{
    return(
        {
            type : HANDELDELETE,
            payload
        }
    )
}

export const DeleteAll =()=>{
    return(
        {
            type : HANDELDELETEALL,
            

        }
        
    )
}

export const HandelValid=(payload)=>{
    return(
        {
            type : HANDELVALID,
            payload
        }
    )
}