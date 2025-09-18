import React, {FC} from 'react';
import { DateEnum } from '../interface/interface';
import classes from './DateBlock.module.css'
import { BtnBlock, BtnDate, ChosenDateBlock, DateBlockBtns } from '../styles/components';
import ChevronLeft from '../img/Vector 2.png'
import ChevronRight from '../img/VectorRight.png'

interface DateBlockProps{
    chosenDate: DateEnum;
    setChosenDate: (newDate: DateEnum) => void; 

}
const DateBlock:FC<DateBlockProps> = ({chosenDate, setChosenDate}) => {
    
    const dateList = Object.values(DateEnum)

    const goNext = () => {
        const idx = dateList.indexOf(chosenDate);
        const next = dateList[(idx + 1) % dateList.length];
        setChosenDate(next as DateEnum);
    };

    const goPrev = () => {
        const idx = dateList.indexOf(chosenDate);
        const prev = dateList[(idx - 1 + dateList.length) % dateList.length];
        setChosenDate(prev as DateEnum);
    };

  return (
    <DateBlockBtns>
        
        <ChosenDateBlock>{chosenDate}</ChosenDateBlock>
        <BtnBlock>
            <BtnDate onClick={e => goNext()}><img src={ChevronLeft} alt="Previous" /></BtnDate>
            <BtnDate onClick={e => goPrev()}><img src={ChevronRight} alt="Next" /></BtnDate>
        </BtnBlock>
      
    </DateBlockBtns>
  );
};

export default DateBlock;