import styles from "./Rating.module.css"
import React from "react";

const Rating = () => {
    return (
        <form className={styles.rating}>
            <label>
                <input type="radio" name="stars" value="1"/>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="2"/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="3"/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="4"/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="5"/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
        </form>
    )
}

export default Rating;
