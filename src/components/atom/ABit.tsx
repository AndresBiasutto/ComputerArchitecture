import type { IBitProps } from "../../interfaces/IBitProps"

const ABit: React.FC<IBitProps> = ({bit}) => {

  return (
    <p className='font-vt323 font-extrabold border border-white px-1' >{bit? "1": "0"}</p>
  )
}

export default ABit