import { anton } from "@/app/fonts";
import React from "react";

const HightlightText = ({ text }: { text: string }) => {
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

export default HightlightText;
