const getFoodDetails = async (id) => {
  const response = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`)

  const data = await response.json()

  return data.details
}

const FoodDetails = async ({ params }) => {
  const { id } = await params

  const food = await getFoodDetails(id)

  const {
    title,
    foodImg,
    price,
    category,
    area,
    video,
  } = food

  console.log(food)

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div>
          <img
            src={foodImg}
            alt={title}
            className="w-full h-[420px] object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h1>

          <p className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
            ৳{price}
          </p>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <p>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Category:
              </span>{" "}
              {category}
            </p>
            <p>
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Origin:
              </span>{" "}
              {area}
            </p>
          </div>

          <div className="flex gap-4 pt-4">
            {video && (
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
              >
                Watch Recipe
              </a>
            )}

            <button className="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodDetails
