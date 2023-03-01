import './problems.style.css';
import PROBLEMS_LIST from '../../data/problems-list';
import { useNavigate } from 'react-router-dom';


const Problems = () => {
    const navigate = useNavigate();



    return(
        <div className='trainers-table'>
            <ul className='trainers-header'>
                <li>صاحب المشكلة</li>
                <li>الموضوع</li>
                <li>بتاريخ</li>
            </ul>
            <ul className='trainer-items'>
                {
                    PROBLEMS_LIST.map(problem => (
                        <li key={problem.id} onClick={() => navigate(`${problem.id}`)}>
                            <span className='name'>{problem.owner}</span>
                            <span className='specialization'>{problem.subject}</span>
                            <span className='rate'>{problem.date}</span>
                        </li>
                    ))
                }
            </ul>
 
        </div>
    )
}


export default Problems;