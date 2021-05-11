import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container } from './styled';
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
  onLayoutChange,
}) {
  const {
    widths: layoutWidths,
    heights: layoutHeights = 1,
    absolute: layoutAbsolute,
    minW,
    minH,
  } = layout;
  let layouts;

  if (layoutAbsolute) {
    layouts = {
      lg: layoutAbsolute,
      md: layoutAbsolute,
      sm: layoutAbsolute,
    };
  } else {
    layouts = generateLayouts(layoutWidths, layoutHeights, totalGridUnits, minW, minH);
  }

  const children = useKeyWithChildren(_children);
  const columns = _columns || {
    lg: totalGridUnits,
    md: totalGridUnits,
    sm: 6,
    xs: 4,
    xxs: 2,
  };
  const dragHandleClass = classes.dragIndicator;
  return (
    <Container
      dragBackgroundColor={dragBackgroundColor}
      style={style}
      classes={classes.root}
    >
      <ResponsiveGridLayout
        resizeHandle={resizeHandle || ''}
        rowHeight={rowHeight}
        draggableHandle={`.${dragHandleClass}` || ''}
        margin={gridMargin}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={columns}
        onLayoutChange={onLayoutChange}
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
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0,
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
    widths: PropTypes.array,
    heights: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.arrayOf(PropTypes.array),
      PropTypes.number,
    ]),
    absolute: PropTypes.array,
    minW: PropTypes.number,
    minH: PropTypes.number,
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
  onLayoutChange: PropTypes.func,
};
