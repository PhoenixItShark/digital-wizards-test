//lib/utils/SVG.tsx
"use client";
import React from "react";
import { SVGWrapperProps } from "../type/@types";

const SVG: React.FC<SVGWrapperProps> = ({
  Svg,
  svgWidth,
  svgHeight,
  fill,
  viewBox,
  stroke,
}) => {
  return (
    <Svg
      width={svgWidth}
      height={svgHeight}
      fill={fill}
      viewBox={viewBox}
      stroke={stroke}
    />
  );
};

export default SVG;
