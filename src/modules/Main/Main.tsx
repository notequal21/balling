import style from './Main.module.scss';
import { MainText } from './MainText';
import Cards from './modules/Cards/Cards';

const Main = () => {
  return (
    <main className={style.main}>
      <div className='container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__label}>{MainText.label}</div>
          <div className={style.mainBody__title}>{MainText.title}</div>
          <Cards className={style.mainBody__cards} />
        </div>
      </div>
    </main>
  );
};

export default Main;
