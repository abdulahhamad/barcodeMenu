import { Container, Row } from "react-bootstrap";
import FoodCart from "../components/FoodCart";

export default function food({ foods }) {
  return (
    <>
          <FoodCart foods={foods} />
    </>
  );
}
export const getStaticProps = async (res) => {
  const res = await fetch(`https://mardood.pythonanywhere.com/api/v1.0/food`);
  const foods = await res.json();
  return {
    props: {
      foods,
    },
  };
};

