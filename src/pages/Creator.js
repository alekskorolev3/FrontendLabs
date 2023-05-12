import React, {useState} from "react"
import styles from "./Creator.module.css"
import Header from "../Components/Header/Header";
import avatarBlank from "../img/avatarBlank.jpeg"
import SecondaryButton from "../Components/Button/SecondaryButton";
import PrimaryButton from "../Components/Button/PrimaryButton";
import Rating from "../Components/Rating/Rating";
import addIcon from "../img/add_icon.svg"
import accordion from "../img/acc_icon.svg"
import trash from "../img/trash.svg"
import {Link, useNavigate} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import {BlobProvider, Document, Font, Image, Page, PDFDownloadLink, PDFViewer, Text, View} from '@react-pdf/renderer';
import {Document as Doc, Page as Pg} from 'react-pdf/dist/esm/entry.webpack';


const Creator = () => {

    // pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.5.141/pdf.worker.min.js';


    const [step, setStep] = useState(0);

    const [image, setImage] = useState(avatarBlank)

    const [formData, setFormData] = useState({
        personalInfo: {},
        bio: {},
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

        let _d = {}

        for (let [key, value] of new FormData(e.target)) {
            _d[key] = value
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

    function handleImage(e) {
        e.preventDefault()
        setImage(URL.createObjectURL(e.target.files[0]))
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
                                                                <span
                                                                    className={styles.tabTitle}>{tab.company ? tab.company : "Название компании"}</span>
                                                                <span className={styles.tabDescription}>
                                                                    {`${tab.dateBegin ? tab.dateBegin : "2022-01-01"} - ${tab.dateEnd ? tab.dateEnd : "2023-01-01"}`}
                                                                </span>
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
                                                                <span
                                                                    className={styles.tabTitle}>{tab.institution ? tab.institution : "Название заведения"}</span>
                                                                <span className={styles.tabDescription}>
                                                                    {`${tab.dateBegin ? tab.dateBegin : "2022-01-01"} - ${tab.dateEnd ? tab.dateEnd : "2023-01-01"}`}
                                                                </span>
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
                        <h1>Ваше резюме готово!</h1>

                        <div className={styles.canvasMobile}>
                            <BlobProvider document={<MyDoc/>}>
                                {({blob, url, loading}) => (
                                    <Doc file={url} renderMode="canvas" width="300">
                                        <Pg pageNumber={1} width={window.innerWidth} renderTextLayer={false}
                                            renderAnnotationLayer={false} width="300"/>
                                    </Doc>
                                )}
                            </BlobProvider>
                        </div>


                        <div className={styles.buttonPanel}>
                            <div onClick={() => navigate("/")}>
                                <Link to="/home">
                                    <SecondaryButton text="Вернуться в меню"/>
                                </Link>
                            </div>

                            <PDFDownloadLink document={<MyDoc/>}
                                             fileName={`${formData.personalInfo.firstName}'s_CV.pdf`}
                                             className={styles.downloadLink}>
                                <PrimaryButton text='Скачать'/>
                            </PDFDownloadLink>
                        </div>
                    </>
                )

            default:
                return (
                    <span>Error</span>
                )
        }
    }

    Font.register({
        family: "Roboto",
        fonts: [
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-thin-webfont.ttf",
                fontWeight: 100
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
                fontWeight: 300
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
                fontWeight: 500
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
                fontWeight: 700
            }
        ]
    });

    const MyDoc = () => (
        <Document style={{width: "100%", fontFamily: "Roboto"}}>
            <Page size="A4" style={{padding: "20pt 50pt"}}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "40pt 0pt"
                }}>
                    <Image src={image}
                           style={{width: "80pt", height: "80pt", borderRadius: "40pt", objectFit: "cover"}}/>
                    <View style={{padding: "0pt 20pt"}}>
                        <View style={{display: "flex", flexDirection: "row"}}>
                            <Text style={{fontSize: "28pt", fontWeight: 700, paddingRight: "10pt"}}>
                                {formData.personalInfo.firstName ? formData.personalInfo.firstName : "Иван"}
                            </Text>

                            <Text style={{fontSize: "28pt", fontWeight: 700}}>
                                {formData.personalInfo.lastName ? formData.personalInfo.lastName : "Иванов"}
                            </Text>
                        </View>

                        <Text style={{fontSize: "18pt", fontWeight: 300}}>
                            {formData.personalInfo.email ? formData.personalInfo.email : "ivanov_ivan@gmail.com"}
                        </Text>
                    </View>
                </View>

                <View style={{paddingBottom: "20pt"}}>
                    <Text style={{
                        fontSize: "24pt",
                        fontWeight: 700
                    }}>{formData.personalInfo.position ? formData.personalInfo.position : "Должность"}</Text>
                </View>

                <View>
                    <Text style={{fontSize: "24pt", color: "orange", paddingBottom: "10pt"}}>Краткая биография</Text>
                    <Text style={{fontSize: "15pt", fontWeight: 300, padding: "0pt 10pt 10pt"}}>
                        {formData.bio.bio ? formData.bio.bio : "Пример краткой биографии"}
                    </Text>
                </View>

                <View>
                    <Text style={{fontSize: "24pt", color: "orange", paddingBottom: "10pt"}}>Опыт работы</Text>
                    {
                        formData.workExperience.length !== 0 ?
                            formData.workExperience.map((work) => (
                                <View key={work.id} style={{padding: "0pt 10pt 10pt"}}>
                                    <Text style={{
                                        fontSize: "18pt",
                                        fontWeight: 700
                                    }}>{`${work.company} | ${work.place}`}</Text>
                                    <Text style={{
                                        fontSize: "12pt",
                                        fontWeight: 300
                                    }}>{`${work.dateBegin} – ${work.dateEnd}`}</Text>
                                    <Text style={{fontSize: "16pt", fontWeight: 700}}>{work.workPost}</Text>
                                    <Text style={{fontSize: "15pt", fontWeight: 300}}>{work.workExperience}</Text>
                                </View>
                            ))
                            :
                            (
                                <>
                                    <View style={{padding: "0pt 10pt 10pt", color: "#787878"}}>
                                        <Text style={{fontSize: "18pt", fontWeight: 700}}>Google | Минск</Text>
                                        <Text style={{fontSize: "12pt", fontWeight: 300}}>2022-01-01 – 2023-01-10</Text>
                                        <Text style={{fontSize: "16pt", fontWeight: 700}}>Разработчик ПО</Text>
                                        <Text style={{fontSize: "15pt", fontWeight: 300}}>
                                            Стек технологий - это часто используемые ORM (Hibernate, Sequelize),
                                            Spring, REST (Spring MVC), View (React), Redux.
                                        </Text>
                                    </View>
                                </>
                            )
                    }
                </View>

                <View>
                    <Text style={{fontSize: "24pt", color: "orange", paddingBottom: "10pt"}}>Образование</Text>
                    {
                        formData.edu.length !== 0 ?
                            formData.edu.map((edu) => (
                                <View key={edu.id} style={{padding: "0pt 10pt 10pt"}}>
                                    <Text style={{
                                        fontSize: "18pt",
                                        fontWeight: 700
                                    }}>{`${edu.institution} | ${edu.place}`}</Text>
                                    <Text style={{
                                        fontSize: "12pt",
                                        fontWeight: 300
                                    }}>{`${edu.dateBegin} – ${edu.dateEnd}`}</Text>
                                    <Text style={{fontSize: "16pt", fontWeight: 700}}>{edu.speciality}</Text>
                                    <Text style={{fontSize: "15pt", fontWeight: 300}}>{edu.eduExperience}</Text>
                                </View>
                            ))
                            :
                            (
                                <>
                                    <View style={{padding: "0pt 10pt 10pt", color: "#787878"}}>
                                        <Text style={{fontSize: "18pt", fontWeight: 700}}>БГУИР | Минск</Text>
                                        <Text style={{fontSize: "12pt", fontWeight: 300}}>2022-01-01 – 2023-01-10</Text>
                                        <Text style={{fontSize: "16pt", fontWeight: 700}}>Информатика и технологии
                                            программирования</Text>
                                        <Text style={{fontSize: "15pt", fontWeight: 300}}>
                                            Стек технологий - это часто используемые ORM (Hibernate, Sequelize),
                                            Spring, REST (Spring MVC), View (React), Redux.
                                        </Text>
                                    </View>
                                </>
                            )
                    }
                </View>

                <View>
                    <Text style={{fontSize: "24pt", color: "orange", paddingBottom: "10pt"}}>Навыки</Text>
                    {
                        formData.skills.length !== 0 ?
                            formData.skills.map((skill) => (
                                <View key={skill.id} style={{padding: "0pt 10pt 10pt"}}>
                                    <Text style={{fontSize: "18pt", fontWeight: 700}}>{skill.name}</Text>
                                    <Text style={{fontSize: "18pt", fontWeight: 700}}>{skill.rating}</Text>
                                </View>
                            ))
                            :
                            (
                                <>
                                    <View style={{padding: "0pt 10pt 10pt", color: "#787878"}}>
                                        <Text style={{fontSize: "18pt", fontWeight: 700}}>Коммуникабельность</Text>
                                        <Text style={{fontSize: "18pt", fontWeight: 700}}>5</Text>
                                    </View>
                                </>
                            )
                    }
                </View>
            </Page>
        </Document>
    )

    return (
        <>
            <Header/>


            <div>
                <main className={styles.main}>
                    <div className={styles.data}>
                        <div className={styles.headerWrapper}>
                            <div className={styles.headerInnerWrapper}>
                                <div className={styles.personalImage}>
                                    <label>
                                        <input type="file" accept="image/jpeg, image/png" onChange={handleImage}/>
                                        <figure className={styles.personalFigure}>
                                            <img src={image} className={styles.personalAvatar} alt="avatar"/>
                                            <figcaption className={styles.personalFigcaption}>
                                                <img alt="photo"
                                                    src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"/>
                                            </figcaption>
                                        </figure>
                                    </label>
                                </div>

                                <span>
                                    {`${formData.personalInfo.firstName ? formData.personalInfo.firstName : "Иван"}
                                      ${formData.personalInfo.lastName ? formData.personalInfo.lastName : "Иванов"} 
                                    `}
                                </span>
                            </div>

                            <div className={styles.progressBar}
                                 style={{
                                     background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), 
                                                   conic-gradient(#F7634A ${(step + 1) * 20 <= 100 ? (step + 1) * 20 : 100}%, white 0)`
                                 }}
                                 data-percentage={`${(step + 1) * 20 <= 100 ? (step + 1) * 20 : 100}%`}>
                                <progress style={{visibility: "hidden", height: "0", width: "0"}}>

                                </progress>
                            </div>
                        </div>

                        <div className={styles.innerWrapper}>
                            {getContent(step)}
                        </div>


                    </div>

                    <div className={styles.canvas}>
                        <PDFViewer width="100%" height="500px" showToolbar={false}>
                            <MyDoc/>
                        </PDFViewer>
                    </div>
                </main>

            </div>
        </>
    )
}

export default Creator
