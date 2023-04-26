import React from "react";
import styles from "./PrimaryButton.module.css"

const PrimaryButton = ({text, icon}) => (
    <button className={icon ? `${styles.button} ${styles.buttonIcon}` : styles.button}>
        {
            !icon ?
                <span className={styles.buttonText}>{text}</span>
                :
                <img className={styles.icon} src={icon} alt="icon"/>
        }
    </button>
)

export default PrimaryButton
