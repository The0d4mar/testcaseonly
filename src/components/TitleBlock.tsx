// TitleBlock.tsx
import React, { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Title } from '../styles/components';
import { theme } from '../styles/theme';
import { YearCont } from '../interface/interface';



interface TitleBlockProps {
  choosenYearPeriod: number[];
  animatePeriod?: number[];
  speed?: number;
}

const TitleBlock: FC<TitleBlockProps> = ({
  choosenYearPeriod,
  animatePeriod,
  speed = 15, //скорость воспроизведния анимации
}) => {
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);


  const proxy = useRef<{ a: number; b: number }>({
    a: choosenYearPeriod[0],
    b: choosenYearPeriod[1],
  });

  
  useLayoutEffect(() => {
    if (leftRef.current) leftRef.current.textContent = String(proxy.current.a);
    if (rightRef.current) rightRef.current.textContent = String(proxy.current.b);
  }, []);

  
  const target: number[] = animatePeriod ?? choosenYearPeriod;

  useLayoutEffect(() => {
    const [toA, toB] = target;
    const { a: fromA, b: fromB } = proxy.current;


    if (toA === fromA && toB === fromB) return;


    const dist = Math.max(Math.abs(toA - fromA), Math.abs(toB - fromB));
    const duration = Math.max(0.3, dist / speed);

    tweenRef.current?.kill();
    tweenRef.current = gsap.to(proxy.current, {
      a: toA,
      b: toB,
      duration,
      ease: 'power2.out',
      snap: { a: 1, b: 1 },
      onUpdate: () => {
        if (leftRef.current) leftRef.current.textContent = String(proxy.current.a);
        if (rightRef.current) rightRef.current.textContent = String(proxy.current.b);
      },
    });

    return () => {
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [target[0], target[1], speed]);

  return (
    <Title>
      <span ref={leftRef}>{`${choosenYearPeriod[0]}`}</span>{' '}
      <span ref={rightRef} style={{ color: theme.color.textThird }}>
        {`${choosenYearPeriod[1]}`}
      </span>
    </Title>
  );
};

export default TitleBlock;
