

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