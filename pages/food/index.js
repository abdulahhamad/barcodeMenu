import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/FoodCart.module.scss";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Foods({ food }) {
  return (
    <>
      <Container>
        <Row>
          <Link  href={"/foods"} variant="primary">
            <FontAwesomeIcon className={Styles.backButton} icon={faArrowCircleLeft}  />
          </Link>
          <Col xs={12} key={food?.id}>
              <Col className={Styles.detailImage}>
                <Card.Img variant="top" src={food?.get_image} />
              </Col>
            <Card className={Styles.DetailsfoodCart}>
              <Card.Body>
                <Card.Title>{food?.name}</Card.Title>
                <Card.Text>{food?.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
