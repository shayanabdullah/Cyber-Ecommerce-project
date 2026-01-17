const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

const ShopSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

        {/* FILTER SIDEBAR */}
        <aside className="space-y-6">
          {/* Price */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-2 w-full" />
          </div>

          {/* Brand */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-20" />
            {[1,2,3,4,5].map(i => (
              <Skeleton key={i} className="h-4 w-3/4" />
            ))}
          </div>

          {/* Memory */}
          <div className="space-y-3">
            <Skeleton className="h-5 w-32" />
            {[1,2,3,4].map(i => (
              <Skeleton key={i} className="h-4 w-2/3" />
            ))}
          </div>

          {/* Extra filters */}
          {[1,2].map(i => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </aside>

        {/* PRODUCTS */}
        <section className="space-y-6">
          {/* Top bar */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-9 w-32" />
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border rounded-xl p-4 space-y-4">
                <Skeleton className="h-44 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-9 w-full" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShopSkeleton;
