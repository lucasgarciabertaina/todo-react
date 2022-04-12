import './TodoNow.css';
import dumbbell from './dumbbell.svg';

function TodoNow() {
  return (
    <div className="todo-now">
      <h3 className="todo-now__title">Now</h3>
      <div className="todo-now__todo">
        <img className="todo-now__image" src={dumbbell} alt="dumbbell" />
        <div className="todo-now__activity-type">
          <h2 className="todo-now__activity">Crossfit</h2>
          <h4 className="todo-now__type">Training</h4>
        </div>
      </div>
    </div>
  )
}

export default TodoNow;