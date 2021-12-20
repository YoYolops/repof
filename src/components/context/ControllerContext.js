import { createContext, useEffect, useState } from "react";
import * as Service from '../../service';

const ControllerContext = createContext({});

export function ControllerProvider({ children }) {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ refreshController, setRefreshController ] = useState(0);
    const [ baseData, setBaseData ] = useState([])
    const [ byTeacherData, setbyTeacherData ] = useState([])

    useEffect(() => {
        let byDisciplineLoaded = false;
        let byTeacherLoaded = false;

        Service.getExamsDataByDiscipline()
            .then((data) => {
                byDisciplineLoaded = true
                setBaseData(data)
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })
            .catch(() => {
                byDisciplineLoaded = true
                alert('erro')
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })

        Service.getExamsDataByTeacher()
            .then((data) => {
                byTeacherLoaded = true
                setbyTeacherData(data)
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })
            .catch(() => {
                byTeacherLoaded = true
                alert('erro')
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })

    }, [setBaseData, setbyTeacherData, refreshController])



    return (
        <ControllerContext.Provider value={{
            isLoading,
            setIsLoading,
            refreshController,
            setRefreshController,
            baseData,
            byTeacherData,
        }}>
            {children}
        </ControllerContext.Provider>
    )
}

export default ControllerContext;