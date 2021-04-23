import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { Workspace } from '../src';
import Card from './utils/Card';

configure({ adapter: new Adapter() });

const absoluteLayout = [
  {
    'w':6, 'h':1, 'x':0, 'y':0, 'i': 'card_0',
  },
  {
    'w':6, 'h':1, 'x':6, 'y':2, 'i': 'card_1',
  },
  {
    'w':6, 'h':1, 'x':0, 'y':2, 'i': 'card_2',
  },
  {
    'w':6, 'h':1, 'x':6, 'y':0, 'i': 'card_3',
  },
  {
    'w':12, 'h':1, 'x':0, 'y':1, 'i': 'card_4',
  },
];

const test_layout = {
  // this line is for relative positioning
  widths: [[1, 1], [1, 1], [1]],
  // uncomment following line to do absolute positioning, for example to restore last saved position
  // absolute: absoluteLayout,
};

describe('testing Workspace', () => {
  it('test widths only', done => {
    const initialLayout = test_layout;
    let found = false;
    generateLayoutTest(initialLayout, 5, found, done);
  });

  it('test widths array and heights array', done => {
    const initialLayout = {
      widths: [[1, 2, 3]],
      heights: [[3, 2, 1]],
    };
    let found = false;
    generateLayoutTest(initialLayout, 3, found, done);
  });

  it('test widths array and numerical height', done => {
    const initialLayout = {
      widths: [[1, 2, 3]],
      heights: 2,
    };
    let found = false;
    generateLayoutTest(initialLayout, 3, found, done);
  });

  it('test absolute layout', done => {
    const match = absoluteLayout;
    const initialLayout = { absolute: absoluteLayout };
    let found = false;
    generateLayoutTest(initialLayout, absoluteLayout.length, found, done, match);
  });
});

//
// helpers
//

function filterLayouts(layout) {
  const include = ['w','h','x','y','i'];
  const filteredLayouts = layout.map(item => {
    const filtered = {};

    for (const key of include) {
      filtered[key] = item[key];
    }
    return filtered;
  });
  return filteredLayouts;
}

function generateLayoutTest(initialLayout, cardCount, found, done, match = null) {
  function onLayoutChange(layout) {
    if (!found) {
      found = true;
      // console.log(`for initial layout: ${JSON.stringify(initialLayout)}`);
      // console.log(`new resource layout: ${JSON.stringify(layout)}`);
      let filtered = filterLayouts(layout);
      // console.log(`filtered: ${JSON.stringify(filtered)}`);

      if (match) {
        expect(filtered).toEqual(match);
      } else {
        expect(filtered).toMatchSnapshot();
      }
      done();
    }
  }

  mount(
    <Workspace gridMargin={[15, 15]} layout={initialLayout} onLayoutChange={onLayoutChange}>
      {getCards(cardCount)}
    </Workspace>,
  );
}

function getCards(cardCount) {
  const cards = [];

  for (let i = 0; i < cardCount; i++) {
    cards.push(
      <Card title={`Card ${i}`} key={`card_${i}`}>`Card ${i} Content`</Card>,
    );
  }

  return cards;
}