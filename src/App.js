import './App.css';
import Home from './pages/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Trainer from './pages/trainer/trainer.component';
import Trainee from './pages/trainee/trainee.component'
import Problem from './pages/problem/problem.component';

function App() {
  return (
    <div className="App" dir='rtl'>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='trainer/:id' element={<Trainer/>}/>
        <Route path='trainees/:id' element={<Trainee/>}/>
        <Route path='problems/:id' element={<Problem/>}/>
      </Routes>
    </div>
  );
}

export default App;
