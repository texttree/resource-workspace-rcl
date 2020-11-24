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
const layoutWidths = [[1, 1], [1, 1], [1]];
const cardClasses = useStyles();
<Workspace
  gridMargin={[15, 15]}
  dragHandleClass={cardClasses.dragIndicator}
  layoutWidths={layoutWidths}>
  <Card title="translationWords" classes={cardClasses}>1</Card>
  <Card title="translationAcademy" classes={cardClasses}>2</Card>
  <Card title="translationNotes" classes={cardClasses}>3</Card>
  <Card title="translationQuestoins" classes={cardClasses}>4</Card>
  <Card title="Open Bible Stories" classes={cardClasses}>5</Card>
</Workspace>
```