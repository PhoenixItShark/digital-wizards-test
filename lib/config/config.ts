//lib/config/config.ts
"use client";
import dynamic from "next/dynamic";
import { RouletteItem } from "../type/@types";
import { Dibs, Rhombus } from "@/public";
const Vector = dynamic(() => import("@/public/Vector.svg"), { ssr: false });
const Joker = dynamic(() => import("@/public/Joker.svg"), { ssr: false });

export const svgConfigs = {
  vector: {
    Svg: Vector,
    svgWidth: 50,
    svgHeight: 22,
    viewBox: "0 0 16 8",
  },
  joker: {
    Svg: Joker,
    svgWidth: 58,
    svgHeight: 58,
    viewBox: "0 0 20 19",
  },
  dibs: {
    Svg: Dibs,
    svgWidth: 20,
    svgHeight: 20,
    viewBox: "0 0 20 20",
  },
  rhombus: {
    Svg: Rhombus,
    svgWidth: 12,
    svgHeight: 16,
    viewBox: "0 0 12 16",
  },
  smallVector: {
    Svg: Vector,
    svgWidth: 16,
    svgHeight: 7,
    viewBox: "0 0 16 8",
  },
  smallJoker: {
    Svg: Joker,
    svgWidth: 18,
    svgHeight: 18,
    viewBox: "0 0 20 19",
  },
};

export const rouletteItems: RouletteItem[] = [
  {
    component: "RouletteBlock",
    props: {
      width: "100px",
      height: "100px",
      bgClass: "bg-dark4",
      fill: "#FFF",
      ...svgConfigs.vector,
    },
    type: "black",
    chance: 50,
  },
  {
    component: "RouletteBlock",
    props: {
      width: "100px",
      height: "100px",
      bgClass: "bg-red",
      fill: "#14151C",
      ...svgConfigs.vector,
    },
    type: "red",
    chance: 50,
  },
  {
    component: "RouletteBlock",
    props: {
      width: "100px",
      height: "100px",
      bgClass: "bg-green",
      fill: "#FFF",
      ...svgConfigs.vector,
    },
    type: "green",
    chance: 1,
  },
  {
    component: "RouletteBlock",
    props: {
      width: "100px",
      height: "100px",
      bgClass: "bg-red",
      fill: "#14151C",
      ...svgConfigs.joker,
    },
    type: "RedJoker",
    chance: 5,
  },
  {
    component: "RouletteBlock",
    props: {
      width: "100px",
      height: "100px",
      bgClass: "bg-dark4",
      fill: "#FFF",
      ...svgConfigs.joker,
    },
    type: "BlackJoker",
    chance: 5,
  },
];
