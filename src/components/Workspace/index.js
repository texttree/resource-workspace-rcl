import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Card from '../Card';
import { Container } from './styled';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../../style.css';
const ResponsiveGridLayout = WidthProvider(Responsive);
const INCREMENT_UNITS = 2;
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

function generateLayouts(layoutOptions) {
  let layouts = [];

  layoutOptions.forEach((row, ridx) => {
    row.forEach((cellUnit, cidx) => {
      layouts.push({
        i: String(((ridx + 1) * ridx) + cidx + 1),
        x: ridx * (TOTAL_WIDTH_UNITS / row.length),
        y: cidx,
        w: (cellUnit / row.length) * TOTAL_WIDTH_UNITS,
        h: (1 / layoutOptions.length) * layoutOptions.length,
      });
    });
  });
  return { lg: layouts };
}

export default function Workspace({
  layoutOptions, children: _children, style, dragHandleClassName,
}) {
  let layouts = generateLayouts(layoutOptions);
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
        // Layout is an array of object with the format:
        // {x: number, y: number, w: number, h: number}
        // The index into the layout must match the key used on each item component.
        // If you choose to use custom keys, you can specify that key in the layout
        // array objects like so:
        // {i: string, x: number, y: number, w: number, h: number}
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