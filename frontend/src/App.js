import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// pages & components
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to='/login' />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;