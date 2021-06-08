import { useEffect, useState, useRef } from "react";

export const useOnScreen = (options) => {
  const [visible, setIsVisible] = useState(false);

  const ref = useRef({ current: null });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, visible]);

  return { ref, visible };
};
