import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <header>
        <div className="navbar">
        <Link to={'/'}>
            <h1>Workout App</h1>
        </Link>
        <nav>
            <div>
              <Link to={'/login'}>Login</Link>
              <Link to={'/signup'}>Signup</Link>
            </div>
        </nav>
        </div>
    </header>

  )
}
