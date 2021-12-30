import Foods from ".";

export const getStaticPaths = async () => {
    const res = await fetch(`https://mardood.pythonanywhere.com/api/v1.0/food`);
    const foods = await res.json();

    const paths = foods.map(food => {
        
        return{
            params : { id: food.id.toString() }
        }
    })
    return{
        paths,
        fallback: false
    } 
}
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://mardood.pythonanywhere.com/api/v1.0/food/${id}`);
    const data = await res.json();

    return{
        props : {food: data}
    }
}

const Details = ({food}) => {
    return(
        <>
            <Foods food={food} />
        </>
    )
}
export default Details;