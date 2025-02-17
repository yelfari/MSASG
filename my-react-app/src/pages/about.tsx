import React from "react";
import styles from "./about.module.scss";

const About: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.mainContentTitle}>Wer sind Wir?</div>
      <p className={styles.mainContenText}>
        The core idea of MSASG is to bring together students interested in Islam
        and like-minded individuals to build a strong religious community and
        connect during religious holidays. We aim to have meaningful
        conversations about our religious identities, traditions, and practices.
        Our initiative creates a space where we respect and trust each other. We
        also explore economic, scientific, and social topics from an Islamic
        perspective, aiming to offer insights based on our faith's principles
        and values. MSASG is not the ultimate source of Islamic knowledge; the
        goal is to support students in their academic and spiritual learning
        journey.
      </p>

      <div className={styles.cardContent}>
        <ul className={styles.cardContentItems}>
          <li>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Halli</h2>
              <p className={styles.cardText}>bla</p>
              <a href="#" className={styles.cardButton}>
                Button braaa
              </a>
            </div>
          </li>
          <li>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Hallo</h2>
              <p className={styles.cardText}>blub</p>
              <a href="#" className={styles.cardButton}>
                Button braaa
              </a>
            </div>
          </li>
          <li>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Was geht denn so</h2>
              <p className={styles.cardText}>hallooo</p>
              <a href="#" className={styles.cardButton}>
                Button braaa
              </a>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default About;
