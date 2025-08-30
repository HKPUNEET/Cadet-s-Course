import React from "react";
import styles from "./contact.module.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram ,FaTelegram} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.brand}>
                    {/*<img src="/images/logo.png" alt="SSB EXCELLENCE" className={styles.logo} />*/}
                    <p>
                        Cadet's Course is designed with a view to provide a comprehensive understanding of SSB procedures and  nuances
                        free of cost.
                    </p>
                    <a
                        href="https://www.instagram.com/rajputberet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <FaInstagram className={styles.socialIcon} />
                        <span className={styles.socialText}>@rajputberet</span>
                    </a>
                    <a
                        href="https://web.telegram.org/k/#@yogicwarrior"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <FaTelegram className={styles.socialIcon} />
                        <span className={styles.socialText}>@yogicwarrior</span>
                    </a>
                </div>

                <div className={styles.links}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#section-1">Home</a></li>
                        <li><a href="#section-4">Our Program</a></li>
                        <li><a href="#section-3">About Us</a></li>
                        {/*<li><a href="#section-5">Contact</a></li>*/}
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>Contact Us</h3>
                    {/*<p><FaMapMarkerAlt className={styles.icon} /> SSB EXCELLENCE, 2nd Floor, Chinhat Plaza, Shankar Puri, Faizabad Rd, Lucknow, Uttar Pradesh, 226028</p>*/}
                    <p><FaPhone className={styles.icon} /> 9021143383</p>
                    <p><FaPhone className={styles.icon} /> 6207847115</p>
                    <p><FaEnvelope className={styles.icon} /> cadetscoursevp@gmail.com</p>
                </div>
            </div>

            <div className={styles.bottom}>
                © 2023 SSB EXCELLENCE
            </div>
        </footer>
    );
}
