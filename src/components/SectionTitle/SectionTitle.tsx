import style from './SectionTitle.module.scss';

interface ISectionTitle {
  children: string;
  className?: string;
}

const SectionTitle = ({ children, className }: ISectionTitle) => {
  return <div className={`${style.title} ${className}`}>{children}</div>;
};

export default SectionTitle;
