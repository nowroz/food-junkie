import CartItems from "./components/cartItems/CartItems"
import FoodCard from "./components/foodCard/FoodCard"

const getFoods = async () => {
  const response = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random`)
  const data = await response.json()

  await new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })

  return data.foods || []
}

const Foods = async () => {
  const foods = await getFoods()

  return (
    <>
      <section className="custom-container my-20">
        <h2 className="text-4xl font-bold">Total <span className="text-amber-400">{foods.length}</span> foods found</h2>
      </section>
      <section className="custom-container my-20 grid grid-cols-13 gap-5">
        <div className="col-span-10 grid grid-cols-3 gap-5">
          {
            foods.map(food => (
              <FoodCard key={food.id} food={food}></FoodCard>
            ))
          }
        </div>
        <div className="col-span-3">
          <CartItems></CartItems>
        </div>
      </section>
    </>
  )
}

export default Foods
