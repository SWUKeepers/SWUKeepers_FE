import { Container } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Container maxWidth='sm'>{children}</Container>;
};

export default Layout;
