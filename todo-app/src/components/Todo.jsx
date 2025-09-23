
//import { categories } from '../utils/categories.js'
const Todo = ({ task, completed, onDelete, onCompleted }) => {
  return (
    <div className="todo-item">
      <input type="checkbox" className="todo-checkbox" checked={completed} onChange={onCompleted} />
      <span className="todo-text">{task}</span>
      <button className="delete-btn" onClick={onDelete}>Удалить</button>
    </div>
  )

}
export default Todo