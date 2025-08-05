import { create } from "zustand"
import { persist } from "zustand/middleware"

interface LockState {
  token: string | null
  setToken: (token: string) => void
  clearToken: () => void
  isValidSession: () => boolean
}

export const useLockStore = create<LockState>()(
  persist(
    (set, get) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null }),
      isValidSession: () => {
        const { token } = get()
        if (!token) return false

        try {
          // Try to decode the token to check if it's valid JSON
          const decodedToken = JSON.parse(atob(token))
          return decodedToken.uuid && decodedToken.passwordHash && decodedToken.timestampHash
        } catch (error) {
          return false
        }
      },
    }),
    {
      name: "pin-lock-storage",
    },
  ),
)
