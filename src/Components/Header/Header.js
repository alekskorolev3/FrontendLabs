import React, {useState} from "react"
import PrimaryButton from "../Button/PrimaryButton";
import logo from "../../img/logo.svg"
import menu from "../../img/menu.svg"
import styles from "./Header.module.css"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <header className={styles.header}>
            <div className={styles.innerWrapper}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <ul className={styles.links} style={{display: isOpen ? "none" : "flex"}}>
                    <li>
                        <a href="#">Услуги</a>
                    </li>
                    <li>
                        <a href="#">Шаблоны</a>
                    </li>
                    <li>
                        <a href="#">Примеры резюме</a>
                    </li>
                    <li>
                        <a href="#">Цены</a>
                    </li>
                </ul>
            </div>

            <div className={styles.loginWrapper}>
                <a href="#">Войти</a>
                <PrimaryButton text="Регистрация"/>
            </div>

            <div className={styles.hamburgerButton} onClick={() => setIsOpen(!isOpen)}>
                <PrimaryButton icon={menu}/>
            </div>

        </header>


    )
}

export default Header
