

import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'; 

export default function PageModal(props) {

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

const {
    buttonLabel,
    className
} = props;

useEffect(() => {

}, [])

  return(

<Modal isOpen={modal} toggle={toggle} className={className}>
    <ModalHeader toggle={toggle}>Club Fixtures</ModalHeader>
    <ModalBody>
        <div>alert</div>
    </ModalBody>
    <ModalFooter>
        <Button color="danger" onClick={toggle}>Cancel</Button>
    </ModalFooter>
</Modal>  
          
  )
}