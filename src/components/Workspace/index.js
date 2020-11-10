import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { Container } from './styled';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css'
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Workspace({ breakpoints, columns, layouts, children, style }) {
  return (
    <Container style={style}>
      <ResponsiveGridLayout
        // containerPadding={[20, 20]}
        margin={[15, 15]}
        layouts={layouts}
        breakpoints={breakpoints}
        cols={columns}>
        {children}
      </ResponsiveGridLayout>
    </Container >
  )
}

Workspace.propTypes = {
  breakpoints: PropTypes.object,
  columns: PropTypes.object
}

Workspace.defaultProps = {
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  columns: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  layouts: {
    lg: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ]
  }
}