import { MutableRefObject, useEffect, useState } from "react";
import { handleScrollMobile } from "../../helpers/home/handleScrollMobile";

export const useScrollMobile = (
  contentRef: MutableRefObject<HTMLElement | null>,
  scrollThreshold: number
) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (isScrolled: boolean) => setIsScrolled(isScrolled);

  useEffect(() => {
    handleScrollMobile(contentRef, 200, handleScroll);
  }, [scrollThreshold, handleScroll]);

  return { isScrolled };
};
