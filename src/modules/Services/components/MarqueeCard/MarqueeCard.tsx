import { SwiperSlide } from 'swiper/react';
import style from './MarqueeCard.module.scss';

interface IMarqueeCard {
  children: any;
  className?: string;
}

const MarqueeCard = ({ children, className }: IMarqueeCard) => {
  return (
    <SwiperSlide>
      <div className={`${style.card} ${className}`}>{children}</div>
    </SwiperSlide>
  );
};

export default MarqueeCard;
