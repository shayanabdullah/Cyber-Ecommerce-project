const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {[1,2,3].map(i => (
              <Skeleton key={i} className="w-28 h-28" />
            ))}
          </div>

          {/* Main Image */}
          <Skeleton className="flex-1 h-[420px]" />
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* Title */}
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-7 w-1/2" />

          {/* Price */}
          <div className="flex gap-3 items-center">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>

          {/* Variants */}
          <div className="flex gap-3">
            {[1,2,3].map(i => (
              <Skeleton key={i} className="w-14 h-14" />
            ))}
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-3">
            {[1,2,3,4].map(i => (
              <Skeleton key={i} className="h-8 w-32" />
            ))}
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1,2,3,4].map(i => (
              <Skeleton key={i} className="h-16" />
            ))}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-12 w-1/2" />
          </div>

          {/* Extra info */}
          <div className="flex gap-4">
            {[1,2,3,4].map(i => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>

          {/* Keywords */}
          <div className="flex gap-2">
            <Skeleton className="h-8 w-20" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
