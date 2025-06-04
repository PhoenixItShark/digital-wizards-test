"use client";
import { RouletteBlockProps, SVG } from "@/lib";
import React from "react";

const RouletteBlock: React.FC<RouletteBlockProps> = ({
  Svg,
  width,
  height,
  bgClass,
  fill,
  svgWidth,
  svgHeight,
  viewBox,
  stroke,
}) => {
  return (
    <div
      className={`flex justify-center items-center rounded-lg border-t-2 border-t-white/35 flex-shrink-0 ${bgClass}`}
      style={{ width: width, height: height }}
    >
      <SVG
        Svg={Svg}
        svgWidth={svgWidth}
        svgHeight={svgHeight}
        fill={fill}
        viewBox={viewBox}
        stroke={stroke}
      />
    </div>
  );
};
export default RouletteBlock;
