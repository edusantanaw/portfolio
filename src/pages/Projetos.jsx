import styles from "./Projetos.module.css";
import Projeto1 from "../img/Projeto1.png";
import Projeto2 from "../img/moon.png";
import Projeto3 from '../img/fylo.png'

function Projetos() {
  return (
    <section className={styles.projetos}>
      <h1>Meus projetos</h1>
      <div>
        <ul>
          <li>
            <div className={styles.projeto}>
              <img src={Projeto1} alt="Projeto 1" />
              <div className={styles.info_projeto}>
              <span>Sistema de artigos</span>
                <a href="https://sistema-de-artigos.netlify.app/">
                  Ver Projeto
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.projeto}>
              <img src={Projeto2} alt="Projeto 2" />
              <div className={styles.info_projeto}>
                <span>
                  space-tourism
                </span>
                <a href="https://tourisminthespace.netlify.app/">Ver Projeto</a>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.projeto}>
              <img src={Projeto3} alt="Projeto 3" />
              <div className={styles.info_projeto}>
                <span>
                  fylo
                </span>
                <a href="https://fylo-edusantanaw.netlify.app/">Ver Projeto</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projetos;
