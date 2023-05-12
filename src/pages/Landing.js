import React from "react"
import Header from "../Components/Header/Header";
import styles from "./Landing.module.css"
import PrimaryButton from "../Components/Button/PrimaryButton";
import illustration from "../img/illustration.svg"
import {Link} from "react-router-dom";

const Landing = () => {

    return <div>
        <Header />

        <main className={styles.hero}>
            <div className={styles.heroData}>
                <h1>Получите лучшую работу с идеальным резюме</h1>
                <h2>Cоздайте свое профессиональное резюме в браузере</h2>
                <Link to="/create">
                    <PrimaryButton text="Попробовать сейчас" />
                </Link>
            </div>

            <img src={illustration} alt="illustration" className={styles.illustration}/>
        </main>
    </div>
}

export default Landing;
