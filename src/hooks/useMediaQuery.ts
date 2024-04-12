"use client";

import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
