import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import CircleItem from './CircleItem';
import type { CircleData, RingDialProps } from '../interface/interface';
import { Wrapper, Ring, DotWrapper, DotInner } from '../styles/components';

gsap.registerPlugin(Draggable);

const clampAngle = (a: number) => {
  let r = a % 360;
  if (r > 180) r -= 360;
  if (r <= -180) r += 360;
  return r;
};
const shortestRotationTo = (current: number, target: number) =>
  current + clampAngle(target - current);

const TARGET_ANGLE_DEG = -60; 
const INITIAL_ACTIVE = 0;
const DURATION = 2;
const PRE_DELAY = 0;
const POST_DELAY = 0;

const RingDial: React.FC<RingDialProps> = ({ items, onChangeActive, externalActive = 0 }) => {
  const count = items.length;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const draggableRef = useRef<Draggable[] | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const rotProxy = useRef<{ rot: number }>({ rot: 0 });

  const [activeIndex, setActiveIndex] = useState<number>(INITIAL_ACTIVE);
  const [innerRadius, setInnerRadius] = useState<number>(0);
  const [animating, setAnimating] = useState(false); 
 
  const step = useMemo(() => 360 / count, [count]);
  const baseAngles = useMemo(() => Array.from({ length: count }, (_, i) => i * step), [count, step]);


  useLayoutEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const computeRadius = () => {
      const rectW = el.clientWidth;
      const cs = getComputedStyle(el);
      const bw = parseFloat(cs.borderLeftWidth || '0');
      const radius = rectW / 2 - bw;
      setInnerRadius(radius);
    };

    computeRadius();

    const ro = new ResizeObserver(() => computeRadius());
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  const applyRotation = (deg: number) => {
    if (!ringRef.current) return;
    ringRef.current.style.transform = `rotate(${deg}deg)`;
    ringRef.current.style.setProperty('--ring-rot', `${deg}deg`);
  };

  const computeNearestToTarget = (rotDeg: number) => {
    let bestIdx = 0;
    let bestDist = Infinity;
    for (let i = 0; i < count; i++) {
      const screenAngle = clampAngle(baseAngles[i] + rotDeg);
      const dist = Math.abs(clampAngle(TARGET_ANGLE_DEG - screenAngle));
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    }
    return bestIdx;
  };


  useEffect(() => {
    if (!ringRef.current || count === 0) return;
    const neededRotation = TARGET_ANGLE_DEG - baseAngles[INITIAL_ACTIVE];
    rotProxy.current.rot = neededRotation;
    applyRotation(neededRotation);
    setActiveIndex(INITIAL_ACTIVE);
    
    


    draggableRef.current?.forEach(d => d.kill());
    draggableRef.current = Draggable.create(ringRef.current, {
      type: 'rotation',
      inertia: false,
      onDrag: function () {
        rotProxy.current.rot = this.rotation;
        applyRotation(this.rotation);
        const idx = computeNearestToTarget(this.rotation);
        onChangeActive?.(idx);
      },
    });
    draggableRef.current[0].disable();

    return () => {
      draggableRef.current?.forEach(d => d.kill());
      draggableRef.current = null;
    };

  }, [count, baseAngles]);


  useEffect(() => {
    if (externalActive >= 0 && externalActive < items.length) {
      const requiredRotation = TARGET_ANGLE_DEG - baseAngles[externalActive];
      const nextRotation = shortestRotationTo(rotProxy.current.rot, requiredRotation);

      setActiveIndex(externalActive);
      onChangeActive?.(externalActive);

      gsap.killTweensOf(rotProxy.current);
      setAnimating(true); // <—
      gsap.to(rotProxy.current, {
        rot: nextRotation,
        duration: DURATION,
        ease: 'power3.out',
        onUpdate: () => applyRotation(rotProxy.current.rot),
        onComplete: () => setAnimating(false),
      });
    }
  }, [externalActive, baseAngles, items.length]);






  const handlePick = (idx: number) => {
    if (!ringRef.current || idx === activeIndex) return;

    setActiveIndex(idx);
    onChangeActive?.(idx);

    const requiredRotation = TARGET_ANGLE_DEG - baseAngles[idx];
    const nextRotation = shortestRotationTo(rotProxy.current.rot, requiredRotation);

    tlRef.current?.kill();
    gsap.killTweensOf(rotProxy.current);

    setAnimating(true); 
    const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });
    tlRef.current = tl;

    tl.to(rotProxy.current, {
      rot: nextRotation,
      duration: DURATION,
      ease: 'power3.out',
      onUpdate: () => applyRotation(rotProxy.current.rot),
      onComplete: () => setAnimating(false), 
    });
  };

  return (
        <Wrapper ref={wrapperRef}>
      <Ring ref={ringRef}>
        {items.map(([num, word], i) => {
          const angle = baseAngles[i];
          const translate = innerRadius - 28;
          const wrapperTransform = `rotate(${angle}deg) translate(${translate}px)`;
          const innerTransform   = `rotate(${-angle}deg) rotate(calc(-1 * var(--ring-rot)))`;
          const isActive = i === activeIndex;

          return (
            <DotWrapper key={`${num}-${i}`} $transform={wrapperTransform} onClick={() => handlePick(i)}>
              <DotInner $inner={innerTransform}>
                <CircleItem
                  CircleNum={num}
                  chapter={word}
                  isActive={isActive}
                  showTitle={isActive && !animating}  // <— тайтл только активному и после анимации
                />
              </DotInner>
            </DotWrapper>
          );
        })}
      </Ring>
    </Wrapper>
  );
};

export default RingDial;
