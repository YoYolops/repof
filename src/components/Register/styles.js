import styled from "styled-components";
import { motion } from "framer-motion";

export const MainContainer = styled(motion.main)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    h1 {
        color: #fff;
        font-size: 30px;
        margin-bottom: 40px;
        font-weight: 700;
        font-family: 'Tajawal', sans-serif;
    }

    >.form-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;

        >.submit-input {
            color: #fff;
            background-color: #689D69;
            font-size: 18px;
            font-weight: 700;
        }

        >input {
            margin-bottom: 13px;
            height: 40px;
            border-radius: 5px;
            border: none;
            padding: 7px;
            width: 250px;
            outline: none;
        }

        >select {
            margin-bottom: 13px;
            height: 40px;
            border-radius: 5px;
            border: none;
            padding: 7px;
            width: 250px;
            outline: none;
        }

        div {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            flex: 1;

            >select {
                margin-bottom: 13px;
                height: 40px;
                border-radius: 5px;
                border: none;
                padding: 7px;
                width: 120px;
                outline: none;
            }
        }
    }
`