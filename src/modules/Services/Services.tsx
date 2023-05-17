import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import style from './Services.module.scss';
import { ServicesText } from './ServicesText';
import MarqueeRows from './modules/MarqueeRows/MarqueeRows';

const Services = () => {
  return (
    <section className={style.services}>
      <div className='container'>
        <SectionTitle className={style.services__title}>
          {ServicesText.title}
        </SectionTitle>
        <SectionDescription className={style.services__description}>
          {ServicesText.description}
        </SectionDescription>
      </div>
      <MarqueeRows />
    </section>
  );
};

export default Services;
