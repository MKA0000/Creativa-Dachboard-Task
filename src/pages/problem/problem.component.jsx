import { useParams } from 'react-router-dom';
import PROBLEMS_LIST from '../../data/problems-list';

const Problem = () => {
    const { id } = useParams();
    const  problem = PROBLEMS_LIST.filter(problem => problem.id === Number(id))[0]

    if(!problem) {
        return <h1>Not Found</h1>
    }
    
    return(
        <div>
            <h1>{problem.subject} Problem Description</h1>
        </div>
    )
}

export default Problem;