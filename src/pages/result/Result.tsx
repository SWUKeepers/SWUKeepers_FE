import Layout from '@/layouts/Layout';
import Chatroom from './panel/Chatroom';
import { useChatRoomStore } from '@/states/useChatRoomStore';
import { usePDFDataStore } from '@/states/usePDFDataStore';
import { Button } from '@mui/material';
import { useEffect } from 'react';

const Result = () => {
  const { chatroom, setChatroom } = useChatRoomStore();
  const { pdfData, setPDFData } = usePDFDataStore();

  useEffect(() => {
    return () => {
      setChatroom(null);
      setPDFData(null);
    };
  }, []);

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
      <Chatroom {...chatroom} />

      <Button onClick={handleDownload} variant='contained'>
        PDF 다운로드
      </Button>
    </Layout>
  );
};

export default Result;
