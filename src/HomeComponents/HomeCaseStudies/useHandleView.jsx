'use client'
import { useEffect, useMemo, useState } from "react";
import { useInView } from "react-intersection-observer";

// A custom hook which handles when the certain component is in view
const useIntersectionObserver = (rootMargin) => {
    const [elementRef, inView] = useInView({
      rootMargin: rootMargin,
    });
    const initialVisibility = useMemo(() => inView, [inView]);
  
    const [isPartiallyVisible, setIsPartiallyVisible] = useState(
      initialVisibility
    );
  
    useEffect(() => {
      setIsPartiallyVisible(inView);
    }, [inView]);
  
    return [elementRef, isPartiallyVisible];
};
export default useIntersectionObserver

