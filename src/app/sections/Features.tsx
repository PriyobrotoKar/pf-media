import React from "react";
import { anton } from "../layout";

const features = [
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
  {
    title: "'Effortless' flow across all screens",
    description: "Makes your site seamless across all devices",
  },
];

const Highlight = ({ text }: { text: string }) => {
  const regex = /'(?<temp1>.*?)'/g;
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <span key={index} className={anton.className}>
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

const Features = () => {
  return (
    <section className="space-y-40">
      <div className="text-center space-y-8">
        <p className="text-2xl">Creative Mastery</p>
        <h2 className={`${anton.className} text-4xl max-w-2xl mx-auto`}>
          Distinctive Touches That Elevate Your Brand.
        </h2>
      </div>

      <div className="flex gap-8 overflow-x-hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col min-w-0 w-[18.5rem] shrink-0 bg-background text-primary items-center gap-56 py-10 px-8 rounded-[3.125rem]"
          >
            <h3 className="text-2xl italic">
              <Highlight text={feature.title} />
            </h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
