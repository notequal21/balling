import { ServicesText } from '../../ServicesText';
import MarqueeCard from '../../components/MarqueeCard/MarqueeCard';
import MarqueeRow from '../../components/MarqueeRow/MarqueeRow';
import style from './Marquee.module.scss';

const MarqueeRows = () => {
  return (
    <div className={style.marqueeRows}>
      {ServicesText.marquee.map((item, index) => (
        <MarqueeRow
          className={style.marqueeRows__item}
          direction={index % 2 === 0 ? 'left' : 'right'}
          key={index}
        >
          {item.map((item, index) => (
            <MarqueeCard key={index} className={style.marqueeRows__itemCard}>
              {item}
            </MarqueeCard>
          ))}
        </MarqueeRow>
      ))}
    </div>
  );
};

export default MarqueeRows;
