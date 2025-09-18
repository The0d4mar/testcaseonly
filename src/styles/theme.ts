import { css } from 'styled-components';
import { GlobalStyles } from './global';

type BreakpointKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

const breakpoints: Record<BreakpointKey, number> = {
  xs: 360,
  sm: 480,   
  md: 768,  
  lg: 1024,  
  xl: 1280,  
  xxl: 1440, 
  xxxl: 1920 
};

const media = {
  up: (bp: BreakpointKey) => `@media (min-width: ${breakpoints[bp]}px)`,
  down: (bp: BreakpointKey) => `@media (max-width: ${breakpoints[bp] - 0.02}px)`,
  between: (min: BreakpointKey, max: BreakpointKey) =>
    `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max] - 0.02}px)`,
};

export const theme = {
  color: {
    primary: '#FFFFFF',
    textPrimary: '#42567A',
    textSecondary: '#5D5FEF',
    textThird: '#EF5DA8',
    specialColor: '#3877EE',
    shadow: 'rgba(56, 119, 238, 0.1);',
    lineColor: 'rgba(66, 86, 122, 0.1)',
    blueColor: '#3877EE',
  },

  media,

  font: {
    family: GlobalStyles, 
    weight: { regular: 'regular', bold: 'bold' },


    size: {
      h1: {
            xs: { size: '56px', letterSpacing: '-2%', lineHeight: 'auto' },
            sm:     { size: '85px', letterSpacing: '-2%', lineHeight: 'auto' },
            md:     { size: '114px', letterSpacing: '-2%', lineHeight: 'auto' },
            lg:     { size: '143px', letterSpacing: '-2%', lineHeight: 'auto' },
            xl:     { size: '172px', letterSpacing: '-2%', lineHeight: '120%' },
            xxl:    { size: '200px', letterSpacing: '-2%', lineHeight: '140%' },
            xxxl:{ size: '200px', letterSpacing: '-2%', lineHeight: '160%' },
          },
      h2: {
            xs: { size: '20px', letterSpacing: '0', lineHeight: '120%' },
            sm:     { size: '20px', letterSpacing: '0', lineHeight: '120%' },
            md:     { size: '32px', letterSpacing: '0', lineHeight: '120%' },
            lg:     { size: '44px', letterSpacing: '0', lineHeight: '120%' },
            xl:     { size: '56px', letterSpacing: '0', lineHeight: '120%' },
            xxl:    { size: '56px', letterSpacing: '0', lineHeight: '120%' },
            xxxl:{ size: '56px', letterSpacing: '0', lineHeight: '120%' },
          },
      h3: {
            xs: { size: '16px', letterSpacing: '0', lineHeight: '120%' },
            sm:     { size: '16px', letterSpacing: '0', lineHeight: '120%' },
            md:     { size: '20px', letterSpacing: '0', lineHeight: '120%' },
            lg:     { size: '20px', letterSpacing: '0', lineHeight: '120%' },
            xl:     { size: '25px', letterSpacing: '0', lineHeight: '120%' },
            xxl:    { size: '25px', letterSpacing: '0', lineHeight: '120%' },
            xxxl:{ size: '25px', letterSpacing: '0', lineHeight: '120%' },
          },
      text: {
              xs: { size: '14px', letterSpacing: '0', lineHeight: '145%' },
              sm:     { size: '16px', letterSpacing: '0', lineHeight: '145%' },
              md:     { size: '16px', letterSpacing: '0', lineHeight: '145%' },
              lg:     { size: '20px', letterSpacing: '0', lineHeight: '145%' },
              xl:     { size: '20px', letterSpacing: '0', lineHeight: '30px' },
              xxl:    { size: '20px', letterSpacing: '0', lineHeight: '30px' },
              xxxl:{ size: '20px', letterSpacing: '0', lineHeight: '30px' },
            },
      smallText:{ size: '14px', letterSpacing: '0', lineHeight: '1.4' },
      ringText: { size: '20px', letterSpacing: '0', lineHeight: '30px' },

    },
  },

  button: {
    mobile:  { width: '25px', aspectRatio: '1/1' },
    desktop: { width: '50px', aspectRatio: '1/1' },
  },

  
  layout: {
    container: {
      mobile: '100%', 
      sm:     '540px',
      md:     '720px',
      lg:     '960px',
      xl:     '1140px',
      xxl:    '1320px',
      desktop:'1440px',            
    },
    
    sectionPad: {
      mobile: '59px 27px 13.33px 20px',
      md:     '86px 40px 35px 40px',
      lg:     '86px 40px 58px 60px',
      xl:     '100px 40px 81px 60px',
      xxl:    '170px 40px 104px 80px',
    }
  },
} as const;
