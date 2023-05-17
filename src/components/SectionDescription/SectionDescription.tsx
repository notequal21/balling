import style from './SectionDescription.module.scss';

interface ISectionDescription {
  children: string;
  className?: string;
}

const SectionDescription = ({ className, children }: ISectionDescription) => {
  return <div className={`${style.description} ${className}`}>{children}</div>;
};

export default SectionDescription;
