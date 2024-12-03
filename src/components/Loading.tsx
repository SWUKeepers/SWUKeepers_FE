import Layout from '@/layouts/Layout';
import { Backdrop, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Layout>
      <Backdrop open={true} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color='primary' />
      </Backdrop>
    </Layout>
  );
};

export default Loading;
