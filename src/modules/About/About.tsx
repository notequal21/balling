import { useLayoutEffect, useRef } from 'react';
import style from './About.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useMediaQuery } from 'usehooks-ts';

// img imports
import svgIcon1 from './assets/icon1.svg';
import svgIcon2 from './assets/icon2.svg';
import svgIcon3 from './assets/icon3.svg';
import svgIcon4 from './assets/icon4.svg';
import svgIcon5 from './assets/icon5.svg';
import svgIcon6 from './assets/icon6.svg';
import svgIcon7 from './assets/icon7.svg';
import svgIcon8 from './assets/icon8.svg';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = useMediaQuery('(max-width:500px)');
  const gsapScope = useRef(null);
  const gsapTrigger = useRef(null);

  useLayoutEffect(() => {
    const titleArray = document.querySelectorAll(
      `.${style.aboutBody__titlesItem}`
    );
    const contentArray = document.querySelectorAll(
      `.${style.aboutBody__contentItem}`
    );

    let ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: gsapTrigger.current,
          pin: true,
          scrub: 0.5,
          markers: false,
          start: 'top',
          end: isMobile ? '+=1000' : '+=1500',

          onUpdate: (self) => {
            titleArray.forEach((item) =>
              item.classList.remove(`${style.active}`)
            );

            if (self.progress >= 0.05 && self.progress <= 0.07) {
              titleArray[0].classList.remove(`${style.active}`);
            } else if (self.progress > 0.07 && self.progress < 0.33) {
              contentArray.forEach((item) =>
                item.classList.remove(`${style.active}`)
              );

              titleArray[1].classList.add(`${style.active}`);
              contentArray[0].classList.add(`${style.active}`);
            } else if (self.progress > 0.33 && self.progress < 0.66) {
              contentArray.forEach((item) =>
                item.classList.remove(`${style.active}`)
              );

              titleArray[2].classList.add(`${style.active}`);
              contentArray[1].classList.add(`${style.active}`);
            } else if (self.progress > 0.66) {
              contentArray.forEach((item) =>
                item.classList.remove(`${style.active}`)
              );

              titleArray[3].classList.add(`${style.active}`);
              contentArray[2].classList.add(`${style.active}`);
            } else {
              titleArray[0].classList.add(`${style.active}`);
              contentArray[0].classList.add(`${style.active}`);
            }
          },
        },
      });
    }, gsapScope);

    return () => ctx.revert();
  });

  return (
    <section id='about' ref={gsapScope}>
      <div ref={gsapTrigger} className={style.about}>
        <div className='container'>
          <div className={style.aboutBody}>
            <div className={style.aboutBody__titles}>
              <SectionTitle
                className={`${style.about__title} ${style.aboutBody__titlesItem} ${style.active}`}
              >
                About
              </SectionTitle>
              <div className={`${style.aboutBody__titlesItem} ${style.small}`}>
                background
              </div>
              <div className={`${style.aboutBody__titlesItem} ${style.small}`}>
                missions
              </div>
              <div className={`${style.aboutBody__titlesItem} ${style.small}`}>
                values
              </div>
            </div>
            <div className={style.aboutBody__content}>
              <div
                className={`${style.aboutBody__contentItem} ${style.active}`}
              >
                <p>
                  Ballin Venture Capital is a boutique venture capital firm
                  pursuing investments in innovative technology that can make a
                  positive impact on society and the environment. Operating for
                  over a decade, Ballin VC supports entrepreneurs and startups
                  during the evolution of their company, from pre-seed through
                  to market penetration.
                </p>
                <p>
                  Ballin VC takes a two-pronged approach towards investing:
                  capital and consulting. We support our companies by
                  contributing to funding rounds and financial requirements, and
                  we also guide our companies through dedicated business
                  consulting. Whether advising on hiring a CTO or proposing
                  business development and market expansion opportunities, we
                  insure our investments with advice and expertise that can help
                  them succeed long term.
                </p>
              </div>
              <div className={style.aboutBody__contentItem}>
                <p>
                  Ballin VC is a private fund that is committed to impact
                  investing. Our founder, Gregory Ballin, believes in changing
                  the world for the better, which is why we pursue projects and
                  companies that show great potential not only through
                  attractive returns, but also through sustainable technologies.
                </p>
                <p>
                  We will facilitate technological innovations and developments
                  that can positively impact the world - specifically
                  environmental and social causes - through strategic
                  investments and business growth consulting.
                </p>
              </div>
              {isMobile ? (
                <div
                  className={`${style.aboutBody__contentItem} ${style.values}`}
                >
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon2} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>Transparency</div>
                  </div>
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon1} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>
                      Success-oriented
                    </div>
                  </div>
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon4} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>Creativity</div>
                  </div>
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon5} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>Innovation</div>
                  </div>
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon6} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>
                      High risks / high rewards
                    </div>
                  </div>
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon8} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>Impact</div>
                  </div>

                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon3} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>
                      Sustainability
                    </div>
                  </div>
                  <div className={style.values__item}>
                    <div className={style.values__itemIco}>
                      <img src={svgIcon7} alt='' />
                    </div>
                    <div className={style.values__itemTitle}>
                      Professionalism
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className={`${style.aboutBody__contentItem} ${style.values}`}
                >
                  <div className={style.valuesRow}>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon1} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>
                        Success-oriented
                      </div>
                    </div>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon2} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>
                        Transparency
                      </div>
                    </div>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon3} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>
                        Sustainability
                      </div>
                    </div>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon4} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>Creativity</div>
                    </div>
                  </div>
                  <div className={style.valuesRow}>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon5} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>Innovation</div>
                    </div>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon6} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>
                        High risks / high rewards
                      </div>
                    </div>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon7} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>
                        Professionalism
                      </div>
                    </div>
                    <div className={style.values__item}>
                      <div className={style.values__itemIco}>
                        <img src={svgIcon8} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>Impact</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
