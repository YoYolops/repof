import { useState } from "react";
import * as sc from "./styles";

export default function Register({ isVisible }) {
    const [ options, setOptions ] = useState({
        teachers: [],
        categories: [],
        disciplines: [],
    });
    const [ registrationData, setRegistrationData ] = useState({
        name: "",
        link: "",
        category: "",
        disciplines: "",
        teacher: "",
    });

    function updateRegistrationData(key, value) {
        setRegistrationData({
            ...registrationData,
            [key]: value,
        })
    }

    return (
        <sc.MainContainer
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <h1>Envie uma prova:</h1>

            <form className="form-container">
                <input 
                    type="text"
                    required
                    placeholder="Nome"
                    onChange={ e => updateRegistrationData("name", e.target.value) }
                    value={registrationData.name}
                />

                <input 
                    type="url"
                    required
                    placeholder="Link"
                    onChange={ e => updateRegistrationData("link", e.target.value) }
                    value={registrationData.link}
                />
                <div>
                    <select 
                        required
                        onChange={ e => updateRegistrationData("category", e.target.value) }
                        value={registrationData.category}
                    >
                        <option value="none" selected disabled hidden>Categorias</option>
                    {
                        options.categories.map(opt => <option value={opt}>{opt}</option>)
                    }</select>
                    <select
                        required
                        name="Disciplina"
                        onChange={ e => updateRegistrationData("disciplines", e.target.value) }
                        value={registrationData.disciplines}
                    >
                        <option value="none" selected disabled hidden>Disciplina</option>
                    {
                        options.disciplines.map(disc => <option value={disc}>{disc}</option>)
                    }</select>
                </div>
                <select 
                    required
                    disabled={!!registrationData.disciplines}
                    onChange={ e => updateRegistrationData("teacher", e.target.value) }
                    value={registrationData.teacher}
                >
                    <option value="none" selected disabled hidden>Professor</option>
                {
                    options.teachers.map(teach => <option value={teach}>{teach}</option>)
                }</select>
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