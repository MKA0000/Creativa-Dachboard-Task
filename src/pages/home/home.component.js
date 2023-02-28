import './home.style.css';

const Home = () => {


    return(
        <> 
            <header>
                <button type='button'>ترتيب</button>
                <input type='search' placeholder='بحث'/>
            </header>

            <main className='home_container'>

            </main>

            <aside>
                <ul>
                    <li>قوائم</li>
                    <li>المدربين</li>
                    <li>المتدربين</li>
                    <li>المشاكل</li>
                </ul>
            </aside>
        </>
    )
}

export default Home;