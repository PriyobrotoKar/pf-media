import React from "react";
import { anton } from "../fonts";

const Testimonials = () => {
  return (
    <section className="text-center">
      <h2 className="text-2xl text-primary-foreground">Ratings & Reviews</h2>
      <div className={`${anton.className} text-4xl max-w-screen-md mx-auto`}>
        Trusted by people from across the globe
      </div>
    </section>
  );
};

export default Testimonials;
