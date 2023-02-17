import React from "react";
import Link from "next/link";
const Journey = () => {
  return (
    <section className="journey-wrapper bg-babyBlue rounded-xl w-full text-center p-10 mt-20 mb-20">
      <h2>Are you ready to take adventure on next level.</h2>
      <p className="mt-5 mb-10">
        Come on Island of beauty with best affordable cars, scooter, boats and
        explore every inch of island.
      </p>
      <Link className="bg-oceanBlue px-5 py-3 rounded-xl text-white" href="/">
        Start your Journey
      </Link>
    </section>
  );
};

export default Journey;
