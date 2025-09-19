import styled from 'styled-components';

export const Container = styled.section`
  width: ${({ theme }) => theme.layout.container.mobile};
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  padding: ${({ theme }) => theme.layout.sectionPad.mobile};
  box-sizing: border-box;
  border: none;
  outline: none;

  ${({ theme }) => theme.media.up('sm')}  { width: ${({ theme }) => theme.layout.container.sm}; }
  ${({ theme }) => theme.media.up('md')}  { width: ${({ theme }) => theme.layout.container.md};
                                            padding: ${({ theme }) => theme.layout.sectionPad.md}; }
  ${({ theme }) => theme.media.up('lg')}  { width: ${({ theme }) => theme.layout.container.lg};
                                            padding: ${({ theme }) => theme.layout.sectionPad.lg}; }
  ${({ theme }) => theme.media.up('xl')}  { width: ${({ theme }) => theme.layout.container.xl};
                                            padding: ${({ theme }) => theme.layout.sectionPad.xl}; }
  ${({ theme }) => theme.media.up('md')} {
    width: ${({ theme }) => theme.layout.container.desktop};  
    border-left: 1px solid; 
    border-right: 1px solid; 
    border-color: ${({ theme }) => theme.color.lineColor};
  }
`;

export const LineHorizontal = styled.div`

  position: absolute;
  top: 0;
  left: 50%;
  background-color: ${({ theme }) => theme.color.lineColor};
  width: 1px;
  height: 100%;
  z-index: -10;

`

export const LineVertical = styled.div`

  position: absolute; top: 40%; left: 0;
  background-color: ${({ theme }) => theme.color.lineColor};
  width: 100%;
  height: 1px;
  z-index: -10;

`

export const Header = styled.header`

  box-sizing: border-box;
  position: relative;
  color: ${({ theme }) => theme.color.textPrimary};
  font-weight: ${({ theme }) => theme.font.weight.bold};


  font-size: ${({ theme }) => theme.font.size.h2.xs.size};
  line-height: ${({ theme }) => theme.font.size.h2.xs.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.size.h2.xs.letterSpacing}; 

  ${({ theme }) => theme.media.up('sm')}  { 
    font-size: ${({ theme }) => theme.font.size.h2.sm.size};
    line-height: ${({ theme }) => theme.font.size.h2.sm.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h2.sm.letterSpacing};
 
  
  }
  ${({ theme }) => theme.media.up('md')}  {
    font-size: ${({ theme }) => theme.font.size.h2.md.size};
    line-height: ${({ theme }) => theme.font.size.h2.md.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h2.md.letterSpacing};
 
  }
  ${({ theme }) => theme.media.up('lg')}  {
    font-size: ${({ theme }) => theme.font.size.h2.lg.size};
    line-height: ${({ theme }) => theme.font.size.h2.lg.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h2.lg.letterSpacing};
    padding-left: 56px; 
  }
  ${({ theme }) => theme.media.up('xl')}  {
    font-size: ${({ theme }) => theme.font.size.h2.xl.size};
    line-height: ${({ theme }) => theme.font.size.h2.xl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h2.xl.letterSpacing};
    padding-left: 78px; 
  }
  ${({ theme }) => theme.media.up('xxl')} {
    font-size: ${({ theme }) => theme.font.size.h2.xxl.size};
    line-height: ${({ theme }) => theme.font.size.h2.xxl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h2.xxl.letterSpacing};
    padding-left: 78px; 
  }

  ${({ theme }) => theme.media.up('lg')} {
    &::before{
      content: '';
      position: absolute;
      box-sizing: border-box;
      height: 100%;
      top: 0; left: 0;
      width: 5px; 
      background: linear-gradient(180deg, rgba(56,119,238,1) 0%, rgba(239,93,168,1) 100%);
    }
  }
`;

export const Title = styled.section`

  color: ${({ theme }) => theme.color.textSecondary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 64px;
  font-weight: bold;
  position: relative;

  
  font-size: ${({ theme }) => theme.font.size.h1.xs.size};
  line-height: ${({ theme }) => theme.font.size.h1.xs.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.size.h1.xs.letterSpacing};
  ${({ theme }) => theme.media.up('sm')}  { 
    font-size: ${({ theme }) => theme.font.size.h1.sm.size};
    line-height: ${({ theme }) => theme.font.size.h1.sm.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h1.sm.letterSpacing};

  
  }
  ${({ theme }) => theme.media.up('md')}  {
    font-size: ${({ theme }) => theme.font.size.h1.md.size};
    line-height: ${({ theme }) => theme.font.size.h1.md.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h1.md.letterSpacing};
    &::before{
      display: none;
    }

  }
  ${({ theme }) => theme.media.up('lg')}  {
    font-size: ${({ theme }) => theme.font.size.h1.lg.size};
    line-height: ${({ theme }) => theme.font.size.h1.lg.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h1.lg.letterSpacing};
  }
  ${({ theme }) => theme.media.up('xl')}  {
    font-size: ${({ theme }) => theme.font.size.h1.xl.size};
    line-height: ${({ theme }) => theme.font.size.h1.xl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h1.xl.letterSpacing};
  }
  ${({ theme }) => theme.media.up('xxl')} {
    font-size: ${({ theme }) => theme.font.size.h1.xxl.size};
    line-height: ${({ theme }) => theme.font.size.h1.xxl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h1.xxl.letterSpacing};
  }

    &::before{
      content: '';
      position: absolute;
      box-sizing: border-box;
      height: 1px;
      top:100%;
      margin-top: 58px;
      margin-bottom: 20px;
      left: 0;
      width: 100%; 
      background: #42567a36;
  }
`;

