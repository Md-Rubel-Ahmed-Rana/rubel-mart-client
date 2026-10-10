const BrandsLoading = () => {
  return (
    <div
      className="flex gap-4 overflow-hidden"
      aria-label="Loading brands"
      role="status"
    >
      <span className="sr-only">Loading brands...</span>

      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-36 min-w-37.5 flex-1 animate-pulse
            rounded-2xl border border-border/60 bg-card p-5
            motion-reduce:animate-none"
        >
          <div className="mx-auto h-14 w-24 rounded-lg bg-muted" />
          <div className="mx-auto mt-4 h-3 w-20 rounded bg-muted" />
        </div>
      ))}
    </div>
  );
};

export default BrandsLoading;
