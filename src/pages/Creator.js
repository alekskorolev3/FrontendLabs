import React, {useState} from "react"
import styles from "./Creator.module.css"
import Header from "../Components/Header/Header";
import avatar from "../img/avatar.svg";
import SecondaryButton from "../Components/Button/SecondaryButton";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Rating from "../Components/Rating/Rating";
import addIcon from "../img/add_icon.svg"
import accordion from "../img/acc_icon.svg"
import trash from "../img/trash.svg"
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

const Creator = () => {

    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        personalInfo: [],
        bio: [],
        workExperience: [],
        edu: [],
        skills: []
    })

    const [workTabs, setWorkTabs] = useState([])

    const [eduTabs, setEduTabs] = useState([])

    const [skills, setSkills] = useState([])

    const navigate = useNavigate();

    function handleKeyDown(e) {

        if (e.key === 'Enter') {
            e.preventDefault()
            setSkills((prev) => [...prev, {id: uuidv4(), name: e.target.value, rating: 0}])
        }
    }

    function handleRatingChange(val, id) {
        let index = skills.findIndex(skill => skill.id === id)

        let s = skills;

        s[index].rating = val;

        setSkills(s)

        console.log(skills)
    }

    function handleChangeWorkTabs(e, id, name) {
        let index = workTabs.findIndex(tab => tab.id === id)

        let p = workTabs;

        p[index][name] = e.target.value;

        setWorkTabs(p)
    }

    function handleChangeEduTabs(e, id, name) {
        let index = eduTabs.findIndex(tab => tab.id === id)

        let p = eduTabs;

        p[index][name] = e.target.value;

        setEduTabs(p)
    }

    function handleSubmit(e) {
        e.preventDefault()

        let _d = []

        for (let [key, value] of new FormData(e.target)) {
            _d.push({key, value})
        }

        if (step === 0) {
            setFormData({...formData, personalInfo: _d})
        } else if (step === 1) {
            setFormData({...formData, bio: _d})
        } else if (step === 2) {
            setFormData({...formData, workExperience: workTabs})
        } else if (step === 3) {
            setFormData({...formData, edu: eduTabs})
        } else if (step === 4) {
            setFormData({...formData, skills: skills})
        }

        setStep((prev) => prev + 1)

        console.log(formData)

    }


    function getContent(step) {
        switch (step) {
            case -1:
                navigate("/");
                break

            case 0:
                return (
                    <>
                        <h1>Личные данные</h1>
                        <div className={styles.dataWrapper}>
                            <form className={styles.formWrapper} id="form0" onSubmit={handleSubmit}>
                                <div className={styles.formInnerWrapper}>
                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label} htmlFor="position">Название должности</label>
                                        <input type="text" name="position" id="position" className={styles.input}
                                               placeholder="Разработчик ПО"/>
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label} htmlFor="firstName">Имя</label>
                                        <input type="text" name="firstName" id="firstName" className={styles.input}
                                               placeholder="Артём"/>
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label} htmlFor="lastName">Фамилия</label>
                                        <input type="text" name="lastName" id="lastName" className={styles.input}
                                               placeholder="Уласевич"/>
                                    </div>

                                    <div className={styles.inputWrapper}>
                                        <label className={styles.label} htmlFor="email">Email Адрес</label>
                                        <input type="email" name="email" id="email" className={styles.input}
                                               placeholder="Введите email адрес"/>
                                    </div>
                                </div>

                                <div className={styles.buttonPanel}>
                                    <div>
                                        <SecondaryButton text="Назад" onClick={() => setStep((prev) => prev - 1)}/>
                                    </div>
                                    <div>
                                        <PrimaryButton text="Следущий шаг" form="form0" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </>
                )

            case 1:
                return (
                    <>
                        <h1>Краткая биография</h1>
                        <h2>Будьте лаконичны - суровая реальность такова,
                            что менеджеры по подбору персонала тратят на каждое резюме в среднем всего 6 секунд. </h2>
                        <div className={styles.dataWrapper}>
                            <form action="" className={styles.formWrapper} id="form1" onSubmit={(e) => handleSubmit(e)}>
                                <div className={styles.formInnerWrapper}>
                                    <textarea name="bio" cols="30" rows="10"
                                              placeholder="Опишите свой профессиональный опыт здесь"/>
                                </div>
                                <div className={styles.buttonPanel}>
                                    <div onClick={() => setStep((prev) => prev - 1)}>
                                        <SecondaryButton text="Назад"/>
                                    </div>
                                    <div>
                                        <PrimaryButton text="Следущий шаг" form="form1" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                )

            case 2:
                return (
                    <>
                        <h1>Опыт работы</h1>
                        <h2>Включите в этот раздел информацию о вашем опыте работы,
                            а также период работы. Укажите сначала самую последнюю должность</h2>
                        <div className={styles.dataWrapper}>
                            <form action="" className={styles.formWrapper} id="form2" onSubmit={(e) => handleSubmit(e)}>
                                <div className={styles.tabs}>
                                    {
                                        workTabs.map((tab) => (
                                            <div key={tab.id} className={styles.tab}>
                                                <input type="checkbox" id={`chck${tab.id}`}/>
                                                <label className={styles.tabLabel} htmlFor={`chck${tab.id}`}>
                                                    <div className={styles.tabLabelWrapper}>
                                                        <div className={styles.tabLabelInner}>
                                                            <img src={accordion} alt="acc_icon"/>
                                                            <div className={styles.tabLabelInfo}>
                                                                <span className={styles.tabTitle}>Google</span>
                                                                <span className={styles.tabDescription}>Сентябрь 2020 - Май 2022</span>
                                                            </div>
                                                        </div>

                                                        <input type="image" src={trash}
                                                               onClick={() => setWorkTabs(workTabs.filter(obj => obj.id !== tab.id))}
                                                               alt="delete"/>
                                                    </div>
                                                </label>
                                                <div className={styles.tabContent}>
                                                    <div className={styles.formInnerWrapper}>
                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label} htmlFor="workPost">Название
                                                                должности</label>
                                                            <input type="text"
                                                                   onChange={(e) => handleChangeWorkTabs(e, tab.id, "workPost")}
                                                                   name="workPost"
                                                                   id="workPost"
                                                                   className={styles.input}
                                                                   placeholder="Инженер-Программист"/>
                                                        </div>

                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}
                                                                   htmlFor={`company${tab.id}`}>Компания/Наниматель</label>
                                                            <input type="text"
                                                                   onChange={(e) => handleChangeWorkTabs(e, tab.id, "company")}
                                                                   name={`company${tab.id}`}
                                                                   id={`company${tab.id}`}
                                                                   className={styles.input}
                                                                   placeholder="Google LLC"/>
                                                        </div>

                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}>Период работы</label>
                                                            <div className={styles.dateWrapper}>
                                                                <input type="date"
                                                                       onChange={(e) => handleChangeWorkTabs(e, tab.id, "dateBegin")}
                                                                       name="dateBegin"
                                                                       className={styles.input}
                                                                       placeholder="Начало"/>
                                                                →
                                                                <input type="date"
                                                                       onChange={(e) => handleChangeWorkTabs(e, tab.id, "dateEnd")}
                                                                       name="dateEnd"
                                                                       className={styles.input}
                                                                       placeholder="Конец"/>
                                                            </div>
                                                        </div>

                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}
                                                                   htmlFor={`place${tab.id}`}>Местоположение</label>
                                                            <input type="text"
                                                                   onChange={(e) => handleChangeWorkTabs(e, tab.id, "place")}
                                                                   name="place"
                                                                   id="place"
                                                                   className={styles.input} placeholder="Минск"/>
                                                        </div>

                                                        <textarea name="workExperience"
                                                                  onChange={(e) => handleChangeWorkTabs(e, tab.id, "workExperience")}
                                                                  cols="30" rows="10"
                                                                  placeholder="Опишите свой профессиональный опыт здесь"/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <button type="button" className={styles.addWrapper}
                                        onClick={() => setWorkTabs((prev) => [...prev, {
                                            id: uuidv4(),
                                            workPost: "",
                                            company: "",
                                            dateBegin: "",
                                            dateEnd: "",
                                            place: "",
                                            workExperience: ""
                                        }])}>
                                    <img src={addIcon} alt="add_icon"/>
                                    <span>Добавить место работы</span>
                                </button>

                                <div className={styles.buttonPanel}>
                                    <div onClick={() => setStep((prev) => prev - 1)}>
                                        <SecondaryButton text="Назад"/>
                                    </div>
                                    <div>
                                        <PrimaryButton text="Следущий шаг" form="form2" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                )

            case 3:
                return (
                    <>
                        <h1>Образование </h1>
                        <h2>Включите в этот раздел информацию о вашем образовании,
                            а также период обучения. Укажите сначала самую последнюю полученную специальность</h2>
                        <div className={styles.dataWrapper}>
                            <form action="" className={styles.formWrapper} id="form3" onSubmit={(e) => handleSubmit(e)}>
                                <div className={styles.tabs}>
                                    {
                                        eduTabs.map((tab) => (
                                            <div key={tab.id} className={styles.tab}>
                                                <input type="checkbox" id={`chck${tab.id}`}/>
                                                <label className={styles.tabLabel} htmlFor={`chck${tab.id}`}>
                                                    <div className={styles.tabLabelWrapper}>
                                                        <div className={styles.tabLabelInner}>
                                                            <img src={accordion} alt="acc_icon"/>
                                                            <div className={styles.tabLabelInfo}>
                                                                <span className={styles.tabTitle}>БГУИР</span>
                                                                <span className={styles.tabDescription}>Сентябрь 2020 - Май 2022</span>
                                                            </div>
                                                        </div>

                                                        <input type="image" src={trash}
                                                               onClick={() => setEduTabs(eduTabs.filter(obj => obj.id !== tab.id))}
                                                               alt="delete"/>
                                                    </div>
                                                </label>
                                                <div className={styles.tabContent}>
                                                    <div className={styles.formInnerWrapper}>
                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}>Учебное заведение</label>
                                                            <input type="text"
                                                                   name="institution"
                                                                   onChange={(e) => handleChangeEduTabs(e, tab.id, "institution")}
                                                                   className={styles.input}
                                                                   placeholder="БГУИР"/>
                                                        </div>

                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}>Специальность</label>
                                                            <input type="text"
                                                                   name="speciality"
                                                                   onChange={(e) => handleChangeEduTabs(e, tab.id, "speciality")}
                                                                   className={styles.input}
                                                                   placeholder="ИиТп"/>
                                                        </div>

                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}>Период обучения</label>
                                                            <div className={styles.dateWrapper}>
                                                                <input type="date"
                                                                       name="dateBegin"
                                                                       onChange={(e) => handleChangeEduTabs(e, tab.id, "dateBegin")}
                                                                       className={styles.input}
                                                                       placeholder="Начало"/>
                                                                →
                                                                <input type="date"
                                                                       name="dateEnd"
                                                                       onChange={(e) => handleChangeEduTabs(e, tab.id, "dateEnd")}
                                                                       className={styles.input}
                                                                       placeholder="Конец"/>
                                                            </div>
                                                        </div>


                                                        <div className={styles.inputWrapper}>
                                                            <label className={styles.label}>Местоположение</label>
                                                            <input type="text"
                                                                   name="place"
                                                                   onChange={(e) => handleChangeEduTabs(e, tab.id, "place")}
                                                                   className={styles.input}
                                                                   placeholder="Минск"/>
                                                        </div>

                                                        <textarea name="eduExperience"
                                                                  onChange={(e) => handleChangeEduTabs(e, tab.id, "eduExperience")}
                                                                  cols="30" rows="10"
                                                                  placeholder="Напишите Ваши достижения и успехи в учёбе"/>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                                <button type="button" className={styles.addWrapper}
                                        onClick={() => setEduTabs((prev) => [...prev, {
                                            id: uuidv4(),
                                            institution: "",
                                            speciality: "",
                                            dateBegin: "",
                                            dateEnd: "",
                                            place: "",
                                            eduExperience: ""
                                        }])}
                                >
                                    <img src={addIcon} alt="add_icon"/>
                                    <span>Добавить место учёбы</span>
                                </button>


                                <div className={styles.buttonPanel}>
                                    <div onClick={() => setStep((prev) => prev - 1)}>
                                        <SecondaryButton text="Назад"/>
                                    </div>
                                    <div>
                                        <PrimaryButton text="Следущий шаг" form="form3" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                )

            case 4:
                return (
                    <>
                        <h1>Навыки</h1>
                        <h2>Есть навыки, которыми вы хотели бы
                            поделиться с потенциальным работодателем?
                            Не стесняйтесь и добавьте их ниже</h2>
                        <div className={styles.dataWrapper}>
                            <form action="" className={styles.formWrapper} id="form4" onSubmit={(e) => handleSubmit(e)}>
                                <div className={styles.inputWrapper}>
                                    <label className={styles.label}>Добавить навык</label>
                                    <input type="text"
                                           onKeyDown={handleKeyDown}
                                           className={styles.skillInput}
                                           placeholder="Коммуникабельность"/>
                                </div>

                                {
                                    skills.map((skill) => (
                                        <div key={skill.id} className={styles.inputWrapper}>
                                            <span className={styles.label}>{skill.name}</span>
                                            <Rating onChange={(val) => handleRatingChange(val, skill.id)}/>
                                        </div>
                                    ))
                                }


                                <div className={styles.buttonPanel}>
                                    <div onClick={() => setStep((prev) => prev - 1)}>
                                        <SecondaryButton text="Назад"/>
                                    </div>
                                    <div>
                                        <PrimaryButton text="Следущий шаг" form="form4" type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </>
                )

            case 5:
                return (
                    <>
                        {
                            JSON.stringify(formData)
                        }
                    </>
                )

            default:
                return (
                    <span>Error</span>
                )
        }
    }


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

                            <div className={styles.progressBar}
                                 style={{
                                     background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), 
                                                   conic-gradient(#F7634A ${(step + 1) * 20}%, white 0)`
                                 }}
                                 data-percentage={`${(step + 1) * 20}%`}>
                                <progress style={{visibility: "hidden", height: "0", width: "0"}}>

                                </progress>
                            </div>
                        </div>

                        <div className={styles.innerWrapper}>
                            {getContent(step)}
                        </div>


                    </div>

                    <div className={styles.canvas}>

                    </div>
                </main>

            </div>
        </>
    )
}

export default Creator
