import { useState, useLayoutEffect } from 'react';
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    let width = 0;
    let height = 0;

    const resize = new ResizeObserver(function (entries) {
      // since we are observing only a single element, so we access the first element in entries array
      let rect = entries[0].contentRect;

      // current width & height
      width = rect.width;
      height = rect.height;
      setSize([width, height]);
    });

    // start observing for resize
    resize.observe(document.querySelector('.react-grid-layout'));

    return () => resize.observe(document.querySelector('.react-grid-layout'));
  }, []);
  return size;
};
