import { useContext } from 'react'
import { CarType } from '../types/car-type'
import { DarkModeContext } from '../App'

type Props = {
    car: CarType,
}

const darkStyle = {backgroundColor: 'black',
                   color: 'white'}


const Car = (props: Props) => {

    const {isDarkMode} = useContext(DarkModeContext);

  return (
    <div style={isDarkMode ? darkStyle : {}}>
        Car: {props.car.model}. <br/>
         price: {props.car.price}</div>
  )
}

export default Car