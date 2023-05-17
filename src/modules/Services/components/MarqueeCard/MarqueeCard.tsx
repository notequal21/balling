import style from './MarqueeCard.module.scss';

interface IMarqueeCard {
  children: any;
  className?: string;
}

const MarqueeCard = ({ children, className }: IMarqueeCard) => {
  return <div className={`${style.card} ${className}`}>{children}</div>;
};

export default MarqueeCard;
