import Marquee from 'react-fast-marquee';
import style from './MarqueeRow.module.scss';

interface IMarqueeRow {
  children: any;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
}

const MarqueeRow = ({ children, direction, className }: IMarqueeRow) => {
  return (
    <Marquee direction={direction} className={`${style.marquee} ${className}`}>
      {children}
    </Marquee>
  );
};

export default MarqueeRow;
