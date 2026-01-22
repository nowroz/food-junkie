import FoodCardSkeleton from "./components/foodCardSkeleton/FoodCardSkeleton"

const FoodsSkeleton = () => {
  return (
    <>
      <section className="custom-container my-20">
        <div className="w-64 h-10 rounded-full bg-gray-500 animate-pulse">
        </div>
      </section>
      <section className="custom-container my-20 grid grid-cols-3 gap-5">
        {
          [...Array(12)].map((_, index) => (
            <FoodCardSkeleton key={index}></FoodCardSkeleton>
          ))
        }
      </section>
    </>
  )
}

export default FoodsSkeleton
