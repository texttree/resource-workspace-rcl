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
;<Workspace style={{ backgroundColor: '#ECECEC' }}>
  <Card key='a'>
    <DragHandle />
    Academy
  </Card>
  <Card key='b'>
    <DragHandle />
    Notes
  </Card>
  <Card key='c'>
    <DragHandle />
    Words
  </Card>
  <Card key='d'>
    <DragHandle />
    Questions
  </Card>
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
