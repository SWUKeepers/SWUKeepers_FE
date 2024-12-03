import { Alert, Snackbar, Typography } from '@mui/material';

const ToastAlert = ({
  severity,
  message,
  open,
  closeToast,
}: {
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
  open: boolean;
  closeToast: () => void;
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      autoHideDuration={6000}
      key={message}
      onClose={closeToast}
    >
      <Alert severity={severity} sx={{ width: '100%' }}>
        <Typography sx={{ wordBreak: 'keep-all' }}>{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default ToastAlert;
