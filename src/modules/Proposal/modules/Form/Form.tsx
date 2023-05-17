import Button from '../../../../components/Button/Button';
import FileInput from '../../../../components/FileInput/FileInput';
import Input from '../../../../components/Input/Input';
import style from './Form.module.scss';

interface IForm {
  className?: string;
}

const Form = ({ className }: IForm) => {
  return (
    <form className={`${style.form} ${className}`}>
      <div className={style.form__row}>
        <label>
          <span>My name is</span>
          <Input placeholder='YOUR NAME' />
        </label>
        <label>
          <span>From</span>
          <Input placeholder='COMPANY NAME' />
        </label>
      </div>
      <div className={style.form__row}>
        <label>
          <span>Contact me</span>
          <Input placeholder='YOUR EMAIL' />
        </label>
        <label>
          <Input placeholder='YOUR PHONE' />
        </label>
      </div>
      <div className={style.form__row}>
        <label>
          <span>Main field of activity</span>
          <Input placeholder='ENTER DATA' />
        </label>
        <label>
          <span>Who are you</span>
          <Input placeholder='One-line description' />
        </label>
      </div>
      <div className={style.form__row}>
        <label>
          <span>Proposal presentation</span>
          <FileInput />
        </label>
        <label>
          <span>One pager</span>
          <FileInput />
        </label>
      </div>
      <Button className={style.form__btn}>Submit</Button>
    </form>
  );
};

export default Form;
