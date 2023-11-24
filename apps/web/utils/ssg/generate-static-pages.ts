import { cache } from "react";

export const revalidate = 30;

export const searchQueries = [
  { query: "one", content: "Same Content - ONE" },
  { query: "two", content: "Same Content - TWO" },
];

export const getSearchQueries = cache((query: string) => {
  const data = {
    ...searchQueries.find((el) => el.query === query),
    ts: Date.now(),
  };

  if (!data.query) return null;

  return new Promise((resolve) => {
    setTimeout(() => {
      if (data.query) resolve(data);
    }, 5000);
  });
});

export const staticSearchQueries = [
  { id: 1, query: "?query=one" },
  { id: 2, query: "?query=two" },
];

// export function generateStaticSearchQueries() {
//   return [
//     { query: "one", content: "Same Content ONE" },
//     { query: "two", content: "Same Content - TWO" },
//   ];
// }
