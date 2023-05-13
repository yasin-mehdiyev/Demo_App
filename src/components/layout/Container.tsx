import { FC } from 'react';
import { IChildren } from '../../models/interfaces/constants';


const Container : FC<IChildren> = ({ children }) => {
  return (
    <div className="container">
        { children }
    </div>
  )
}

export default Container;
