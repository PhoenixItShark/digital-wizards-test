//lib/store/store.ts
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { UserStore, RouletteType } from "../type/@types";

const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set, get) => ({
        dibs: null,
        last: null,
        lastSum: {
          black: null,
          red: null,
          green: null,
          joker: null,
        },
        bet: null,

        setDibs: (count: number) =>
          set((state) => ({ dibs: (state.dibs ?? 0) + count })),

        setLast: (type: string) => {
          const prev = get().last ?? [];

          const updated = [...prev, type];
          if (updated.length > 10) {
            updated.shift(); // удалить первый элемент
          }

          set({ last: updated });
        },

        setLastSum: (type: RouletteType) => {
          const prev = get().lastSum;

          // Определим ключ, по которому будем обновлять
          const key =
            type === "RedJoker" || type === "BlackJoker" ? "joker" : type;

          const current = prev[key] ?? 0;

          set({
            lastSum: {
              ...prev,
              [key]: current + 1,
            },
          });
        },

        setBet: (count: number, type: string) => {
          set({
            bet: { count, type },
          });
        },
      }),
      {
        name: "user-store",
      },
    ),
    {
      name: "UserStore",
    },
  ),
);

export default useUserStore;
