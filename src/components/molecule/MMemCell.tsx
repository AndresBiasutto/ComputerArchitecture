import MDir from './MDir'
import MByte from './MByte'

const MMemCell = () => {
  return (
    <div className='w-full flex flex-row justify-center items-center gap-2 border-2 border-amber-200 hover:border-yellow-500'>
        <MDir />
        <MByte />
    </div>
  )
}

export default MMemCell