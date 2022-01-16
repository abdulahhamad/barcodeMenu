import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useCart } from "react-use-cart";

export default function CartModal() {
  const [show, setShow] = useState(false);
  // onClick={()=> emptyCart()}
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { emptyCart } = useCart();
  return (
    <>
      <Button className="w-auto" variant="danger"  onClick={handleShow}><FaTrash /> Empty Cart </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose,()=> emptyCart()}>
          <FaTrash /> Empty Cart 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
