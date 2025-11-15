import React from 'react'
import type { ILinkProps } from '../../interfaces/ILinkProps'

const AImage: React.FC<ILinkProps> = ({link, text}) => {
  return (
          <img
            src={link}
            alt={text}
            className=" w-full object-cover opacity-90 rounded-2xl"
          />  )
}

export default AImage