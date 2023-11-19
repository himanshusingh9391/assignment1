
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/User';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </div>
    </>
  )
}

export default App
