import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import style from './Contacts.module.scss';
import { ContactsText } from './ContactsText';
import Input from '../../components/Input/Input';
import { ImgWebp } from '../../helpers/imgwebp';

import img from './assets/image.png';
import img2x from './assets/image@2x.png';
import imgWebp from './assets/image.webp';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import { useMediaQuery } from 'usehooks-ts';

const Contacts = () => {
  const isMobile = useMediaQuery('(max-width:767px)');

  const formRef: any = useRef(null);
  const [isFormSend, setFormSend] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
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
    <section id='contact' className={style.contacts}>
      <div className='container'>
        <div className={style.contactsBody}>
          <div className={style.contactsBody__content}>
            <SectionTitle className={style.contactsBody__title}>
              {ContactsText.title}
            </SectionTitle>
            <SectionDescription className={style.contactsBody__subtitle}>
              {ContactsText.subtitle}
            </SectionDescription>
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              encType='multipart/form-data'
              className={style.contactsBody__form}
            >
              <input
                type='text'
                name='FormName'
                hidden
                value={'Contacts form'}
              />
              {isMobile && (
                <>
                  <Input
                    name={'Name'}
                    label='Name'
                    register={register}
                    required
                    placeholder='Name'
                    className={`${style.contactsBody__formInput} ${
                      errors.Name && style.err
                    }`}
                  />
                  <Input
                    name={'Email'}
                    label='Email'
                    register={register}
                    required
                    placeholder='Email'
                    className={`${style.contactsBody__formInput} ${
                      errors.Name && style.err
                    }`}
                    pattern={
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    }
                  />
                  <Input
                    name={'Phone'}
                    label='Phone'
                    register={register}
                    required
                    placeholder='Phone'
                    className={`${style.contactsBody__formInput} ${
                      errors.Name && style.err
                    }`}
                  />
                  <Input
                    name={'Question'}
                    label='Question'
                    register={register}
                    required
                    placeholder='Question'
                    className={`${style.contactsBody__formInput} ${
                      errors.Name && style.err
                    }`}
                  />
                </>
              )}

              {!isMobile && (
                <>
                  <div className={style.contactsBody__formRow}>
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
                  </div>
                  <div className={style.contactsBody__formRow}>
                    <label>
                      <span>Contact me</span>
                      <Input
                        name={'Email'}
                        label='Email'
                        register={register}
                        required
                        placeholder='EMAIL'
                        className={errors.Name && style.err}
                        pattern={
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        }
                      />
                      <Input
                        name={'Phone'}
                        label='Phone'
                        register={register}
                        required
                        placeholder='PHONE'
                        className={errors.Name && style.err}
                      />
                    </label>
                  </div>
                  <div className={style.contactsBody__formRow}>
                    <label>
                      <span>I’m interested in</span>
                      <Input
                        name={'Question'}
                        label='Question'
                        register={register}
                        required
                        placeholder='QUESTION'
                        className={errors.Name && style.err}
                      />
                    </label>
                  </div>
                </>
              )}

              {isFormSend && (
                <div className={style.contactsBody__success}>
                  Thank you, we will contact you soon
                </div>
              )}

              <Button className={style.contactsBody__formBtn}>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
