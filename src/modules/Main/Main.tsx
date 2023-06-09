import SectionTitle from '../../components/SectionTitle/SectionTitle';
import style from './Main.module.scss';
import { MainText } from './MainText';
import Cards from './modules/Cards/Cards';

const Main = () => {
  return (
    <main id='home' className={style.main}>
      <div className='container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__label}>{MainText.label}</div>
          <SectionTitle className={style.mainBody__title}>
            {MainText.title}
          </SectionTitle>
          <Cards className={style.mainBody__cards} />
        </div>
      </div>
    </main>
  );
};

export default Main;
