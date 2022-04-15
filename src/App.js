import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './Pages/Share/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
    <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       
     </Routes>
    </div>
  );
}

export default App;
