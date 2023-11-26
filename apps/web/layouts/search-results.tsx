"use client";

import { useSeachStore } from "../stores/zustand/search.store";

export default function SearchResultsLayout() {
  const { results } = useSeachStore();

  return (
    <div>
      <p>Resutls</p>
      <ul>
        {results.map((el) => (
          <li key={el.id}>
            <div className="mb-4 rounded hover:shadow p-2">
              <p>{el.name}</p>
              <ul className="flex gap-2">
                {el.types.map((t) => (
                  <li key={t.id}>
                    <small>{t.name}</small>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
    </div>
  );
}
