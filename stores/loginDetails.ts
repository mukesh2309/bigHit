import create from "zustand";

interface ILoginDetailsStore {
  phoneNumber: string;
  modifyPhoneNumber: (number: string) => void;
  countryCode: string;
  modifyCountryCode: (code: string) => void;
}

export const useLoginDetailsStore = create<ILoginDetailsStore>((set) => ({
  phoneNumber: "",
  modifyPhoneNumber: (number) => set(() => ({ phoneNumber: number })),
  modifyCountryCode: (code) => set(() => ({ countryCode: code })),
  countryCode: "+91",
}));
