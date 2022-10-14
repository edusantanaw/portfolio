import style from "./Contato.module.css";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Contato() {
  return (
    <section className={style.contato} id="contact">
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
          <a href="https://github.com/edusantanaw">
            <FaGithub className={style.my} />
            <span>Github</span>
          </a>
          <a href="https://www.instagram.com/edusantanaw/">
            <FaInstagram className={style.my} />
            <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/in/eduardo-santana-vidal-7a4926245/">
            <FaLinkedin className={style.my} />
            <span>Linkedin</span>
          </a>
      </div>
    </section>
  );
}

export default Contato;
