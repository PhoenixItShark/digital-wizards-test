//lib/type/@types.ts
import { ComponentType, JSX } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FunctionComponent, SVGProps } from "react";

export type SvgComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

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
  bet: {
    count: number;
    type: RouletteType;
  } | null;

  setDibs: (count: number) => void;
  setLast: (type: string) => void;
  setLastSum: (type: RouletteType) => void;
  setBet: (count: number, type: RouletteType) => void;
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
  Svg: SvgComponent;
  className?: string;
  svgWidth: number;
  svgHeight: number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
}

export interface RouletteItem<K extends keyof ComponentPropsMap = keyof ComponentPropsMap> {
  component: K;
  props: ComponentPropsMap[K];
  type: RouletteType;
  chance: number;
}

export interface Block {
  block: JSX.Element;
  type: RouletteType;
  chance: number;
  offset: number;
}

export type ComponentPropsMap = {
  RouletteBlock: RouletteBlockProps;
  // Добавь сюда другие компоненты, если они есть
};

export type ComponentMap = {
  [K in keyof ComponentPropsMap]: ComponentType<ComponentPropsMap[K]>;
};
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
