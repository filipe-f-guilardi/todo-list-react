import { useState } from 'react'
import "../../style.css"
import Task from '../task'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [tasks, addTask] = useState([])

  const [inputTask, setInputTask] = useState("")

  const handleAddTask = () => {
    
    if (inputTask != ""){
      addTask([...tasks,
        {
          id: uuidv4(),
          title: inputTask,
          complete: false,
        }
      ])

      
      setInputTask("")
    }
  }

  const handleRemoveTask = (id) => {
    addTask(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className='app'>
      <h2>todo list</h2>
      <div className='add-task'>

        <input type="text" placeholder='type a name to your task' onChange={(e) => {
          setInputTask(e.target.value)
        }} value={inputTask}/>
        <button onClick={handleAddTask}>add task</button>
      </div>

      <div className='map'>
        {tasks.map((e) => <Task props={e} handleRemoveTask={handleRemoveTask}/>)}
      </div>

    </div>
  )
}

export default App
