import * as sc from './styles';
import Item from './Item';
import { useEffect, useState } from 'react';

export default function Selector(props) {
    const {
        thisId,
        selectorController,
        childrenData,
        title,
        activateNextSelector,
        permanent,
        blocked,
        setSelectedValue,
        link,
    } = props;
    const [ isClicked, setIsCLicked ] = useState(blocked);

    function manageNextSelectorVisibility(value) {
        if(selectorController === thisId) activateNextSelector(prev => prev + 1)
        setSelectedValue(value)
    }

    return (
        <sc.SelectorContainer
            variants={variants}
            initial="hidden"
            animate={ !(selectorController >= thisId) ? "hidden" : permanent ? "permanent" :  isClicked ? "active" : "visible"}
            onClick={() => {
                if(!blocked) setIsCLicked(prev => !prev)
            }}
        >
            <h2>{title}</h2>
        {
            isClicked && childrenData?.map((data, index) => (
                <Item 
                    key={index}
                    link={link ? link[index] : null}
                    title={data}
                    isVisible={isClicked}
                    activateNextSelector={manageNextSelectorVisibility}/>))
        }</sc.SelectorContainer>
    )
}

const variants = {
    hidden: {
        opacity: 1,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        height: 35,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
    active: {
        opacity: 1,
        scale: 1,
        height: 120,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    },
    permanent: {
        opacity: 1,
        scale: 1,
        height: 280,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
            type: "spring",
            stiffness: 250,
            damping: 30,
        }
    },
}