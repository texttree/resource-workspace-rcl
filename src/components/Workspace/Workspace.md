The API documentation of the Workspace React component. Learn more about the props and CSS customization.

### Basic

<!--
```jsx
import {useState} from 'react';
import { Card } from 'translation-helps-rcl';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const [hiddenElements, setHiddenElements] = useState({});
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
<Card workspace-hide={hiddenElements[0]} title={1} classes={classes}>
<Button onClick={() => {
    const copy = {...hiddenElements}
    copy[0] = true;
    setHiddenElements(copy);
  }}>Minimize</Button>
</Card>
        <Card workspace-hide={hiddenElements[1]} title={"2"} classes={classes}>
<Button onClick={() => {
    const copy = {...hiddenElements}
    copy[1] = true;
    setHiddenElements(copy);
  }}>Minimize</Button>
</Card>
        <Card workspace-hide={hiddenElements[2]} title={"3"} classes={classes}>
<Button onClick={() => {
    const copy = {...hiddenElements}
    copy[2] = true;
    setHiddenElements(copy);
  }}>Minimize</Button>
</Card>
        <Card workspace-hide={hiddenElements[3]} title={"4"} classes={classes}>
<Button onClick={() => {
    const copy = {...hiddenElements}
    copy[3] = true;
    setHiddenElements(copy);
  }}>Minimize</Button>
</Card>
        <Card workspace-hide={hiddenElements[4]} title={"5"} classes={classes}>
<Button onClick={() => {
    const copy = {...hiddenElements}
    copy[4] = true;
    setHiddenElements(copy);
  }}>Minimize</Button>
</Card>
</Workspace>
``` -->

```jsx
import { useState } from "react";
import { Card } from "translation-helps-rcl";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const [hiddenElements, setHiddenElements] = useState({});
const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: "0 1px !important",
    height: "100%",
  },
  dragIndicator: {},
}));
const layout = {
  widths: [[1, 1], [1, 1], [1]],
};
const classes = useStyles();
<Workspace gridMargin={[15, 15]} classes={classes} layout={layout}>
  <div
    key={"1"}
    workspace-hide={true}
    style={{ backgroundColor: "grey", height: "100%" }}
  >
    1
  </div>
  <div key={"2"} style={{ backgroundColor: "grey", height: "100%" }}>
    2
  </div>
  <div key={"3"} style={{ backgroundColor: "grey", height: "100%" }}>
    3
  </div>
  <div key={"4"} style={{ backgroundColor: "grey", height: "100%" }}>
    4
  </div>
</Workspace>;
```
