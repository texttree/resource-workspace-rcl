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
  }
}));
const layoutWidths = [[1, 1], [1, 1], [1]];
const cardClasses = useStyles();

<Workspace 
  gridMargin={[15, 15]}
  dragHandleClassName=".drag-handle" 
  layoutWidths={layoutWidths}>
  <Card classes={cardClasses}>1</Card>
  <Card classes={cardClasses}>2</Card>
  <Card classes={cardClasses}>3</Card>
  <Card classes={cardClasses}>4</Card>
  <Card classes={cardClasses}>5</Card>
</Workspace>
```