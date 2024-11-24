import '../styles/main.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

// import '../styles/layout/footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className='logo-links'>
                    <a className='github-link' href='https://github.com/tshih17110' target='_blank'>
                        <IconContext.Provider value={{size: 'auto', className: 'github-logo'}}>
                            <FaGithub />
                        </IconContext.Provider>
                    </a>
                    <a className='linkedin-link' href='https://linkedin.com/in/thomas-shih-105674184' target='_blank'>
                        <IconContext.Provider value={{size: 'auto', className: 'linkedin-logo'}}>
                            <FaLinkedin />
                        </IconContext.Provider>
                    </a>                    
                </div>
                <p className='footer-description'>Built by Thomas Shih | 2023</p>    
            </div>
        </footer>
   
    )
}

export default Footer
