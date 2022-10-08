import style from "./Contato.module.css";
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contato() {
  return (
    <section className={style.contato}>
      <h1>Contatos</h1>
      <div>
        <h2>Telefone:</h2>
        <span>15991776449</span>
      </div>
      <div>
        <h2>Email:</h2>
        <span>eduardosantanavidal@gmail.com</span>
      </div>
      <div className={style.icons}>
                    <FaGithub className={style.my}/>
                    <FaInstagram className={style.my}/>
                    <FaLinkedin className={style.my}/>
                </div>
    </section>
  );
}

export default Contato;
