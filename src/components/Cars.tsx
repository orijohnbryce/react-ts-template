import { CarType } from '../types/car-type'
import Car from './Car'

type Props = {
    cars: CarType[],
    setCars: any
}

const Cars = (props: Props) => {

    console.log("Cars rendered!");

    const deleteCar = (id: number) => {
        return () => {                        
            props.setCars(props.cars.filter((c: CarType) => { return c.id !== id }))
        }
    }
    return (
        <div>
            <h1> List of cars: </h1>
            {props.cars.map(
                (car: CarType) => {
                    return <div>
                        <Car key={car.id} car={car} deleteIt={deleteCar(car.id)} />
                        <br />
                    </div>
                }
            )}
        </div>
    )
}

export default Cars