import React, { useMemo } from 'react';
import Card from '../Card';

function getWorkspaceChildrenProps(childrenProps) {
  let props = {};

  Object.keys(childrenProps).forEach((key) => {
    if (key.match(/workspace-\w+/)) {
      props[key.replace(/workspace-/, '')] = childrenProps[key];
    }
  });
  return props;
}

export function useKeyWithChildren(_children) {
  const workspaceProps = [];
  let childrenArray = _children;

  if (!Array.isArray(_children)) {
    childrenArray = [_children];
  }

  const children = useMemo(() => childrenArray.map((childComponent, index) => {
    workspaceProps[index] = getWorkspaceChildrenProps(childComponent.props);

    if (workspaceProps[index].hide) {
      return <></>;
    }
    return (<Card {...workspaceProps[index]} key={childComponent.key || index + 1} >{React.cloneElement(childComponent)}</Card>
    );
  }), [childrenArray, workspaceProps]);
  return [children, workspaceProps];
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

export function generateLayouts(layoutWidths, layoutHeights, maxGridUnits, workspaceProps) {
  let layouts = [];

  layoutWidths.forEach((row, ridx) => {
    row.forEach((cellUnit, cidx) => {
      const previousColumns = row.filter((_, _index) => _index < cidx);
      const i = String(layouts.length + 1);
      const x = previousColumns.reduce((curr, next) => getWidth(row, next, maxGridUnits) + curr, 0);
      const y = ridx * (maxGridUnits / layoutWidths.length);
      const w = getWidth(row, cellUnit, maxGridUnits);
      const h = getHeight(layoutHeights, ridx, cidx);

      layouts.push({
        i, x, y, w, h,
      });
    });
  });
  layouts = layouts.filter((_, i) => workspaceProps[i].hide !== true);
  return {
    lg: layouts, md: layouts, sm: layouts,
  };
}

