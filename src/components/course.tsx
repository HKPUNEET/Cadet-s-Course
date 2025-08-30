"use client";
import { FaGift, FaBolt } from "react-icons/fa";
import styles from "./course.module.css";

export default function Course() {
    return (
        <div className={styles.container} id="section-fees">
            <h2 className={styles.title}>Course Fees & Special Offer:</h2>
            <ul className={styles.list}>
                <li>₹499 <span>(1st Day Registration – 17th September)</span></li>
                <li>₹599 <span>(Other Days)</span></li>
            </ul>

            <div className={styles.policy}>
                <FaGift className={styles.icon} />
                <p>
                    <strong>Refund Policy:</strong> Candidates who attend regularly,
                    improve, and perform well will get a refund after course completion.
                </p>
            </div>

            <div className={styles.upgrade}>
                <FaBolt className={styles.icon} />
                <p>
                    <strong>Exclusive Upgrade:</strong> 21 + 7 Days Personal Interaction
                    with <span className={styles.highlight}>Ayush Kumar Singh</span> →{" "}
                    <b>₹799</b>
                </p>
            </div>
        </div>
    );
}
