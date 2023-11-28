import { create } from "zustand";
import type { Listings } from "database";

type State = {
  listing: Listings | null;
};

type Action = {
  setListing: (listing: State["listing"]) => void;
};

export const useListingStore = create<State & Action>((set) => ({
  listing: null,
  setListing: (_listing) => {
    set(() => ({ listing: _listing }));
  },
}));
