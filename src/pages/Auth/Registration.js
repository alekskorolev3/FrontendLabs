import React from "react"
import styles from "./Login.module.css"
import PrimaryButton from "../../Components/Button/PrimaryButton";
import icon from "../../img/arrowLeft.svg";
import google from "../../img/google.svg";
import fb from "../../img/fb.svg";

const Registration = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center"}}>
            <main className={styles.wrapper}>
                <div className={styles.headWrapper}>
                    <div className={styles.headButtonWrapper}>
                        <PrimaryButton icon={icon}/>
                    </div>
                    <span>Регистрация</span>
                </div>

                <div className={styles.titleWrapper}>
                    <h1>Здравствуйте</h1>
                    <h2>Пожалуйста, введите данные</h2>
                </div>

                <form action="" className={styles.formWrapper}>
                    <div className={styles.formInnerWrapper}>
                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>Email</label>
                            <input type="email" className={styles.input} placeholder="ivanov_ivan1990@gmail.com"/>
                        </div>

                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>Пароль</label>
                            <input type="password" className={styles.input} placeholder=""/>
                        </div>

                        <div className={styles.checkboxWrapper}>
                            <input type="checkbox"/>
                            <label>Я согласен с условиями</label>
                        </div>
                    </div>

                    <PrimaryButton text="Регистрация"/>
                </form>

                <div className={styles.methodsWrapper}>
                    <span>Или продолжите с </span>
                    <div className={styles.methodsInnerWrapper}>
                        <img src={google} alt="google"/>
                        <img src={fb} alt="fb"/>
                    </div>

                    <div className={styles.regWrapper}>
                        <span>Уже есть аккаунт?</span>
                        <a href="/login">Войти</a>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Registration
