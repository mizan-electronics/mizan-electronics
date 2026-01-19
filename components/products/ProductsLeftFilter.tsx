import { Star } from "lucide-react";

const FilterBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
      {title}
    </h4>
    <div className="space-y-2">{children}</div>
  </div>
);

const BulletOption = ({ label }: { label: string }) => (
  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800">
    <input
      type="radio"
      name="price"
      className="h-4 w-4 accent-indigo-500"
    />
    <span className="text-sm text-neutral-700 dark:text-neutral-300">
      {label}
    </span>
  </label>
);

const Checkbox = ({ label }: { label: string }) => (
  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800">
    <input
      type="checkbox"
      className="h-4 w-4 accent-indigo-500"
    />
    <span className="text-sm text-neutral-700 dark:text-neutral-300">
      {label}
    </span>
  </label>
);

const RatingOption = ({ value }: { value: number }) => (
  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800">
    <input type="checkbox" className="h-4 w-4 accent-indigo-500" />
    <div className="flex items-center gap-1">
      {Array.from({ length: value }).map((_, i) => (
        <Star   
          key={i}
          size={14}
          className="fill-amber-400 text-amber-400"
        />
      ))}
      <span className="ml-1 text-xs text-neutral-500">& up</span>
    </div>
  </label>
);

const ProductsLeftFilter = () => {
  return (
    <aside className="sticky top-24 rounded-3xl bg-white dark:bg-neutral-900 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.3)] space-y-8">
      
      <FilterBlock title="Category">
        {["Inverter AC", "Split AC", "Smart AC"].map((v) => (
          <Checkbox key={v} label={v} />
        ))}
      </FilterBlock>

      <FilterBlock title="Brand">
        {[
          "Walton",
          "Samsung",
          "LG",
          "Gree",
          "Hitachi",
          "Panasonic",
        ].map((v) => (
          <Checkbox key={v} label={v} />
        ))}
      </FilterBlock>

      <FilterBlock title="Price Range">
        <BulletOption label="Below ৳70,000" />
        <BulletOption label="৳70,000 – ৳90,000" />
        <BulletOption label="৳90,000 – ৳1,10,000" />
        <BulletOption label="Above ৳1,10,000" />
      </FilterBlock>

      <FilterBlock title="Customer Rating">
        <RatingOption value={4} />
        <RatingOption value={5} />
      </FilterBlock>

      <button className="w-full cursor-pointer rounded-full border border-neutral-300 dark:border-neutral-700 py-2 text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800">
        Clear all filters
      </button>
    </aside>
  );
};

export default ProductsLeftFilter;
