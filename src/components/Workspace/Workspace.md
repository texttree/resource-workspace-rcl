The API documentation of the Workspace React component. Learn more about the props and CSS customization.

### Basic

```jsx
import { Card } from '../Card';
const layoutWidths = [[1, 1], [1, 1], [1]];
function Component() {
return (<Workspace
  layoutWidths={layoutWidths}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
  <Card>4</Card>
  <Card>5</Card>
</Workspace>
)
}
```