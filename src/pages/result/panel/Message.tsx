import { IMessageProps } from '@/types/IChatroom';
import { Stack, SxProps, Typography } from '@mui/material';

// 나
const senderStyle: SxProps = {
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '1rem 1rem 0 1rem',
  padding: '0.75rem 1.5rem',
  display: 'inline-block',
};

// 상대
const receiverStyle: SxProps = {
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '1rem 1rem 1rem 0',
  padding: '0.75rem 1.5rem',
  display: 'inline-block',
};

const Message = ({ message, sender }: IMessageProps) => {
  return (
    <Stack
      direction={'column'}
      alignItems={sender === '나' ? 'flex-end' : 'flex-start'}
      spacing={1}
      sx={{ width: '100%' }}
    >
      <Typography
        variant={'body1'}
        sx={{
          px: 0.5,
        }}
      >
        {sender}
      </Typography>
      <Typography
        variant='body1'
        sx={sender === '나' ? senderStyle : receiverStyle}
      >
        {message}
      </Typography>
    </Stack>
  );
};

export default Message;
