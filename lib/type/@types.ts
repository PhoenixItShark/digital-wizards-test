//lib/type/@types.ts
import { ComponentType, JSX } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type RouletteType =
  | "black"
  | "red"
  | "green"
  | "RedJoker"
  | "BlackJoker";

export interface UserStore {
  dibs: number | null;
  last: string[] | null;
  lastSum: {
    black: number | null;
    red: number | null;
    green: number | null;
    joker: number | null;
  };
  bet: Record<string, any> | null;

  setDibs: (count: number) => void;
  setLast: (type: string) => void;
  setLastSum: (type: RouletteType) => void;
  setBet: (count: number, type: string) => void;
}

export interface RouletteBlockProps {
  Svg: any;
  width: string;
  height: string;
  bgClass: string;
  fill: string;
  svgWidth: number;
  svgHeight: number;
  viewBox?: string;
  stroke?: string;
}

export interface SVGWrapperProps {
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
  svgWidth: number;
  svgHeight: number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
}

export interface RouletteItem {
  component: string;
  props: Record<string, any>;
  type: RouletteType;
  chance: number;
}

export interface Block {
  block: JSX.Element;
  type: RouletteType;
  chance: number;
  offset: number;
}

export type ComponentMap = Record<string, ComponentType<any>>;

export interface InputProps {
  title?: string;
  width?: string;
  type?: string;
  id?: string;
  required?: boolean;
  value?: string;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
