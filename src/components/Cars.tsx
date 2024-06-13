import { CarType } from '../types/car-type'
import Car from './Car'

type Props = {
    cars: CarType[],
}

const Cars = (props: Props) => {

    console.log("Cars rendered!");
    

  return (
    <div>
        <h1> List of cars: </h1>
        {props.cars.map(
            
            (car: CarType)=>{
                return <Car key={car.id} car={car}/>
            }
                
        )}
    </div>
  )
}

export default Cars