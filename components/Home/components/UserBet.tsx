import { getBet, SVG, svgConfigs } from "@/lib";
import React from "react";

const UserBet = () => {
  const data = getBet();

  return (
    <ul className='bg-dark2 w-auto h-auto rounded-lg '>
      {data?.map((el, index) => {
        return (
          <li key={index} className='flex items-center p-2 pl-3'>
            <div className='flex items-center gap-1.5 ml-[38px]'>
              <SVG {...svgConfigs.rhombus} />
              <p className='text-sm font-medium text-white/80'>{el.username}</p>
            </div>
            <div className='flex items-center ml-auto gap-2'>
              <SVG {...svgConfigs.dibs} />
              <p className='text-sm font-medium text-white/80'>
                {el.bet.toFixed(2)}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UserBet;
