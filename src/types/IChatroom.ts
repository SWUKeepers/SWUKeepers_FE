export interface IChatroom {
  isBulling: boolean;
  messageData: IMessageProps[];
}

export interface IMessageProps {
  id: number;
  message: string;
  sender: string;
}
