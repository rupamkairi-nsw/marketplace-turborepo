import { redirect } from "next/navigation";
import SearchLayout from "../../../layouts/search";
import {
  getSearchQueries,
  staticSearchQueries,
} from "../../../utils/ssg/generate-static-pages";

interface PageProps {
  params: {
    query: string;
  };
  searchParams: {
    query: string;
  };
}

export function generateStaticParams() {
  const queries = staticSearchQueries.map((el) => ({
    query: [`query`, `${el.id}${el.query}`],
  }));
  return queries;
}

export default async function Page({
  params,
  searchParams,
}: PageProps): Promise<JSX.Element> {
  const data = await getSearchQueries(searchParams.query);

  if (data === null) {
    const qs = new URLSearchParams(searchParams);
    redirect(`/search?${qs.toString()}`);
  }

  return (
    <div>
      <div>
        <p>Page</p>
        <p>Query [{params.query}]</p>
      </div>
      <SearchLayout>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </SearchLayout>
    </div>
  );
}
