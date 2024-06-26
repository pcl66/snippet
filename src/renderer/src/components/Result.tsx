import { useCodeStore } from '@renderer/store/useCodeStore'

export const Result: React.FC = () => {
  const codes = useCodeStore((state) => state.codes)
  return (
    <div className="bg-gray-100 pt-3 -mt-3 rounded-lg">
      <ul>
        {codes.map((item) => (
          <li className="p-1 px-5" key={item.id}>
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  )
}
