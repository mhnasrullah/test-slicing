import { NavbarStore } from "@/utils/types";
import { create } from "zustand";

export const useNavbar = create<NavbarStore>((set) => ({
  isShow: false,
  hide: () => set(() => ({ isShow: false })),
  show: () => set(() => ({ isShow: true })),
  setShow: (value: boolean) => set(() => ({ isShow: value })),
}));
