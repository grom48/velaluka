import React from "react";
import Contact from "../rents/Contact";

const option = [
  {
    option: "Scooter 50cm3",
    value: "Scooter 50cm3",
  },
];
const Location = () => {
  return (
    <>
      <section className="container location">
        <div className="contact-location-wrapper h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23358.393138452182!2d16.715716!3d42.961437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a71db969fc033%3A0x3f84237b1dc1db50!2sAtlas%20-%20Tourist%20Agency!5e0!3m2!1sen!2shr!4v1677084362512!5m2!1sen!2shr"
            style={{
              border: "0",
              borderRadius: "10px",
              width: "100%",
              height: "100%",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Location;
