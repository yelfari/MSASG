import React from 'react';
import styles from './home.module.scss'; // Import the SCSS Module

const Home: React.FC = () => {
  return (
    <main className={styles.mainContent}>

        <div className = {styles['topCaption']}>   
            "lorem ipsum" - m
        </div>

        <div className = {styles["mainContent"]}>  
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quaerat commodi quidem eius quas laudantium beatae aliquid molestias cupiditate mollitia libero at, dolorum, blanditiis expedita? Voluptatibus illum aspernatur nam dolore.
        </div>

        <div className={styles["cardContent"]}>  
            <ul className={styles["cardContent-items"]}>
                <li>
                <div className={styles["card"]}>
                    <h2 className={styles["card-title"]}>Halli</h2>
                    <p className={styles["card-text"]}>
                    bla
                    </p>
                    <a href="#" className={styles["card-button"]}>Button braaa</a>
                </div>
                </li>
                <li>
                <div className={styles["card"]}>
                    <h2 className={styles["card-title"]}>Hallo</h2>
                    <p className="card-text">
                    blub
                    </p>
                    <a href="#" className={styles["card-button"]}>Button braaa</a>
                </div>
                </li>
                <li>
                <div className={styles["card"]}>
                    <h2 className={styles["card-title"]}>Was geht denn so</h2>
                    <p className={styles["card-text"]}>
                    hallooo
                    </p>
                    <a href="#" className={styles["card-button"]}>Button braaa</a>
                </div>
                </li>
            </ul>  
        </div>
    </main>
  );
};

export default Home;
