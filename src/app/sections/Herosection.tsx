import { Button } from "@/components/ui/button";
import FeatherIcon from "feather-icons-react";
import React from "react";
import { anton } from "../fonts";
import Image from "next/image";

const Herosection = () => {
  return (
    <section className="text-center min-h-[90svh] pb-40 bg-background md:text-left max-w-5xl lg:max-w-screen-xl mx-auto flex justify-center items-center  gap-14 md:gap-24 px-14 pt-8 lg:pt-16 xl:pt-32">
      <div className="max-w-xs md:max-w-none lg:py-7 flex-1">
        <h1
          className={`text-lg md:text-3xl lg:text-4xl font-medium mb-5 md:mb-4 lg:mb-8 mx-auto ${anton.className}`}
        >
          Boost & Scale Your Online Presence at 60% Off
        </h1>
        <p className="text-sm md:text-base lg:text-xl max-w-xl  mb-9 md:mb-7 lg:mb-12">
          Amplify <span className="italic">engagement</span> with targeted ads,
          social media, and a custom website.
        </p>
        <Button>
          Claim Offer <FeatherIcon icon="arrow-up-right" size={45} />
        </Button>
      </div>
      <div className="hidden relative md:block  w-[40%] lg:w-[32rem]">
        <Image
          className="mix-blend-darken h-full w-full "
          src={"/hero.svg"}
          alt="Hero Illustration"
          width={500}
          height={800}
        />
        <div className="absolute mix-blend-saturation inset-0 w-full h-full z-0 bg-[#625999]" />
      </div>
    </section>
  );
};

export default Herosection;
