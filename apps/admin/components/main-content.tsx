/* eslint-disable */
import { useEffect, useState } from "react";
import ContentBreadcrumb from "./content-breadcrumb";

export default function MainContent({ children }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await (
          await fetch("http://localhost:8000/api/me", {
            method: "POST",
            credentials: "include",
          })
        ).json();
        setState(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      {/* <ContentBreadcrumb /> */}
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}

      {children}
    </main>
  );
}
