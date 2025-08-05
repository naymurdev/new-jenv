import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LockState {
  isUnlocked: boolean
  unlock: () => void
  lock: () => void
}

export const useLockStore = create<LockState>()(
  persist(
    (set) => ({
      isUnlocked: false,
      unlock: () => set({ isUnlocked: true }),
      lock: () => set({ isUnlocked: false }),
    }),
    {
      name: "pin-lock-storage",
    },
  ),
)
