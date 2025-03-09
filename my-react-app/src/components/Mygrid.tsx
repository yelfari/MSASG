import React, {useState} from "react";
import "./mygrid.scss";
import msagImg1 from "../assets/images/MSAG_IMG1.png";
import msagImg2 from "../assets/images/MSAG_IMG2.png";
import msagImg3 from "../assets/images/MSAG_IMG3.png";
import msagImg4 from "../assets/images/MSAG_IMG4&6.png";
import msagImg5 from "../assets/images/MSAG_IMG5.png";

interface CardProps {
  card: {
    id?: number | null;
    title?: string | null;
    content?: string | null;
    img?: string | null;
  };
  setHoveredCardId: (id: number | null) => void;
  setExpandModifiedCard: (expand: boolean) => void;
  setUseMyCardStates: (expand: boolean) => void;
}

const ExpandedCard: React.FC<CardProps> = ({
  card,
  setExpandModifiedCard,
  setHoveredCardId,
  setUseMyCardStates,
}) => {
  const closeHandler = () => {
    setExpandModifiedCard(false);
    setHoveredCardId(null);
    setUseMyCardStates(false);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "90vh",
        zIndex: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "content-box",
      }}
    >
      {/* Background layer */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(27, 23, 23, 0.8)",
          opacity: 0.6,
          zIndex: -1,
        }}
      />
      {/* Content layer */}
      <div
        style={{
          textAlign: "center",
          maxWidth: "30%",
          padding: "2rem",
          zIndex: 1,
        }}
      >
        <button
          style={{
            padding: "1rem",
            background: "#f44336",
            color: "white",
            borderRadius: "50%",
            border: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.3s ease, transform 0.2s ease",
            width: "3rem",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: "0.9",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#e53935")}
          onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#f44336")}
          onClick={() => closeHandler()}
        >
          &times; {/* Close "X" */}
        </button>
        <main
          style={{
            opacity: 1,
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "transparent",

            margin: "2rem",
            padding: "1rem",
            border: "2px solid transparent",
          }}
        >
          <img src={card.img ?? ' '} alt={card.title ?? ''} style={{ width: "100%" }} />
          <p
            style={{
              background: "black",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "0.5rem",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </main>
      </div>
    </div>
  );
};

const MyCardGrid: React.FC = () => {
  const cards = [
    { id: 0, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg1 },
    { id: 1, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg2 },
    { id: 2, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg3 },
    { id: 3, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg4 },
    { id: 4, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg5 },
    { id: 5, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg4 },
    { id: 6, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg2 },
    { id: 7, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg3 },
    { id: 8, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg4 },
    { id: 9, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg5 },
    { id: 10, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg3 },
    { id: 11, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg2 },
    { id: 12, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg3 },
    { id: 13, title: "Card 1", content: "AAAAAAAAAAAAH", img: msagImg4 },
  ];

  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [expandModifiedCard, setExpandModifiedCard] = useState<boolean | null>(null);
  const [useMyCardStates, setUseMyCardStates] = useState<boolean | null>(null);

  return (
    <div className= "mainContainer">
    <main className="gridContainer">
      {cards.map((card) => {
        
        const isHovered = card.id === hoveredCardId;
        const isModified = hoveredCardId !== null && card.id === hoveredCardId + 3;
        return (
          <div key={card.id} className="gridItem">
            <div
              onClick={() => {
                if (useMyCardStates) {
                  if (hoveredCardId === null) {
                    setHoveredCardId(card.id);
                  } else {
                    setUseMyCardStates(false);
                  }
                } else {
                  setUseMyCardStates(true);
                }
              }}
              onMouseLeave={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                useMyCardStates && !expandModifiedCard ? setHoveredCardId(null) : null;
              }}
              className="gridCard"
              style={{
                position: isHovered ? "relative" : "relative",
                width: "100%",
                height: isHovered ? "20rem" : "100%",
                transform: isModified ? "translateY(360%) scale(1.0)" : "none",
                transition: "all 0.5s ease-in-out",
                ...(isModified && {
                  backgroundColor: "#0b4550",
                  height: "5rem",
                  zIndex: 0,
                  opacity: 1.0,
                }),
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: isHovered ? "contain" : "cover",
                  transform: "scale(1.0)",
                  transition: "transform 0.5s ease-in-out", // Smooth transition for scaling
                }}
              />
              <button
                style={{
                  display: "none",
                  borderRadius: "15px",
                  padding: "0.5rem",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  marginRight: "auto",
                  marginLeft: "auto",
                  top: "-50px",
                  opacity: 0.0,

                  ...(isHovered && {
                    display: "flex",
                    position: "relative",
                    top: "-200px",
                    opacity: 0.5,
                  }),
                }}
                onClick={() => {
                  {
                    setUseMyCardStates(false);
                    setExpandModifiedCard(true);
                  }
                }}
              >
                {" "}
                Mehr{" "}
              </button>
            </div>
          </div>
        );
      })}
      {/* render expandedCard if modifier is applied */}

      {expandModifiedCard && (
        <ExpandedCard
          card={cards[hoveredCardId!]}
          setExpandModifiedCard={setExpandModifiedCard}
          setHoveredCardId={setHoveredCardId}
          setUseMyCardStates={setUseMyCardStates}
        />
      )}
    </main>
    </div>
  );
};

export default MyCardGrid;
