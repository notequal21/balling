import mailSvg from '../../assets/icons/mail';
import { navLinks } from '../Header/navLinks';
import style from './Footer.module.scss';
import { FooterText } from './FooterText';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.footerLinks}>
          <span>{FooterText.linksTitle}</span>
          <div className={style.footerLinks__content}>
            {navLinks.map((item, index) => {
              if (item !== 'Contact') {
                return (
                  <div key={index} className={style.footerLinks__contentItem}>
                    {item}
                  </div>
                );
              } else {
                return '';
              }
            })}
          </div>
        </div>
        <div className={style.footerBottom}>
          <a
            href='mailto:info@ballinvc.com'
            className={style.footerBottom__mail}
          >
            {mailSvg}
            info@ballinvc.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
