"use client"
import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
    return (
        // <div className={styles.heroContainer}>
        //     {/*<Image*/}
        //     {/*    src={"/images/ima2.jpg"}*/}
        //     {/*    alt="ima"*/}
        //     {/*    width={0}*/}
        //     {/*    height={0}*/}
        //     {/*    sizes="100vw"*/}
        //     {/*    style={{ width: "100%", height: "auto", opacity: "0.3" }}*/}
        //     {/*/>*/}
        //
        //     {/* Overlayed Text like SSB Excellence */}
            <div className={styles.overlayContent}>
                <h1 className={styles.heroTitle}>
                    YOUR JOURNEY TO ANTIM PAG <br /> STARTS FROM HERE
                </h1>

                <p className={styles.heroSubtitle}>
                    SSB TRANSFORM provides a comprehensive 21-day course tailored to
                    prepare Defence Aspirants to become an Indian Army Officer with
                    one-to-one guidance and expert strategies to crack SSB and improve
                    personality.
                </p>

                <div className={styles.heroButtons}>
                    <button className={styles.primaryBtn} onClick={() => document.getElementById("section-5")?.scrollIntoView({ behavior: "smooth" })}
                    >ENROLL NOW</button>
                    <button className={styles.secondaryBtn} onClick={() => document.getElementById("section-4")?.scrollIntoView({ behavior: "smooth" })}>OUR PROGRAMS</button>
                </div>
            </div>
        // </div>
    );
}
