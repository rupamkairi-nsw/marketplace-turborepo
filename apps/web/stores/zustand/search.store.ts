import { create } from "zustand";

type State = {
  query: string;
  availableFilters?: {
    region: string[];
    type: string[];
  };
  appliedFilters?: {
    region: string[];
    type: string[];
  };
};

type Action = {
  setQuery: (query: State["query"]) => void;
};

export const useSeachStore = create<State & Action>((set) => ({
  query: "",
  setQuery: (_query) => {
    set(() => ({ query: _query }));
  },
}));
