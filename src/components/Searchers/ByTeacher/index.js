import * as sc from './styles';
import Selector from '../Components/Selector';
import { useState } from 'react';

export default function SearchByTeacher({ isVisible }) {
    const [ selectorController, setSelectorController ] = useState(0);
    const [ selectorsData, setSelectorsData ] = useState({
        teacher: [
            {
                name: "João Figueiredo",
                exams: [{
                    name: "Cálculo",
                    categorie: "P1"
                }]
            },
            {
                name: "João Figueiredo",
                exams: [{
                    name: "Cálculo",
                    categorie: "P1"
                }]
            },
            {
                name: "João Figueiredo",
                exams: [{
                    name: "Cálculo",
                    categorie: "P1"
                }]
            },
            {
                name: "João Figueiredo",
                exams: [{
                    name: "Cálculo",
                    categorie: "P1"
                }]
            },
            {
                name: "João Figueiredo",
                exams: [{
                    name: "Cálculo",
                    categorie: "P1"
                }]
            },
        ]
    })

    return (
        <sc.MainContainer
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <h1>Selecione por Professor</h1>

            <Selector 
                childrenData={selectorsData.teacher}
                title="Professores"
                thisId={0}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}/>
            <Selector 
                childrenData={selectorsData.teacher}
                title="Tipo"
                thisId={1}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}/>
            <Selector 
                childrenData={selectorsData.teacher}
                title="Prova"
                thisId={2}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}
                permanent
                blocked/>
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