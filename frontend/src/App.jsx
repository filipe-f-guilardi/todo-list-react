import { useState } from 'react'
import "./style.css"
import Task from './components/task'

function App() {
  const [tasks, addTask] = useState([
    {
      id: 1,
      title: "comer salgadinho",
      complete: false,
    },
    {
      id: 2,
      title: "ver aula",
      complete: false,
    }
  ])

  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([])
  const [tasksCount, setTasksCount] = useState(0)

  const handleAddTask = () => {
    if (input != ""){
      addTask([...tasks,
        {
          id: 0,
          title: input,
          complete: false,
        }
      ])
    }
  }
  console.log(tasks)
  return (
    <div className='app'>
      <h2>todo list</h2>
      <div className='add-task'>
        <input type="text" placeholder='type a name to your task' onChange={(e) => {
          setInput(e.target.value)
        }}/>
        <button onClick={handleAddTask}>add task</button>
      </div>

      <div className='map'>
        {tasks.map((e) => <Task props={e}/>)}
      </div>

    </div>
  )
}

export default App
