// components/Home/components/Roulette.tsx
"use client";

import React, { useEffect, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  ComponentMap,
  ROULETTE_CONST,
  rouletteItems,
  useCountdownTimer,
  useRoulette,
} from "@/lib";

const RouletteBlock = dynamic(() => import("./RouletteBlock"), { ssr: false });

const Roulette: React.FC = () => {
  const ref = useRef(null);
  const componentMap = useMemo<ComponentMap>(() => ({ RouletteBlock }), []);

  const { seconds, milliseconds, isFinished, resetTimer } = useCountdownTimer(
    ROULETTE_CONST.SPIN_INTERVAL,
  );

  const { blocks, addBlocks, isSpinFinished } = useRoulette(
    100,
    rouletteItems,
    componentMap,
    ref,
    isFinished,
    resetTimer,
  );

  useEffect(() => {
    addBlocks();
  }, [addBlocks]);

  return (
    <div className='flex justify-center'>
      <div className='relative w-[1280px] h-[100px] overflow-hidden'>
        {/* Мягкие тени по бокам */}
        <div
          className='pointer-events-none absolute left-0 top-0 h-full w-24 z-10'
          style={{
            background: "linear-gradient(to right, #14151C, #14151C00)",
          }}
        />
        <div
          className='pointer-events-none absolute right-0 top-0 h-full w-24 z-10'
          style={{ background: "linear-gradient(to left, #14151C, #14151C00)" }}
        />

        {/* Таймер в центре */}
        {!isFinished && (
          <div className='absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-center'>
            <p className='text-white text-sm font-medium'>ROLLING IN:</p>
            <span className='font-bold text-white text-xl'>
              {`${seconds}.${milliseconds.toString().padStart(2, "0")}`}
            </span>
          </div>
        )}

        {/* Рулетка или заглушка */}
        {isSpinFinished ? (
          <div className='bg-dark2 h-[100px] mb-4 rounded-lg animate-pulse' />
        ) : (
          <ul
            ref={ref}
            className={`ml-2.5 flex list-none gap-4 mb-4 transition-transform duration-[${ROULETTE_CONST.SPIN_DURATION}ms] ${!isFinished ? "opacity-50" : ""}`}
          >
            {blocks.map((block, index) => (
              <li key={index}>{block.block}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Roulette;
