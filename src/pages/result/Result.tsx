import Layout from '@/layouts/Layout';
import Chatroom from './panel/Chatroom';
import { useChatRoomStore } from '@/states/useChatRoomStore';
import { usePDFDataStore } from '@/states/usePDFDataStore';
import { Button, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';

const Result = () => {
  const { chatroom, setChatroom } = useChatRoomStore();
  const { pdfData, setPDFData } = usePDFDataStore();

  const handleDownload = () => {
    if (!pdfData) {
      return;
    }
    const { url, filename } = pdfData;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  };

  if (chatroom === null) {
    return <Layout>파일을 업로드해주세요.</Layout>;
  }
  return (
    <Layout>
      <Stack
        direction='row'
        spacing={2}
        sx={{ marginBottom: 2 }}
        justifyContent={'space-between'}
      >
        <Stack>
          <Typography variant='h4'>분석 결과</Typography>
          <Typography variant='h6'>
            {chatroom.isBulling ? '사이버불링 감지됨' : '사이버불링 아님'}
          </Typography>
        </Stack>
        <Button
          variant='contained'
          onClick={handleDownload}
          disabled={!!pdfData}
        >
          PDF 다운로드
        </Button>
      </Stack>
      <Chatroom {...chatroom} />
    </Layout>
  );
};

export default Result;
