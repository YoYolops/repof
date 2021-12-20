import * as sc from './styles';
import Selector from '../Components/Selector';
import { useContext, useState } from 'react';
import ControllerContext from '../../context/ControllerContext';

export default function SearchByDiscipline({ isVisible }) {
    const { baseData } = useContext(ControllerContext)
    const [ selectorController, setSelectorController ] = useState(0);
    const [ selectedSemesterData, setSelectedSemesterData ] = useState([])
    const [ selectedExams, setSelectedExams ] = useState([])

    return (
        <sc.MainContainer
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >

            <h1>Selecione por Disciplina</h1>

            <Selector 
                childrenData={[...new Set(baseData.map(data => data.semester))]}
                title="Período"
                thisId={0}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}
                setSelectedValue={(value) => {
                    const filteredData = baseData.filter(discipline => discipline.semester === value)
                    const selected = filteredData.map(discipline => discipline.exams)
                    setSelectedSemesterData(selected.flat())
                }}/>
            <Selector 
                childrenData={[...new Set(selectedSemesterData.map((exam, i, arr) => `${exam.categoryName} (${exam.name} - ${exam.teacher})`))]}
                title="Tipo"
                thisId={1}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}
                setSelectedValue={(value) => {
                    const filtered = selectedSemesterData.filter(semesterData => semesterData.categoryName === value);
                    setSelectedExams(filtered)
                }}/>
            <Selector 
                childrenData={selectedExams.map(exam => exam.name)}
                link={selectedExams.map(exam => exam.examLink)}
                title="Prova"
                thisId={2}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}
                setSelectedValue={() => {}}
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
