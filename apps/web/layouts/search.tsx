import type { ReactNode } from "react";
import SearchField from "../components/search-field";
import SearchFiltersLayout from "./search-filters";
import SearchResultsLayout from "./search-results";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <div className="container mx-auto">
      <div>
        <ErrorBoundary fallback={<p>CSR inside</p>}>
          <SearchField />
        </ErrorBoundary>
      </div>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <ErrorBoundary fallback={<p>CSR inside</p>}>
            <SearchFiltersLayout />
          </ErrorBoundary>
        </div>
        <div className="col-span-3">
          <SearchResultsLayout />
          {children}
        </div>
      </div>
    </div>
  );
}
