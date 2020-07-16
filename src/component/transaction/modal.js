import React from "react"
import {Modal,Image} from "react-bootstrap"

import {BASE_URL} from "../../redux/config/api"

const Modals=({imgUrl,show})=>{
    return (
    <Modal
    show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Body>
        <Image src={BASE_URL+"/images/"+imgUrl} />
        </Modal.Body>
    </Modal>
    )
}

export default Modals