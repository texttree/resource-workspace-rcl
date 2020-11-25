import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container } from './styled';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useKeyWithChildren, generateLayouts } from './helpers';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Workspace({
  children: _children,
  style,
  layout,
  totalGridUnits,
  gridMargin,
  breakpoints,
  rowHeight,
  columns: _columns,
  dragBackgroundColor,
  classes,
  resizeHandle,
}) {
  const {
    widths: layoutWidths,
    heights: layoutHeights = 1,
  } = layout;
  const [children, workspaceProps] = useKeyWithChildren(_children);
  let layouts = generateLayouts(layoutWidths, layoutHeights, totalGridUnits, workspaceProps);
  console.log('layouts', layouts);
  const columns = _columns || {
    lg: totalGridUnits,
    md: totalGridUnits,
    sm: totalGridUnits,
    xs: totalGridUnits,
    xxs: totalGridUnits,
  };
  const dragHandleClass = classes.dragIndicator;
  return (
    <Container dragBackgroundColor={dragBackgroundColor} style={style} classes={classes.root}>
      <ResponsiveGridLayout
        resizeHandle={resizeHandle || ''}
        rowHeight={rowHeight}
        draggableHandle={`.${dragHandleClass}` || ''}
        margin={gridMargin}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={columns}
      >
        {children}
      </ResponsiveGridLayout>
    </Container>
  );
}

Workspace.defaultProps = {
  gridMargin: [0, 0],
  totalGridUnits: 12,
  breakpoints: {
    lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
  },
  layout: {
    widths: [[1]],
    heights: [[1]],
  },
  rowHeight: 100,
  children: [],
  dragBackgroundColor: 'transparent',
  classes: {
    root: {},
    dragIndicator: {},
  },
};

Workspace.propTypes = {
  layout: PropTypes.shape({
    widths: PropTypes.array.isRequired,
    heights: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.number), PropTypes.number]),
  }),
  /** The items rendered inside the component */
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  dragHandleClass: PropTypes.string,
  customCss: PropTypes.string,
  totalGridUnits: PropTypes.number,
  gridMargin: PropTypes.arrayOf(PropTypes.number),
  breakpoints: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
    xxs: PropTypes.number,
  }),
  columns: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
    xxs: PropTypes.number,
  }),
  rowHeight: PropTypes.number,
  dragBackgroundColor: PropTypes.string,
  classes: PropTypes.object,
  resizeHandle: PropTypes.instanceOf(React.Component),
};