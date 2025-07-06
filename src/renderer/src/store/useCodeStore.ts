import { CodeType, codes } from '@renderer/data'
import { create } from 'zustand'

interface CodeStore {
  codes: CodeType[]
  getCodes: () => CodeType[]
  setCodes: (val: string) => void
}

export const useCodeStore = create<CodeStore>((set, get) => {
  return {
    codes: [],
    getCodes: () => {
      return get().codes
    },
    setCodes: (val) => {
      set(() => {
        if (val === '*') {
          return {
            codes
          }
        }
        if (val === '') {
          return {
            codes: []
          }
        }
        const codeRes = codes.filter((v) =>
          v.content.toLocaleLowerCase().includes(val.toLocaleLowerCase())
        )
        return {
          codes: codeRes
        }
      })
    }
  }
})
