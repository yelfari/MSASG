import React, { useState } from 'react';
import styles from "./EventCard.module.scss"
import Button from '@mui/material/Button';

interface EventCardProps {
    title: string;
    description: string | null;
    date: string;
    location: string | null;
    image: string | null;
}
{}
const Eventcard: React.FC<EventCardProps> = ({title, description, date, location, image}) => {

    return (
        <main className={styles.parentContainer} style={{}}>
            <div className={styles.textContainer} style={{}}>
                
                <h1 className={styles.titleText}>{title}</h1>
                <p className={styles.dateText}>{date}</p>
                <p className={styles.descriptionText}>{description? description: undefined}</p>
                <div className={styles.locationButtonContainer}>
                    <p className={styles.locationText}>{location}</p>
                    <div className={styles.eventButton}>
                    <Button  variant="outlined">Anmelden</Button>
                    </div> 
                </div>
            </div>
            <img src={image? image : undefined} alt="" className={styles.eventImage}/>
        </main>
    )

};
export default Eventcard;