import { useCodeStore } from '@renderer/store/useCodeStore'
import { ChangeEvent, useState } from 'react'

export const Search: React.FC = () => {
  const setCodes = useCodeStore((state) => state.setCodes)
  const [searchStr, setSearchStr] = useState('')
  const hSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value)
    setCodes(e.target.value)
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
