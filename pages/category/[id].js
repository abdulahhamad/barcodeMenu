import Catagory from ".";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://mardood.pythonanywhere.com/api/v1.1/categories/"
  );
  const categoris = await res.json();

  const paths = categoris.map((category) => {
    return {
      params: { id: category.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://mardood.pythonanywhere.com/api/v1.1/categories/${id}`
  );
  const data = await res.json();

  return {
    props: { category: data },
  };
};

const Details = ({ category }) => {
  return (
    <>
    <Catagory category ={category}  />
    </>
  );
};
export default Details;
