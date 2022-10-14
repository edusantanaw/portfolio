import styles from './Sobre.module.css'
import Cartaz from '../img/cartaz.webp'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function Sobre() {

    return (
        <div className={styles.about} id="about">
            <div>
                <div>
                    <h1>Sobre mim</h1>
                    <p>Ola! Eu sou o Eduardo, Tenho 19 anos e atualmente</p>
                    <p> estou cursando Analise e desenvolvimento de sistemas,</p>
                    <p>comecei a estudar programação porque sempre tive</p>
                    <p>interesse em saber como as coisas funcionam.</p>
                    <p> Gosto mais da parte do backend, afinal sempre</p>
                    <p>gostei de logica.</p>
                </div>
                <div className={styles.icons}>
                    <a href="https://github.com/edusantanaw"><FaGithub className={styles.my}/></a>
                    <a href="https://www.instagram.com/edusantanaw/"><FaInstagram className={styles.my}/></a>
                    <a href="https://www.linkedin.com/in/eduardo-santana-vidal-7a4926245/"><FaLinkedin className={styles.my}/></a>
                </div>
            </div>
            <img src={Cartaz} alt="cartaz" />
        </div >
    )
}

export default Sobre