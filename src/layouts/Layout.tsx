import { AppBar, Container, Typography } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#fff',
          p: '0.5rem',
          mb: '1rem',
        }}
      >
        <Typography
          variant='h6'
          sx={{ color: 'primary.main', fontStyle: 'italic' }}
        >
          SWUKeepers
        </Typography>
      </AppBar>
      <Container
        maxWidth='sm'
        sx={{
          minWidth: '320px',
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default Layout;
