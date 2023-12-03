"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import DataTable from "../../components/table";

async function getCategories() {
  return await (
    await fetch("http://localhost:8000/api/categories", {
      method: "GET",
      credentials: "include",
    })
  ).json();
}

export default function CategoriesRootPage(): JSX.Element {
  const { data: { categories } = {} } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <main>
      <h2>Categoies</h2>
      <div>Page</div>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
      {/* {categories?.length > 0 && <DataTable data={categories} />} */}
    </main>
  );
}
