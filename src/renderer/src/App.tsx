import { useEffect } from 'react'
import { Result } from './components/Result'
import { Search } from './components/Search'
import { useSelectStore } from './store/useSelectStore'
import { useCodeStore } from './store/useCodeStore'

function App(): JSX.Element {
  const currentIndex = useSelectStore((state) => state.currentIndex)
  const setCurrentIndex = useSelectStore((state) => state.setCurrentIndex)
  const getCurrentIndex = useSelectStore((state) => state.getCurrentIndex)
  const getCodes = useCodeStore((state) => state.getCodes)
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      console.log('getCurrentIndex', getCurrentIndex())
      console.log('getCodes', getCodes())
      if (getCodes().length === 0) return
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        let index = getCurrentIndex()
        if (index === undefined) {
          index = 0
        }
        if (index === 0) {
          index = getCodes().length
        }
        setCurrentIndex(index - 1)
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setCurrentIndex(
          getCurrentIndex() === undefined ? 0 : (getCurrentIndex()! + 1) % getCodes().length
        )
      }
    }
    document.addEventListener('keydown', keydownHandler)
    return () => {
      document.removeEventListener('keydown', keydownHandler)
    }
  }, [])

  return (
    <>
      <Search />
      <hr />
      {currentIndex}
      <Result />
    </>
  )
}

export default App
