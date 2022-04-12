import './App.css';
import logo from './profile.png';
import lupe from './loupe.svg';
import dumbbell from './dumbbell.svg';
import check from './circle-check.svg';

function App() {
  return (
    <div className="App">
      <nav>
        <section className="nav__profile">
          <img className="profile__photo" src={logo} alt="profile" />
          <section className="profile__elements">
            <h4 className="profile__welcome">Welcome Back</h4>
            <h3 className="profile__name">Name</h3>
          </section>
        </section>
        <div className="search">
          <img className="search__icon" src={lupe} alt="lupe" />
        </div>
      </nav>
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
      <button className="button" >New Todo</button>
      <section className="today-section">
        <section className="today-section__today-see-all">
          <h3 className="today-see-all__today">Today</h3>
          <a className="today-see-all__see-all" href="./index.js">See All</a>
        </section>
        <section className="today-section__todos">
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
        </section>
      </section>
    </div>
  );
}

export default App;
