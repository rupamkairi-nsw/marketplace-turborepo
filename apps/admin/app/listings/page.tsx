"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import DataTable from "../../components/table";

async function getListings() {
  return await (
    await fetch("http://localhost:8000/api/listings", {
      method: "GET",
      credentials: "include",
    })
  ).json();
}

export default function ListingRootPage(): JSX.Element {
  // const queryClient = useQueryClient();
  const { data: { listings } = {} } = useQuery({
    queryKey: ["listings"],
    queryFn: getListings,
  });

  // const [state, setState] = useState(null);
  // useEffect(() => {
  // ...
  // }, []);

  return (
    <main>
      <p>Listings</p>
      <div>Page</div>
      <div>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify({ data, isLoading, isError }, null, 2)}</pre> */}
      </div>
      {listings && <DataTable data={listings} />}
    </main>
  );
}
