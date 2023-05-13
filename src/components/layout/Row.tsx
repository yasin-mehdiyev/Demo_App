import { FC } from 'react'
import { IChildren } from '../../models/interfaces/constants'

const Row : FC<IChildren> = ({ children }) => {
  return (
    <div className="row">
        { children }
    </div>
  )
}

export default Row
