import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button/Button';
import FileInput from '../../../../components/FileInput/FileInput';
import Input from '../../../../components/Input/Input';
import style from './Form.module.scss';

interface IForm {
  className?: string;
}

const Form = ({ className }: IForm) => {
  const formRef: any = useRef(null);
  const [isFormSend, setFormSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    // let form: any = formRef.current;
    let formData: any = new FormData(formRef.current);
    console.log(formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        setFormSend(true);
        setTimeout(() => {
          setFormSend(false);
        }, 5000);
        if (xhr.status === 200) {
          console.log('Mail send');
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    formRef.current.reset();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className={`${style.form} ${className}`}
      encType='multipart/form-data'
    >
      <input
        type='text'
        name='FormName'
        hidden
        value={'Submit a Proposal form'}
      />

      <div className={style.form__row}>
        <label>
          <span>My name is</span>
          <Input
            name={'Name'}
            label='Name'
            register={register}
            required
            placeholder='YOUR NAME'
            className={errors.Name && style.err}
          />
        </label>
        <label>
          <span>From</span>
          <Input
            name='Company_Name'
            label='Company_Name'
            register={register}
            required
            placeholder='COMPANY NAME'
            className={errors.Company_Name && style.err}
          />
        </label>
      </div>
      <div className={style.form__row}>
        <label>
          <span>Contact me</span>
          <Input
            name='Email'
            label='Email'
            register={register}
            required
            placeholder='YOUR EMAIL'
            pattern={
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
            className={errors.Email && style.err}
          />
        </label>
        <label>
          <Input
            name='Phone'
            label='Phone'
            register={register}
            required
            placeholder='YOUR PHONE'
            className={errors.Phone && style.err}
          />
        </label>
      </div>
      <div className={style.form__row}>
        <label>
          <span>Main field of activity</span>
          <Input
            name='Enter_Data'
            label='Enter_Data'
            register={register}
            placeholder='ENTER DATA'
          />
        </label>
        <label>
          <span>Who are you</span>
          <Input
            name='Who_are_you'
            label='Who_are_you'
            register={register}
            placeholder='One-line description'
          />
        </label>
      </div>
      <div className={style.form__row}>
        {/* <input type='file' name='file[]' multiple /> */}
        <label>
          <span>Proposal presentation</span>
          <FileInput name='file[]' />
        </label>
        <label>
          <span>One pager</span>
          <FileInput name='file[]' />
        </label>
      </div>
      {isFormSend && (
        <div className={style.form__success}>
          Thank you, we will contact you soon
        </div>
      )}
      <Button className={style.form__btn}>Submit</Button>
    </form>
  );
};

export default Form;
