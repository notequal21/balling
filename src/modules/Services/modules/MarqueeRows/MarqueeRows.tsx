import { ServicesText } from '../../ServicesText';
import style from './Marquee.module.scss';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MarqueeSlider.scss';
import { useMediaQuery } from 'usehooks-ts';

const MarqueeRows = () => {
  const isMobile = useMediaQuery('(max-width:992px)');

  return (
    <div className={style.marqueeRows}>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={'auto'}
        speed={1000}
        spaceBetween={isMobile ? 15 : 25}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`${style.slider} marquue-slider cursorHover cursorHover__draggable`}
      >
        {ServicesText.marquee[0].map((item, index) => (
          <SwiperSlide className={style.slide} key={index}>
            <div className={style.card}>{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        dir='rtl'
        modules={[Autoplay]}
        loop={true}
        slidesPerView={'auto'}
        speed={1000}
        spaceBetween={isMobile ? 15 : 25}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={`${style.slider} marquue-slider cursorHover cursorHover__draggable`}
      >
        {ServicesText.marquee[1].map((item, index) => (
          <SwiperSlide className={style.slide} key={index}>
            <div className={style.card}>{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MarqueeRows;
