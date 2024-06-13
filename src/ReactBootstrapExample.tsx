import React from 'react'
import { Button } from 'react-bootstrap'
import ModalExample from './ModalExample'

type Props = {}

const ReactBootstrapExample = (props: Props) => {
  return (
    <div>

        <Button variant='outline-success'  onClick={()=>{ alert("clicked")}}> react-boostrap success </Button>
        <Button variant='danger'  onClick={()=>{ alert("clicked")}}> react-boostrap danger </Button>
        <Button variant="warning">Warning</Button>

        <ModalExample/>

    </div>
  )
}

export default ReactBootstrapExample