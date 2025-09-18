// CircleItem.tsx
import React from 'react';
import { CircleItemWrapper, CircleItemContent, CircleItemComp, CircleItemTitle } from '../styles/components';

interface CircleItemProps {
  CircleNum: number;
  chapter: string;
  isActive?: boolean;
  showTitle?: boolean;
}

const CircleItem: React.FC<CircleItemProps> = ({ CircleNum, chapter, isActive, showTitle }) => {
  return (
    <CircleItemComp>
      <CircleItemWrapper $active={isActive}>
        <CircleItemContent>{CircleNum}</CircleItemContent>
        <CircleItemTitle $visible={!!showTitle} aria-hidden={!showTitle}>
          {chapter}
        </CircleItemTitle>
      </CircleItemWrapper>
    </CircleItemComp>
  );
};

export default CircleItem;
