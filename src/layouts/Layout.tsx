import { AppBar, Container, Typography } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        padding: '0 !important',
      }}
    >
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#fff',
          p: '0.5rem',
          mb: '1.5rem',
        }}
      >
        <Typography variant='h6' sx={{ color: '#000', fontStyle: 'italic' }}>
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
    </Container>
  );
};

export default Layout;
