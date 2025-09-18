import React, {FC} from 'react';
import classes from './Header.module.css'
import { Header } from '../styles/components';

interface HeaderBlockProps{
    screenWidth: number;
}
const HeaderBlock:FC<HeaderBlockProps> = ({screenWidth}) => {
  return (
    <Header>
      <div>
        Историчесие <br/> даты
      </div>
    

    </Header>
  );
};

export default HeaderBlock;