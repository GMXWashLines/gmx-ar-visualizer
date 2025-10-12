import { create } from 'zustand';

export const useAppStore = create((set) => ({
  selectedProduct: null,
  setSelectedProduct: (p) => set({ selectedProduct: p }),
}));
