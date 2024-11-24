import React from "react";
import { anton } from "../fonts";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  {
    testimonial:
      "Makes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devices",
    author: "John Doe",
  },
  {
    testimonial:
      "Makes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devices",
    author: "Jane Doe",
  },
  {
    testimonial:
      "Makes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devices",
    author: "John Doe",
  },
  {
    testimonial:
      "Makes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devices",
    author: "Jane Doe",
  },
  {
    testimonial:
      "Makes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devicesMakes your site seamless across all devices",
    author: "John Doe",
  },
];

const Testimonials = () => {
  return (
    <section className="text-center space-y-32 px-8">
      <div>
        <h2 className="text-2xl text-primary-foreground">Ratings & Reviews</h2>
        <div className={`${anton.className} text-4xl max-w-screen-md mx-auto`}>
          Trusted by people from across the globe
        </div>
      </div>

      <main className="flex items-center justify-center h-[40rem] max-w-screen-lg group mx-auto relative">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            index={index}
            testimonial={testimonial.testimonial}
            author={testimonial.author}
          />
        ))}
      </main>
    </section>
  );
};

export default Testimonials;
