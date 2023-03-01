import './trainers.style.css';
import { useNavigate } from 'react-router-dom';
import { TRAINER_LIST } from '../../data/trainers-list';


const Trainers = () => {
    const navigate = useNavigate();



    return(
        <div className='trainers-table'>
            <ul className='trainers-header'>
                <li>الأسم</li>
                <li>التخصص</li>
                <li>التقييم</li>
            </ul>
            <ul className='trainer-items'>
                {
                    TRAINER_LIST.map(trainer => (
                        <li key={trainer.id} onClick={() => navigate(`trainer/${trainer.id}`)}>
                            <span className='name'>{trainer.name}</span>
                            <span className='specialization'>{trainer.specialization}</span>
                            <span className='rate'>{trainer.rate}</span>
                        </li>
                    ))
                }
            </ul>
 
        </div>
    )
}

export default Trainers;