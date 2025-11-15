import { Link } from 'react-router-dom'
import type { ILinkProps } from '../../interfaces/ILinkProps'

const ALink: React.FC<ILinkProps> = ({link, text}) => {
  return (
    <Link to={link} className=' hover:underline hover:bg-blue-900 rounded-2xl p-1 font-vt323 text-2xl text-blue-500 transition'>{text} </Link>
  )
}

export default ALink