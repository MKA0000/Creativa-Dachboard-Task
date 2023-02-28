import './App.css';
import Home from './pages/home/home.component';
import { Routes, Route } from 'react-router-dom';
import Trainer from './pages/trainer/trainer.component';

function App() {
  return (
    <div className="App" dir='rtl'>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='trainer/:id' element={<Trainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
