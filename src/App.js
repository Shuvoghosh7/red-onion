import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './Pages/Share/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Load data/Lunch/Lunch';
import Dinner from './Pages/Load data/Dinner/Dinner';
import Breakfast from './Pages/Load data/Breakfast/Breakfast';

function App() {
  return (
    <div>
    <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/' element={<Breakfast/>}/>
       <Route path='/lunch' element={<Lunch/>}/>
       <Route path='/dinner' element={<Dinner/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
