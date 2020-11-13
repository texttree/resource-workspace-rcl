Basic example:

```jsx
import Card from '../Card'
;<Workspace
  layoutOptions={[[1, 1], [1, 1]]}
  style={{ backgroundColor: '#ECECEC' }}>
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
  layoutOptions={[[1, 1], [1, 1], [1]]}
  style={{ backgroundColor: '#ECECEC' }}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
</Workspace>
```