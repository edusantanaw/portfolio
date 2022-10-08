import {
  FaNodeJs,
  FaReact,
  FaJs,
  FaCss3,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa";
import {SiStyledcomponents} from 'react-icons/si'
import { SiMongodb } from "react-icons/si";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <section className={styles.skills} attr="left">
      <h1>Tecnologias</h1>
      <ul>
        <li>
            <FaNodeJs />
            <h1>NodeJs</h1>
        </li>
        <li>
            <FaReact />
            <h1>React js</h1>
        </li>
        <li>
            <FaCss3 />
            <h1>Css</h1>
        </li>
        <li>
            <FaGitAlt />
            <h1>Git</h1>
        </li>
        <li>
            <FaHtml5 />
            <h1>Html</h1>
        </li>
        <li>
            <FaJs />
            <h1>Javascript</h1>
        </li>
        <li>
          <SiMongodb />
            <h1>Mongodb</h1>
        </li>
        <li>
          <SiStyledcomponents />
          <h1>Styled
  
          </h1>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
