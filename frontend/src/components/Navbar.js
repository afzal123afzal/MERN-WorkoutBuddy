import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const clickHandler = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>My Workout Tracker</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.data.email}</span>
              <button onClick={clickHandler}>Logout</button>
            </div>
          )}
          {!user && (
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
            </>
          )}

        </nav>
      </div>
    </header>
  )
}

export default Navbar