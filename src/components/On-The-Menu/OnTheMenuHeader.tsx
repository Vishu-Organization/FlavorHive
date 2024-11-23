import { useState, useRef, useEffect } from "react";
import OnTheMenuFilter from "./OnTheMenuFilter";

const OnTheMenuHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }, // 10% of the element should be visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <>
      <article
        ref={targetRef}
        className="flex flex-col items-center gap-2 pt-10"
      >
        <h2 className="font-chronicle text-3xl font-bold tracking-[0.32px] text-primary">
          Explore our meal delivery menu
        </h2>
        <p className="text-center text-lg tracking-[0.18px] text-black10">
          <span className="font-bold text-blue-info">
            Select any meal or number of servings
          </span>
          —the more you order, the more you save.
        </p>
        <div className="ml-5 self-start text-sm text-header-primary">
          <h3 className="mb-2 text-xl font-semibold text-black20">Meal Kits</h3>
          Easy-to-follow recipes perfectly portioned for two.
        </div>
      </article>

      {!isInView && (
        <div id="search-filters" className="sticky top-14 z-10">
          <div
            className="relative flex h-10 justify-center bg-slate-50 py-2"
            onMouseEnter={() => setIsModalOpen(true)}
            onMouseLeave={() => setIsModalOpen(false)}
          >
            <p rel="search-filters">
              <span className="text-[10px] uppercase text-primary-info">
                Refine search by
              </span>
            </p>
            <div
              role="dialog"
              className={`${isModalOpen ? "flex" : "hidden"} absolute left-1/2 top-8 z-10 min-h-[200px] max-w-40 -translate-x-1/2 transform overflow-scroll bg-gray-100 p-10`}
            >
              <OnTheMenuFilter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OnTheMenuHeader;
