import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css'

import { Container } from './styled';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Workspace({ breakpoints, columns }) {
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ]
  }
  return (
    <Container>
      <ResponsiveGridLayout layouts={layouts}
        breakpoints={breakpoints}
        cols={columns}>
        <div key="a">1</div>
        <div key="b">2</div>
        <div key="c">3</div>
        <div key="d">4</div>
      </ResponsiveGridLayout>
    </Container>)
}

Workspace.propTypes = {
  breakpoints: PropTypes.object,
  columns: PropTypes.object
}

Workspace.defaultProps = {
  breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
  columns: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }
}