import { FC } from "react"
// Models
import { ColProps } from "../../models/interfaces/constants"

const Col : FC<ColProps> = ({ children, colName }) => {
  return (
    <div className={colName}>
      { children }
    </div>
  )
}

export default Col
