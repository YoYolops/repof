import { useEffect, useState } from "react";
import * as sc from "./styles";
import * as Service from '../../service';

export default function Register({ isVisible }) {
    const [ disciplinesData, setDisciplinesData ] = useState([]);
    const [ selectedDisciplineTeachers, setSelectedDisciplineTeachers ] = useState([])
    const [ registrationData, setRegistrationData ] = useState({
        name: "",
        examLink: "",
        categoryId: "",
        disciplineId: "",
        teacherId: 0,
    });

    useEffect(() => {
        Service.getExamsDataByDiscipline()
            .then((data) => setDisciplinesData(data))
            .catch(() => alert('erro'))
    }, [setDisciplinesData])

    function updateRegistrationData(key, value) {
        setRegistrationData({
            ...registrationData,
            [key]: value,
        })
    }

    function submitManager(e) {
        e.preventDefault();
        console.log(registrationData)
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
                            const filtered = disciplinesData.filter(discipline => discipline.id === targetValue)
                            setSelectedDisciplineTeachers(filtered[0].teachers)
                            updateRegistrationData("disciplineId", Number(e.target.value))
                        }}
                        value={registrationData.disciplineId}
                    >
                        <option value="" selected>Disciplina</option>
                    {
                        disciplinesData.map(disc => <option value={disc.id} key={disc.id}>{disc.name}</option>)
                    }</select>
                </div>
                <select 
                    required
                    onChange={ e => {
                        console.log(e.target.value)
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
                <input type="submit" value="Submit" />
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