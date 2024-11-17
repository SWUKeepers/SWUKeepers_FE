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
      spacing={1}
      sx={{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        padding: '1rem',
        backgroundColor: isBulling ? '#f8f8f8' : 'lightgray',
      }}
    >
      {messageData.map((message) => (
        <Message key={message.id} {...message} />
      ))}
    </Stack>
  );
};

export default Chatroom;
