import React from "react";
import styles from "./PrimaryButton.module.css"

const PrimaryButton = ({text, icon, form, type}) => (
    <button type={type ? type : "button"} className={icon ? `${styles.button} ${styles.buttonIcon}` : styles.button} form={form ? form : null}>
        {
            !icon ?
                <span className={styles.buttonText}>{text}</span>
                :
                <img className={styles.icon} src={icon} alt="icon"/>
        }
    </button>
)

export default PrimaryButton
