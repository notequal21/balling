import style from './Button.module.scss';

interface IButton {
  children: string;
  className?: string;
}

const Button = ({ className, children }: IButton) => {
  return <button className={`${style.button} ${className}`}>{children}</button>;
};

export default Button;
