import React, { useMemo, useState } from 'react';
import { useWindowWidth } from './hooks/useWindowWidth';
import { Container, LineHorizontal, LineVertical, Title } from './styles/components';
import HeaderBlock from './components/HeaderBlock';
import { theme } from './styles/theme';
import { CircleData, DateEnum, YearCont, yearContProps } from './interface/interface';
import TitleBlock from './components/TitleBlock';
import DateBlock from './components/DateBlock';
import {ChevronRight} from 'lucide-react'
import RingDial from './components/RingDial';
import SliderBlock from './components/SliderBlock';
import { sliderText } from './dateFunc';

function App() {

const MyWidth = useWindowWidth();
console.log(MyWidth)

const [yearContainer, setYearContainer] = useState<yearContProps>({
  '06/06': [2015, 2022],
  '05/06': [2003, 2013],
  '04/06': [1999, 2004],
  '03/06': [1992, 2007],
  '02/06': [1987, 1991],
})
type DateKey = keyof typeof DateEnum;


const sliderData = sliderText();





const [titlesArray, setTitlesArray] = useState<CircleData[]>([[2, 'Кино'],[3, 'Музыка'],[4, 'Наука'],[5, 'Путешествия'],[6, 'История']])
const [chosenPeriod, setChosenPeriod] = useState(DateEnum['06/06'])
const [newYearPeriod, seNewYearPeriod] = useState(DateEnum['06/06'])

const changeChosenDate = (date: DateEnum) =>{
  seNewYearPeriod(date)
  setChosenPeriod(date)
  const chosenDate = date.toString()
  const searchNum = chosenDate.split('')
  const newIndex = titlesArray.find(item => item[0] == +searchNum[1])
  setActiveIdx(titlesArray.indexOf(newIndex!))
  setActualDate(date);
}

const initialDateKey = useMemo<DateKey>(() => {
  const found = Object.keys(yearContainer).find(k => {
    const month = parseInt(k.split('/')[0], 10); // '06' -> 6
    return month === titlesArray[0][0];
  }) as DateKey | undefined;

  return found ?? '06/06';
}, [titlesArray]);


const [activeIdx, setActiveIdx] = useState<number>(titlesArray[0][0]);
const [actulaDate, setActualDate] = useState<DateKey>(initialDateKey)

const handleActiveChange = (idx: number) => {
    const newActiveNum = titlesArray[idx][0];
    const foundKey = Object.keys(yearContainer).find(k => {
      const month = parseInt(k.split('/')[0], 10);
      return month === newActiveNum;
    }) as DateKey | undefined;


    if (foundKey) {
      if(foundKey != actulaDate){
        setActualDate(foundKey);
        setActiveIdx(newActiveNum);
        const nextPeriod = DateEnum[foundKey];
        changeChosenDate(nextPeriod);
      }
    } else {
      console.log('error with new date')
    }

  
  };



  return (
    <div className="App">
      <Container>
        <HeaderBlock screenWidth={MyWidth}/>
        <TitleBlock choosenYearPeriod={yearContainer[chosenPeriod]} animatePeriod = {yearContainer[newYearPeriod]}/>
        {MyWidth > 770 ? <DateBlock chosenDate={chosenPeriod} setChosenDate={changeChosenDate}/> : undefined}
        {MyWidth > 770 ? <RingDial items={titlesArray} onChangeActive={handleActiveChange} externalActive = {activeIdx}/> : undefined}
        <SliderBlock outerslides={sliderData[actulaDate]} chosenDate={chosenPeriod} setChosenDate={changeChosenDate}/>
        {MyWidth > 770 ? <LineHorizontal/> : undefined}
        {MyWidth > 770 ? <LineVertical/> : undefined}
      </Container>
      
    </div>
  );
}

export default App;
