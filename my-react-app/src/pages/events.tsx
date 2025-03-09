import React from 'react';
import styles from './events.module.scss';
import MyCardGrid from '../components/Mygrid';
import MSAG from '../assets/images/Logos/MSAG1.png'
import Eventcard from '../components/EventCard';
import MSASG_titlePicture from '../assets/images/MSASG_titlePicture.png';

interface EventCardProps {
    title: string;
    description: string | null;
    date: string | null;
    location: string | null;
    image: string | null;
}

const Events: React.FC<EventCardProps> = () => {
  return (
    <main className={styles.mainContent}>
      <img src= {MSAG} style={{ position: 'absolute',width: '30rem', height: '30rem', marginLeft: '2rem', top: '0px' , right: '0px', zIndex: '-100'}}/>
              <div className={styles.eventCardContent} style={{marginBottom: "12rem"}}>  
                  <Eventcard title='Event Titel' description={'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'} date='01.21.23' location={"Makerspace, Dufourstrasse 50, 9000 St. Gallen, Switzerland"} image={MSASG_titlePicture}/>
                  <Eventcard title='Event Titel' description={'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'} date='01.21.23' location={"Makerspace, Dufourstrasse 50, 9000 St. Gallen, Switzerland"} image={MSASG_titlePicture}/>
                  <Eventcard title='Event Titel' description={'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'} date='01.21.23' location={"Makerspace, Dufourstrasse 50, 9000 St. Gallen, Switzerland"} image={MSASG_titlePicture}/>
              </div>
      {/* Your Events page content (from events.html) */}
      {/* ... events content ... */}
    </main>
  );
};

export default Events;