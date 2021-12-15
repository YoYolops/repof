import * as sc from './styles';
import Track  from './Track';
import { useEffect, useState } from 'react';

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
            </Track>
        </sc.MainContainer>
    )
}