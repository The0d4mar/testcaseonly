import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { A11y } from 'swiper/modules';
import 'swiper/css';
import { NavButtonLeft, NavButtonRight, Card, CardTitle, Gap, CardBody, Root, DotsContainer } from '../styles/components';
import { useWindowWidth } from '../hooks/useWindowWidth';
import { Dots, Dot } from '../styles/components';
import DateBlock from './DateBlock';
import { DateEnum } from '../interface/interface';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = { id: string | number; title: string; text: string };
type Props = { outerslides: Slide[]; step?: number; chosenDate: DateEnum; setChosenDate: (newDate: DateEnum) => void; };

/* ===== ВАЖНО: вынесено за компонент ===== */
const StyledSwiper = styled(SwiperReact)`
  background: transparent;
  padding: 0;
  width: 100%;
  .swiper-wrapper { align-items: stretch; }

  /* приглушение всех, кроме активного */
  .swiper-slide { opacity: 1; transition: opacity .25s ease; }
  .swiper-slide-next { opacity: 1; }
  .swiper-slide-active { opacity: 1; }

  /* блеклость только до md включительно */
  @media (max-width: 768px) {
    .swiper-slide { opacity: .35; transition: opacity .25s ease; }
    .swiper-slide-next { opacity: .55; }
    .swiper-slide-active { opacity: 1; }
  }
`;



const StyledSlide = styled(SwiperSlide)`
  background: transparent;
  display: flex;
  height: var(--slideH);
  margin-right: 25px;
`;

const SWIPER_BREAKPOINTS = {
  320:  { slidesPerView: 1.5, spaceBetween: 25 },
  576:  { slidesPerView: 1.5, spaceBetween: 28 },
  768:  { slidesPerView: 3,  spaceBetween: 32 },
  1000:  { slidesPerView: 3,  spaceBetween: 32 },
  1200: { slidesPerView: 3,    spaceBetween: 40 },
  1440: { slidesPerView: 3,    spaceBetween: 80 },
  1980: { slidesPerView: 3,    spaceBetween: 80 },
};
/* ======================================= */

const SliderBlock: React.FC<Props> = ({ outerslides, step = 1, chosenDate, setChosenDate }) => {
  const [slides, setSlides] = useState<Slide[]>(outerslides)
  const [activeSnap, setActiveSnap] = useState(0);



  useEffect(()=>{
    setSlides(outerslides)
  }, [outerslides])
  const rootRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);



  const updateNavState = useCallback(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    setCanPrev(p => (p !== !sw.isBeginning ? !sw.isBeginning : p));
    setCanNext(n => (n !== !sw.isEnd ? !sw.isEnd : n));
    setActiveSnap(((sw as any).snapIndex ?? sw.activeIndex ?? 0));
  }, []);

  const onSwiper = useCallback((sw: SwiperType) => {
    swiperRef.current = sw;
    updateNavState();
  }, [updateNavState]);

  const onSlideChange = useCallback(() => updateNavState(), [updateNavState]);

  const slideToSnap = useCallback((nextSnapIndex: number) => {
    const sw = swiperRef.current;
    if (!sw) return;
    const maxSnap = (sw.snapGrid?.length ?? slides.length) - 1;
    const idx = Math.max(0, Math.min(maxSnap, nextSnapIndex));
    sw.slideTo(idx, 500);
    setActiveSnap(idx)
  }, [slides.length]);

  const slidePrev = useCallback(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    const current = (sw as any).snapIndex ?? sw.activeIndex ?? 0;
    slideToSnap(current - step);
  }, [slideToSnap, step]);

  const slideNext = useCallback(() => {
    const sw = swiperRef.current;
    if (!sw) return;
    const current = (sw as any).snapIndex ?? sw.activeIndex ?? 0;
    slideToSnap(current + step);
  }, [slideToSnap, step]);
  const MyWidth = useWindowWidth();


  const handleSwiper = useCallback((sw: SwiperType) => {
    swiperRef.current = sw;
    updateNavState();
  }, [updateNavState]);

  const handleSlideChange = useCallback(() => {
    updateNavState();
  }, [updateNavState]);




  return (
    <Root ref={rootRef}>
      {MyWidth > 1000 ? <>
          <NavButtonLeft
            type="button"
            aria-label="Previous"
            onClick={slidePrev}
            data-disabled={!canPrev}
            style={{ visibility: canPrev ? 'visible' : 'hidden' }}
          >
            <ChevronLeft size={16} color="#3877EE"/>
          </NavButtonLeft>

          <NavButtonRight
            type="button"
            aria-label="Next"
            onClick={slideNext}
            data-disabled={!canNext}
            style={{ visibility: canNext ? 'visible' : 'hidden' }}
          >
            <ChevronRight size={16} color="#3877EE" />
          </NavButtonRight>
        </>
        : undefined }

        <StyledSwiper
          modules={[A11y]}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          observer
          observeParents
          watchSlidesProgress
          allowTouchMove
          simulateTouch
          grabCursor
          slidesPerView={1}
          centeredSlides={false}
          resistanceRatio={0.85}
          speed={500}
          breakpoints={SWIPER_BREAKPOINTS}
          slidesOffsetAfter={1} 
        >
        {slides.map((s) => (
          <StyledSlide key={s.id}>
            <Card className="js-slide-card">
              <CardTitle className="js-slide-title">{s.title}</CardTitle>
              <Gap />
              <CardBody className="js-slide-body">{s.text}</CardBody>
            </Card>
          </StyledSlide>
        ))}
      </StyledSwiper>
      {MyWidth < 1000 ? 

      <>
      <DotsContainer>
          <DateBlock chosenDate={chosenDate} setChosenDate={setChosenDate}/>
          <Dots role="tablist" aria-label="Слайдер: пагинация">
              {Array.from({ length: slides.length }).map((_, i) => (
                <Dot
                  key={i}
                  $active={i === activeSnap}
                  aria-label={`Перейти к слайду ${i + 1}`}
                  aria-current={i === activeSnap ? 'true' : undefined}
                  onClick={() => slideToSnap(i)}
                />
              ))}
          </Dots>
        </DotsContainer>
      
      </>
      
      
      
      : undefined }
    </Root>
  );
};

export default SliderBlock;
