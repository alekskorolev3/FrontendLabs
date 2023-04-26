import React from "react"
import styles from "./Card.module.css";
import cover1 from "../../img/cover1.svg";

const Card = () => {
    return (
        <div className={styles.cvCard}>
            <img src={cover1} alt="cover1" className={styles.cardCover} />
            <div className={styles.cardInfo}>
                <span className={styles.cardTitle}>
                    Моё резюме 01
                </span>
                <span className={styles.cardDate}>
                    Обновлено 10 апреля, 16:39
                </span>
            </div>
        </div>
    )
}

export default Card
