import styles from "./description.module.css"
import Image from "next/image";
export default function Description(){
    return(
        <><div className={styles.container}>

            <div className={styles.content}>
                <h1 className={styles.head}>ABOUT CADET'S COURSE</h1>
                <h2 className={styles.text}>Cadet's Course is an initiative taken  by Ayush Kumar Singh(AIR-34 TES-51) and Varadraj Patil(AIR-42 TES-51) </h2>
                <h2 className={styles.text}>With the view to introduce and streamline the preparation of  Defence Aspirants for SSB at  free of cost  </h2>
                <h2 className={styles.text}> Cadet's Course program offers a 14day online program designed for Defence Aspirants dreaming to become and officer in the Indian Armed Forces. Get one-to-one guidance ,interactive sessions and expert strategies to crack SSB and improve your personality
                </h2>
                <h2 className={styles.text}>Upon completion of the course we fully refund the amount in line as part of our vision of making SSB Guidance accessible to all</h2>

            </div>
            <div className={styles.imgcontainer}><div className={styles.img1}><Image src={"/images/ayush.jpg"} alt={"AYUSH"} width={200} height ={200} className={styles.img}/>
                <h3 className={styles.head3} >AYUSH KUMAR SINGH</h3>
                <h3 className={styles.head3}>AIR-34 TES-51</h3>
            </div>
                <div className={styles.img1}>
                    <Image src={"/images/subham.jpg"} alt={"AYUSH"} width={200} height ={200} className={styles.img}/>
                    <h3 className={styles.head3}>VARADRAJ PATIL</h3>
                    <h3 className={styles.head3}>AIR-42 TES-51</h3></div>
            </div>

        </div>
        </>
    )
}