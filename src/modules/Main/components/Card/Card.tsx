import style from './Card.module.scss';
import './anim.scss';

interface ICard {
  animIndex?: string;
  className?: string;
  ico: any;
  title: string;
  index: number;
}

const Card = ({ animIndex, className, ico, title, index }: ICard) => {
  return (
    <div className={`${style.card} ${className}`}>
      <div className={style.card__dots}>
        {index === 0 && <span></span>}
        {index === 1 && (
          <>
            <span></span>
            <span></span>
          </>
        )}
        {index === 2 && (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>
      <div className={`${style.card__ico} main-ico ${animIndex}`}>{ico}</div>
      <div className={style.card__title}>{title}</div>
    </div>
  );
};

export default Card;
