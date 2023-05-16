import mailSvg from '../../assets/icons/mail';
import style from './Header.module.scss';
import { navLinks } from './navLinks';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

// img imports
import logo from './assets/logo.svg';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:767px)');
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <header className={style.header}>
        <div className='container'>
          <div className={style.headerBody}>
            <div className={style.headerBody__logo}>
              <img src={logo} alt='' />
            </div>
            {!isMobile && (
              <>
                <div className={style.headerBody__nav}>
                  {navLinks.map((item, index) => (
                    <div key={index} className={style.headerBody__navItem}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={style.headerBody__btn}>
                  {mailSvg}
                  Get in touch
                </div>
              </>
            )}
            {isMobile && (
              <div
                onClick={() => setBurgerOpen(!isBurgerOpen)}
                className={`${style.headerBody__burger} ${
                  isBurgerOpen && style.active
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>
        </div>
      </header>
      {isMobile && (
        <div
          className={`${style.headerBody__nav} ${isBurgerOpen && style.open}`}
        >
          {navLinks.map((item, index) => (
            <div key={index} className={style.headerBody__navItem}>
              {item}
            </div>
          ))}
          <div className={style.headerBody__btn}>
            {mailSvg}
            Get in touch
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
