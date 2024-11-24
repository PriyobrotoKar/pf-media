import React from "react";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: string;
  author: string;
  index: number;
}

const classNames: string[] = [
  "top-[10%] left-0 -rotate-[15deg] translate-x-[70%] translate-y-[20%] ",
  "top-0 -rotate-[4.2deg] z-10 bg-accent translate-x-[-4%] translate-y-[10%] ",
  "top-[7%] right-0 rotate-[9deg] translate-x-[-65%] translate-y-[20%] ",
  "bottom-0 left-[20%] z-20 rotate-[-5.43deg] translate-x-[30%] translate-y-[-20%] ",
  "right-[14%] -bottom-[6%] z-30 bg-accent rotate-[8deg] translate-x-[-40%] translate-y-[-40%]  ",
];

const TestimonialCard = ({
  testimonial,
  author,
  index,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "text-left absolute shadow-[0px_0px_20px_10px] bg-background group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:cursor-pointer  shadow-black/10 duration-700 ease-in-out transition-transform p-8 space-y-6 font-semibold rounded-3xl  text-primary w-72 ",
        classNames[index]
      )}
    >
      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          return <Icons.star key={i} />;
        })}
      </div>
      <p className="text-sm">{testimonial}</p>
      <p className="text-sm">{author}</p>
    </div>
  );
};

export default TestimonialCard;
