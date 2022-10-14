import styles from './Home.module.css'
import perfil from '../img/perfil.webp'

function Home() {
    return (
        <section className={styles.home} id="home">
            <div className={styles.foto_perfil}>
                <img src={perfil} alt="eu" />
            </div>
            <div>
                <h1>Eduardo Santana</h1>
                <h2>Full stack developer</h2>
            </div>
        </section>
    )
}

export default Home