import { useToastStore } from '@/states/useToastStore';
import { Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import Layout from '@/layouts/Layout';
import Loading from '@/components/Loading';
import { extractErrorMessageFromString } from '@/utils/errorMessageParser';
import { parseKakaoChatFile } from '@/utils/kakaoTalkParser';
import { useChatRoomStore } from '@/states/useChatRoomStore';
import { usePDFDataStore } from '@/states/usePDFDataStore';
import { useNavigate } from 'react-router-dom';

const FileUpload = () => {
  const [file, setFile] = useState<null | File>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { chatroom, setChatroom } = useChatRoomStore();
  const { pdfData, setPDFData } = usePDFDataStore();

  const { openToast } = useToastStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (chatroom) {
      setChatroom(null);
    }
    if (pdfData) {
      setPDFData(null);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    if (!file) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file as File);

    function arrayBufferToString(arrayBuffer: ArrayBuffer): string {
      const decoder = new TextDecoder('utf-8'); // 인코딩 형식 설정
      return decoder.decode(arrayBuffer); // ArrayBuffer를 문자열로 변환
    }

    const parsedChat = await parseKakaoChatFile(file);
    setChatroom(parsedChat);

    await axios
      .post(`${import.meta.env.VITE_API_URL}/api/upload/`, formData, {
        responseType: 'arraybuffer', // PDF 데이터를 바이너리로 처리
      })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'download.pdf'; // 기본 파일명

        if (contentDisposition) {
          const match = contentDisposition.match(/filename\*=UTF-8''(.+)/);
          if (match && match[1]) {
            fileName = decodeURIComponent(match[1]); // UTF-8 디코딩
          }
        }
        setPDFData({ url, filename: fileName });

        setIsLoading(false);
        setChatroom({ ...parsedChat, isBulling: true });
        openToast({ severity: 'success', message: '파일 업로드 성공' });
        navigate('/result');
      })
      .catch((error) => {
        if (error.response.status === 403) {
          openToast({
            severity: 'success',
            message: '파일 업로드 성공',
          });
          console.log(chatroom);
          navigate('/result');
        }

        setIsLoading(false);

        const errorString = arrayBufferToString(error.response.data);
        const errorMessage = extractErrorMessageFromString(errorString);
        openToast({ severity: 'error', message: errorMessage });
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    } else {
      setFile(null); // 파일 선택 취소
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Stack
        component={'form'}
        onSubmit={handleSubmit}
        spacing={3}
        alignItems={'center'}
      >
        <Stack alignItems={'center'} spacing={1}>
          <Typography variant='h4'>파일 업로드</Typography>
          <Typography variant='subtitle1'>
            텍스트 파일(.txt)을 업로드하여 사이버불링 여부를 진단받으세요.
          </Typography>
        </Stack>
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
