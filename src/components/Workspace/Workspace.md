The API documentation of the Workspace React component. Learn more about the props and CSS customization.

### Basic


```jsx
import { Card } from 'translation-helps-rcl';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: '0 1px !important',
    height: '100%'
  },
  dragIndicator: {}
}));
const layout = {
  widths: [[1, 1], [1, 1], [1]]
}
const classes = useStyles();
<Workspace
  gridMargin={[15, 15]}
  classes={classes}
  layout={layout}>
  <Card title="translationWords" classes={classes}>1</Card>
  <Card title="translationAcademy" classes={classes}>2</Card>
  <Card title="translationNotes" classes={classes}>3</Card>
  <Card title="translationQuestoins" classes={classes}>4</Card>
  <Card title="Open Bible Stories" classes={classes}>5</Card>
</Workspace>
```