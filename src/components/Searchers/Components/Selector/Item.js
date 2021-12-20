import * as sc from './styles';

export default function Item({ title, isVisible, activateNextSelector, link }) {

    return (
        <sc.ItemsContainer
            variants={variants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover={{scale: 1.05}}
            onClick={() => activateNextSelector(title)}
            href={link}
            target="_blank"
            rel='noreferrer'
        >
            {title}
        </sc.ItemsContainer>
    )
}

const variants = {
    hidden: { y: 20, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
    }
}