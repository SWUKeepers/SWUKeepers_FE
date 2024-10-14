import axios from 'axios';
import { useState } from 'react';

const Root = () => {
  const [file, setFile] = useState<null | File>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:8000/api/upload/', formData)
      .then((response) => console.log(response))
      .then(() => {
        alert('파일 업로드에 성공했습니다.');
      })
      .catch((error) => {
        alert('파일 업로드에 실패했습니다.');
        console.error(error);
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
