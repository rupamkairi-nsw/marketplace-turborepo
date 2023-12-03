"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import DataTable from "../../../../components/table";

async function getAttributeGroups() {
  return await (
    await fetch("http://localhost:8000/api/categories/attributes/groups", {
      method: "GET",
      credentials: "include",
    })
  ).json();
}

export default function GroupsRootPage(): JSX.Element {
  const { data: { attributeGroups } = {} } = useQuery({
    queryKey: ["attributeGroups"],
    queryFn: getAttributeGroups,
  });

  return (
    <main>
      <h2>Groups</h2>
      <div>Page</div>
      <pre>{JSON.stringify(attributeGroups, null, 2)}</pre>
      {/* {attributeGroups?.length > 0 && <DataTable data={attributeGroups} />} */}
    </main>
  );
}
