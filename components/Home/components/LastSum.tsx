"use client";
import React from "react";
import RouletteBlock from "./RouletteBlock";
import { svgConfigs } from "@/lib";
import useUserStore from "@/lib/store/store";

const LastSum = () => {
  const { lastSum } = useUserStore();
  return (
    <div className=' flex justify-end items-center'>
      <p className='mr-2 text-white/40 font-medium text-[14px]'>LAST 100</p>
      <ul className='flex justify-end items-center gap-4'>
        <li className='flex justify-end items-center gap-2'>
          <RouletteBlock
            width='32px'
            height='32px'
            bgClass='bg-red'
            fill='#14151C'
            {...svgConfigs.smallVector}
          />
          <p className='text-white text-[14px] font-bold'>
            {lastSum.red ? lastSum.red : 0}
          </p>
        </li>
        <li className='flex justify-end items-center gap-2'>
          <RouletteBlock
            width='32px'
            height='32px'
            bgClass='bg-dark4'
            fill='#FFF'
            {...svgConfigs.smallVector}
          />
          <p className='text-white text-[14px] font-bold'>
            {lastSum.black ? lastSum.black : 0}
          </p>
        </li>
        <li className='flex justify-end items-center gap-2'>
          <RouletteBlock
            width='32px'
            height='32px'
            bgClass='bg-green'
            fill='#FFF'
            {...svgConfigs.smallVector}
          />
          <p className='text-white text-[14px] font-bold'>
            {lastSum.green ? lastSum.green : 0}
          </p>
        </li>
        <li className='flex justify-end items-center gap-2'>
          <RouletteBlock
            width='32px'
            height='32px'
            bgClass='bg-purple'
            fill='#FFF'
            {...svgConfigs.smallJoker}
          />
          <p className='text-white text-[14px] font-bold'>
            {lastSum.joker ? lastSum.joker : 0}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LastSum;
