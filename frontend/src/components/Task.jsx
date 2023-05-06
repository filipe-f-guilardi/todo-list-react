import { useState } from "react";
import { BsFillTrashFill, BsCheck } from "react-icons/bs";

const Task = ({props, handleRemoveTask}) => {

    const [idComplete, setIdComplete] = useState("uncomplete")

    const handlerCompleteTask = () => {
        props.complete = !props.complete
        setIdComplete(props.complete ? "complete" : "uncomplete")
    }

    return ( 
        <div onClick={handlerCompleteTask} className={"task"} key={props.id}>
            <p>{props.title}</p>
            <div className="icons">
                <BsCheck className={idComplete} size={20}/>
                <BsFillTrashFill className="icon" size={14} onClick={() => handleRemoveTask(props.id)}/>
            </div>
        </div>
     );
}
 
export default Task;