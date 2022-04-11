import './App.css';
import logo from './profile.png'

function App() {
  return (
    <div className="App">
      <nav>
        <img className="nav__profile-photo" src={logo} alt="200" />
        <div className="nav__profile-elements">
          <h4 className="nav__profile-welcome">Welcome Back</h4>
          <h3 className="nav__profile-name">Name</h3>
        </div>
        <div className="search">
          <img className="search__icon" alt="300" />
        </div>
      </nav>
      ,
      <div className="todo-now">
        <h3 className="todo-now__title">Now</h3>
        <div className="todo-now__todo">
          <img className="todo-now__image" alt="300" />
          <div className="todo-now__activity-type">
            <h2 className="todo-now__activity">Crossfit</h2>
            <h4 className="todo-now__type">Training</h4>
          </div>
        </div>
      </div>
      ,
      <button className="button" >New Todo</button>
      ,
      <div className="todoay-section">
        <section className="today-section__today-see-all">
          <h3 className="today-see-all__today">Today</h3>
          <a className="today-see-all__see-all" href="./index.js">See All</a>
        </section>,
        <section className="today-section__todos">
          <div className="todos__todo">
            <img className="todo__image" alt="300" />
            <div className="todo__activity-type">
              <h4 className="todo__activity">Crossfit</h4>
              <h5 className="todo__type">Training</h5>
            </div>
          </div>
          <div className="todo__check">
            <img className="check__image" alt="300" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
