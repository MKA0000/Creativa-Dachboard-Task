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
        
        <div className='trainer-profile'>
            <div class="content-profile-page">
            <div class="profile-user-page card">
                <div class="img-user-profile">
                    <img class="profile-bgHome" src={trainer.background || "https://consultix.radiantthemes.com/demo-nine/wp-content/themes/consultix/images/no-image-found-360x250.png"} />
                    <img class="avatar" src={trainer.image || "https://mercymedcolumbus.com/wp-content/uploads/2023/01/no-image-icon-0.png"} alt="jofpin"/>
                    </div>
                    <button>Follow</button>
                    <div class="user-profile-data">
                        <h1>{trainer.name}</h1>
                        <p>{trainer.specialization}</p>
                    </div> 
                    <div class="description-profile">Front-end | Security Researcher | CSS Warrior | <a href="https://twitter.com/bullgit" title="bullgit"><strong>@bullgit</strong></a> | I love to create small things for the internet!</div>
                <ul class="data-user">
                    <li><a><strong>3390</strong><span>عدد المشاهدات</span></a></li>
                    <li><a><strong>718</strong><span>عدد المتابعين</span></a></li>
                    <li><a><strong>{trainer.rate}</strong><span>التقييم</span></a></li>
                </ul>
                </div>
                </div>
            <footer>
              <h4>Design by <a href="https://twitter.com" target="_blank" title="José Pino">@MKA0000</a></h4>
            </footer>
        </div>
    )
}

export default Trainer;