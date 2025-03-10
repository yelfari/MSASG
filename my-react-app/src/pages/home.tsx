import React from 'react';
import styles from './home.module.scss'; // Import the SCSS Module
import MSASG_titlePicture from "../assets/images/MSASG_titlePicture.png";
import CarouselSlider from '../components/CarouselSlider';
import Button from '@mui/material/Button';
import MSASGInfoCard from '../components/MSASGinfo';
import { Margin } from '@mui/icons-material';

const Home: React.FC = () => {
  return (
    <main className={styles.mainContent}>
        <img src={MSASG_titlePicture} alt="titlePic" className={styles.titlePicture} />

        <div className={styles.topCaption}>   
          Welcome to the Muslim Students' Association of St. Gallen
        </div>

        <div className={styles.videoContent}>  
            <p className={styles.videoContentText}>Discover Our Vibrant Muslim Students' Community</p>
            <p className={styles.videoContentDescription}>
              Explore our diverse range of events and activities aimed at fostering cultural exchange, networking, and personal growth among muslim students in and around St. Gallen
            </p>
        </div>
        <h1 className={styles.whatWeDoTitle}>WHAT WE DO</h1>
        <p className={styles.descriptionText}>
        The core idea of MSASG is to bring together students interested in Islam and like-minded individuals to build a strong religious community and connect during religious holidays. 
        We aim to have meaningful conversations about our religious identities, traditions, and practices. 
        Our initiative creates a space where we respect and trust each other. 
        We also explore economic, scientific, and social topics from an Islamic perspective, aiming to offer insights based on our faith's principles and values. 
        MSASG is not the ultimate source of Islamic knowledge; the goal is to support students in their academic and spiritual learning journey.
        </p>
        <CarouselSlider />
        <div className={styles.eventsButton} >
          <p style={{fontSize: "1.5rem", margin: "2rem"}}>Take a look at our Events!</p>
        <Button variant="contained" href="/events">
          Our Events
        </Button>
        </div>
        <MSASGInfoCard/>
        <div className={styles.becomeMemberSection}>
            <h1 className={styles.becomeMemberTitle}>Become a Member!</h1>
            <div className={styles.becomeMemberContent}>
                <p className={styles.memberDescription}>
                    Connect and Grow
                    Expand your network and build valuable connections through our networking events and programs. 
                    Meet fellow students, alumni, and professionals to broaden your horizons and explore new opportunities.
                </p>
                <Button variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSfsRRYqyg6tCcSxxlmIp0XPbgO9Hi9kqf710BIo6Treq-mONA/viewform" className={styles.joinFormButton} style={{margin: "1rem"}}>
                    Join Formular
                </Button>
            </div>
        </div>
    </main>
  );
};

export default Home;
