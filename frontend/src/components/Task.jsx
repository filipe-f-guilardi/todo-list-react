import { BsFillTrashFill } from "react-icons/bs";

const Task = ({props}) => {
    return ( 
        <div className="task">
            <p>{props.title}</p>
            <BsFillTrashFill />
        </div>
     );
}
 
export default Task;