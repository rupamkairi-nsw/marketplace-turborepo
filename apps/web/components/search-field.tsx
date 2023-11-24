"use client";

import { useRouter } from "next/navigation";
import { useSeachStore } from "../stores/zustand/search.store";

export default function SearchField() {
  const router = useRouter();
  const { query, setQuery } = useSeachStore();

  function search() {
    const qs = new URLSearchParams("");
    qs.append("query", query);
    router.push(`/search?${qs.toString()}`);
  }

  return (
    <div>
      <input
        className="border"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        onClick={() => {
          search();
        }}
      >
        Search
      </button>
    </div>
  );
}
