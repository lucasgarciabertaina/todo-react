import './Todo.css';
import dumbbell from './dumbbell.svg';
import check from './circle-check.svg';

function Todo() {
  return (
    <div className="todos__todo">
      <img className="todo__image" src={dumbbell} alt="300" />
      <div className="todo__activity-type">
        <h4 className="todo__activity">Crossfit</h4>
        <h5 className="todo__type">Training</h5>
      </div>
      <div className="todo__check">
        <img className="check__image" src={check} alt="check" />
      </div>
    </div>
  )
}

export default Todo;