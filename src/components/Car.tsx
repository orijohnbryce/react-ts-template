import { useContext, useState } from 'react'
import { CarType } from '../types/car-type'
import { DarkModeContext } from '../App'
import {Modal} from 'react-bootstrap'

type Props = {
    car: CarType,
    deleteIt: any
}

const darkStyle = {
    backgroundColor: 'black',
    color: 'white'
}


const Car = (props: Props) => {

    const [showModal, setShowModal] = useState<boolean>(false)

    const { isDarkMode } = useContext(DarkModeContext);


    return (
        <div style={isDarkMode ? darkStyle : {}}>
            Car: {props.car.model}. <br />
            price: {props.car.price}
            <br /> <button onClick={()=>{setShowModal(true)}}>delete </button>

        <Modal show={showModal} onHide={()=>{setShowModal(false)}}>
            <Modal.Header> Delete {props.car.model}</Modal.Header>
            <Modal.Body>
                Are you sure ?
            </Modal.Body>
            <Modal.Footer>
                <button onClick={()=>{props.deleteIt()}}> Yes </button>
                <button onClick={()=>{setShowModal(false)}}> No </button>
            </Modal.Footer>
        </Modal>

        </div>
    )
}

export default Car