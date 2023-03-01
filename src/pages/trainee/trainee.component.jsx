import './trainee.style.css';
import { useParams } from 'react-router-dom';
import { TRAINEES_LIST } from '../../data/trainees-list';

const Trainee = () => {
    const { id } = useParams();

    
    const  trainee = TRAINEES_LIST.filter(trainee => trainee.id === Number(id))[0]
    
    
    if(!trainee) {
        return(<h1>not found</h1>)
    }

    return(
        <div className='center'>
            <h1>{trainee.name} البروفايل الخصاص ب</h1>
            <p>تحت الانشاء ...</p>
        </div>
    )
}

export default Trainee;