import { Button } from "@/components/ui/button";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <section className="text-center pb-40 bg-background md:text-left max-w-5xl lg:max-w-[1440px] mx-auto flex justify-center items-center lg:items-start gap-14 md:gap-24 px-14 pt-8 lg:pt-16 xl:pt-32">
      <div className="max-w-xs md:max-w-none lg:py-7 flex-1">
        <h1 className="text-lg md:text-xl lg:text-4xl font-medium mb-5 md:mb-4 lg:mb-8 mx-auto ">
          Boost & Scale Your Online Presence at 60% off Today!
        </h1>
        <p className="text-sm lg:text-xl max-w-xl  font-light mb-9 md:mb-7 lg:mb-12">
          Amplify engagement with targeted ads, social media, and a custom
          website.
        </p>
        <Button>
          Claim Offer <FeatherIcon icon="arrow-up-right" size={45} />
        </Button>
      </div>
      <div className="hidden md:block w-[40%]">
        <Image
          src={"/heroimage.svg"}
          alt="Hero image"
          className="w-full xl:w-[30rem]"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Herosection;
