import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

type Props = {}

const ModalExample = (props: Props) => {

    const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
        <button onClick={()=> setShowModal(true)}> show Modal </button>

        <Modal show={showModal} onHide={()=>{setShowModal(false)}}>
            <Modal.Header closeButton> Hello Modal Header  </Modal.Header>
            <Modal.Body> Hello Modal Body </Modal.Body>
            <Modal.Footer> Hello Modal </Modal.Footer>            
            <br/>
            <br/>
            <br/>
            {/* <button onClick={()=>{setShowModal(false)}}> X </button> */}
        </Modal>
        
    </div>
  )
}

export default ModalExample