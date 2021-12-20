import { createContext, useEffect, useState } from "react";
import * as Service from '../../service';

const ControllerContext = createContext({});

export function ControllerProvider({ children }) {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ refreshController, setRefreshController ] = useState(0);
    const [ baseData, setBaseData ] = useState([])
    const [ byTeacherData, setbyTeacherData ] = useState([])
    const [ alertConfig, setAlertConfig ] = useState({
        isOpen: false,
        message: "",
    })

    function alertToggle(bol) {
        setAlertConfig(prev => ({
            ...prev,
            isOpen: bol,
        }))
    }

    useEffect(() => {
        let byDisciplineLoaded = false;
        let byTeacherLoaded = false;

        Service.getExamsDataByDiscipline()
            .then((data) => {
                byDisciplineLoaded = true
                setBaseData(data)
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })
            .catch((error) => {
                byDisciplineLoaded = true
                setAlertConfig({
                    isOpen: true,
                    message: error.message
                })
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })

        Service.getExamsDataByTeacher()
            .then((data) => {
                byTeacherLoaded = true
                setbyTeacherData(data)
                if(byTeacherLoaded && byDisciplineLoaded) setIsLoading(false)
            })
            .catch((error) => {
                byTeacherLoaded = true
                setAlertConfig({
                    isOpen: true,
                    message: error.message
                })
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
            alertConfig,
            setAlertConfig,
            alertToggle
        }}>
            {children}
        </ControllerContext.Provider>
    )
}

export default ControllerContext;