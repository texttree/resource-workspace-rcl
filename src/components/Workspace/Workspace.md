Basic example:

```jsx
import Card from '../Card'
function DragHandle () {
  return (
    <div
      className='draggableHandle'
      style={{
        backgroundColor: 'grey',
        padding: '10px 0',
        width: '100%',
        maxHeight: 20
      }}
    >
      drag here
    </div>
  )
}
;<Workspace
  layoutOptions={[[1, 1], [1, 1]]}
  style={{ backgroundColor: '#ECECEC' }}>
  <Card>Academy</Card>
  <Card>Notes</Card>
  <Card>Words</Card>
  <Card>Questions</Card>
</Workspace>
```

<!-- Can make an example that has no keys -->
<!-- ```jsx
import Card from '../Card'
;<Workspace style={{ backgroundColor: 'black' }}>
  <Card key='a'>a</Card>
  <Card key='b'>b</Card>
  <Card key='c'>c</Card>
  <Card key='d'>d</Card>
</Workspace>
``` -->
