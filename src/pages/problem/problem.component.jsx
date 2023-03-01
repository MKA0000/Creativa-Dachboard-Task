import { useParams } from 'react-router-dom';
import PROBLEMS_LIST from '../../data/problems-list';

const Problem = () => {
    const { id } = useParams();
    const  problem = PROBLEMS_LIST.filter(problem => problem.id === Number(id))[0]

    if(!problem) {
        return <h1>Not Found</h1>
    }
    
    return(
        <div className='center'>
            <h1> {problem.owner} الخاصة ب {problem.subject} مشكلة</h1>
            <p>الصفحة تحت الانشاء</p>
        </div>
    )
}

export default Problem;