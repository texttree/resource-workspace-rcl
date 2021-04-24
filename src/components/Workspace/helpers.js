import React, { useMemo } from 'react';
import Card from '../Card';

export function useKeyWithChildren(_children) {
  let childrenArray = _children;

  if (!Array.isArray(_children)) {
    childrenArray = [_children];
  }

  const children = useMemo(() =>
    childrenArray.map((childComponent, index) => (
      <Card key={childComponent.key ?? index + 1}>{React.cloneElement(childComponent)}</Card>
    )), [childrenArray]);
  return children;
}

function getWidth(row, value, maxGridUnits) {
  return (value / row.reduce((curr, next) => curr + next, 0)) * maxGridUnits;
}

/**
 *
 * @param {Array | Array[]} layoutHeights - The array of heights to specify the layout
 * @param {number} ridx - row index
 * @param {number} cidx - column index
 */
export function getHeight(layoutHeights, ridx, cidx) {
  const isHeightArrayOfNumbers = Array.isArray(layoutHeights[ridx]) && !isNaN(layoutHeights[ridx][cidx]);
  const onlyFirstHeightSpecifiedInArray = Array.isArray(layoutHeights[ridx]) && !isNaN(layoutHeights[ridx][0]);
  const sameHeightForEntireRow = !isNaN(layoutHeights[ridx]);
  const sameHeightForEntireTableInArray = !isNaN(layoutHeights[0]);
  const sameHeightForEntireTable = !isNaN(layoutHeights);

  if (isHeightArrayOfNumbers) {
    //layoutHeights: [[1, 2, 3], [1,2,3], [1,2,3]]
    return layoutHeights[ridx][cidx];
  } else if (onlyFirstHeightSpecifiedInArray) {
    //layoutHeights: [[1], [2], [3]]
    return layoutHeights[ridx][0];
  } else if (sameHeightForEntireRow) {
    //layoutHeights: [1, 2, 3]
    return layoutHeights[ridx];
  } else if (sameHeightForEntireTableInArray) {
    //layoutHeights: [1]
    return layoutHeights[0];
  } else if (sameHeightForEntireTable) {
    //layoutHeights: 1
    return layoutHeights;
  } else {
    //No height specified
    return 1;
  }
}

export function generateLayouts(layoutWidths, layoutHeights, maxGridUnits, minW, minH) {
  let layouts = [];

  layoutWidths.forEach((row, ridx) => {
    row.forEach((cellUnit, cidx) => {
      const previousColumns = row.filter((_, _index) => _index < cidx);
      const x = previousColumns.reduce((curr, next) => getWidth(row, next, maxGridUnits) + curr, 0);
      const _layout = {
        i: String(layouts.length + 1),
        x,
        y: ridx * (maxGridUnits / layoutWidths.length),
        w: getWidth(row, cellUnit, maxGridUnits),
        h: getHeight(layoutHeights, ridx, cidx),
      };

      if (minW) {
        _layout.minW = minW;
      }

      if (minH) {
        _layout.minH = minH;
      }

      layouts.push(_layout);
    });
  });
  return {
    lg: layouts, md: layouts, sm: layouts,
  };
}
