import React from "react";
import Styles from "../styles/FoodCart.module.scss";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function FoodCart({ foods }) {
  return (
    <>
      <Container>
        <Row>
          {foods.map((food) => (
            <Link href={"/food/" + food.id} variant="primary" key={food.id}>
              <Col xs={6} lg={4}>
                <Card className={Styles.foodCart} style={{ width: "18rem" }}>
                  <div className={Styles.image}>
                    <Card.Img variant="top" src={food.get_image} />
                  </div>
                  <Card.Body>
                    <Card.Title>{food.name}</Card.Title>
                    <Card.Text>{food.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </>
  );
}
