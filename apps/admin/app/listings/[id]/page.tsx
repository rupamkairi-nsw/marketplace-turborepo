"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import DataTable from "../../components/table";
import { Button, Label, TextInput } from "flowbite-react";

async function getListing() {
  return await (
    await fetch("http://localhost:8000/api/listings/1", {
      method: "GET",
      credentials: "include",
    })
  ).json();
}

async function putListingAttributes(body) {
  return await (
    await fetch("http://localhost:8000/api/listings/1/attributes", {
      method: "PUT",
      body: JSON.stringify(body),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
}

export default function ListingRootPage(): JSX.Element {
  // const queryClient = useQueryClient();
  const { data: { listing } = {} } = useQuery({
    queryKey: ["listing"],
    queryFn: getListing,
  });
  const mutation = useMutation({
    mutationKey: ["putListingAttributes"],
    mutationFn: putListingAttributes,
  });

  const [attributes, setAttributes] = useState(listing?.attributes);

  useEffect(() => {
    setAttributes(listing?.attributes ?? []);
  }, [listing?.attributes]);

  function handleAttributesChange(attribute, value) {
    const { id, name, type } = attribute;
    const _attributes = structuredClone(attributes);
    const _attributeIx = _attributes.findIndex((el) => el.id === id);
    let _attribute = { id, name, type, value };
    if (_attributeIx > -1) _attributes[_attributeIx] = { ..._attribute };
    else _attributes.push(_attribute);
    setAttributes(_attributes);
  }

  return (
    <main>
      <h2>Listings</h2>
      <div>Page</div>
      <div>
        {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
        {/* <pre>{JSON.stringify({ data, isLoading, isError }, null, 2)}</pre> */}
      </div>
      {/* {listings && <DataTable data={listings} />} */}
      {listing?.categories?.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <p>{category.description}</p>
          {category?.attributes?.map((attribute) => (
            <div key={attribute.id}>
              <Label
                htmlFor={attribute.id}
                value={attribute.name}
                content="content"
              />
              <TextInput
                id={attribute.id}
                value={attributes.find((el) => el.id === attribute.id)?.value}
                onChange={(event) => {
                  const value = event.target.value;
                  handleAttributesChange(attribute, value);
                }}
              />
            </div>
          ))}
        </div>
      ))}
      <div className="my-4">
        <Button
          color="light"
          onClick={() => {
            mutation.mutate({ attributes });
          }}
        >
          Save attributes
        </Button>
      </div>
      <pre>{JSON.stringify(attributes, null, 2)}</pre>
      <pre>{JSON.stringify(listing, null, 2)}</pre>
    </main>
  );
}
