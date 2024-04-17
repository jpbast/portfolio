"use client";
import { useEffect } from "react";

export default function useNavigationToElement() {
  useEffect(() => {
    const url = window.location.href;

    const id = url.split("#");

    if (id.length) {
      const element = document.getElementById(id[1]);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 40,
          behavior: "smooth",
        });
      }
    }
  }, []);
}
