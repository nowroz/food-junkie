const FoodDetailsSkeleton = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Skeleton */}
        <div className="w-full h-[420px] rounded-lg bg-gray-200 dark:bg-gray-700" />

        {/* Details Skeleton */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

          {/* Price */}
          <div className="h-6 w-32 rounded bg-gray-200 dark:bg-gray-700" />

          {/* Meta info */}
          <div className="flex gap-6">
            <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="h-10 w-36 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-36 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetailsSkeleton;
