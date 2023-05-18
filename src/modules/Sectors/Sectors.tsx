import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { ImgWebp } from '../../helpers/imgwebp';
import style from './Sectors.module.scss';
import { SectorsText } from './SectorsText';
import Card from './components/Card/Card';

const Sectors = () => {
  return (
    <section id='sectors' className={style.sectors}>
      <div className='container'>
        <SectionTitle className={style.sectors__title}>
          {SectorsText.title}
        </SectionTitle>
        <div className={style.sectorsBody}>
          {SectorsText.cards.map((item, index) => (
            <Card key={index} title={item.title} description={item.description}>
              <ImgWebp
                src={item.img}
                src2x={item.img2x}
                srcWebp={item.imgWebp}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
