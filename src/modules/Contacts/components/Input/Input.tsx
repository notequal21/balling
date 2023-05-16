import style from './Input.module.scss';

interface IInput {
  placeholder: string;
  className?: string;
}

const Input = ({ placeholder, className }: IInput) => {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className={`${style.input} ${className}`}
    />
  );
};

export default Input;
