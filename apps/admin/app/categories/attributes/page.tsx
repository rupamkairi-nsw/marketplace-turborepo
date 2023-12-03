"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import DataTable from "../../../components/table";

async function getAttributes() {
  return await (
    await fetch("http://localhost:8000/api/categories/attributes", {
      method: "GET",
      credentials: "include",
    })
  ).json();
}

export default function AttributesRootPage(): JSX.Element {
  const { data: { attributes } = {} } = useQuery({
    queryKey: ["attributes"],
    queryFn: getAttributes,
  });

  return (
    <main>
      <h2>Attributes</h2>
      <div>Page</div>
      <pre>{JSON.stringify(attributes, null, 2)}</pre>
      {/* {attributes?.length > 0 && <DataTable data={attributes} />} */}
    </main>
  );
}
