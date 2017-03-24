HEAD

## [1.1.0] - 2017-03-24
### Added
- Support for material-responsive-grid version 1.1.0
- Grid now has marginless boolean property
- Marginless example added to example app

### Changed
- Grid's fixed property corresponds with new .fixed-left and .fixed-center modifiers for .grid
- Grid's fixed property now uses an enumeration instead of string for propTypes
- Test for Grid now validates functionality of marginless property

### Fixed
- Classnames applied to Grid, Row, or Col will be placed last so that the consumer of this library can override any styles they see fit