import React, {useState} from "react"
import styles from "./Login.module.css"
import PrimaryButton from "../../Components/Button/PrimaryButton";
import icon from "../../img/arrowLeft.svg"
import google from "../../img/google.svg"
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlice";
import {getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth"

const Login = () => {

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

        signInWithEmailAndPassword(auth, inputs.email, inputs.password)
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
                    <span>Вход</span>
                </div>

                <div className={styles.titleWrapper}>
                    <h1>Здравствуйте</h1>
                    <h2>Пожалуйста, введите данные</h2>
                </div>

                <form id="login" className={styles.formWrapper} onSubmit={handleSubmit}>
                    <div className={styles.formInnerWrapper}>
                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                                placeholder="ivanov_ivan1990@gmail.com"/>
                        </div>

                        <div className={styles.inputWrapper}>
                            <label className={styles.label}>Пароль</label>
                            <input
                                type="password"
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder=""/>
                        </div>
                    </div>

                    <PrimaryButton text="Войти" form="login" type="submit"/>
                </form>

                <div className={styles.methodsWrapper}>
                    <span>Или продолжите с </span>
                    <div className={styles.methodsInnerWrapper}>
                        <span onClick={handleGoogleAuth}>
                            <img src={google} />
                        </span>
                    </div>

                    <div className={styles.regWrapper}>
                        <span>Ещё нет аккаунта?</span>
                        <Link to="/registration">Регистрация</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login;
