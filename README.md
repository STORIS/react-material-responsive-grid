# React Material Responsive Grid #

A set of React components implementing the [material-responsive-grid](https://github.com/STORIS/material-responsive-grid) CSS framework.

## Installation ##

```
npm i react-material-responsive-grid --save
```

## Components ##

### Grid ###

Container for Row components, intended as a layout

#### Features ####

- Adheres to [Material Design responsive UI](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints) standards for screens at or exceeding 1600 px
- Fluid by default, allows the Grid to continue 
- Margin by default, preserves the outer padding for outer columns, preventing a row of content from spanning edge to edge
- Optionally fixed width for viewports larger than 1599 px, centered or left aligned
- Optionally marginless, allow row content to span from edge to edge

#### Properties ####

Name       | Default | Value                  | Description
---------- | ------- | ---------------------- | -----------------------------------------------------------------------------
fixed      |         | { *left* or *center* } | Grid is fixed width and aligned as specified for viewports larger than 1599px
marginless | *false* | Boolean                | Grid has no margin, row content can span edge to edge
tagName    | *div*   |                        | The type of tag to use when rendering this element
className  |         |                        | The CSS class name of this element


### Row ###

Container for Col components, implemented with flexbox

#### Features ####

- Reverse the flow direction of contained Col components
- Horizontal alignment based on flow direction, *start*, *center*, or *end*
- Vertically align contained Col components, *top*, *middle*, *bottom*
- Evenly distribute unconsumed space *around* or *between* contained Col components

#### Properties ####

Name      | Default | Value                 | Description
--------- | ------- | --------------------- | -----------------------------------------------------------------------------
reverse   | *false* | Boolean               | Reverse direction of this row
start     |         | Array of sizes        | Justify content to the start for the specified sizes (based on direction)
center    |         | Array of sizes        | Center content within this row for the specified sizes
end       |         | Array of sizes        | Justify content to the end for the specified sizes (based on direction)
top       |         | Array of sizes        | Vertically align content to top for the specified sizes
middle    |         | Array of sizes        | Vertically align content to middle for the specified sizes
bottom    |         | Array of sizes        | Vertically align content to bottom for the specified sizes
around    |         | Array of sizes        | Evenly distribute unused space around columns for the specified sizes
between   |         | Array of sizes        | Evenly distribute unused space between columns for the specified sizes
tagName   | *div*   |                       | The type of tag to use when rendering this element
className |         |                       | The CSS class name of this element


### Col ###

Responsively sized, positioned, and visible component contained by a Row

#### Features ####

- Responsive width expressed as columns consumed
- Offset expressed as columns skipped before consuming columns
- Responsively hide for any configuration of screen sizes
- Force to beginning or end of Row

#### Properties ####

Name       | Default | Value                 | Description
---------- | ------- | --------------------- | ----------------------------------------------------------------------------
xs4        |         | Integer, 1-4          | Number of columns to consume on extra-small (4 column) viewports
xs8        |         | Integer, 1-8          | Number of columns to consume on extra-small (8 column) viewports
sm8        |         | Integer, 1-8          | Number of columns to consume on small (8 column) viewports
sm12       |         | Integer, 1-12         | Number of columns to consume on small (12 column) viewports
sm         |         | Integer, 1-12         | Shorthand for *sm12*
md12       |         | Integer, 1-12         | Number of columns to consume on medium (12 column) viewports
md         |         | Integer, 1-12         | Shorthand for *md12*
lg12       |         | Integer, 1-12         | Number of columns to consume on large (12 column) viewports
lg         |         | Integer, 1-12         | Shorthand for *lg12*
xl12       |         | Integer, 1-12         | Number of columns to consume on extra-large (12 column) viewports
xl         |         | Integer, 1-12         | Shorthand for *xl12*
xs4Offset  |         | Integer, 0-3          | Number of columns to offset on extra-small (4 column) viewports
xs8Offset  |         | Integer, 0-7          | Number of columns to offset on extra-small (8 column) viewports
sm8Offset  |         | Integer, 0-7          | Number of columns to offset on small (8 column) viewports
sm12Offset |         | Integer, 0-11         | Number of columns to offset on small (12 column) viewports
smOffset   |         | Integer, 0-11         | Shorthand for *sm12Offset*
md12Offset |         | Integer, 0-11         | Number of columns to offset on medium (12 column) viewports
mdOffset   |         | Integer, 0-11         | Shorthand for *md12Offset*
lg12Offset |         | Integer, 0-11         | Number of columns to offset on large (12 column) viewports
lgOffset   |         | Integer, 0-11         | Shorthand for *lg12Offset*
xl12Offset |         | Integer, 0-11         | Number of columns to offset on extra-large (12 column) viewports
xlOffset   |         | Integer, 0-11         | Shorthand for *xl12Offset*
first      |         | Array of sizes        | Present this column first for the specified sizes (based on row direction)
last       |         | Array of sizes        | Present this column last for the specified sizes (based on row direction)
hiddenOnly |         | Array of sizes        | Hide this column for the specified sizes
hiddenDown |         | Size                  | Hide this column for sizes equal to or smaller than the specified size
hiddenUp   |         | Size                  | Hide this column for sizes equal to or larger than the specified size
tagName    | *div*   |                       | The type of tag to use when rendering this element
className  |         |                       | The CSS class name of this element

## Example ##

```jsx
import React from 'react';
import { Grid, Row, Col } from 'react-material-responsive-grid';

class App extends React.Component {
  render() {
    return (
      <Grid>
         <Row>
            <Col xs4={4} lg={6}>
               <p>This column consumes the entire row for extra-small,
               small, and medium screens.  For large and extra-large
               screens, it consumes half of the row.</p>
            </Col>
            <Col hiddenDown="md" lg={6}>
               <p>This column isn't visible for extra-small, small, 
               and medium screens, but is visible for large and 
               extra-large screens.  It consumes half of the row.</p>
            </Col>
            <Col hiddenDown="sm" hiddenUp="xl" md={12}>
               <p>This column is only visible for medium and large
               screens and consumes the entire row.</p>
            </Col>
            <Col hidden={['sm8', 'sm', 'lg']} xs4={4}>
               <p>This column is hidden for small and large screens
               and consumes the entire row.</p>
            </Col>
         </Row>
      </Grid>
    );
  }
}
```

## Inspiration ##

- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid)
- [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
