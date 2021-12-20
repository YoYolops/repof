import * as sc from './styles';
import Selector from '../Components/Selector';
import { useContext, useEffect, useState } from 'react';
import * as Service from '../../../service';
import ControllerContext from '../../context/ControllerContext';

export default function SearchByTeacher({ isVisible }) {
    const [ selectorController, setSelectorController ] = useState(0);
    const { byTeacherData } = useContext(ControllerContext)
    const [ teacherSelectedData, setTeacherSelectedData ] = useState([])
    const [ examSelectedData, setExamSelectedData ] = useState([])

    return (
        <sc.MainContainer
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            <h1>Selecione por Professor</h1>

            <Selector 
                childrenData={[...new Set(byTeacherData.map(teacher => `${teacher.name} (${teacher.exams.length})`))]}
                title="Professores"
                thisId={0}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}
                setSelectedValue={value => {
                    const teachersSelected = byTeacherData.filter(teacher => teacher.name === value)
                    const exams = teachersSelected.map(teacher => teacher.exams)
                    const examsSelected = exams.flat();
                    setTeacherSelectedData(examsSelected)
                }}/>
            <Selector 
                childrenData={[...new Set(teacherSelectedData.map(exam => exam.categoryName))]}
                title="Tipo"
                thisId={1}
                selectorController={selectorController}
                activateNextSelector={setSelectorController}
                setSelectedValue={(value) => {
                    const selectedExams = teacherSelectedData.filter(exam => exam.categoryName === value)
                    setExamSelectedData(selectedExams);
                }}/>
            <Selector 
                childrenData={examSelectedData.map(exam => exam.name)}
                link={examSelectedData.map(exam => exam.examLink)}
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