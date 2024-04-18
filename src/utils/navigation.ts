export const navigateToId = (id: string, offset?: number) => {
  const element = document.getElementById(id);

  if (element) {
    window.scrollTo({
      top: element.offsetTop + (offset || -40),
      behavior: "smooth",
    });
    window.history.pushState(null, "", `#${id}`);
  }
};
