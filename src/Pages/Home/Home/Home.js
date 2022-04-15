import { Link } from 'react-router-dom';
import Breakfast from '../../Load data/Breakfast/Breakfast';
import Dinner from '../../Load data/Dinner/Dinner';
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='background-img'>
            </div>
            <div>
                <a href="#breakfast">BreakFast</a>
                <a href="#dinner">Dinner</a>
            </div>
            <div id='breakfast'>
                <Breakfast />
            </div>
            <div id='dinner'>
                <Dinner />
            </div>
        </div>
    );
};

export default Home;