import { create } from 'zustand'

interface SelectStore {
  currentIndex: number | undefined
  setCurrentIndex: (val: number) => void
  getCurrentIndex: () => number | undefined
}

export const useSelectStore = create<SelectStore>((set, get) => {
  return {
    currentIndex: undefined,
    getCurrentIndex: () => {
      return get().currentIndex
    },
    setCurrentIndex: (val) => {
      set(() => {
        return {
          currentIndex: val
        }
      })
    }
  }
})
