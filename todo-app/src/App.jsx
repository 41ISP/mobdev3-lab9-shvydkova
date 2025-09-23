import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import './App.css'
// import { categories } from './utils/categories.js'

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks"))
      || []
  })
  const [task, setTask] = useState("")
  const [filteredTasks, setFilteredTasks] = useState([])
  const [filter, setFilter] = useState("all")

  // const getFilteredTodos = () => {
  //   switch (filter) {
  //     case 'active':
  //       return tasks.filter(todo => !todo.completed);
  //     case 'completed':
  //       return tasks.filter(todo => todo.completed);
  //     default:
  //       return tasks;
  //   }
  // };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const handleAdd = (e) => {
    e.preventDefault()
    if (task.trim().length == 0) return
    const newTask = {
      id: crypto.randomUUID(),
      task,
      category,
      completed: false
    }
    setTasks((oldValue) => [newTask, ...oldValue])
    setTask("")
  }

  const handleDelete = (value) => {
    setTasks(tasks.filter(task => task.id !== value))
  }

  const handleCompleted = (value) => {
    setTasks(tasks => tasks.map(task => task.id == value ?
      { ...task, completed: !task.completed } : task)
    );
  }

  const filters = [
    { key: 'all', label: 'Все' },
    { key: 'active', label: 'Активные' },
    { key: 'completed', label: 'Завершенные' }
  ];
  

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
          {filters.map(filterButton => (
            <button key={filterButton.key}
              onClick={() => setFilter(filterButton.key)} className={`filter-btn ${filter === filterButton.key ? 'active' : ''}`} >{filterButton.label}</button>
          ))}
        </div>

        <div className="todo-list">
          {filteredTasks.map((el) => (
            <Todo key={el.id}
              task={el.task}
              completed={el.completed}
              onCompleted={() => handleCompleted(el.id)}
              onDelete={() => handleDelete(el.id)}
              {...el} />
          ))}

        </div>
        <div className="stats">
          Всего: 4 | Активных: 3 | Завершено: 1
        </div>
      </div >
    </>
  );
};

export default App