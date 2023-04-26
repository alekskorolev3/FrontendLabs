import React from "react"
import styles from "./Creator.module.css"
import Header from "../Components/Header/Header";
import avatar from "../img/avatar.svg";
import SecondaryButton from "../Components/Button/SecondaryButton";
import PrimaryButton from "../Components/Button/PrimaryButton";

const Creator = () => {
    return (
        <>
            <Header/>


            <div>
                <main className={styles.main}>
                    <div className={styles.data}>
                        <div className={styles.headerWrapper}>
                            <div className={styles.headerInnerWrapper}>
                                <img src={avatar} alt="avatar"/>
                                <span>Артём Уласевич</span>
                            </div>

                            <div className={styles.progressBar}>
                                <progress value="75" style={{visibility: "hidden", height: "0", width: "0"}}>75%
                                </progress>
                            </div>
                        </div>

                        <div className={styles.innerWrapper}>
                            {/*<h1>Личные данные</h1>*/}
                            {/*<div className={styles.dataWrapper}>*/}
                            {/*    <form action="" className={styles.formWrapper}>*/}
                            {/*        <div className={styles.formInnerWrapper}>*/}
                            {/*            <div className={styles.inputWrapper}>*/}
                            {/*                <label className={styles.label}>Название должности</label>*/}
                            {/*                <input type="text" className={styles.input} placeholder="Разработчик ПО"/>*/}
                            {/*            </div>*/}

                            {/*<div className={styles.inputWrapper}>*/}
                            {/*    <label className={styles.label}>Имя</label>*/}
                            {/*    <input type="text" className={styles.input} placeholder="Артём"/>*/}
                            {/*</div>*/}

                            {/*            <div className={styles.inputWrapper}>*/}
                            {/*                <label className={styles.label}>Фамилия</label>*/}
                            {/*                <input type="text" className={styles.input} placeholder="Уласевич"/>*/}
                            {/*            </div>*/}

                            {/*            <div className={styles.inputWrapper}>*/}
                            {/*                <label className={styles.label}>Email Адрес</label>*/}
                            {/*                <input type="email" className={styles.input} placeholder="Введите email адрес"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}

                            {/*<h1>Краткая биография</h1>*/}
                            {/*<h2>Будьте лаконичны - суровая реальность такова,*/}
                            {/*    что менеджеры по подбору персонала тратят на каждое резюме в среднем всего 6 секунд. </h2>*/}
                            {/*<div className={styles.dataWrapper}>*/}
                            {/*    <form action="" className={styles.formWrapper}>*/}
                            {/*        <div className={styles.formInnerWrapper}>*/}
                            {/*            <textarea name="textarea" cols="30" rows="10" placeholder="Опишите свой профессиональный опыт здесь"></textarea>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}

                            {/*<h1>Опыт работы</h1>*/}
                            {/*<h2>Включите в этот раздел информацию о вашем опыте работы,*/}
                            {/*    а также период работы. Укажите сначала самую последнюю должность</h2>*/}
                            {/*<div className={styles.dataWrapper}>*/}
                            {/*    <form action="" className={styles.formWrapper}>*/}
                            {/*        <div className={styles.tabs}>*/}
                            {/*            <div className={styles.tab}>*/}
                            {/*                <input type="checkbox" id="chck1"/>*/}
                            {/*                <label className={styles.tabLabel} htmlFor="chck1">*/}
                            {/*                    <div className={styles.tabLabelInner}>*/}
                            {/*                        <img src={accordion} alt="acc_icon"/>*/}
                            {/*                        <div>*/}
                            {/*                            <span className={styles.tabTitle}>Google</span>*/}
                            {/*                            <span className={styles.tabDescription}>Сентябрь 2020 - Май 2022</span>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </label>*/}
                            {/*                <div className={styles.tabContent}>*/}
                            {/*                    <div className={styles.formInnerWrapper}>*/}
                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Название должности</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="Инженер-Программист"/>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Компания/Наниматель</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="Google LLC"/>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Период работы</label>*/}
                            {/*                            <div className={styles.dateWrapper}>*/}
                            {/*                                <input type="date" className={styles.input} placeholder="Начало"/>*/}
                            {/*                                →*/}
                            {/*                                <input type="date" className={styles.input} placeholder="Конец"/>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Период работы</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="Google LLC"/>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Местоположение</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="Минск"/>*/}
                            {/*                        </div>*/}

                            {/*                        <textarea name="textarea" cols="30" rows="10" placeholder="Опишите свой профессиональный опыт здесь"></textarea>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className={styles.tab}>*/}
                            {/*                <input type="checkbox" id="chck2"/>*/}
                            {/*                <label className={styles.tabLabel} htmlFor="chck2">*/}
                            {/*                    <div className={styles.tabLabelInner}>*/}
                            {/*                        <img src={accordion} alt="acc_icon"/>*/}
                            {/*                        <div>*/}
                            {/*                            <span className={styles.tabTitle}>Amazon</span>*/}
                            {/*                            <span className={styles.tabDescription}>Апрель 2018 - Сентябрь 2020</span>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </label>*/}
                            {/*                <div className={styles.tabContent}>*/}
                            {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}

                            {/*        <button className={styles.addWrapper}>*/}
                            {/*            <img src={addIcon} alt="add_icon"/>*/}
                            {/*            <span>Добавить место работы</span>*/}
                            {/*        </button>*/}

                            {/*    </form>*/}
                            {/*</div>*/}


                            {/*<h1>Образование </h1>*/}
                            {/*<h2>Включите в этот раздел информацию о вашем образовании,*/}
                            {/*    а также период обучения. Укажите сначала самую последнюю полученную специальность</h2>*/}
                            {/*<div className={styles.dataWrapper}>*/}
                            {/*    <form action="" className={styles.formWrapper}>*/}
                            {/*        <div className={styles.tabs}>*/}
                            {/*            <div className={styles.tab}>*/}
                            {/*                <input type="checkbox" id="chck1"/>*/}
                            {/*                <label className={styles.tabLabel} htmlFor="chck1">*/}
                            {/*                    <div className={styles.tabLabelInner}>*/}
                            {/*                        <img src={accordion} alt="acc_icon"/>*/}
                            {/*                        <div>*/}
                            {/*                            <span className={styles.tabTitle}>БГУИР</span>*/}
                            {/*                            <span className={styles.tabDescription}>Сентябрь 2020 - Май 2022</span>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </label>*/}
                            {/*                <div className={styles.tabContent}>*/}
                            {/*                    <div className={styles.formInnerWrapper}>*/}
                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Учебное заведение</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="БГУИР"/>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Специальность</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="ИиТп"/>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Период обучения</label>*/}
                            {/*                            <div className={styles.dateWrapper}>*/}
                            {/*                                <input type="date" className={styles.input} placeholder="Начало"/>*/}
                            {/*                                →*/}
                            {/*                                <input type="date" className={styles.input} placeholder="Конец"/>*/}
                            {/*                            </div>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Период работы</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="Google LLC"/>*/}
                            {/*                        </div>*/}

                            {/*                        <div className={styles.inputWrapper}>*/}
                            {/*                            <label className={styles.label}>Местоположение</label>*/}
                            {/*                            <input type="text" className={styles.input} placeholder="Минск"/>*/}
                            {/*                        </div>*/}

                            {/*                        <textarea name="textarea" cols="30" rows="10" placeholder="Напишите Ваши достижения и успехи в учёбе"></textarea>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className={styles.tab}>*/}
                            {/*                <input type="checkbox" id="chck2"/>*/}
                            {/*                <label className={styles.tabLabel} htmlFor="chck2">*/}
                            {/*                    <div className={styles.tabLabelInner}>*/}
                            {/*                        <img src={accordion} alt="acc_icon"/>*/}
                            {/*                        <div>*/}
                            {/*                            <span className={styles.tabTitle}>Amazon</span>*/}
                            {/*                            <span className={styles.tabDescription}>Апрель 2018 - Сентябрь 2020</span>*/}
                            {/*                        </div>*/}
                            {/*                    </div>*/}
                            {/*                </label>*/}
                            {/*                <div className={styles.tabContent}>*/}
                            {/*                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}

                            {/*        <button className={styles.addWrapper}>*/}
                            {/*            <img src={addIcon} alt="add_icon"/>*/}
                            {/*            <span>Добавить место учёбы</span>*/}
                            {/*        </button>*/}

                            {/*    </form>*/}
                            {/*</div>*/}

                        </div>


                    </div>

                    <div className={styles.canvas}>

                    </div>
                </main>

                <div className={styles.buttonPanel}>
                    <SecondaryButton text="Назад"/>
                    <PrimaryButton text="Следущий шаг"/>
                </div>
            </div>
        </>
    )
}

export default Creator
