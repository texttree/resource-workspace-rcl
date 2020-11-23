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

<Workspace dragHandleClassName=".drag-handle" layoutWidths={layoutWidths}>
  <Card classes={cardClasses}>1</Card>
  <Card classes={cardClasses}>2</Card>
  <Card classes={cardClasses}>3</Card>
  <Card classes={cardClasses}>4</Card>
  <Card classes={cardClasses}>5</Card>
</Workspace>
```
<!-- 
```jsx
import Card from '../Card';
const layoutWidths = [[1, 1], [1, 1], [1]];
<Workspace layoutWidths={layoutWidths}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
</Workspace>
```

Specifying widths of specifc elements:

```jsx
import Card from '../Card';
<Workspace
  layoutWidths={[[1, 1], [1, 1], [1]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
</Workspace>
```

Widths are calculated based on ratios. Each number in the array
is used as a percentage of the total length available

```jsx
import Card from '../Card';
<Workspace
  layoutWidths={[[2, 2], [3, 3], [12], [6, 6]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
  <Card>7</Card>
</Workspace>
```

```jsx
import Card from '../Card';
<Workspace
  layoutWidths={[[1, 1], [1], [2, 2, 3, 5]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
  <Card>7</Card>
</Workspace>
```

```jsx
import Card from '../Card';
<Workspace
  layoutWidths={[[20, 80], [60, 40], [30, 50]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
</Workspace>
```


Configuration of heights can be specified by a number or array

```jsx
import Card from '../Card';
<Workspace
  layoutHeights={.8}
  layoutWidths={[[1, 1], [1], [2, 2, 3, 5]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
  <Card>7</Card>
</Workspace>
```

```jsx
import Card from '../Card';
<Workspace
  layoutHeights={[[1], [1], [2, 2, 1, 1]]}
  layoutWidths={[[1, 1], [1], [2, 2, 3, 5]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
  <Card>6</Card>
  <Card>7</Card>
</Workspace>
``` -->