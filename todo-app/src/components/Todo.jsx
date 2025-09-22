
import { categories } from '../utils/categories.js'

const Todo = ({task, category}) => {
    return (
            <div className="todo-item">
              <input type="checkbox" className="todo-checkbox"/>
              <span className="todo-text">{task}</span>
              <button className="delete-btn">Удалить</button>
            </div>        
    )
  
}
export default Todo