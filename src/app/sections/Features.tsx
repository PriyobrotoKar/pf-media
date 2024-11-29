import React from "react";
import { anton } from "../fonts";
import FeatureInfinite from "@/components/FeatureInfinite";

const features = [
  {
    title: "'Design' that ranks and converts",
    description: "Blending aesthetics with SEO",
    image: "feature1.png",
  },
  {
    title: "'Refining' for Peak Performance",
    description: "Testing what works best to convert",
    image: "feature2.png",
  },
  {
    title: "'Insights' that dive results",
    description: "Tracking performance to boost conversions",
    image: "feature3.png",
  },
  {
    title: "'Content' that captivates",
    description: "Impactful stories tailored for your audience",
    image: "feature4.png",
  },
  {
    title: "'Understanding' audience deeply",
    description: "Tracking behavior to tailor strategies",
    image: "feature5.png",
  },
];

const Features = () => {
  return (
    <section className="space-y-40 overflow-x-hidden will-change-auto">
      <div className="text-center space-y-8">
        <p className="text-2xl">Creative Mastery</p>
        <h2 className={`${anton.className} text-4xl max-w-2xl mx-auto`}>
          Distinctive Touches That Elevate Your Brand.
        </h2>
      </div>

      <FeatureInfinite features={features} />
    </section>
  );
};

export default Features;
