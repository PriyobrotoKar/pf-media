import { anton } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import React from "react";

const Herosection = () => {
  return (
    <section className="text-center text-background pb-40 bg-background  max-w-5xl lg:max-w-[1440px] mx-auto flex justify-center items-center lg:items-start gap-14 md:gap-24 px-4 md:px-14 pt-8 lg:pt-16 xl:pt-32">
      <div className="bg-primary relative w-full overflow-hidden py-28 rounded-[3.75rem]">
        <Image
          src={"/service_hero.png"}
          alt="Service Hero"
          className="absolute inset-0 mix-blend-luminosity object-cover"
          fill
        />
        <main className="space-y-12 mx-auto relative z-10 px-6">
          <div className="space-y-8">
            <h1
              className={`text-3xl lg:text-4xl font-semibold ${anton.className}`}
            >
              Smart Strategies, Real Growth!
            </h1>
            <p className="text-base lg:text-2xl max-w-md lg:max-w-xl mx-auto mt-4 lg:mt-6 xl:mt-8 ">
              From targeted ads to seamless web design, our services are built
              to fuel your brand&apos;s <span className="italic">success</span>.
            </p>
          </div>
          <Button variant={"secondary"}>
            Scale my brand <FeatherIcon icon="arrow-up-right" />
          </Button>
        </main>
      </div>
    </section>
  );
};

export default Herosection;
