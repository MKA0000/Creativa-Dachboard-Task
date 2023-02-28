import './home.style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Trainers from '../../component/trainers/trainers.component';
import Trainees from '../../component/trainees/trainees.component';
import Problems from '../../component/problems/problems.component';
import  SearchIcon from '../../assets/iconmonstr-search-thin.svg';

import Trainer from '../trainer/trainer.component';

const Home = () => {


    return(
        <div className='home'> 
            <div className='search-box'>
                <div className='search-icon_container'>
                    <img src={SearchIcon} alt="search-icon" />
                </div>
                <input type='search' placeholder='بحث'/>
            </div>

            <main className='elements_container'>
                <Routes>
                    <Route path='/' element={<Trainers/>}/>
                    <Route path='trianees' element={<Trainees/>}/>
                    <Route path='problems' element={<Problems/>}/>
                </Routes>
            </main>

            <aside className='sidebar'>
                <h3>قوائم</h3>
                <ul>
                    <li><Link to='/'>المدربين</Link></li>
                    <li><Link to='trianees'>المتدربين</Link></li>
                    <li><Link to='problems'>المشاكل</Link></li>
                </ul>
            </aside>
        </div>
    )
}

export default Home;