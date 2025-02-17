import React from 'react';
import styles from './Events.module.scss';
import MyCardGrid from '../components/mygrid';
import MSAG from '../assets/images/Logos/MSAG1.png'


const Events: React.FC = () => {
  return (
    <main className={styles.mainContent}>
      <img src= {MSAG} style={{ position: 'absolute',width: '30rem', height: '30rem', marginLeft: '2rem', top: '0px' , right: '0px', zIndex: '-100'}}/>
      <MyCardGrid />
      {/* Your Events page content (from events.html) */}
      {/* ... events content ... */}
    </main>
  );
};

export default Events;