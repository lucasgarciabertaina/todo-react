import logo from './profile.png';
import lupe from './loupe.svg';
import './Nav.css';

function Nav() {
  return (
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
  )
}

export default Nav;