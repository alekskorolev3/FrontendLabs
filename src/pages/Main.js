import React from "react"
import styles from "./Main.module.css"
import Header from "../Components/Header/Header";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Card from "../Components/Card/Card";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <>
            <Header/>
            <main>
                <div className={styles.mainHeader}>
                    <h1>Мои резюме</h1>
                    <Link to="/create">
                        <PrimaryButton text="Добавить"/>
                    </Link>
                </div>

                <ul className={styles.cvList}>
                    <li>
                        <Card/>
                    </li>

                    <li>
                        <Card/>
                    </li>

                    <li>
                        <Card/>
                    </li>
                </ul>
            </main>
        </>
    )
}

export default Main
