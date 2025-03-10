import React, { useState } from "react";
import styles from './carouselslider.module.scss';

import image1 from "../assets/images/MSAG_IMG1.png"
import image2 from "../assets/images/MSAG_IMG2.png"
import image3 from "../assets/images/MSAG_IMG3.png"
import { Image } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const CarouselSlider: React.FC = ()  => {
    const [activeIndex, setActiveIndex]  =   useState<number>(1);
    const [moveLeft, setMoveLeft]   =   useState<boolean|null>(false);
    const [moveRight, setMoveRight] =   useState<boolean|null>(false);

    let imageElementList = [
        {id: 0, title:"Social Events", description: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.", image: image1},
        {id: 1, title:"Knowledge Events", description: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.", image: image1},
        {id: 2, title:"Collaborations", description: "Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.", image: image1},
        
        

    ];
    {}
    const moveElementLeft = () => {
        let carouselContainer = document.getElementsByClassName("carouselContainer");
        if (activeIndex - 1 < 0)
        {
        console.log("von vorne left");
        (carouselContainer[0] as  HTMLElement).style.transform =  "translateX(+10rem)";
        }
        else
        {
        console.log("-10 rem");
        (carouselContainer[0] as  HTMLElement).style.transform =  "translateX(-10rem)";
        }
    }

    const moveElementRight = () => {
        let carouselContainer = document.getElementsByClassName("carouselContainer");
        if (activeIndex == imageElementList.length -1)
        {
            console.log("von vorne rechts");
        (carouselContainer[0] as HTMLElement).style.transform =  "translateX(-10rem)";
        }
        else
        {
        console.log("+10 rem");
        (carouselContainer[0] as HTMLElement).style.transform =  "translateX(10rem)";
        }
    }

    return (
        <main className={styles.parentContainer}>

        <div className={styles.carouselButton}>
        <IconButton
            className={styles.carouselButton}
            onClick={() => {
            //moveElementLeft()
            setActiveIndex((activeIndex - 1 < 0)? imageElementList.length - 1 : activeIndex - 1);
            }}>
            <ChevronLeft fontSize="large" />
        </IconButton>
        </div> 

        <div className= {styles.carouselParentContainer}>
        <div className= {styles.carouselContainer}>

        {imageElementList.map((card) => 
        {

            return(
                <div key={card.id} className={`${styles.carouselElement} ${card.id === activeIndex ? styles.active : ""}`}>
                <img
                    src={card.image}
                    alt={card.title}
                    className={styles.carouselImage}
                />
                <h1 className={styles.carouselTitle}>{card.title}</h1>
                <p className={styles.carouselDescription}>{card.description}</p>
                </div>
            );

        })}

        </div>
        </div>

        <div className={styles.carouselButton}>
        <IconButton
            
            onClick={() => {
            //moveElementRight()
            setActiveIndex((activeIndex + 1) % imageElementList.length);
            }}>
            <ChevronRight fontSize="large" />
        </IconButton>
        </div>  

        </main>
     );
};

export default CarouselSlider;