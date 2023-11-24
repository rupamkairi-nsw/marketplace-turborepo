import SearchLayout from "../../layouts/search";
import { getSearchQueries } from "../../utils/ssg/generate-static-pages";

interface PageProps {
  searchParams: {
    query: string;
  };
}

// export function generateStaticParams() {
//   const queries = [{ query: "one" }, { query: "two" }];
//   return queries;
// }

export default function Page({ searchParams }: PageProps): JSX.Element {
  const data = getSearchQueries(searchParams.query);

  return (
    <div>
      <div>
        <p>Page</p>
        <p>Query Params</p>
      </div>
      <SearchLayout>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </SearchLayout>
    </div>
  );
}
