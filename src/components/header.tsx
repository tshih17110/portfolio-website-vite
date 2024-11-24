import Resume from '../assets/resume.pdf';
import '../styles/main.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='navbar'>
                {/* <div className="logo">
                    <h1>TS</h1>
                </div> */}
                <div className='links'>
                    <a className='resume' href={Resume}>Resume</a> 
                    <a href='mailto:tshih17110@gmail.com'>Contact</a>   
                </div>    
            </div>
        </header>
    )
}

export default Header
