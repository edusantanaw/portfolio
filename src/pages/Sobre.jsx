import styles from './Sobre.module.css'
import Cartaz from './cartaz.webp'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function Sobre() {

    return (
        <div className={styles.about}>
            <div>
                <div>
                    <h1>Sobre mim:</h1>
                    <p>Ola! Eu sou o Eduardo, Tenho 19 anos e atualmente</p>
                    <p> estou cursando Analise e desenvolvimento de sistemas,</p>
                    <p>comecei a estudar programação porque sempre tive</p>
                    <p>interesse em saber como as coisas funcionam.</p>
                    <p> Gosto mais da parte do backend, afinal sempre</p>
                    <p>gostei de logica.</p>
                </div>
                <div className={styles.icons}>
                    <FaGithub className={styles.my}/>
                    <FaInstagram className={styles.my}/>
                    <FaLinkedin className={styles.my}/>
                </div>
            </div>
            <img src={Cartaz} alt="cartaz" />
        </div >
    )
}

export default Sobre