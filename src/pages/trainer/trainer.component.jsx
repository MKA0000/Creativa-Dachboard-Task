import './trainer.style.css';
import { useParams } from 'react-router-dom';
import { TRAINER_LIST } from '../../data/trainers-list';

const Trainer = () => {
    const { id } = useParams();

    
    const  trainer = TRAINER_LIST.filter(trainer => trainer.id === Number(id))[0]
    
    
    if(!trainer) {
        return(<h1>not found</h1>)
    }

    return(
        
        <h1>{trainer.name} Profile</h1>
    )
}

export default Trainer;