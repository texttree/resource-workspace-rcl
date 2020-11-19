import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container } from './styled';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../../style.css';
import { useKeyWithChildren, generateLayouts } from './helpers';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Workspace({
  layoutWidths,
  layoutHeight = 1,
  children: _children,
  style,
  dragHandleClassName,
  layoutHeights,
  customCss,
  maxGridUnits,
  gridMargin,
  breakpoints,
}) {
  let layouts = generateLayouts(layoutWidths, layoutHeights || [layoutHeight], maxGridUnits);
  const children = useKeyWithChildren(_children);
  const columns = {
    lg: maxGridUnits,
    md: maxGridUnits,
    sm: maxGridUnits,
    xs: maxGridUnits,
    xxs: maxGridUnits,
  };
  return (
    <Container css={customCss} style={style}>
      <ResponsiveGridLayout
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
  gridMargin: [15, 15],
  maxGridUnits: 12,
  breakpoints: {
    lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
  },
};

Workspace.propTypes = {
  layoutWidths: PropTypes.array.isRequired,
  layoutHeight: PropTypes.number,
  layoutHeights: PropTypes.arrayOf(Number),
  children: PropTypes.array.isRequired,
  style: PropTypes.object,
  dragHandleClassName: PropTypes.string,
  customCss: PropTypes.string,
  totalGridUnits: PropTypes.number,
  gridMargin: PropTypes.arrayOf(Number),
  maxGridUnits: PropTypes.number,
  breakpoints: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
    xxs: PropTypes.number,
  }),
};