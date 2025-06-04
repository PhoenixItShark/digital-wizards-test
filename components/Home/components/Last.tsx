import React from "react";
import RouletteBlock from "./RouletteBlock";
import { svgConfigs } from "@/lib";
import useUserStore from "@/lib/store/store";

const Last = () => {
  const { last } = useUserStore();
  return (
    <ul className='flex items-center justify-start gap-1'>
      {last?.map((el, index) => {
        switch (el) {
          case "black":
            return (
              <li key={`black-${index}`}>
                <RouletteBlock
                  width='32px'
                  height='32px'
                  bgClass='bg-dark4'
                  fill='#FFF'
                  {...svgConfigs.smallVector}
                />
              </li>
            );
          case "red":
            return (
              <li key={`red-${index}`}>
                <RouletteBlock
                  width='32px'
                  height='32px'
                  bgClass='bg-red'
                  fill='#14151C'
                  {...svgConfigs.smallVector}
                />
              </li>
            );
          case "green":
            return (
              <li key={`green-${index}`}>
                <RouletteBlock
                  width='32px'
                  height='32px'
                  bgClass='bg-green'
                  fill='#FFF'
                  {...svgConfigs.smallVector}
                />
              </li>
            );
          case "RedJoker":
            return (
              <li key={`RedJoker-${index}`}>
                <RouletteBlock
                  width='32px'
                  height='32px'
                  bgClass='bg-red'
                  fill='#14151C'
                  {...svgConfigs.smallJoker}
                />
              </li>
            );
          case "BlackJoker":
            return (
              <li key={`RedJoker-${index}`}>
                <RouletteBlock
                  width='32px'
                  height='32px'
                  bgClass='bg-dark4'
                  fill='#FFF'
                  {...svgConfigs.smallJoker}
                />
              </li>
            );
        }
      })}
    </ul>
  );
};

export default Last;
