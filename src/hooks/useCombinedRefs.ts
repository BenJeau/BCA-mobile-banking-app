import { useEffect, useRef } from 'react';

const useCombinedRefs = (...refs: any[]) => {
  const targetRef = useRef(null);

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) {
        return;
      } else if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export default useCombinedRefs;
