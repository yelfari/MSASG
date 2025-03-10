import React from "react";
import styles from "./MSASGinfo.module.scss";


const MSASGInfoCard: React.FC = () => {

    return(
        <main className={styles.mainContainer}>
            <div className={styles.parentContainer}>
                <div className={styles.elementContainer}>
                <h1>CLUB SEIT</h1>  
                <p>nummer</p>
                </div> 
                <div className={styles.elementContainer}>
                <h1> MITGLIEDER</h1>  
                <p>nummer</p>
                </div> 
                <div className={styles.elementContainer}>
                <h1>EVENTS</h1>  
                <p>nummer</p>
                </div> 
                <div className={styles.elementContainer}>
                <h1>NOCH Ne Metric</h1>  
                <p>nummer</p>
                </div> 
            </div> 
         </main>
    );


}

export default MSASGInfoCard;