export const DateBlockBtns = styled.section`

    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    padding-top: 78px;
      ${({ theme }) => theme.media.up('sm')}  { padding-top: 78px;
  
  }
  ${({ theme }) => theme.media.up('md')}  {padding-top: 100px;
  }
  ${({ theme }) => theme.media.up('lg')}  {padding-top: 100px;
  }
  ${({ theme }) => theme.media.up('xl')}  {padding-top: 137px;
  }
  ${({ theme }) => theme.media.up('xxl')} {
    padding-top: 137px;
  }


`;

export const ChosenDateBlock = styled.div`
  color: ${({ theme }) => theme.color.textPrimary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  

  font-size: ${({ theme }) => theme.font.size.smallText.size};
  line-height: ${({ theme }) => theme.font.size.smallText.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.size.smallText.letterSpacing};
`;

export const BtnBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.media.up('lg')} { gap: 8.33px; }

`;

export const BtnDate = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px; aspect-ratio: 1/1; border-radius: 50%;
  border: 1px solid; border-color: rgba(66,86,122,.5);

  ${({ theme }) => theme.media.up('md')} { width: 36px; }
  ${({ theme }) => theme.media.up('lg')} { width: 50px; }
  cursor: pointer;
`;

export const CircleItemComp = styled.div<{ $active?: boolean }>`

  width:56px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: .1s;

`

export const CircleItemWrapper = styled.div<{ $active?: boolean }>`
  background-color: ${({ $active }) => ($active ? 'white' : '#42567A')};
  display: flex; align-items: center; justify-content: center;
  width: ${({ $active }) => ($active ? '56px' : '6px')};
  aspect-ratio: 1/1; border-radius: 50%;
  cursor: pointer;
  transition: transform .4s ease, background-color .4s ease, width .4s ease, font-size .4s ease;
  font-size: ${({ $active }) => ($active ? '20px' : '0px')};
  border: 1px solid rgba(48,62,88,.5);

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    transition: transform .4s ease, background-color .4s ease, width .4s ease, font-size .4s ease;
    color: ${({ theme }) => theme.color.textPrimary};
    border: 1px solid rgba(48,62,88,.5);
    font-size: 20px;
    width: 56px;
  }
`;

export const CircleItemContent = styled.div<{ $active?: boolean }>`
  pointer-events: none;
  user-select: none;
  color: ${({ theme }) => theme.color.textPrimary};
`;

export const CircleItemTitle = styled.div<{ $visible?: boolean }>`
  position: absolute;
  left: 76px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: 20px;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateX(${({ $visible }) => ($visible ? '0' : '6px')});
  transition: opacity .25s ease, transform .25s ease;
  pointer-events: none;
  user-select: none;
  will-change: opacity, transform;
`;



export const Wrapper = styled.div`
  background-color: transparent;
  display: flex; align-items: center; justify-content: center;

  width: 360px; aspect-ratio: 1/1;
  border: 2px solid rgba(66,86,122,.2);
  border-radius: 50%;
  position: absolute; top: 40%; left: 50%;
  transform: translate(-50%, -50%);
  overflow: visible;

  ${({ theme }) => theme.media.up('sm')}  { width: 320px; }
  ${({ theme }) => theme.media.up('md')}  { width: 380px; }
  ${({ theme }) => theme.media.up('lg')}  { width: 420px; }
  ${({ theme }) => theme.media.up('xl')}  { width: 480px; }
  ${({ theme }) => theme.media.up('xxl')} { width: 536px; }
`;

export const Ring = styled.div`
  position: absolute; inset: 0;
  transform-origin: 50% 50%;
  will-change: transform;
  --ring-rot: 0deg;
`;

export const DotWrapper = styled.div<{ $transform: string }>`
  position: absolute; left: 50%; top: 50%;
  transform: ${({ $transform }) => $transform};
  transform-origin: center;
  cursor: pointer;
`;

export const DotInner = styled.div<{ $inner: string }>`
  transform: ${({ $inner }) => $inner};
  transform-origin: center;
  position: absolute; left: 50%; top: 50%;
`;




export const SliderBlock = styled.div`

  font-size: ${({theme}) => theme.font.size.ringText.size};
  letter-spacing: ${({theme}) => theme.font.size.ringText.letterSpacing};
  margin-bottom: 15px;
  color:  ${({theme}) => theme.color.specialColor};

`;

