import styled from "styled-components";
import { motion } from 'framer-motion';

export const SelectorContainer = styled(motion.div)`
    overflow-y: auto;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 7px 7px 2px 7px;
    border-radius: 4px;
    background-color: #dddddd;
    display: flex;
    flex-direction: column;

    >h2 {
        margin-bottom: 7px;
    }
`

export const ItemsContainer = styled(motion.a)`

`