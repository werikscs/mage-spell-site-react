import { useEffect, useRef } from 'react';

interface IInfiniteScrollProps {
  callback: () => void;
}

function InfiniteScroll({ callback }: IInfiniteScrollProps) {
  const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        callback();
      }
    });

    if (divInfiniteScrollRef.current) {
      intersectionObserver.observe(divInfiniteScrollRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiniteScrollRef]);

  return <div ref={divInfiniteScrollRef} />;
}

export default InfiniteScroll;
