import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import './App.css'
import { categories } from './utils/categories.js'

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"))
      || []
  })
  const [task, setTask] = useState("")
  const [category, setCategory] = useState(Object.entries(categories)[0][0])
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const [filteredString, setFilteredString] = useState("")

  useEffect(() => {
    setFilteredTasks(tasks.filter(() => true))
  }, [filteredString, tasks])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const handleAdd = (e) => {
    e.preventDefault()
    if(task.trim().length == 0) return
    const newTask = {
      id: crypto.randomUUID(),
      task,
      category: 'active'
    }
    setTasks((oldValue) => [newTask, ...oldValue])
    setTask("")
  }
 
  return (
    <>
      <div className="container" >
        <div className="header">
          <h1>Todo App</h1>
          <p>Управляйте своими задачами</p>
        </div>

        <div className="add-todo">
          <div className="input-container">
            <form onSubmit={handleAdd} action="">
              <input type="text" className="todo-input" placeholder="Добавить новую задачу..." id="todoInput" onChange={(value) => setTask(value.target.value)} value={task} />
              <button className="add-btn" id="addBtn">Добавить</button>
            </form>
          </div>
        </div>
        <div className="filters">
          <button className="filter-btn active" data-filter="all">Все</button>
          <button className="filter-btn" data-filter="active">Активные</button>
          <button className="filter-btn" data-filter="completed">Завершенные</button>
        </div>
        <div className="todo-list">
          {filteredTasks.map((el) => (
            <Todo key={el.id} {...el} />
          ))}
        </div>
        <div className="stats">
          Всего: 4 | Активных: 3 | Завершено: 1
        </div>
      </div >
    </>
  )
}

export default App
//https://www.learnbestcoding.com/post/63/conditional-classnames-styles-react-js
