import React from 'react';

export function useFetchMore(
  fetchMore: () => Promise<unknown>,
  rootMargin = '0px 0px 1000px 0px',
) {
  const [node, setNode] = React.useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loader = React.useRef(fetchMore);

  const observer = React.useRef(
    new IntersectionObserver(
      (entries) => {
        if (loader.current && entries[0].isIntersecting) {
          setIsLoading(true);
          loader
            .current()
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));
        }
      },
      { threshold: 1, rootMargin },
    ),
  );

  React.useEffect(() => {
    loader.current = fetchMore;
  }, [fetchMore]);

  React.useEffect(() => {
    const currentObserver = observer.current;

    if (node) {
      currentObserver.observe(node);
    }

    return () => {
      if (node) {
        currentObserver.unobserve(node);
      }
    };
  }, [node]);

  return { node: setNode, isLoading };
}
