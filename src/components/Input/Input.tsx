import style from './Input.module.scss';

interface IInput {
  name?: string;
  placeholder: string;
  className?: string;
  label?: any;
  register?: any;
  required?: any;
  pattern?: any;
}

const Input = ({
  name,
  placeholder,
  className,
  label,
  register,
  required,
  pattern,
}: IInput) => {
  if (register) {
    return (
      <input
        {...register(label, { required, pattern: pattern })}
        type='text'
        name={name}
        placeholder={placeholder}
        className={`${style.input} ${className}`}
      />
    );
  } else {
    return (
      <input
        name={name}
        type='text'
        placeholder={placeholder}
        className={`${style.input} ${className}`}
      />
    );
  }
};

export default Input;
