// components/Home/Home.tsx
"use client";

import { SVG, svgConfigs } from "@/lib";
import { Bet, Input, Last, LastSum, Roulette } from "..";
const Home = () => {
  return (
    <div className='w-[1280px] h-full overflow-hidden m-[35px]'>
      <header>
        <div className='flex items-center'>
          <div>
            <Last />
          </div>
          <div className='w-full'>
            <LastSum />
          </div>
        </div>
      </header>
      <main>
        <div className='w-full h-full overflow-hidden mt-8'>
          <Roulette />
        </div>
      </main>
      <footer>
        <div className='m-8 w-[500px] h-[44px] flex items-center ml-auto mr-auto'>
          <div className='flex items-center gap-2'>
            <SVG {...svgConfigs.dibs} />
            <p className='text-sm font-medium text-white/80'>100.00</p>
          </div>
          <div className='flex ml-auto'>
            <Input />
          </div>
        </div>
        <div className='w-full h-full'>
          <Bet />
        </div>
      </footer>
    </div>
  );
};

export default Home;
