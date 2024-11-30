import { IChatroom } from '@/types/IChatroom';
import { create } from 'zustand';

interface IChatRoomStore {
  chatroom: IChatroom | null;
  setChatroom: (chatroom: IChatroom | null) => void;
}

export const useChatRoomStore = create<IChatRoomStore>((set) => ({
  chatroom: null,
  setChatroom: (chatroom) => set({ chatroom }),
}));
