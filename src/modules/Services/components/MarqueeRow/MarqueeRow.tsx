import Marquee from 'react-fast-marquee';
import style from './MarqueeRow.module.scss';
import { Swiper } from 'swiper/react';
import 'swiper/css';

interface IMarqueeRow {
  children: any;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const MarqueeRow = ({ children, direction, className }: IMarqueeRow) => {
  return (
    // <Marquee direction={direction} className={`${style.marquee} ${className}`}>
    //   {children}
    // </Marquee>
    <Swiper>{children}</Swiper>
  );
};

export default MarqueeRow;