export const Root = styled.div`
  position: relative;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  height: fit-content;
  padding-top: 80px;
  ${({ theme }) => theme.media.up('lg')}  {padding-top: 56px; padding-right: 160px;}

  --titleH: auto;
  --slideH: auto;


`;



export const Card = styled.article`
  background: transparent;
  border: none;
  padding: 0;
  display: grid;
  grid-template-rows: var(--titleH) 15px 1fr;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-right: 25px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  align-self: end;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: #3877EE;
  background: transparent;
  font-size: ${({ theme }) => theme.font.size.h3.xs.size};
  line-height: ${({ theme }) => theme.font.size.h3.xs.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.size.h3.xs.letterSpacing};

  ${({ theme }) => theme.media.up('sm')}  { 
    font-size: ${({ theme }) => theme.font.size.h3.sm.size};
    line-height: ${({ theme }) => theme.font.size.h3.sm.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h3.sm.letterSpacing};
  
  }
  ${({ theme }) => theme.media.up('md')}  {
    font-size: ${({ theme }) => theme.font.size.h3.md.size};
    line-height: ${({ theme }) => theme.font.size.h3.md.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h3.md.letterSpacing};
  }
  ${({ theme }) => theme.media.up('lg')}  {
    font-size: ${({ theme }) => theme.font.size.h3.lg.size};
    line-height: ${({ theme }) => theme.font.size.h3.lg.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h3.lg.letterSpacing};
  }
  ${({ theme }) => theme.media.up('xl')}  {
    font-size: ${({ theme }) => theme.font.size.h3.xl.size};
    line-height: ${({ theme }) => theme.font.size.h3.xl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h3.xl.letterSpacing};
  }
  ${({ theme }) => theme.media.up('xxl')} {
    font-size: ${({ theme }) => theme.font.size.h3.xxl.size};
    line-height: ${({ theme }) => theme.font.size.h3.xxl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.h3.xxl.letterSpacing};
  }

`;

export const Gap = styled.div`
  height: 15px;
`;

export const CardBody = styled.div`
  background: transparent;
  color: ${({ theme }) => theme.color.textPrimary};
  font-size: ${({ theme }) => theme.font.size.text.xs.size};
  line-height: ${({ theme }) => theme.font.size.text.xs.lineHeight};
  letter-spacing: ${({ theme }) => theme.font.size.text.xs.letterSpacing};
  height: auto;
  width: 100%;


  ${({ theme }) => theme.media.up('sm')}  { 
    font-size: ${({ theme }) => theme.font.size.text.sm.size};
    line-height: ${({ theme }) => theme.font.size.text.sm.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.text.sm.letterSpacing};
  
  }
  ${({ theme }) => theme.media.up('md')}  {
    font-size: ${({ theme }) => theme.font.size.text.md.size};
    line-height: ${({ theme }) => theme.font.size.text.md.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.text.md.letterSpacing};
  }
  ${({ theme }) => theme.media.up('lg')}  {
    font-size: ${({ theme }) => theme.font.size.text.lg.size};
    line-height: ${({ theme }) => theme.font.size.text.lg.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.text.lg.letterSpacing};
  }
  ${({ theme }) => theme.media.up('xl')}  {
    font-size: ${({ theme }) => theme.font.size.text.xl.size};
    line-height: ${({ theme }) => theme.font.size.text.xl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.text.xl.letterSpacing};
  }
  ${({ theme }) => theme.media.up('xxl')} {
    font-size: ${({ theme }) => theme.font.size.text.xxl.size};
    line-height: ${({ theme }) => theme.font.size.text.xxl.lineHeight};
    letter-spacing: ${({ theme }) => theme.font.size.text.xxl.letterSpacing};
  }
  overflow: hidden;
`;

export const NavButtonBase = styled.button`

  position: absolute;
  top: 70%;
  transform: translateY(-50%);
  background: ${({theme}) => theme.color.primary};
  border: none;
  border-radius: 50%;
  width: 32px;
  aspect-ratio: 1/1;
  box-shadow: 0 0 15px 0 #3878ee5a;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  color: ${({theme}) => theme.color.blueColor}

  ${({ theme }) => theme.media.up('lg')}{
    width: 50px;
    font-size: 22px;
  }
`;

export const NavButtonLeft  = styled(NavButtonBase)` left: -40px;`;
export const NavButtonRight = styled(NavButtonBase)` right: 8px; `;


export const Dots = styled.div`
  display: flex; justify-content: center; align-items: center;
  gap: 12px; margin-top: 16px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const Dot = styled.button<{ $active?: boolean }>`
  width: 6px; height: 6px; border-radius: 50%; border: 0; padding: 0; cursor: pointer;
  background: ${({ $active }) => ($active ? '#42567A' : 'rgba(66,86,122,.35)')};
  transition: transform .2s ease, background-color .2s ease;
  &:hover { transform: scale(1.15); }
`;

export const DotsContainer = styled.div`

  display: flex;
  align-items: baseline;
  position: relative;



`