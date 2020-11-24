import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container } from './styled';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useKeyWithChildren, generateLayouts } from './helpers';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Workspace({
  layoutWidths,
  layoutHeight,
  children: _children,
  style,
  dragHandleClassName,
  layoutHeights,
  totalGridUnits,
  gridMargin,
  breakpoints,
  rowHeight,
  columns: _columns,
  dragBackgroundColor,
  classes,
  resizeHandle,
}) {
  let layouts = generateLayouts(layoutWidths, layoutHeights || [layoutHeight], totalGridUnits);
  const children = useKeyWithChildren(_children);
  const columns = _columns || {
    lg: totalGridUnits,
    md: totalGridUnits,
    sm: totalGridUnits,
    xs: totalGridUnits,
    xxs: totalGridUnits,
  };
  return (
    <Container dragBackgroundColor={dragBackgroundColor} style={style} classes={classes.root}>
      <ResponsiveGridLayout
        // resizeHandle={resizeHandle}
        rowHeight={rowHeight}
        draggableHandle={dragHandleClassName}
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
  rowHeight: 100,
  layoutHeights: [1],
  layoutHeight: 1,
  children: [],
  dragBackgroundColor: 'transparent',
  classes: {},
};

Workspace.propTypes = {
  layoutWidths: PropTypes.array.isRequired,
  layoutHeight: PropTypes.number,
  layoutHeights: PropTypes.arrayOf(PropTypes.number),
  /** The items rendered inside the component */
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  dragHandleClassName: PropTypes.string,
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