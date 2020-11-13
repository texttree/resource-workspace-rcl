Basic example:

```jsx
import Card from '../Card'
;<Workspace
  layoutWidths={[[1, 1], [1, 1]]}>
  <Card>Academy</Card>
  <Card>Notes</Card>
  <Card>Words</Card>
  <Card>Questions</Card>
</Workspace>
```

Example with :

```jsx
import Card from '../Card'
;<Workspace
  layoutWidths={[[1, 1], [1, 1], [1]]}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
</Workspace>
```

You can use a ratio of the widths, like flex box:

```jsx
import Card from '../Card'
;<Workspace
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


More complex ratios for the arrays

```jsx
import Card from '../Card'
;<Workspace
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

Changing the heights of all elements

```jsx
import Card from '../Card'
;<Workspace
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

Changing the heights of specific elements

```jsx
import Card from '../Card'
;<Workspace
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
```