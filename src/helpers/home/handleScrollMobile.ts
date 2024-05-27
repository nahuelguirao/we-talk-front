import { MutableRefObject } from "react";

export const handleScrollMobile = (
  contentRef: MutableRefObject<HTMLElement | null>,
  scrollThreshold: number,
  handleScroll: (value: boolean) => void
) => {
  const scrollHandler = () => {
    if (contentRef.current) {
      // If the position of the 'section/children' is higher that de threshold sets state to true
      if (contentRef.current.scrollTop > scrollThreshold) {
        handleScroll(true);
      } else {
        handleScroll(false);
      }
    }
  };

  const addScrollListener = () => {
    if (contentRef.current) {
      contentRef.current.addEventListener("scroll", scrollHandler);
    }
  };

  const removeScrollListener = () => {
    if (contentRef.current) {
      contentRef.current.removeEventListener("scroll", scrollHandler);
    }
  };

  addScrollListener();

  return removeScrollListener;
};
