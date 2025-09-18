
export interface YearCont{
    yearPeriod: number[];
}

export enum DateEnum{
    '06/06' =  '06/06',
    '05/06' =  '05/06',
    '04/06' =  '04/06',
    '03/06' =  '03/06',
    '02/06' =  '02/06',
}

export type yearContProps = Record<DateEnum, number[]>;

export type CircleData = [number, string];

export interface CircleItemProps {
  CircleNum: number;
  chapter: string;
  isActive?: boolean;
  colorInactive?: string;
  colorActive?: string;
  borderHover?: string;
}

export interface RingDialProps {
  items: CircleData[];           // массив пар [число, подпись]
  onChangeActive?: (index: number) => void;
  externalActive?: number;
}