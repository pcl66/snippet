import { useCodeStore } from '@renderer/store/useCodeStore'
import { useSelectStore } from '@renderer/store/useSelectStore'
import { ChangeEvent, useState } from 'react'

export const Search: React.FC = () => {
  const setCodes = useCodeStore((state) => state.setCodes)
  const getCodes = useCodeStore((state) => state.getCodes)
  const getCurrentIndex = useSelectStore((state) => state.getCurrentIndex)
  const setCurrentIndex = useSelectStore((state) => state.setCurrentIndex)
  const [searchStr, setSearchStr] = useState('')
  const hSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value)
    setCodes(e.target.value)
    console.log('getCurrentIndex', getCurrentIndex())
    console.log('getCodes', getCodes())
    if ((getCurrentIndex() ?? 0) > getCodes().length) {
      setCurrentIndex(getCodes().length === 0 ? 0 : getCodes().length - 1)
    }
  }
  return (
    <div className="bg-slate-50 p-5 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={searchStr}
          onChange={hSearch}
          type="text"
          placeholder="Search"
          className=" bg-slate-200 w-full rounded-lg h-7 outline-none"
        />
      </section>
    </div>
  )
}
