import styled from "styled-components";
import { motion } from "framer-motion";

export const LoadingScreenContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;

    >.animation-container {
        width: 100%;
        max-width: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        >svg {
            pointer-events: none;
        }
    }
`