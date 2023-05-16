import style from './Card.module.scss';

interface ICard {
  className?: string;
  ico: string;
  title: string;
  index: number;
}

const Card = ({ className, ico, title, index }: ICard) => {
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
      <div className={style.card__ico}>
        <img src={ico} alt='' />
      </div>
      <div className={style.card__title}>{title}</div>
    </div>
  );
};

export default Card;
