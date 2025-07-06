import { useCodeStore } from '@renderer/store/useCodeStore'
import { useSelectStore } from '@renderer/store/useSelectStore'

export const Result: React.FC = () => {
  const codes = useCodeStore((state) => state.codes)
  const currentIndex = useSelectStore((state) => state.currentIndex)
  return (
    <div className="bg-gray-100 pt-3 -mt-3 rounded-lg">
      <ul>
        {codes.map((item, index) => (
          <li className={`p-1 px-5 ${currentIndex === index ? 'text-red-300' : ''}`} key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
