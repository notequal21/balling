import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import style from './Card.module.scss';

interface ICard {
  title: string;
  children?: any;
  description: string;
  className?: string;
}

const Card = ({ title, children, description, className }: ICard) => {
  const cursorRef = useRef(null);

  let changeCursor = useCallback(() => {
    const cursor = cursorRef.current;

    let posX: any = null;
    let posY: any = null;

    let mouseX: any = null;
    let mouseY: any = null;

    gsap.to(
      {},
      {
        duration: 0.01,
        repeat: -1,
        onRepeat: () => {
          posX += (mouseX - posX) / 5;
          posY += (mouseY - posY) / 5;

          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      }
    );

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, []);

  useEffect(() => {
    changeCursor();
  }, [changeCursor]);

  return (
    <div
      className={`${style.card} cursorHover cursorHover__sectors ${className}`}
    >
      <div className={style.card__title}>{title}</div>
      <div ref={cursorRef} className={style.card__img}>
        {children}
      </div>
      <div className={style.card__description}>{description}</div>
    </div>
  );
};

export default Card;
