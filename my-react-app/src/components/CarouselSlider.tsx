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
        <main className={styles.parentContainer} style={{

           
        }}>
        <IconButton
            onClick={() => {
            //moveElementLeft()
            setActiveIndex((activeIndex - 1 < 0)? imageElementList.length - 1 : activeIndex - 1);
            }}
                style={{
                height: '2rem',
                alignSelf: 'center',
            }}>
            <ChevronLeft fontSize="large" />
        </IconButton>

        <div className= "carouselParentContainer"  style={{
            overflow: "hidden"
        }}>

        <div className= "carouselContainer" style={{
            display: "flex",
            transition: "transform 1s ease-in-out"

            
        }}>
        {imageElementList.map((card) => 
        {
            return(
                
                <div key= {card.id} className={styles.carouselElement} style={{
                        display: "block",
                        minHeight: "500px",
                        
                        scale: (card.id == activeIndex)? "1" : "0.4",
                        transition: "scale 1s ease-in-out",
                        //border: "2px solid white",
                        padding: "1rem"
                }}>
                    
                    <img src= {card.image} style={{
                        width: "200px",
                        height: "200px",
                        overflow: "hidden",
                        borderRadius: "50%"

                    }}/>
                    <h1 style={{fontWeight: "bold", marginBottom: "1rem", color: "#9EEB47"}}>{card.title}</h1>
                    <p>{card.description}</p>
                </div>
                
            )
        }
        )
        }
        </div>

        </div>

        <IconButton
            onClick={() => {
            //moveElementRight()
            setActiveIndex((activeIndex + 1) % imageElementList.length);
            }}
                style={{
                height: '2rem',
                alignSelf: 'center',
            }}>
            <ChevronRight fontSize="large" />
        </IconButton>
        </main>

     );
    
};

export default CarouselSlider;