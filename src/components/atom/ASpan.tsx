import React from 'react'
import type { ItextProps } from '../../interfaces/ItextProps'

const ASpan: React.FC<ItextProps> = ({text}) => {
  return (
    <span className='text-sm font-sharetech w-full' >{text} </span>
  )
}

export default ASpan