import { useToastStore } from '@/states/useToastStore';
import { Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Layout from '@/layouts/Layout';

const FileUpload = () => {
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
      .post(`${import.meta.env.VITE_API_URL}/api/upload/`, formData)
      .then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers['content-type'],
        });
        const url = window.URL.createObjectURL(blob);
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'download.pdf'; // 기본값

        if (contentDisposition) {
          const match = contentDisposition.match(/filename="(.+)"/);
          if (match && match[1]) {
            fileName = match[1];
          }
        }

        // 파일 다운로드 트리거ㄴ
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
        console.log('Blob size:', blob.size);
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
    <Layout>
      <Stack
        component={'form'}
        onSubmit={handleSubmit}
        spacing={2}
        alignItems={'center'}
      >
        <Button
          component={'label'}
          role={undefined}
          variant='contained'
          tabIndex={-1}
          sx={{
            width: '100%',
            height: '30vh',
            p: 1.5,
            borderRadius: '12px',
          }}
        >
          <Stack
            sx={{
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              border: '2px dashed #fff',
              borderRadius: '10px',
            }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <DriveFolderUploadOutlinedIcon
              sx={{
                width: '25%',
                height: '25%',
              }}
            />
            <Typography>
              {file ? `선택된 파일 : ${file.name}` : '파일을 선택해주세요.'}
            </Typography>
          </Stack>
          <input
            type='file'
            id='file_input'
            onChange={handleChange}
            accept='.txt'
            style={{ display: 'none' }}
          />
        </Button>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{
            width: '10rem',
            height: '3rem',
          }}
          disabled={!file}
        >
          전송하기
        </Button>
      </Stack>
    </Layout>
  );
};

export default FileUpload;
