import create from "zustand";

interface IAuthStore {
  isAuthenticated: boolean
  authorizeUser: () => void
  unAuthorizeUser: () => void
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  authorizeUser: () => set(() => ({ isAuthenticated: true })),
  unAuthorizeUser: () => set(() => ({ isAuthenticated: false })),
}));
