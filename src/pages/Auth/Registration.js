import React, {useState} from "react"
import styles from "./Login.module.css"
import PrimaryButton from "../../Components/Button/PrimaryButton";
import icon from "../../img/arrowLeft.svg";
import google from "../../img/google.svg";
import fb from "../../img/fb.svg";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";

const Registration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleGoogleAuth = () => {
        const auth = getAuth();

        console.log("here")

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)

                const credential = GoogleAuthProvider.credentialFromResult(result)

                dispatch(setUser({
                    email: result.user.email,
                    id: result.user.uid,
                    token: credential.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)

    }


    return (
        <div style={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center"}}>
            <main className={styles.wrapper}>
                <div className={styles.headWrapper}>
                    <div className={styles.headButtonWrapper}>
                        <Link to="/">
                            <PrimaryButton icon={icon}/>
                        </Link>
                    </div>
                    <span>Регистрация</span>
                </div>

                <div className={styles.titleWrapper}>
                    <h1>Здравствуйте</h1>
                    <h2>Пожалуйста, введите данные</h2>
                </div>

                <form id="register" className={styles.formWrapper} onSubmit={handleSubmit}>
                    <div className={styles.formInnerWrapper}>
                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>Email</label>
                            <input type="email"
                                   name="email"
                                   value={inputs.email || ""}
                                   onChange={handleChange}
                                   className={styles.input}
                                   placeholder="ivanov_ivan1990@gmail.com"/>
                        </div>

                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>Пароль</label>
                            <input type="password"
                                   name="password"
                                   value={inputs.password || ""}
                                   onChange={handleChange}
                                   className={styles.input}
                                   placeholder=""/>
                        </div>

                        <div className={styles.checkboxWrapper}>
                            <input type="checkbox"/>
                            <label>Я согласен с условиями</label>
                        </div>
                    </div>

                    <PrimaryButton text="Регистрация" form="register" type="submit"/>
                </form>

                <div className={styles.methodsWrapper}>
                    <span>Или продолжите с </span>
                    <div className={styles.methodsInnerWrapper}>
                        <span onClick={handleGoogleAuth}>
                            <img src={google} alt="google" />
                        </span>
                    </div>

                    <div className={styles.regWrapper}>
                        <span>Уже есть аккаунт?</span>
                        <Link to="/login">Войти</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Registration
