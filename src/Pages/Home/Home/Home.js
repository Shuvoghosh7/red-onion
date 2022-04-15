import { Link, Outlet } from 'react-router-dom';
import Breakfast from '../../Load data/Breakfast/Breakfast';
import Dinner from '../../Load data/Dinner/Dinner';


import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='background-img'>
            </div>
            <div className='nav-link text-center'>
                <Link to='/breakfast'>Breakfast</Link>
                <Link to='/lunch'>Lunch</Link>
                <Link to='/dinner'>Dinner</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Home;