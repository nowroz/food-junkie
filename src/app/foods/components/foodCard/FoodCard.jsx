
const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food

  return (
    <div className="border border-slate-500 rounded-2xl p-4 flex flex-col justify-between gap-4">
      <div>
        <img src={foodImg} alt="" className="w-full h-auto rounded-lg mb-4" />
        <h3 className="text-3xl font-bold">{title}</h3>
      </div>

      <div>
        <p className="w-max px-3 rounded-full bg-slate-800 mb-4">{category}</p>
        <h4 className="text-2xl font-bold">&#2547; {price}</h4>
      </div>

      <div className="flex items-center gap-4">
        <button className="btn bg-amber-400 text-black hover:bg-amber-500">Add to Cart</button>
        <button className="btn bg-gray-200 text-black hover:bg-gray-300">View Details</button>
      </div>
    </div>
  )
}

export default FoodCard
