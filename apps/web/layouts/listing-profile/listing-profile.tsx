"use client";

import { useCallback, useEffect } from "react";
import apiKit from "../../utils/api/helper";
import { useListingStore } from "../../stores/zustand/listing.store";

type Props = {
  listingName?: string;
  id?: string | null;
};

export default function ListingProfile({ listingName, id = null }: Props) {
  const { listing, setListing } = useListingStore();

  const getListing = useCallback(async (): void => {
    let api = "/listings";
    if (listingName) api += `/listing_name/${listingName}`;
    else if (id) api += `/${id}`;
    else console.log("Possibly Invalid api");

    const data = await apiKit({ api });
    const listing = data?.listing;
    if (!listing) return;
    setListing(listing);
  }, [listingName, id]);

  useEffect(() => {
    getListing();
  }, [getListing]);

  return (
    <div>
      <p>Profile</p>
      <pre>{JSON.stringify(listing, null, 2)}</pre>
    </div>
  );
}
