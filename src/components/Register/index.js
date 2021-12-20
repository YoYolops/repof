import { useContext, useState } from "react";
import * as sc from "./styles";
import * as Service from '../../service';
import ControllerContext from "../context/ControllerContext";

export default function Register({ isVisible }) {
    const {
        baseData,
        setIsLoading,
        setRefreshController,
        setAlertConfig
    } = useContext(ControllerContext)
    const [ selectedDisciplineTeachers, setSelectedDisciplineTeachers ] = useState([])
    const [ registrationData, setRegistrationData ] = useState({
        name: "",
        examLink: "",
        categoryId: "",
        disciplineId: "",
        teacherId: 0,
    });

    function updateRegistrationData(key, value) {
        setRegistrationData({
            ...registrationData,
            [key]: value,
        })
    }

    function submitManager(e) {
        e.preventDefault();
        setIsLoading(true)
        Service.registerExam(registrationData)
            .then((data) => {
                setRefreshController(prev => prev + 1)
                setIsLoading(false)
                setAlertConfig({
                    isOpen: true,
                    message: `Registrado sob o id: ${data.id}`
                })
            })
            .catch((error) => {
                setIsLoading(false)
                setAlertConfig({
                    isOpen: true,
                    message: error.message
                })
            })
    }

    return (
        <sc.MainContainer
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <h1>Envie uma prova:</h1>

            <form className="form-container" onSubmit={submitManager}>
                <input 
                    type="text"
                    required
                    placeholder="Nome"
                    onChange={ e => updateRegistrationData("name", e.target.value) }
                    value={registrationData.name}
                />

                <div>
                    <select 
                        required
                        onChange={ e => updateRegistrationData("categoryId", Number(e.target.value)) }
                        value={registrationData.categoryId}
                    >
                        <option value="" selected>Categorias</option>
                    {
                        ['P1','P2','P3','2ch','Outras'].map((opt, index) => <option value={(index+1)} key={opt}>{opt}</option>)
                    }</select>
                    <select
                        required
                        name="Disciplina"
                        onChange={ e => {
                            const targetValue = Number(e.target.value)
                            const filtered = baseData.filter(discipline => discipline.id === targetValue)
                            setSelectedDisciplineTeachers(filtered[0].teachers)
                            updateRegistrationData("disciplineId", Number(e.target.value))
                        }}
                        value={registrationData.disciplineId}
                    >
                        <option value="" selected>Disciplina</option>
                    {
                        baseData.map(disc => <option value={disc.id} key={disc.id}>{disc.name}</option>)
                    }</select>
                </div>
                <select 
                    required
                    onChange={ e => {
                        updateRegistrationData("teacherId", Number(e.target.value))
                    }}
                    value={registrationData.teacherId}
                >
                    <option value="" selected>Professor</option>
                {
                    selectedDisciplineTeachers.map(teacher => <option value={teacher.id} key={teacher.id}>{teacher.name}</option>)
                }</select>

                <input 
                    type="url"
                    required
                    placeholder="Link"
                    onChange={ e => updateRegistrationData("examLink", e.target.value) }
                    value={registrationData.examLink}
                />
                <input type="submit" value="Submit" className="submit-input"/>
            </form>
        </sc.MainContainer>
    )
}

const variants = {
    hidden: {
        opacity: 0,
        scale: 0,
        y: -20,
        transition: {
            duration: .2,
        }
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            delay: .1,
            duration: .2,
        }
    }
}