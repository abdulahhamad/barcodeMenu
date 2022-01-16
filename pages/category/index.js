import React from "react";
import Link from "next/link";
import { Button, Card, Col, Container, Row, Badge } from "react-bootstrap";
import Styles from "../../styles/FoodCart.module.scss";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsapp } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from 'next/router'

export default function Catagory({ category, index }) {
  const { addItem, totalUniqueItems ,cartTotal} = useCart();
  const router = useRouter()
  return (
    <>
      <Container className={Styles.catHeaderCol} key={index}>
        <Row className={Styles.catHeader}>
          <Button
            className={Styles.catbackButton}
            onClick={() => Router.back()}
          >
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </Button>
          <h2>{category?.name}</h2>
          <Button
            className="ms-auto w-auto rounded-circle btn btn-light text-primary fs-4 position-relative"
            onClick={() => router.push('/cart')}
          >
            <FaShoppingCart />
          <Badge className={Styles.Badge} bg="danger">{cartTotal}₺</Badge>
          </Button>
        </Row>
      </Container>
      <Container>
        <Row className={Styles.foodsCont}>
          {category?.foods.map((food) => (
            <>
              <Col className={Styles.cartCol} xs={6} lg={4}>
                <Card className={Styles.foodCart} style={{ width: "18rem" }}>
                  <div className={Styles.image}>
                    <Link
                      href={"/food/" + food?.id}
                      variant="primary"
                      key={food?.id}
                    >
                      <Card.Img variant="top" src={food?.get_image} />
                    </Link>
                  </div>
                  <Card.Body>
                    <Card.Title>{food?.name}</Card.Title>
                    <Card.Text>{food?.description}</Card.Text>
                    <Row className="justify-content-around">
                      <Button onClick={() => addItem(food)} className="w-auto">
                        <FontAwesomeIcon icon={faCartPlus} />
                      </Button>
                      <ReactWhatsapp
                        type="button"
                        className="btn btn-success w-auto"
                        number="905365859088"
                        message={food.name + " " + food.price}
                      >
                        <FaWhatsapp />
                      </ReactWhatsapp>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
