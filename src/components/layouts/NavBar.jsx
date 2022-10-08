import styles from './NavBar.module.css';
import { FaBars, FaAngleRight } from 'react-icons/fa'
import {useState} from 'react'

function NavBar() {
    const [visible, setVisible] = useState(false)
  
    const  isVisible=()=> {
        visible ? setVisible(false) : setVisible(true)
    }
    return (
        <header >
           <span>edusantanaw</span>
            {!visible && <FaBars className={styles.bars} onClick={isVisible} />}
            <ul className={styles.ul_web} id={ visible === true ? styles.ul_mobile : ''}>
                < FaAngleRight id={styles.close} onClick={isVisible} />
                <li>Home</li>
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Habilidades</li>
                <li>Contato</li>
            </ul>
            
        </header>
    );
}
export default NavBar