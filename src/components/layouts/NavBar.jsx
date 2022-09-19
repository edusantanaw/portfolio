import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';
import {FaBars} from 'react-icons/fa'
import {useState} from 'react'

function NavBar() {

    const [visible, setVisible] = useState(false)

    function isVisible(){
        console.log(visible)
        visible === false ? setVisible(true) : setVisible(false)  
    }

    return (
        <nav>
            <p>edusantanaw</p>
            <ul className={styles.ul_web}>
                <li><Link to="/" className={styles.Link}>Home</Link></li>
                <li><Link to="/Sobre" className={styles.Link}>Sobre</Link ></li>
                <li><Link to="/Projetos" className={styles.Link}>Projetos</Link ></li>
                <li><Link to="/Skills" className={styles.Link}>Skills</Link ></li>
                <li><Link to="/Contato" className={styles.Link}>Contato</Link ></li>
            </ul>
            <FaBars  className={styles.bars} onClick ={isVisible}/>
            {visible && (<ul className={styles.ul_mobile}>
                <li><Link to="/" className={styles.Link}>Home</Link></li>
                <li><Link to="/Sobre" className={styles.Link}>Sobre</Link ></li>
                <li><Link to="/Projetos" className={styles.Link}>Projetos</Link ></li>
                <li><Link to="/Skills" className={styles.Link}>Skills</Link ></li>
                <li><Link to="/Contato" className={styles.Link}>Contato</Link ></li>
            </ul>)
                
            }
            
        </nav>
    );
}
export default NavBar