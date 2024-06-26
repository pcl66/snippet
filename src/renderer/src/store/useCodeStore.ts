import { CodeType, codes } from '@renderer/data'
import { create } from 'zustand'

interface CodeStore {
  codes: CodeType[]
  setCodes: (val: string) => void
}

export const useCodeStore = create<CodeStore>((set) => ({
  codes,
  setCodes: (val) => {
    set(() => {
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
}))
