import styles from "./Rating.module.css"
import React from "react";

const Rating = ({onChange}) => {

    function handleSubmit(e) {
        onChange(e.target.value)
    }

    return (
        <form className={styles.rating}>
            <label>
                <input type="radio" name="stars" value="1" onClick={handleSubmit}/>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="2" onClick={handleSubmit}/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="3" onClick={handleSubmit}/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="4" onClick={handleSubmit}/>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
                <span className={styles.icon}>●</span>
            </label>
            <label>
                <input type="radio" name="stars" value="5" onClick={handleSubmit}/>
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
