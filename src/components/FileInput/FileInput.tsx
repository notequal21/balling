import { useState, useRef } from 'react';
import pin from '../../assets/icons/pin';
import style from './FileInput.module.scss';

interface IFileInput {
  name?: string;
  label?: any;
  register?: any;
  required?: any;
  pattern?: any;
  className?: any;
}

const FileInput = ({
  name,
  label,
  register,
  required,
  pattern,
  className,
}: IFileInput) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileSelected = (): void => {
    const files: any = fileInputRef.current;
    setFileName(files.files[0].name);
  };

  return (
    <label className={style.fileInput}>
      <input
        name={name}
        // {...register(label, { required, pattern: pattern })}
        ref={fileInputRef}
        onChange={handleFileSelected}
        type='file'
        multiple
      />
      <div className={style.fake}>
        {fileName === '' ? 'ONLY PDF FILE' : fileName}
        {pin}
      </div>
    </label>
  );
};

export default FileInput;
