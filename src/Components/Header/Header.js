import React, {useState} from "react"
import PrimaryButton from "../Button/PrimaryButton";
import logo from "../../img/logo.svg"
import menu from "../../img/menu.svg"
import styles from "./Header.module.css"
import {useAuth} from "../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/slices/userSlice";
import {Link} from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const {isAuth, email} = useAuth();

    const dispatch = useDispatch();


    return (
        <header className={styles.header}>
            <div className={styles.innerWrapper}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
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

            {
                isAuth ?
                    <div className={styles.loginWrapper}>
                        <span>{email}</span>
                        <div onClick={() => dispatch(removeUser())}>
                            <PrimaryButton text="Выйти"/>
                        </div>
                    </div>
                    :
                    <div className={styles.loginWrapper}>
                        <Link to="/login">Войти</Link>
                        <Link to="/registration">
                            <PrimaryButton text="Регистрация"/>
                        </Link>
                    </div>
            }

            <div className={styles.hamburgerButton} onClick={() => setIsOpen(!isOpen)}>
                <PrimaryButton icon={menu}/>
            </div>

        </header>


    )
}

export default Header
