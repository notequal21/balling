import { useState } from 'react';
import style from './Card.module.scss';
import { useMediaQuery } from 'usehooks-ts';

import aroowSvg from './assets/arrowSvg';

interface ICard {
  isActive?: boolean;
  handler?: any;
  title: string;
  children?: any;
  description: string;
  className?: string;
}

const Card = ({
  isActive = false,
  handler,
  title,
  children,
  description,
  className,
}: ICard) => {
  return (
    <div
      className={`${style.card} cursorHover cursorHover__sectors ${className} ${
        isActive && style.active
      }`}
    >
      <div className={style.cardTop} onClick={() => handler()}>
        <div className={style.cardTop__title}>{title}</div>
        <div className={style.cardTop__arrow}>{aroowSvg}</div>
      </div>
      <div className={style.cardContent}>
        <div className={style.cardContent__img}>{children}</div>
        <div className={style.cardContent__description}>{description}</div>
      </div>
    </div>
  );
};

export default Card;
