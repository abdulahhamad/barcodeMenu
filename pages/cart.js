import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Modal from "../components/CartModal";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();
  console.log(cartTotal);

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <Container>
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th></th>
              <th>order name</th>
              <th>quantity</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item,index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.quantity}</td>
                <td>{item?.price}</td>
                <td>
                  <Button variant="danger" onClick={() => removeItem(item?.id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Row className="">
        <Col xs={5}>

          <ReactWhatsapp
            type="button"
            className="btn btn-success w-auto w-auto mx-2 btn"
            number="905365859088"
            message={
              items.map(
                (item) =>
                  "( Name: " +
                  item.name +
                  ", quantity: " +
                  item.quantity +
                  ", Price: " +
                  item.price +
                  "₺" +
                  " )"
              ) +
              " Total Price: " +
              cartTotal
            }
          >
            <FaWhatsapp />
          </ReactWhatsapp>
          <Modal />
        </Col>
        <Col>
            <h2>
            Total Price: {cartTotal} ₺
            </h2>
        </Col>
        </Row>
      </Container>
    </>
  );
}
