export const navigateToId = (id: string, updateUrl?: boolean, offset?: number) => {
  const element = document.getElementById(id);

  if (element) {
    window.scrollTo({
      top: element.offsetTop + (offset || -40),
      behavior: 'smooth',
    });
    if (updateUrl) {
      window.history.pushState(null, '', `#${id}`);
    }
  }
};
