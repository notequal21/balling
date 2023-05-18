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

  const scrollToSection = (section: string) => {
    const body: any = document.querySelector('body');
    setBurgerOpen(false);

    if (body.classList.contains('lock')) {
      body.classList.remove('lock');
    }

    const item: any = document.querySelector(
      `#${section.toLocaleLowerCase().split(' ').join('')}`
    );

    window.scrollTo({
      top: item.offsetTop,
      behavior: 'smooth',
    });
  };

  const toggleBurger = () => {
    const body: any = document.querySelector('body');
    setBurgerOpen(!isBurgerOpen);
    body.classList.toggle('lock');
  };

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
                    <div
                      onClick={() => scrollToSection(item)}
                      key={index}
                      className={style.headerBody__navItem}
                    >
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
                onClick={toggleBurger}
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
            <div
              key={index}
              onClick={() => scrollToSection(item)}
              className={style.headerBody__navItem}
            >
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
