import './List.css';
import Todo from './Todo.js'

function List() {
  return (
    <section className="today-section">
      <section className="today-section__today-see-all">
        <h3 className="today-see-all__today">Today</h3>
        <a className="today-see-all__see-all" href="./index.js">See All</a>
      </section>
      <section className="today-section__todos">
        <Todo />
      </section>
    </section>
  )
}

export default List;