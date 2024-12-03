import { create } from 'zustand';

interface IToastProps {
  severity: 'info' | 'error' | 'warning' | 'success';
  message: string;
  open: boolean;
}

interface IToastStore {
  toastProps: IToastProps;
  openToast: (toast: {
    severity: 'info' | 'error' | 'warning' | 'success';
    message: string;
  }) => void;
  closeToast: () => void;
}

export const useToastStore = create<IToastStore>((set) => ({
  toastProps: { severity: 'info', message: '', open: false },
  openToast: (toast) =>
    set({
      toastProps: {
        severity: toast.severity,
        message: toast.message,
        open: true,
      },
    }),
  closeToast: () =>
    set({ toastProps: { severity: 'info', message: '', open: false } }),
}));
