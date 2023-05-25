import { useCallback, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import style from './CustomCursor.module.scss';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  let changeCursor = useCallback(() => {
    const cursorHover = document.querySelectorAll(`.cursorHover`);
    const cursor: any = cursorRef.current;
    const follower: any = followerRef.current;

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

          gsap.set(follower, {
            css: {
              left: posX - 29,
              top: posY - 29,
            },
          });
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

  useLayoutEffect(() => {
    changeCursor();
  });

  return (
    <>
      <div ref={cursorRef} className={style.cursor}></div>
      <div ref={followerRef} className={style.follower}></div>
    </>
  );
};

export default CustomCursor;
