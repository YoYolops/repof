import { useLayoutEffect, useState } from 'react';
import * as sc from './styles';

export default function Track({children, config, changePresentState, presentState}) {
    const { thisId, color } = config;
    const [ variants, setVariants ] = useState({
        unactive: {
            width: 22,
        },
        active: {
            width: 0,
        },
        
    })

    useLayoutEffect(() => {
        setVariants({
            unactive: {
                width: 22,
            },
            active: {
                width: window.innerWidth - 44,
            }
        })
    }, [setVariants])

    return (
        <sc.TrackTrail
            layout
            color={color}
            onClick={() => {
                if (presentState !== thisId) changePresentState(thisId)
            }}
            variants={variants}
            initial="unactive"
            animate={ presentState === thisId ? "active" : "unactive" }
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 30,
                duration: .1
            }}
        >
            {children}
        </sc.TrackTrail>
    )
}
