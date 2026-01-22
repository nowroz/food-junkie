
const FoodCardSkeleton = () => {
  return (
    <div className="border border-slate-500 rounded-2xl p-4 flex flex-col justify-between gap-4">
      <div>
        <div className="w-full h-96 rounded-lg bg-gray-500 animate-pulse mb-4" />
        <div className="w-52 h-10 rounded-full bg-gray-500 animate-pulse"></div>
      </div>

      <div>
        <div className="w-24 h-5 rounded-full bg-gray-500 animate-pulse mb-4"></div>
        <div className="w-32 h-8 rounded-full bg-gray-500 animate-pulse"></div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-40 h-10 px-3 py-1 rounded-full bg-gray-400 animate-pulse"></div>
        <div className="w-40 h-10 px-3 py-1 rounded-full bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  )
}

export default FoodCardSkeleton
