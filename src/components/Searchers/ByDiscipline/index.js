import * as sc from './styles';
import Selector from '../Components/Selector';
import { useState } from 'react';

export default function SearchByDiscipline() {
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
        <sc.MainContainer>
            <h1>Selecione por Diciplina</h1>

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