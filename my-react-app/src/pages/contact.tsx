import React from 'react';
import styles from './Contact.module.scss';
import MapComponent from '../components/map';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



const Contact: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.mainContent_container}>
        <div className={styles.contactInfo}>
            <h1>Contact Us</h1>
            <ul style={{listStyle: "none"}}>
              <li className ={styles.contactItems}> <HomeIcon/> MSASG (Muslim Students Association St. Gallen)  </li>
              <li className={styles.contactItems}> <HomeIcon style={{fill: "transparent"}}/> Dufourstrasse 50 </li>
              <li className={styles.contactItems}> <HomeIcon style={{fill: "transparent"}}/> CH-9000 St. Gallen </li>
              <li className={styles.contactItems}><PhoneIcon/> +41 71 224 25 10 </li>
              <li className={styles.contactItems}><EmailIcon/> studentenschaft@shsg.ch </li>
            </ul>
        </div>
        <MapComponent/>
      </div>

    </main>
  );
};

export default Contact;