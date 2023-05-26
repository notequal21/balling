import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { ImgWebp } from '../../helpers/imgwebp';
import style from './Sectors.module.scss';
import { SectorsText } from './SectorsText';
import Card from './components/Card/Card';

const Sectors = () => {
  const isMobile = useMediaQuery('(max-width:991px)');
  const [activeItem, setActiveItem]: any = useState(-1);

  const setActive = (index: number) => {
    if (index === activeItem) {
      setActiveItem(null);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <section id='sectors' className={style.sectors}>
      <div className='container'>
        <SectionTitle className={style.sectors__title}>
          {SectorsText.title}
        </SectionTitle>
        <div className={style.sectorsBody}>
          {SectorsText.cards.map((item, index) => (
            <Card
              isActive={activeItem === index}
              handler={() => setActive(index)}
              key={index}
              title={item.title}
              description={item.description}
            >
              <ImgWebp
                src={item.img}
                src2x={item.img2x}
                srcWebp={item.imgWebp}
                // src={isMobile ? item.imgMobile : item.img}
                // src2x={isMobile ? item.imgMobile2x : item.img2x}
                // srcWebp={isMobile ? item.imgMobileWebp : item.imgWebp}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
