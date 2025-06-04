import { getBet, SVG, svgConfigs } from "@/lib";
import React from "react";
import UserBet from "./UserBet";

const Bet = () => {
  const data = getBet();

  return (
    <div className='flex items-center justify-center gap-4'>
      <div className='flex-1'>
        <span className='bg-red w-auto h-[44px] rounded-lg flex items-center p-3'>
          <p className='text-white font-bold text-[14px] '>BET ON RED</p>
          <p className='text-white font-bold text-[14px] ml-auto'>PAYS 2X</p>
        </span>
        <div className='flex items-center p-3'>
          <p className='text-white/80 font-medium text-sm'>
            {data?.length || 0} Bets Total{" "}
          </p>
          <div className='flex justify-center items-center gap-2 ml-auto'>
            <SVG {...svgConfigs.dibs} />
            <p className='text-white font-medium text-sm'>
              {data?.reduce((acc, cur) => acc + cur.bet, 0) || 0}
            </p>
          </div>
        </div>
        <div>
          <UserBet />
        </div>
      </div>
      <div className='flex-1'>
        <span className='bg-green w-auto h-[44px] rounded-lg flex items-center p-3'>
          <p className='text-white font-bold text-[14px] '>BET ON GREEN</p>
          <p className='text-white font-bold text-[14px] ml-auto'>PAYS 14X</p>
        </span>
        <div className='flex items-center p-3'>
          <p className='text-white/80 font-medium text-sm'>
            {data?.length} Bets Total{" "}
          </p>
          <div className='flex justify-center items-center gap-2 ml-auto'>
            <SVG {...svgConfigs.dibs} />
            <p className='text-white font-medium text-sm'>
              {data?.reduce((acc, cur) => acc + cur.bet, 0) || 0}
            </p>
          </div>
        </div>
        <div>
          <UserBet />
        </div>
      </div>
      <div className='flex-1'>
        <span className='bg-dark2 w-auto h-[44px] rounded-lg flex items-center p-3'>
          <p className='text-white font-bold text-[14px] '>BET ON BLACK</p>
          <p className='text-white font-bold text-[14px] ml-auto'>PAYS 2X</p>
        </span>
        <div className='flex items-center p-3'>
          <p className='text-white/80 font-medium text-sm'>
            {data?.length || 0} Bets Total{" "}
          </p>
          <div className='flex justify-center items-center gap-2 ml-auto'>
            <SVG {...svgConfigs.dibs} />
            <p className='text-white font-medium text-sm'>
              {data?.reduce((acc, cur) => acc + cur.bet, 0) || 0}
            </p>
          </div>
        </div>
        <div>
          <UserBet />
        </div>
      </div>
      <div className='flex-1'>
        <span className='bg-purple w-auto h-[44px] rounded-lg flex items-center p-3'>
          <p className='text-white font-bold text-[14px] '>BET ON JOKER</p>
          <p className='text-white font-bold text-[14px] ml-auto'>PAYS 7X</p>
        </span>
        <div className='flex items-center p-3'>
          <p className='text-white/80 font-medium text-sm'>
            {data?.length || 0} Bets Total{" "}
          </p>
          <div className='flex justify-center items-center gap-2 ml-auto'>
            <SVG {...svgConfigs.dibs} />
            <p className='text-white font-medium text-sm'>
              {data?.reduce((acc, cur) => acc + cur.bet, 0) || 0}
            </p>
          </div>
        </div>
        <div>
          <UserBet />
        </div>
      </div>
    </div>
  );
};

export default Bet;
