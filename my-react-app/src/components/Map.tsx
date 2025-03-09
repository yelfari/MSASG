import { ReactElement } from "react";


const MapComponent = (): ReactElement | undefined => {
  return (
      <div style={{ position: "relative", width: "90%", maxWidth: "800px"}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.330592851402!2d9.374067237356758!3d47.43072177522661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b1e47019ca2b9%3A0x1ec2a428cedfe0b4!2sStudent%20Union%20Universit%C3%A4t%20St.%20Gallen%20(Geb%C3%A4ude%2040%20der%20HSG)!5e1!3m2!1sde!2sde!4v1737425588657!5m2!1sde!2sde"
          style={{
            width: "100%",
            height: "700px",
            border: "2px solid #222"    
          }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

  );
};

export default MapComponent;
