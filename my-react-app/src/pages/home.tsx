import React from 'react';
import styles from './home.module.scss'; // Import the SCSS Module
import MSASG_titlePicture from "../assets/images/MSASG_titlePicture.png";
import vertical_Divider from "../assets/images/islamic_divider.png";
import CarouselSlider from '../components/CarouselSlider';
import Eventcard from '../components/EventCard';
import Button from '@mui/material/Button';

const Home: React.FC = () => {
  return (
    <main className={styles.mainContent}>
        <img src= {MSASG_titlePicture} alt="titlePic" className= {styles['titlePicture']} />

        <div className = {styles['topCaption']}>   
        Welcome to the Muslim Students' Association of St. Gallen
        </div>

        <div className = {styles["videoContent"]}>  
            <p style={{display:"flex", justifyContent: "flex-start", marginLeft: "1rem", marginBottom:"3rem", marginTop:"1rem"}}>Discover Our Vibrant Muslim Students' Community</p>
            <p style={{display:"flex", justifyContent: "flex-start", fontWeight:"bold", width:"55%", wordBreak: "break-word", textAlign: "left",marginLeft: "1rem", marginBottom:"3rem", fontSize: "2rem"}}>
                 Explore our diverse range of events and activities aimed at
                 fostering cultural exchange, networking, and personal growth among 
                 muslim students in and around St. Gallen
            </p>
        </div>
            <h1 style={{margin: "4rem", color: "#9EEB47"}}>WHAT WE DO</h1>
            <p style={{wordBreak: "break-word", width: "50%", marginRight: "auto", marginLeft: "auto"}}>Provide a general description of the items below and introduce the services you offer. Click on the text box to edit the content.</p>
            <CarouselSlider/>
            <Button variant="contained" href="/events" style={{borderRadius: "10px", padding: "1rem", margin: "2rem", fontWeight: "bolder", marginBottom: "10rem"}}>
        Our Events
      </Button>
    
      <div style={{backgroundColor: "#1C3D23", margin: "2rem", display: "flex", borderRadius: "15px", width: "50%", marginLeft: "auto", marginRight: "auto"}}>
      <h1 style={{width: "90%", margin: "4rem", marginRight: "auto", marginLeft: "auto", padding: "2rem", textAlign: "start", color: "#9EEB47", borderRight: "1px solid white"}}>Become a Member!</h1>
      <div style={{display: "block"}}>
      <p style={{margin: "2rem"}}>
        Connect and Grow
        Expand your network and build valuable connections through our networking events and programs. 
        Meet fellow students, alumni, and professionals to broaden your horizons and explore new opportunities.
        </p>
        <Button variant="contained" href="https://docs.google.com/forms/d/e/1FAIpQLSfsRRYqyg6tCcSxxlmIp0XPbgO9Hi9kqf710BIo6Treq-mONA/viewform" style={{borderRadius: "10px", padding: "1rem", margin: "2rem", fontWeight: "bolder"}}>
        Join Formular
      </Button>
      </div>
        </div>
    </main>
  );
};

export default Home;
