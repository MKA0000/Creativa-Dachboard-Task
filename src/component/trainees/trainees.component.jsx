import './trainees.style.css';
import { useNavigate } from 'react-router-dom';
import { TRAINEES_LIST } from '../../data/trainees-list';


const Trainees = () => {
    const navigate = useNavigate();

    return(
        <div className='trainers-table'>
            <ul className='trainers-header'>
                <li>الأسم</li>
                <li>الدورة</li>
                <li>التفاعل</li>
            </ul>
            <ul className='trainer-items'>
                {
                    TRAINEES_LIST.map(trainee => (
                        <li key={trainee.id} onClick={() => navigate(`${trainee.id}`)}>
                            <span className='name'>{trainee.name}</span>
                            <span className='specialization'>{trainee.specialization}</span>
                            <span className='rate'>{trainee.rate}</span>
                        </li>
                    ))
                }
            </ul>
 
        </div>
    )
}

export default Trainees;