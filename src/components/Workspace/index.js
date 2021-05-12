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
  layoutWidths,
  layoutHeights,
  minW,
  minH,
}) {
  // const {
  //   widths: layoutWidths,
  //   heights: layoutHeights = 1,
  //   absolute: layoutAbsolute,
  //   minW,
  //   minH,
  // } = layout;
  let layouts;

  if (layout) {
    // layouts = {
    //   lg: layoutAbsolute,
    //   md: layoutAbsolute,
    //   sm: layoutAbsolute,
    // };

    // Breaking change: After v1.0.0 layout was changed from array to object to allow each breakpoint
    // to have its own layout settings. Thus, the code below migrates the old layout prop to the new format.
    if (Array.isArray(layout)) {
      layouts = generateLayouts(layoutWidths, layoutHeights, totalGridUnits, minW, minH);
      layouts = {
        ...layouts, lg: layout, md: layout,
      };
    } else {
      layouts = { ...layout };
    }
  } else {
    layouts = generateLayouts(layoutWidths, layoutHeights, totalGridUnits, minW, minH);
  }

  const children = useKeyWithChildren(_children);
  const columns = _columns || {
    lg: totalGridUnits,
    md: totalGridUnits,
    sm: 6,
    xs: minW || 4,
    xxs: minW || 2,
  };

  console.log({
    columns,
    breakpoints,
  });

  const dragHandleClass = classes.dragIndicator;

  return (
    <Container
      style={style}
      classes={classes.root}
      dragBackgroundColor={dragBackgroundColor}
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
  rowHeight: 100,
  children: [],
  dragBackgroundColor: 'transparent',
  classes: {
    root: {},
    dragIndicator: {},
  },
};

Workspace.propTypes = {
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
  layout: PropTypes.array,
  layoutWidths: PropTypes.array,
  layoutHeights: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.array),
    PropTypes.number,
  ]),
  minW: PropTypes.number,
  minH: PropTypes.number,
};
