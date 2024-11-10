import { useToastStore } from '@/states/useToastStore';
import axios from 'axios';
import { useState } from 'react';

const Root = () => {
  const [file, setFile] = useState<null | File>(null);

  const { openToast } = useToastStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();

    formData.append('file', file as File);

    axios
      .post('http://localhost:8000/api/upload/', formData)
      .then((response) => {
        openToast({ severity: 'success', message: '파일 업로드 성공' });
      })
      .catch((error) => {
        console.error(error);
        openToast({ severity: 'error', message: error.response.data.detail });
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null); // 파일이 선택되지 않은 경우
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='file'
        id='file_input'
        onChange={handleChange}
        accept='.txt'
      />
      <button type='submit'>전송하기</button>
    </form>
  );
};

export default Root;
