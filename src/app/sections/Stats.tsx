import { Button } from "@/components/ui/button";
import FeatherIcon from "feather-icons-react";
import React from "react";
import { anton } from "../layout";
import { cn } from "@/lib/utils";

const stats = [
  {
    title: "More Retention",
    number: "65%",
  },
  {
    title: "New Monthly Leads",
    number: "234",
  },
  {
    title: "New Monthly Leads",
    number: "234",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center items-center gap-32">
      <div className="flex max-w-sm flex-wrap justify-center gap-y-20">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2">
            <div
              className={cn(
                "w-fit text-center",
                index % 2 === 0
                  ? index === stats.length - 1
                    ? "mx-auto"
                    : "mr-auto"
                  : "ml-auto"
              )}
            >
              <div
                className={`${anton.className} text-accent  text-4xl font-bold`}
              >
                {stat.number}
              </div>
              <div>{stat.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className=" space-y-10">
        <h2 className="text-xl">
          Let the <span className="text-accent italic">numbers</span> speak.
        </h2>
        <p className="max-w-xl">
          Makes your site seamless across all devicesMakes your site seamless
          across all devicesMakes your site seamless across all devicesMakes
          your site seamless across all devicesMakes your site seamless across
          all devices
        </p>
        <Button variant={"secondary"}>
          Explore <FeatherIcon icon="arrow-up-right" />
        </Button>
      </div>
    </section>
  );
};

export default Stats;
