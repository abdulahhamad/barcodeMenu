import Head from "next/head";
import styles from "../styles/home.module.scss";
import dynamic from "next/dynamic";
import FoodCart from "../components/FoodCart";
import { Col, Container, Row } from "react-bootstrap";
import Foods from "./food";
import Link from "next/link";

export default function Home({ categories }) {
  return (
    <>
      <Container>
        <Row className={styles.homeRow}>
          <Col md={4} xs={11} className={styles.homeLogo}>
            <img src="/logo.png" />
          </Col>
        </Row>
        <Row className={styles.category}>
          <Col md={6} className={styles.categoryBox}>
            <ul>
              {categories.map((category) => (
                <Link href="/foods" key={category.id}>
                <li>
                  {category.name}
                </li>
                </Link>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(
    `https://mardood.pythonanywhere.com/api/v1.0/categories/`
  );
  const categories = await res.json();
  return {
    props: {
      categories,
    },
  };
};
