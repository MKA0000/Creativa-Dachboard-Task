import './home.style.css';
import { Routes, Route, Link } from 'react-router-dom';
import Trainers from '../../component/trainers/trainers.component';
import Trainees from '../../component/trainees/trainees.component';
import Problems from '../../component/problems/problems.component';

const Home = () => {


    return(
        <> 
            <div className='search-box'>
                <input type='search' placeholder='بحث'/>
                {/* search icon here */}
            </div>

            <main className='elements_container'>
                <Routes>
                    <Route path='/' element={<Trainers/>}/>
                    <Route path='trianees' element={<Trainees/>}/>
                    <Route path='problems' element={<Problems/>}/>
                </Routes>
            </main>

            <aside className='sidebar'>
                <ul>
                    <li>قوائم</li>
                    <li><Link to='/'>المدربين</Link></li>
                    <li><Link to='trianees'>المتدربين</Link></li>
                    <li><Link to='problems'>المشاكل</Link></li>
                </ul>
            </aside>
        </>
    )
}

export default Home;