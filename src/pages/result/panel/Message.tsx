import { Box, Stack, SxProps } from '@mui/material';

interface IMessageProps {
  message: string;
  sender: string;
}

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
      direction={'row'}
      justifyContent={sender === '나' ? 'flex-end' : 'flex-start'}
      spacing={1}
      sx={{ width: '100%' }}
    >
      <Box
        sx={sender === '나' ? senderStyle : receiverStyle}
        component={'span'}
      >
        {message}
      </Box>
    </Stack>
  );
};

export default Message;
