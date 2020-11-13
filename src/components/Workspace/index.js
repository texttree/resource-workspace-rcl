/* eslint-disable no-nested-ternary */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Card from '../Card';
import { Container } from './styled';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../../style.css';
const ResponsiveGridLayout = WidthProvider(Responsive);
const TOTAL_WIDTH_UNITS = 12;
const columns = {
  lg: TOTAL_WIDTH_UNITS,
  md: TOTAL_WIDTH_UNITS,
  sm: TOTAL_WIDTH_UNITS,
  xs: TOTAL_WIDTH_UNITS,
  xxs: TOTAL_WIDTH_UNITS,
};
const breakpoints = {
  lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
};

function getWidth(row, value) {
  return (value / row.reduce((curr, next) => curr + next, 0)) * TOTAL_WIDTH_UNITS;
}

function generateLayouts(layoutWidths, layoutHeights) {
  let layouts = [];

  layoutWidths.forEach((row, ridx) => {
    row.forEach((cellUnit, cidx) => {
      const previousColumns = row.filter((_, _index) => _index < cidx);
      const x = previousColumns.reduce((curr, next) => getWidth(row, next) + curr, 0);

      layouts.push({
        i: String(layouts.length + 1),
        x,
        y: ridx * (TOTAL_WIDTH_UNITS / layoutWidths.length),
        w: getWidth(row, cellUnit),
        h: Array.isArray(layoutHeights[ridx]) && !isNaN(layoutHeights[ridx][cidx]) ? layoutHeights[ridx][cidx] :
          Array.isArray(layoutHeights[ridx]) && !isNaN(layoutHeights[ridx][0]) ? layoutHeights[ridx][0] :
            !isNaN(layoutHeights[ridx]) ? layoutHeights[ridx] :
              !isNaN(layoutHeights[0]) ? layoutHeights[0] :
                !isNaN(layoutHeights) ? layoutHeights : 1,
      });
    });
  });
  return { lg: layouts };
}

export default function Workspace({
  layoutWidths,
  layoutHeight = 1,
  children: _children,
  style,
  dragHandleClassName,
  layoutHeights,
}) {
  let layouts = generateLayouts(layoutWidths, layoutHeights || [layoutHeight]);
  const children = useMemo(() =>
    _children.map((childComponent, index) => (<Card key={index + 1}>
      {childComponent}
    </Card>)), [_children]);
  console.log('layouts', layouts);
  return (
    <Container style={style}>
      <ResponsiveGridLayout
        draggableHandle={dragHandleClassName}
        margin={[15, 15]}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={columns}
      >
        {children}
      </ResponsiveGridLayout>
    </Container>
  );
}

Workspace.propTypes = {
  breakpoints: PropTypes.object,
  columns: PropTypes.object,
};