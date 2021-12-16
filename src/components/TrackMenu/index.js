import * as sc from './styles';
import Track  from './Track';
import { useState } from 'react';
import Register from '../Register';
import SearchByDiscipline from '../Searchers/ByDiscipline';

export default function TrackMenu() {
    const [ wichIsActive, setWichIsActive ] = useState(2);

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
                <SearchByDiscipline />
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
                <Register />
            </Track>
        </sc.MainContainer>
    )
}