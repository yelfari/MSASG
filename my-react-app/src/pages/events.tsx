import React from 'react';
import styles from './events.module.scss';
import MyCardGrid from '../components/Mygrid';
import MSAG from '../assets/images/Logos/MSAG1.png'
import Eventcard from '../components/EventCard';
import MSASG_titlePicture from '../assets/images/MSAG_IMG3.png';


interface EventCardProps {
    title: string;
    description: string | null;
    date: string | null;
    location: string | null;
    image: string | null;
}

const Events: React.FC<EventCardProps> = () => {
  return (
    <main style={{display: "block"}}>
      <div className={styles.topCaption}>
        <h1> Explore our Events!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eos voluptas esse nihil officiis nulla expedita, unde, aliquid ea placeat ut, cumque illum magnam dolorum et! Ratione totam earum facere.</p>
      </div>
      <div className={styles.mainContent}>
      <img src= {MSAG} style={{ position: 'absolute',width: '30rem', height: '30rem', marginLeft: '2rem', top: '0px' , right: '0px', zIndex: '-100'}}/>
              <ul className={styles.eventCardContent} style={{marginBottom: "12rem"}}>  
                <li>
                  <Eventcard title='Event Titel' description={'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'} date='01.21.23' location={"Makerspace, Dufourstrasse 50, 9000 St. Gallen, Switzerland"} image={MSASG_titlePicture}/>
                </li>
                <li>
                  <Eventcard title='Event Titel' description={'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'} date='01.21.23' location={"Makerspace, Dufourstrasse 50, 9000 St. Gallen, Switzerland"} image={MSASG_titlePicture}/>
                </li>                  
                <li>
                  <Eventcard title='Event Titel' description={'Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.'} date='01.21.23' location={"Makerspace, Dufourstrasse 50, 9000 St. Gallen, Switzerland"} image={MSASG_titlePicture}/>
                </li>             
              </ul>
      {/* Your Events page content (from events.html) */}
      {/* ... events content ... */}
      </div>
    </main>
  );
};

export default Events;