import axios from 'axios';
import { useState } from 'react';

const Root = () => {
  const [file, setFile] = useState<null | File>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append('file', file as File);

    axios.post('http://localhost:8000/api/upload/', formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
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
