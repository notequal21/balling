import { useState, useRef } from 'react';
import pin from '../../assets/icons/pin';
import style from './FileInput.module.scss';

const FileInput = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileSelected = (): void => {
    const files: any = fileInputRef.current;
    setFileName(files.files[0].name);
  };

  return (
    <label className={style.fileInput}>
      <input ref={fileInputRef} onChange={handleFileSelected} type='file' />
      <div className={style.fake}>
        {fileName === '' ? 'ONLY PDF FILE' : fileName}
        {pin}
      </div>
    </label>
  );
};

export default FileInput;
