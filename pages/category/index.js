import React from "react";
import Link from "next/link";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Styles from "../../styles/FoodCart.module.scss";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


export default function Catagory({ category }) {
  return (
    <>
      <Container className={Styles.catHeaderCol}>
        <Row className={Styles.catHeader}>
          <Button className={Styles.catbackButton} onClick={() => Router.back()}>
          <FontAwesomeIcon  icon={faArrowCircleLeft}  />
          </Button>
          <h2>{category?.name}</h2>
        </Row>
      </Container>
      <Container>
        <Row className={Styles.foodsCont}>
          {category?.foods.map((food) => (
            <>
              <Link href={"/food/" + food?.id} variant="primary" key={food?.id}>
                <Col className={Styles.cartCol} xs={6} lg={4}>
                  <Card className={Styles.foodCart} style={{ width: "18rem" }}>
                    <div className={Styles.image}>
                      <Card.Img variant="top" src={food?.get_image} />
                    </div>
                    <Card.Body>
                      <Card.Title>{food?.name}</Card.Title>
                      <Card.Text>{food?.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
