import styles from "./head.module.css"
import Image from "next/image";

export default function Head() {
    return (
        <header className={styles.navbar}>
            {/* Left side - Logo / Brand */}
            <div className={styles.brand}>SSB Transform</div>

            {/* Center - Images */}
            <div className={styles.headimg}>
                <Image src="/images/army.png" alt="army" width={120} height={120} className={styles.logo}/>
                <Image src="/images/airforce.png" alt="airforce" width={100} height={100} className={styles.logo}/>
                <Image src="/images/navy.png" alt="navy" width={100} height={100} className={styles.logo}/>
            </div>

            {/* Right side - Navigation Links */}
            <nav className={styles.headdiv}>
                <div>Home</div>
                <div>Courses</div>
                <div>About</div>
                <div>Contact</div>
            </nav>
        </header>
    )
}
