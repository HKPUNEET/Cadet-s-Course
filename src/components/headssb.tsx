"use client"
import {useRef, useState} from "react";
import styles from "./head.module.css";
import Image from "next/image";

export default function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = [
        { label: "Home", target: "section-1" },
        { label: "Courses", target: "section-2" },
        { label: "About", target: "section-3" },
        { label: "Contact", target: "section-5" },
    ];

    return (
        <header className={styles.navbar}>
            {/* Left side - Logo / Brand */}
            <div className={styles.brand}>SSB Transform</div>

            {/* Center - Images */}
            <div className={styles.headimg}>
                <Image src="/images/army.png" alt="army" width={120} height={120} className={styles.logo} />
                <Image src="/images/airforce.png" alt="airforce" width={100} height={100} className={styles.logo} />
                <Image src="/images/navy.png" alt="navy" width={100} height={100} className={styles.logo} />
            </div>

            {/* Right side - Navigation Links */}
            <nav className={styles.headdiv}>
                <div onClick={() => document.getElementById("section-1")?.scrollIntoView({ behavior: "smooth" })}>
                    Home
                </div>
                <div onClick={() => document.getElementById("section-2")?.scrollIntoView({ behavior: "smooth" })}>
                    Courses
                </div>
                <div onClick={() => document.getElementById("section-3")?.scrollIntoView({ behavior: "smooth" })}>
                    About
                </div>
                <div onClick={() => document.getElementById("section-5")?.scrollIntoView({ behavior: "smooth" })}>
                    Contact
                </div>
            </nav>

            {/* Hamburger for small screens */}
            <div
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Dropdown menu */}
            <div className={`${styles.dropdown} ${menuOpen ? styles.show : ""}`}>
                {menuItems.map((item) => (
                    <div
                        key={item.target}
                        onClick={() => {
                            console.log("Clicked!");
                            document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
                            setMenuOpen(false); // optional: close dropdown after click
                        }}
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </header>
    );
}
