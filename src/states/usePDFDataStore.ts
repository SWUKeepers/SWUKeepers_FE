import { create } from 'zustand';

interface IPDFData {
  url: string;
  filename: string;
}

interface IPDFDataStore {
  pdfData: IPDFData | null;
  setPDFData: (pdfData: IPDFData | null) => void;
}

export const usePDFDataStore = create<IPDFDataStore>((set) => ({
  pdfData: null,
  setPDFData: (pdfData) => set({ pdfData }),
}));
