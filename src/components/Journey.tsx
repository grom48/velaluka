import React from "react";
import Link from "next/link";
const Journey = () => {
  return (
    <>
      <section className="journey-wrapper bg-babyBlue rounded-xl w-full text-center p-10 mt-20 mb-20">
        <h2>Are you ready to take adventure on next level.</h2>
        <p className="mt-5 mb-10">
          Come on Island of beauty with best affordable cars, scooter, boats and
          explore every inch of island.
        </p>
        <Link
          className="bg-oceanBlue px-5 py-3 rounded-xl text-white"
          href="/contact"
        >
          Start your Journey
        </Link>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23358.393138452182!2d16.715716!3d42.961437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a71db969fc033%3A0x3f84237b1dc1db50!2sAtlas%20-%20Tourist%20Agency!5e0!3m2!1sen!2shr!4v1677084362512!5m2!1sen!2shr"
        style={{
          border: "0",
          borderRadius: "10px 10px 0 0",
          width: "100%",
          height: "500px",
        }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Journey;
