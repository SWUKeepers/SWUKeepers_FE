import { IMessageProps } from '@/types/IChatroom';
import { Stack } from '@mui/material';
import Message from './Message';

const Chatroom = ({
  messageData,
  isBulling,
}: {
  messageData: IMessageProps[];
  isBulling: boolean;
}) => {
  return (
    <Stack
      direction={'column'}
      spacing={2}
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        padding: '1rem',
        backgroundColor: isBulling ? 'error.light' : 'lightgray',
        boxSizing: 'border-box',
      }}
    >
      {messageData.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </Stack>
  );
};

export default Chatroom;
