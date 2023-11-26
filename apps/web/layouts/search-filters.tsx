"use client";

import { useSeachStore } from "../stores/zustand/search.store";

export default function SearchFiltersLayout() {
  const { availableFilters } = useSeachStore();
  return (
    <div>
      <p>Filters</p>
      <ul>
        {availableFilters?.type?.map((el) => (
          <li key={el.id} className="flex gap-4">
            <span className="flex gap-2">
              <input id={`type-${el.id}`} type="checkbox" />
              <label htmlFor={`type-${el.id}`}>{el.name}</label>
            </span>
            <span>{el.count}</span>
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify(availableFilters, null, 2)}</pre> */}
    </div>
  );
}
