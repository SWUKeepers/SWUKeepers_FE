import { IChatroom, IMessageProps } from '@/types/IChatroom';
export const parseKakaoChatFile = async (file: File): Promise<IChatroom> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const lines = content.split('\n').map((line) => line.trim());
        const messageData: IMessageProps[] = [];
        let idCounter = 1;

        // 정규식 패턴
        const pattern = /^\[(.*?)\] \[(오전|오후) (\d{1,2}:\d{2})\] (.+)$/;

        lines.forEach((line, index) => {
          const match = line.match(pattern);
          if (match) {
            const [, sender, amPm, time, message] = match;

            messageData.push({
              id: idCounter++,
              sender,
              message,
            });
          } else {
            console.warn(`Line ${index + 1} did not match: ${line}`);
          }
        });

        const isBulling = messageData.some((msg) =>
          msg.message.includes('비속어')
        );

        resolve({
          isBulling,
          messageData,
        });
      } catch (error) {
        reject('Error parsing the file.');
      }
    };

    reader.onerror = () => {
      reject('Failed to read the file.');
    };

    reader.readAsText(file);
  });
};
