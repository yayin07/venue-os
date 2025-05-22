export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery Skeleton */}
        <div className="w-full h-[400px] bg-gray-200 rounded-lg animate-pulse mb-8"></div>

        {/* Content Skeleton */}
        <div className="flex-1">
          <div className="h-6 bg-gray-200 w-1/3 rounded animate-pulse mb-4"></div>
          <div className="h-10 bg-gray-200 w-2/3 rounded animate-pulse mb-6"></div>

          <div className="flex gap-4 mb-8">
            <div className="h-6 bg-gray-200 w-24 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-200 w-24 rounded animate-pulse"></div>
          </div>

          <div className="h-40 bg-gray-200 rounded animate-pulse mb-6"></div>
          <div className="h-40 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Booking Form Skeleton */}
        <div className="w-full lg:w-96">
          <div className="bg-gray-100 p-6 rounded-lg border h-[500px] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
