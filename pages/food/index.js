import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/FoodCart.module.scss";
export default function Foods({ food }) {
  return (
    <>
      <Container>
        <Row>
          <Link href={"/"} variant="primary">
            Back
          </Link>
          <Col xs={12} key={food.id}>
            <Card className={Styles.DetailsfoodCart}>
              <Col md={6} className={Styles.image}>
                <Card.Img variant="top" src={food.get_image} />
              </Col>
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
