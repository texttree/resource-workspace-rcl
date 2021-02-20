# resource-workspace-rcl

The API documentation of the Workspace React component. Learn more about the props and CSS customization.

## Basic

```jsx
import { Card } from 'translation-helps-rcl';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/resource-workspace-rcl.css';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: '0 1px !important',
    height: '100%',
  },
  dragIndicator: {},
}));

const absoluteLayout = [
  {"w":6,"h":1,"x":0,"y":0,"i":"1","moved":false,"static":false},
  {"w":6,"h":1,"x":6,"y":2,"i":"2","moved":false,"static":false},
  {"w":6,"h":1,"x":0,"y":2,"i":"3","moved":false,"static":false},
  {"w":6,"h":1,"x":6,"y":0,"i":"4","moved":false,"static":false},
  {"w":12,"h":1,"x":0,"y":1,"i":"5","moved":false,"static":false},
];

const layout = {
  // this line is for relative positioning
  widths: [[1, 1], [1, 1], [1]],
  // uncomment following line to do absolute positioning, for example to restore last saved position
  // absolute: absoluteLayout,
};

function onLayoutChange(layout) {
  console.log(`onLayoutChange: raw: ${JSON.stringify(layout)}`);
}

const classes = useStyles();

<Workspace gridMargin={[15, 15]} classes={classes} layout={layout} onLayoutChange={onLayoutChange}>
  <Card title="translationWords" classes={classes}>
    1
  </Card>
  <Card title="translationAcademy" classes={classes}>
    2
  </Card>
  <Card title="translationNotes" classes={classes}>
    3
  </Card>
  <Card title="translationQuestoins" classes={classes}>
    4
  </Card>
  <Card title="Open Bible Stories" classes={classes}>
    5
  </Card>
</Workspace>;
```
