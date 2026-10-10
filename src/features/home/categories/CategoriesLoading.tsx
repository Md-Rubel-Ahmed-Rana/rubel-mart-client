const CategoriesLoading = () => {
  return (
    <div aria-busy="true" aria-label="Loading categories">
      <div className="flex gap-4 overflow-hidden pb-4 sm:gap-5">
        {Array.from({ length: 7 }, (_, index) => (
          <div
            key={index}
            className="w-37 shrink-0 rounded-2xl border border-border/70 bg-card p-3 sm:w-44 sm:p-4"
          >
            <div className="mb-4 aspect-square animate-pulse rounded-xl bg-muted" />

            <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />

            <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesLoading;
