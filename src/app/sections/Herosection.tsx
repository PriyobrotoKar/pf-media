import { Button } from "@/components/ui/button";
import FeatherIcon from "feather-icons-react";
import React from "react";
import { anton } from "../layout";

const Herosection = () => {
  return (
    <section className="text-center pb-40 bg-background md:text-left max-w-5xl lg:max-w-screen-xl mx-auto flex justify-center items-center lg:items-start gap-14 md:gap-24 px-14 pt-8 lg:pt-16 xl:pt-32">
      <div className="max-w-xs md:max-w-none lg:py-7 flex-1">
        <h1
          className={`text-lg md:text-3xl lg:text-4xl font-medium mb-5 md:mb-4 lg:mb-8 mx-auto ${anton.className}`}
        >
          Boost & Scale Your Online Presence at 60% off Today!
        </h1>
        <p className="text-sm md:text-base lg:text-xl max-w-xl  mb-9 md:mb-7 lg:mb-12">
          Amplify <span className="italic">engagement</span> with targeted ads,
          social media, and a custom website.
        </p>
        <Button>
          Claim Offer <FeatherIcon icon="arrow-up-right" size={45} />
        </Button>
      </div>
      <div className="hidden md:block self-stretch w-[40%] aspect-[3/4] lg:w-[24rem] xl:w-[28rem]">
        <div className="bg-primary h-full w-full rounded-3xl"></div>
      </div>
    </section>
  );
};

export default Herosection;
