import { create } from "zustand";
import type { ListingTypes, Listings } from "database";

type State = {
  query: string;
  results: Listings[];
  availableFilters?: {
    region?: string[];
    type?: ListingTypes[];
    event?: string[];
  };
  appliedFilters?: {
    region?: string[];
    type?: ListingTypes[];
    event?: string[];
  };
};

type Action = {
  setQuery: (query: State["query"]) => void;
  setResults: (results: State["results"]) => void;
  setAvailableFilters: (filters: State["availableFilters"]) => void;
};

export const useSeachStore = create<State & Action>((set) => ({
  query: "",
  results: [],
  availableFilters: {},
  setQuery: (_query) => {
    set(() => ({ query: _query }));
  },
  setResults: (_results) => {
    set(() => ({ results: _results }));
  },
  setAvailableFilters: (_filters) => {
    set(() => ({
      availableFilters: _filters,
    }));
  },
}));
