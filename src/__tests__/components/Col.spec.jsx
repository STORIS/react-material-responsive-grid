import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import style from 'material-responsive-grid/material-responsive-grid.css';
import Col from '../../components/Col';

const renderer = TestUtils.createRenderer();

/**
 *	className: string
 *	xs4: number
 *	xs8: number
 *	sm8: number
 *	sm: number
 *	md: number
 *	lg: number
 *	xl: number
 *	xs4Offset: number
 *	xs8Offset: number
 *	sm8Offset: number
 *	smOffset: number
 *	mdOffset: number
 *	lgOffset: number
 *	xlOffset: number
 *	first: arrayOf(string)
 *	last: arrayOf(string)
 *	hiddenUp: string
 *	hiddenDown: string
 *	hiddenOnly: arrayOf(string)
 *	tagName: string
 */
describe('Col', () => {
	it('Should add classes for screen sizes', () => {
		renderer.render(
			<Col
				xs4={1}
				xs8={2}
				sm8={3}
				sm12={4}
				md12={5}
				lg12={6}
				xl12={7}
				sm={8}
				md={9}
				lg={10}
				xl={11}
			/>,
		);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style['col-xs4-1']);
		expect(className).toContain(style['col-xs8-2']);
		expect(className).toContain(style['col-sm8-3']);
		expect(className).toContain(style['col-sm12-4']);
		expect(className).toContain(style['col-md12-5']);
		expect(className).toContain(style['col-lg12-6']);
		expect(className).toContain(style['col-xl12-7']);
		expect(className).toContain(style['col-sm-8']);
		expect(className).toContain(style['col-md-9']);
		expect(className).toContain(style['col-lg-10']);
		expect(className).toContain(style['col-xl-11']);
	});

	it('Should add classes for screen size specific offset', () => {
		renderer.render(
			<Col
				xs4Offset={1}
				xs8Offset={2}
				sm8Offset={3}
				sm12Offset={4}
				md12Offset={5}
				lg12Offset={6}
				xl12Offset={7}
				smOffset={8}
				mdOffset={9}
				lgOffset={10}
				xlOffset={11}
			/>,
		);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style['col-xs4-offset-1']);
		expect(className).toContain(style['col-xs8-offset-2']);
		expect(className).toContain(style['col-sm8-offset-3']);
		expect(className).toContain(style['col-sm12-offset-4']);
		expect(className).toContain(style['col-md12-offset-5']);
		expect(className).toContain(style['col-lg12-offset-6']);
		expect(className).toContain(style['col-xl12-offset-7']);
		expect(className).toContain(style['col-sm-offset-8']);
		expect(className).toContain(style['col-md-offset-9']);
		expect(className).toContain(style['col-lg-offset-10']);
		expect(className).toContain(style['col-xl-offset-11']);
	});

	it('Should add "first-*" class if "first" property includes valid sizes', () => {
		renderer.render(<Col first={['xs4', 'md', 'xl', 'lg12', 'xxl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['first-xs4']);
		expect(className).toContain(style['first-md']);
		expect(className).toContain(style['first-xl']);
		expect(className).toContain(style['first-lg12']);
		expect(className).toNotContain('xxl');
	});

	it('Should add "last-*" class if "last" property includes valid sizes', () => {
		renderer.render(<Col last={['xs4', 'md', 'xl', 'lg12', 'xxl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['last-xs4']);
		expect(className).toContain(style['last-md']);
		expect(className).toContain(style['last-xl']);
		expect(className).toContain(style['last-lg12']);
		expect(className).toNotContain('xxl');
	});

	it('Should add "hidden-*-only" if "hidden" includes valid sizes', () => {
		renderer.render(<Col hidden={['xs4', 'md', 'xl', 'lg12', 'xxl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['hidden-xs4-only']);
		expect(className).toContain(style['hidden-md-only']);
		expect(className).toContain(style['hidden-xl-only']);
		expect(className).toContain(style['hidden-lg12-only']);
		expect(className).toNotContain('xxl');
	});

	it('Should add "hidden-*-down" if "hiddenDown" is set to a valid size', () => {
		renderer.render(<Col hiddenDown="xs4" />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['hidden-xs4-down']);
	});

	it('Should not add "hidden-*-down" if "hiddenDown" is set to an invalid size', () => {
		renderer.render(<Col hiddenDown="xxl" />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toBe(undefined);
	});

	it('Should add "hidden-*-up" if "hiddenUp" is set to a valid size', () => {
		renderer.render(<Col hiddenUp="xs4" />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['hidden-xs4-up']);
	});

	it('Should not add "hidden-*-up" if "hiddenUp" is set to an invalid size', () => {
		renderer.render(<Col hiddenUp="xxl" />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toBe(undefined);
	});

	it('Should retain specified className as last class', () => {
		renderer.render(<Col className="foo" md={3} />);

		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain('foo');
		expect(className).toContain(style['col-md-3']);
		expect(className.split(' ').pop()).toEqual('foo');
	});

	it('Should apply both class names both forms of a size property are applied', () => {
		renderer.render(<Col md={3} md12={2} />);

		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain(style['col-md-3']);
		expect(className).toContain(style['col-md12-2']);
	});

	it('Should apply both class names when both forms of a size are specified in an array', () => {
		renderer.render(<Col first={['sm', 'sm12']} />);

		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain(style['first-sm']);
		expect(className).toContain(style['first-sm12']);
	});

	it('Should support custom tag name', () => {
		renderer.render(<Col tagName="li" />);
		expect(renderer.getRenderOutput().type).toBe('li');
	});
});
