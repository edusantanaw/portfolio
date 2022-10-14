import styles from './NavBar.module.css';
import { FaBars, FaAngleRight } from 'react-icons/fa'
import {useState} from 'react'

function NavBar() {
    const [visible, setVisible] = useState(false)
    const [show, setShow] = useState(false)

    const  isVisible=()=> {
        visible ? setVisible(false) : setVisible(true)
    }

    const handleScroll = () => {
        document.documentElement.scrollTop > 20 ?
            setShow(true): setShow(false)
    }
    window.onscroll = () => handleScroll() 


    return (
        <header className={show ? styles.show : ''} >
           <span><a href="#home">edusantanaw</a></span>
            {!visible && <FaBars className={styles.bars} onClick={isVisible} />}
            <ul className={styles.ul_web} id={ visible === true ? styles.ul_mobile : ''}>
                < FaAngleRight id={styles.close} onClick={isVisible} /> 
                <li><a href="#home">Início</a></li>
                <li><a href='#about'>Sobre</a></li>
                <li><a href='#projects'>Projetos</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href='#contact'>Contato</a></li>
            </ul>
            
        </header>
    );
}
export default NavBar