import React from 'react';
import { Grid, Row, Col } from '../../../../src/';
import styles from './styles.css';

const GridTestPage = () => (
	<Grid>
		<h2>Material Responsive Grid (Components)</h2>
		<p>This project uses <a href="https://github.com/STORIS/react-material-responsive-grid">react-material-responsive-grid</a> to define responsive layouts.  This set of React components implements the <a href="https://github.com/STORIS/material-responsive-grid">material-responsive-grid</a> CSS framework.</p>

		<section>
			<h2>Lowest Specified Viewport Size</h2>
			<p>Sizes specified at lower viewport sizes carry forward, unless overridden.</p>
			<Row>
				<Col xs4={4}>
					<div className={styles.box}>Full</div>
				</Col>
			</Row>
			<Row>
				<Col xs4={1}>
					<div className={styles.box}>Quarter</div>
				</Col>
				<Col xs4={3}>
					<div className={styles.box}>Three-quarters</div>
				</Col>
			</Row>
			<Row>
				<Col xs4={2}>
					<div className={styles.box}>Half</div>
				</Col>
				<Col xs4={2}>
					<div className={styles.box}>Half</div>
				</Col>
			</Row>
			<Row>
				<Col xs4={3}>
					<div className={styles.box}>Three-quarters</div>
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Quarter</div>
				</Col>
			</Row>
			<Row>
				<Col xs4={4}>
					<div className={styles.box}>Full</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4={4}>Full</Col>
     </Row>
     <Row>
        <Col xs4={1}>Quarter</Col>
        <Col xs4={3}>Three-quarters</Col>
     </Row>
     <Row>
        <Col xs4={2}>Half</Col>
        <Col xs4={2}>Half</Col>
     </Row>
     <Row>
        <Col xs4={3}>Three-quarters</Col>
        <Col xs4={1}>Quarter</Col>
     </Row>
     <Row>
        <Col xs4={4}>Full</Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Responsively Sized Columns</h2>
			<p>Three columns that are sized differently for various viewport sizes</p>
			<Row>
				<Col xs4={4} sm8={2} sm={4} md={2} lg={1} xl={1}>
					<div className={styles.box}>1st</div>
				</Col>
				<Col xs4={2} sm8={4} sm={4} lg={10} xl={2}>
					<div className={styles.box}>2nd</div>
				</Col>
				<Col xs4={2} sm8={2} sm={4} md={6} lg={1} xl={9}>
					<div className={styles.box}>3rd</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4={4} sm8={2} sm={4} md={2} lg={1}>
           1st
        </Col>
        <Col xs4={2} sm8={4} sm={4} lg={10} xl={2}>
           2nd
        </Col>
        <Col xs4={2} sm={4} md={6} lg={1} xl={9}>
           3rd
        </Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Offset Columns</h2>
			<p>
				Columns that are positioned by specifying an offset, which skips the
				specified number of columns
			</p>
			<Row>
				<Col xs4Offset={3} xs4={1}>
					<div className={styles.box}>1st</div>
				</Col>
			</Row>
			<Row>
				<Col xs4Offset={2} xs4={2}>
					<div className={styles.box}>2nd</div>
				</Col>
			</Row>
			<Row>
				<Col xs4Offset={1} xs4={3}>
					<div className={styles.box}>3rd</div>
				</Col>
			</Row>
			<Row>
				<Col xs4Offset={0} xs4={4}>
					<div className={styles.box}>4th</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4Offset={3} xs4={1}>1st</Col>
     </Row>
     <Row>
        <Col xs4Offset={2} xs4={2}>2nd</Col>
     </Row>
     <Row>
        <Col xs4Offset={1} xs4={3}>3rd</Col>
     </Row>
     <Row>
        <Col xs4Offset={0} xs4={4}>4th</Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Horizontal Alignment</h2>
			<p>Align columns within a row horizontally</p>
			<Row start={['xs4']}>
				<Col xs4={1}>
					<div className={styles.box}>Start 1</div>
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Start 2</div>
				</Col>
			</Row>
			<Row center={['xs4']}>
				<Col xs4={1}>
					<div className={styles.box}>Center 1</div>
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Center 2</div>
				</Col>
			</Row>
			<Row end={['xs4']}>
				<Col xs4={1}>
					<div className={styles.box}>End 1</div>
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>End 2</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row start={['xs4']}>
        <Col xs4={1}>Start 1</Col>
        <Col xs4={1}>Start 2</Col>
     </Row>
     <Row center={['xs4']}>
        <Col xs4={1}>Center 1</Col>
        <Col xs4={1}>Center 2</Col>
     </Row>
     <Row end={['xs4']}>
        <Col xs4={1}>End 1</Col>
        <Col xs4={1}>End 2</Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Vertical Alignment</h2>
			<p>Align columns within a row vertically</p>
			<Row top={['xs4']}>
				<Col xs4={2}>
					<div className={`${styles.box} ${styles['box-tall']}`} />
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Top 1</div>
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Top 2</div>
				</Col>
			</Row>
			<Row middle={['xs4']}>
				<Col xs4={1}>
					<div className={styles.box}>Middle 1</div>
				</Col>
				<Col xs4={2}>
					<div className={`${styles.box} ${styles['box-tall']}`} />
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Middle 2</div>
				</Col>
			</Row>
			<Row bottom={['xs4']}>
				<Col xs4={1}>
					<div className={styles.box}>Bottom 1</div>
				</Col>
				<Col xs4={1}>
					<div className={styles.box}>Bottom 2</div>
				</Col>

				<Col xs4={2}>
					<div className={`${styles.box} ${styles['box-tall']}`} />
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row top={['xs4']}>
        <Col xs4={2}>
           Tall!<br />
        </Col>
        <Col xs4={1}>Top 1</Col>
        <Col xs4={1}>Top 2</Col>
     </Row>
     <Row middle={['xs4']}>
        <Col xs4={1}>Middle 1</Col>
        <Col xs4={2}>
           Tall!<br />
        </Col>
        <Col xs4={1}>Middle 2</Col>
     </Row>
     <Row bottom={['xs4']}>
        <Col xs4={1}>Bottom 1</Col>
        <Col xs4={1}>Bottom 2</Col>
        <Col xs4={2}>
           Tall!<br />
        </Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Reorder Columns</h2>
			<p>
				Columns can become the first or last in the row.  Column position is based
				on the Row&apos;s flow direction, which can be reversed.
			</p>
			<Row>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</Col>
			</Row>
			<Row>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</Col>
				<Col first={['xs4']} xs4={1} sm8={1} sm={2}>
					<div className={styles.box}><acronym title="first">6</acronym></div>
				</Col>
			</Row>
			<Row start={['xs4']}>
				<Col last={['xs4']} xs4={1} sm8={1} sm={2}>
					<div className={styles.box}><acronym title="last">1</acronym></div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4={1} sm8={1} sm={2}>1</div>
        <Col xs4={1} sm8={1} sm={2}>2</div>
        <Col xs4={1} sm8={1} sm={2}>3</div>
        <Col xs4={1} sm8={1} sm={2}>4</div>
        <Col xs4={1} sm8={1} sm={2}>5</div>
        <Col xs4={1} sm8={1} sm={2}>6</div>
     </Row>
     <Row>
        <Col xs4={1} sm8={1} sm={2}>1</div>
        <Col xs4={1} sm8={1} sm={2}>2</div>
        <Col xs4={1} sm8={1} sm={2}>3</div>
        <Col xs4={1} sm8={1} sm={2}>4</div>
        <Col xs4={1} sm8={1} sm={2}>5</div>
        <Col first={['xs4']} xs4={1} sm8={1} sm={2}>6</div>
     </Row>
     <Row>
        <Col last={['xs4']} xs4={1} sm8={1} sm={2}>1</div>
        <Col xs4={1} sm8={1} sm={2}>2</div>
        <Col xs4={1} sm8={1} sm={2}>3</div>
        <Col xs4={1} sm8={1} sm={2}>4</div>
        <Col xs4={1} sm8={1} sm={2}>5</div>
        <Col xs4={1} sm8={1} sm={2}>6</div>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Reversing a Row</h2>
			<p>
				Rows can be reversed.  This changes the flow direction, which affects columns
				that have been changed to be first or last.
			</p>
			<Row reverse>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</Col>
			</Row>
			<Row reverse>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>1</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</Col>
				<Col first={['xs4']} xs4={1} sm8={1} sm={2}>
					<div className={styles.box}><acronym title="first">6</acronym></div>
				</Col>
			</Row>
			<Row reverse>
				<Col last={['xs4']} xs4={1} sm8={1} sm={2}>
					<div className={styles.box}><acronym title="last">1</acronym></div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>2</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>3</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>4</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>5</div>
				</Col>
				<Col xs4={1} sm8={1} sm={2}>
					<div className={`${styles.box} ${styles['box-other']}`}>6</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row reverse>
        <Col xs4={1} sm8={1} sm={2}>1</div>
        <Col xs4={1} sm8={1} sm={2}>2</div>
        <Col xs4={1} sm8={1} sm={2}>3</div>
        <Col xs4={1} sm8={1} sm={2}>4</div>
        <Col xs4={1} sm8={1} sm={2}>5</div>
        <Col xs4={1} sm8={1} sm={2}>6</div>
     </Row>
	  <Row reverse>
        <Col xs4={1} sm8={1} sm={2}>1</div>
        <Col xs4={1} sm8={1} sm={2}>2</div>
        <Col xs4={1} sm8={1} sm={2}>3</div>
        <Col xs4={1} sm8={1} sm={2}>4</div>
        <Col xs4={1} sm8={1} sm={2}>5</div>
        <Col first={['xs4']} xs4={1} sm8={1} sm={2}>6</div>
     </Row>
     <Row reverse>
        <Col last={['xs4']} xs4={1} sm8={1} sm={2}>1</div>
        <Col xs4={1} sm8={1} sm={2}>2</div>
        <Col xs4={1} sm8={1} sm={2}>3</div>
        <Col xs4={1} sm8={1} sm={2}>4</div>
        <Col xs4={1} sm8={1} sm={2}>5</div>
        <Col xs4={1} sm8={1} sm={2}>6</div>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Hidden</h2>
			<p>Columns can be hidden for specific viewport sizes (or a range of viewport sizes)</p>
			<Row>
				<Col xs4={4} hiddenUp="xs8">
					<div className={styles.box}>if xs4, visible</div>
				</Col>
				<Col xs4={4} hiddenDown="xs4" hiddenUp="sm8">
					<div className={styles.box}>if xs8, visible</div>
				</Col>
				<Col xs4={4} hiddenDown="xs8" hiddenUp="sm">
					<div className={styles.box}>if sm8, visible</div>
				</Col>
				<Col xs4={4} hiddenDown="sm8" hiddenUp="md">
					<div className={styles.box}>if sm12, visible</div>
				</Col>
				<Col xs4={4} hiddenDown="sm" hiddenUp="lg">
					<div className={styles.box}>if md12, visible</div>
				</Col>
				<Col xs4={4} hiddenDown="md" hiddenUp="xl">
					<div className={styles.box}>if lg12, visible</div>
				</Col>
				<Col xs4={4} hiddenDown="lg">
					<div className={styles.box}>if xl12, visible</div>
				</Col>
			</Row>
			<Row>
				<Col xs4={2} sm={2} hidden={['xs4']}>
					<div className={styles.box}>if xs4, hidden</div>
				</Col>
				<Col xs4={2} sm={2} hidden={['xs8']}>
					<div className={styles.box}>if xs8, hidden</div>
				</Col>
				<Col xs4={2} sm={2} hidden={['sm8']}>
					<div className={styles.box}>if sm8, hidden</div>
				</Col>
				<Col xs4={2} sm={2} hidden={['sm']}>
					<div className={styles.box}>if sm12, hidden</div>
				</Col>
				<Col xs4={2} sm={2} hidden={['md']}>
					<div className={styles.box}>if md12, hidden</div>
				</Col>
				<Col xs4={2} sm={2} hidden={['lg']}>
					<div className={styles.box}>if lg12, hidden</div>
				</Col>
				<Col xs4={2} sm={2} hidden={['xl']}>
					<div className={styles.box}>if xl12, hidden</div>
				</Col>
			</Row>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4={4} hiddenUp="xs8">
           if xs4, visible
        </Col>
        <Col xs4={4} hiddenDown="xs4" hiddenUp="sm8">
           if xs8, visible
        </Col>
        <Col xs4={4} hiddenDown="xs8" hiddenUp="sm">
           if sm8, visible
        </Col>
        <Col xs4={4} hiddenDown="sm8" hiddenUp="md">
           if sm12, visible
        </Col>
        <Col xs4={4} hiddenDown="sm" hiddenUp="lg">
           if md12, visible
        </Col>
        <Col xs4={4} hiddenDown="md" hiddenUp="xl">
           if lg12, visible
        </Col>
        <Col xs4={4} hiddenDown="lg">
           if xl12, visible
        </Col>
     </Row>
     <Row>
        <Col xs4={2} sm={2} hidden={['xs4']}>
           if xs4, hidden
        </Col>
        <Col xs4={2} sm={2} hidden={['xs8']}>
           if xs8, hidden
        </Col>
        <Col xs4={2} sm={2} hidden={['sm8']}>
           if sm8, hidden
        </Col>
        <Col xs4={2} sm={2} hidden={['sm']}>
           if sm12, hidden
        </Col>
        <Col xs4={2} sm={2} hidden={['md']}>
           if md12, hidden
        </Col>
        <Col xs4={2} sm={2} hidden={['lg']}>
           if lg12, hidden
        </Col>
        <Col xs4={2} sm={2} hidden={['xl']}>
           if xl12, hidden
        </Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Fixed Width Grids</h2>
			<p>At 1600 dp, <a href="https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints">Material Design</a> allows a grid to either fill their container or remain at fixed width (left aligned or centered).</p>
			<Grid>
				<Row>
					<Col xs4={4}>
						<div className={styles.box}>Fluid (default)</div>
					</Col>
				</Row>
			</Grid>
			<Grid fixed="left">
				<Row>
					<Col xs4={4}>
						<div className={styles.box}>Fixed width, aligned left</div>
					</Col>
				</Row>
			</Grid>
			<Grid fixed="center">
				<Row>
					<Col xs4={4}>
						<div className={styles.box}>Fixed width, aligned center</div>
					</Col>
				</Row>
			</Grid>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4={4}>
           Fluid (default)
        </Col>
     </Row>
  </Grid>
  <Grid fixed="left">
     <Row>
        <Col xs4={4}>
           Fixed width, aligned left
        </Col>
     </Row>
  </Grid>
  <Grid fixed="center">
     <Row>
        <Col xs4={4}>
           Fixed width, aligned center
        </Col>
     </Row>
  </Grid>`}</pre>
		</section>

		<section>
			<h2>Marginless Grid</h2>
			<p>
				By default, grids have a margin that preserves the outer padding on edge-adjacent
				columns and prevents a row of content from spanning edge to edge.  A marginless
				grid eliminates this outer padding.
			</p>
			<Grid>
				<Row>
					<Col xs4={4} className={styles['box-other']}>
						<div className={styles.inner}>
							Default Grid
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Outer
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Inner
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Inner
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Outer
						</div>
					</Col>
				</Row>
			</Grid>
			<Grid marginless>
				<Row>
					<Col xs4={4} className={styles['box-other']}>
						<div className={styles.inner}>Marginless Grid</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Outer
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Inner
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Inner
						</div>
					</Col>
					<Col xs4={1} className={styles['box-other']}>
						<div className={styles.inner}>
							Outer
						</div>
					</Col>
				</Row>
			</Grid>
			<pre className={styles.code}>{`  <Grid>
     <Row>
        <Col xs4={4}>
           Default Grid
        </Col>
        <Col xs4={1}>
           Outer
        </Col>
        <Col xs4={1}>
           Inner
        </Col>
        <Col xs4={1}>
           Inner
        </Col>
        <Col xs4={1}>
           Outer
        </Col>
     </Row>
  </Grid>
  <Grid marginless>
     <Row>
        <Col xs4={4}>
           Marginless Grid
        </Col>
        <Col xs4={1}>
           Outer
        </Col>
        <Col xs4={1}>
           Inner
        </Col>
        <Col xs4={1}>
           Inner
        </Col>
        <Col xs4={1}>
           Outer
        </Col>
     </Row>
  </Grid>`}</pre>
		</section>

	</Grid>
);

export default GridTestPage;
