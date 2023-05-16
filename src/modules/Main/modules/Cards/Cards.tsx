import { MainText } from '../../MainText';
import Card from '../../components/Card/Card';
import style from './Cards.module.scss';

interface ICards {
  className?: string;
}

const Cards = ({ className }: ICards) => {
  return (
    <div className={`${style.cards} ${className}`}>
      {MainText.cards.map((item, index) => (
        <Card
          ico={item.ico}
          title={item.title}
          index={index}
          className={style.cards__item}
        />
      ))}
    </div>
  );
};

export default Cards;
