import styles from "./about.module.css"
import Card from "@/components/card";
import {
    faBrain,
    faGraduationCap,
    faMedal,
    faEarthAsia,
    faUserTie,
    faNewspaper
} from '@fortawesome/free-solid-svg-icons';
export default function about() {
    return (
        <div className={styles.container}>
            <h1 className={styles.head}>OUR PROGRAM INCLUDES</h1>
           <div className={styles.cardContainer}>
               <Card img={faGraduationCap} text={"Get complete introduction to SSB and pro tips and strategies"} head={"Comprehensive Introduction"}/>
               <Card img={faBrain} text={"Comprehensive detailing of PPDT,SD,TAT,SRT and WAT along with tests and pratice"} head={"Psychological Test"}/>
               <Card img={faUserTie} text={"Get insights into Personal Interview from recommended candidates"} head={"Personal Interview"}/>
               <Card img={faNewspaper} text={"Practical insights for Group Testing Officers tasks including GD, GPE, PGT, HGT, CT, IO, GOR, Lecturette and FGT"} head={"GTO Modules"}/>
               <Card img={faEarthAsia} text={"Daily Current Affairs. Learn to leverage your current affairs in GTO and Interview"} head={"Geopolitics and Current Affairs"}/>

               <Card img={faMedal} text={"Enhance your personality and cultivate OLQs"} head={"Complete Preparation"}/>




           </div>


        </div>
    )
}