import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainContainer = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: flex-start;
`

export const TrackTrail = styled(motion.section)`
    background-color: ${props => props.color ? props.color : '#fff'};
    height: 100vh;
    overflow-y: auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow-x: hidden;

    >.icon-container {
        position: absolute;
        top: 5px;
        right: 2px;
        height: 25px;
        cursor: pointer;
    }
`