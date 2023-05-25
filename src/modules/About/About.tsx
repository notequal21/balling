import style from './About.module.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useMediaQuery } from 'usehooks-ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import SwiperCore, { Thumbs, Controller, EffectFade } from 'swiper';
import { useState, useRef, useLayoutEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';

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
  const isMobile = useMediaQuery('(max-width:991px)');

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref: any = useRef<React.MutableRefObject<null>>(null);
  const swiper2Ref = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <section id='about'>
      <div className={style.about}>
        <div className='container'>
          <SectionTitle className={style.about__title}>About</SectionTitle>
          <div className={style.aboutBody}>
            <Swiper
              controller={{ control: firstSwiper }}
              loop={false}
              spaceBetween={isMobile ? 20 : 100}
              slidesPerView={'auto'}
              watchSlidesProgress
              slideToClickedSlide={true}
              onSwiper={(swiper) => {
                setThumbsSwiper(swiper);
                console.log(swiper);
              }}
              modules={[Thumbs, Controller]}
              className={style.aboutBody__btns}
            >
              <SwiperSlide
                className={`${style.aboutBody__btnsItem} ${
                  activeSlide === 0 && style.active
                }`}
              >
                Background
              </SwiperSlide>
              <SwiperSlide
                className={`${style.aboutBody__btnsItem} ${
                  activeSlide === 1 && style.active
                }`}
              >
                missions
              </SwiperSlide>
              <SwiperSlide
                className={`${style.aboutBody__btnsItem} ${
                  activeSlide === 2 && style.active
                }`}
              >
                values
              </SwiperSlide>
            </Swiper>
            <Swiper
              allowTouchMove={isMobile}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.activeIndex);
              }}
              onSwiper={(swiper) => {
                if (swiper1Ref.current !== null) {
                  swiper1Ref.current = swiper;
                }
              }}
              controller={{ control: secondSwiper }}
              spaceBetween={10}
              slidesPerView={1}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Thumbs, Controller, EffectFade]}
              effect={isMobile ? 'slide' : 'fade'}
              className={style.aboutBody__content}
              autoHeight
            >
              <SwiperSlide
                className={`${style.aboutBody__contentItem} ${
                  activeSlide === 0 && style.active
                }`}
              >
                <div className={style.text}>
                  <p>
                    Ballin Venture Capital is a boutique venture capital firm
                    pursuing investments in innovative technology that can make
                    a positive impact on society and the environment. Operating
                    for over a decade, Ballin VC supports entrepreneurs and
                    startups during the evolution of their company, from
                    pre-seed through to market penetration.
                  </p>
                  <p>
                    Ballin VC takes a two-pronged approach towards investing:
                    capital and consulting. We support our companies by
                    contributing to funding rounds and financial requirements,
                    and we also guide our companies through dedicated business
                    consulting. Whether advising on hiring a CTO or proposing
                    business development and market expansion opportunities, we
                    insure our investments with advice and expertise that can
                    help them succeed long term.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={`${style.aboutBody__contentItem} ${
                  activeSlide === 1 && style.active
                }`}
              >
                <div className={style.text}>
                  <p>
                    Ballin VC is a private fund that is committed to impact
                    investing. Our founder, Gregory Ballin, believes in changing
                    the world for the better, which is why we pursue projects
                    and companies that show great potential not only through
                    attractive returns, but also through sustainable
                    technologies.
                  </p>
                  <p>
                    We will facilitate technological innovations and
                    developments that can positively impact the world -
                    specifically environmental and social causes - through
                    strategic investments and business growth consulting.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className={`${style.aboutBody__contentItem} ${
                  activeSlide === 2 && style.active
                }`}
              >
                {isMobile ? (
                  <div className={style.values}>
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
                  <div className={style.values}>
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
                        <img src={svgIcon7} alt='' />
                      </div>
                      <div className={style.values__itemTitle}>
                        Professionalism
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
                  </div>
                )}
              </SwiperSlide>
            </Swiper>

            {/* <div className={style.aboutBody__titles}>
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
            </div> */}
            {/* <div className={style.aboutBody__content}>
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
