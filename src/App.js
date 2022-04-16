import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './Pages/Share/Navber/Navber';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Load data/Lunch/Lunch';
import Dinner from './Pages/Load data/Dinner/Dinner';
import Breakfast from './Pages/Load data/Breakfast/Breakfast';
import Singup from './Pages/Auth/Singup/Singup';
import Login from './Pages/Auth/Singup/Singup';


function App() {
  return (
    <>
      <Navber />
      <Routes>
      <Route path='/' element={<Home />} >
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/lunch' element={<Lunch />} />
          <Route path='/dinner' element={<Dinner />} />
      </Route>
      <Route path='/singup' element={<Singup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>

    </>
  );
}

export default App;
