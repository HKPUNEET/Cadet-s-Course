
import styles from "./card.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface CardProps {
    img: IconDefinition;
    text: string;
    head: string;
}

export default function Card({ img, text,head }: CardProps) {
    return (
        <div className={styles.card}>
            <FontAwesomeIcon icon={img} className={styles.icon}/>
            <h1 className={styles.head}>{head}</h1>

            <p className={styles.cardText}>{text}</p>
        </div>
    );
}