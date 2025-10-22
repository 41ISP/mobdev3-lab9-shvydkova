

const Todo = ({ task, completed, onDelete, onCompleted }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" className="todo-checkbox" checked={completed} onChange={onCompleted} />
      <span className={`todo-text ${completed ? 'completed' : ''}`}>{task}</span>
      <button className="delete-btn" onClick={onDelete}>Удалить</button>
    </div>
  )

}
export default Todo