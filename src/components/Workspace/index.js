import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { WorkspaceContainer } from './styled';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import '../../style.css';
import { useKeyWithChildren, generateLayouts } from './helpers';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Workspace({
  layoutWidths,
  layoutHeight,
  children: _children,
  style,
  dragHandleClassName,
  layoutHeights,
  customCss,
  totalGridUnits,
  gridMargin,
  breakpoints,
  rowHeight,
  columns: _columns,
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
    <WorkspaceContainer>
      <ResponsiveGridLayout
        rowHeight={rowHeight}
        draggableHandle={dragHandleClassName}
        margin={gridMargin}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={columns}
      >
        {children}
      </ResponsiveGridLayout>
    </WorkspaceContainer>
  );
}

Workspace.defaultProps = {
  gridMargin: [15, 15],
  totalGridUnits: 12,
  breakpoints: {
    lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
  },
  rowHeight: 100,
  layoutHeights:[1],
  layoutHeight: 1,
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
};