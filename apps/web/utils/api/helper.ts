import type { Users, Listings, ListingTypes } from "database";

type Args = {
  url?: string;
  api?: string;
  body?: object | null;
  method?: string;
};

type Resources = {
  users?: Users[];
  listing?: Listings | null;
  listings?: Listings[] | null;
  listing_types?: ListingTypes[];
};

const baseUrl = "http://localhost:8000/api";
export default async function apiKit({
  url,
  api,
  body = null,
  method = "GET",
}: Args): Promise<Resources> {
  try {
    const _url = url ?? baseUrl + api;
    const response = await fetch(_url, {
      body: method === "GET" ? null : JSON.stringify(body),
      method,
      credentials: "include",
    });

    let data: Resources;

    if (response.status >= 200 && response.status < 300) {
      data = (await response.json()) as Resources;
    }

    return data;
  } catch (error) {
    console.log("apiKit ERROR");
    throw error;
  }
}
