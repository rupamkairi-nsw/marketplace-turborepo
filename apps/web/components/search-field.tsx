"use client";

import { useRouter } from "next/navigation";
import { useSeachStore } from "../stores/zustand/search.store";
import type { ListingTypes, Listings } from "database";
import apiKit from "../utils/api/helper";

export default function SearchField() {
  const router = useRouter();
  const { query, setQuery, setResults, setAvailableFilters } = useSeachStore();

  async function getListings() {
    const data = await apiKit({ api: "/listings" });
    const listings = data.listings;
    if (!listings) return;
    setResults(listings);
    const listingTypes: ListingTypes[] = listings
      .map((el) => el.types as ListingTypes[])
      .flat();
    const listingTypeUniques = listingTypes.reduce(
      (prev: ListingTypes[], el) => {
        const fi = prev.findIndex((p) => p.id === el.id);
        if (fi < 0) return [...prev, { ...el, count: 1 }];
        else {
          prev[fi]["count"] += 1;
          return [...prev];
        }
      },
      []
    ) as ListingTypes[];
    console.log(listingTypeUniques);
    setAvailableFilters({ type: listingTypeUniques });
  }

  function search() {
    const qs = new URLSearchParams("");
    if (query) qs.append("query", query);
    const nextUrl = `/search${qs.size ? `?${qs.toString()}` : ``}`;
    router.push(nextUrl);

    getListings();
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
