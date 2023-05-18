import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import style from './Contacts.module.scss';
import { ContactsText } from './ContactsText';
import Input from '../../components/Input/Input';

const Contacts = () => {
  return (
    <section id='contact' className={style.contacts}>
      <div className='container'>
        <div className={style.contactsBody}>
          <div className={style.contactsBody__content}>
            <SectionTitle className={style.contactsBody__title}>
              {ContactsText.title}
            </SectionTitle>
            <div className={style.contactsBody__subtitle}>
              {ContactsText.subtitle}
            </div>
            <div className={style.contactsBody__form}>
              {ContactsText.form.inputs.map((item, index) => (
                <Input
                  key={index}
                  placeholder={item}
                  className={style.contactsBody__formInput}
                />
              ))}

              <Button className={style.contactsBody__formBtn}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
