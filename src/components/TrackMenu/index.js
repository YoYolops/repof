import * as sc from './styles';
import Track  from './Track';
import { useState, useContext } from 'react';
import Register from '../Register';
import SearchByDiscipline from '../Searchers/ByDiscipline';
import SearchByTeacher from '../Searchers/ByTeacher';
import { BiMailSend } from 'react-icons/bi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdPersonSearch } from 'react-icons/md';
import ControllerContext from '../context/ControllerContext';
import LoadingScreen from '../LoadingScreen';

export default function TrackMenu() {
    const [ wichIsActive, setWichIsActive ] = useState(2);
    const { isLoading } = useContext(ControllerContext);

    if (isLoading) return <LoadingScreen />

    return (
        <sc.MainContainer layout>
            <Track
                layout
                key={0}
                changePresentState={setWichIsActive}
                presentState={wichIsActive}
                config={{
                    color: "#689d69", 
                    thisId: 0
                }}
            >
                <div className="icon-container">
                    <MdPersonSearch color="#fff" size={18}/>
                </div>
                <SearchByTeacher isVisible={wichIsActive === 0}/>
            </Track>
            <Track
                key={1}
                changePresentState={setWichIsActive}
                presentState={wichIsActive}
                config={{
                    color: "#458587",
                    thisId: 1
                }}
            >
                <div className="icon-container">
                    <AiOutlineFileSearch color="#fff" size={18}/>
                </div>
                <SearchByDiscipline isVisible={wichIsActive === 1}/>
            </Track>
            <Track
                key={2}
                changePresentState={setWichIsActive}
                presentState={wichIsActive}
                config={{
                    color: "#282828",
                    thisId: 2
                }}
            >
                <div className="icon-container">
                    <BiMailSend color="#fff" size={18}/>
                </div>
                <Register isVisible={wichIsActive === 2} />
            </Track>
        </sc.MainContainer>
    )
}