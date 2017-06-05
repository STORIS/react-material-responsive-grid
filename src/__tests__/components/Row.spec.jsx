import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import style from 'material-responsive-grid/material-responsive-grid.css';
import Row from '../../components/Row';

/**
 *	className: string
 *	reverse: bool
 *	start: arrayOf(string)
 *	center: arrayOf(string)
 *	end: arrayOf(string)
 *	top: arrayOf(string)
 *	middle: arrayOf(string)
 *	bottom: arrayOf(string)
 *	around: arrayOf(string)
 *	between: arrayOf(string)
 *	tagName: string
 */
const renderer = createRenderer();

describe('Row', () => {
	it('Should add "reverse" class if "reverse" is set', () => {
		renderer.render(<Row reverse />);

		const {
			type,
			props: { className },
		} = renderer.getRenderOutput();

		expect(type).toBe('div');
		expect(className).toContain(style.reverse);
	});

	it('Should add "start-*" class if "start" property is set', () => {
		renderer.render(<Row start={['xs4', 'md', 'xl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['start-xs4']);
		expect(className).toContain(style['start-md']);
		expect(className).toContain(style['start-xl']);
	});

	it('Should add "center-*" class if "center" property is set', () => {
		renderer.render(<Row center={['xs4', 'md', 'xl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['center-xs4']);
		expect(className).toContain(style['center-md']);
		expect(className).toContain(style['center-xl']);
	});

	it('Should add "end-*" class if "end" property is set', () => {
		renderer.render(<Row end={['xs4', 'md', 'xl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['end-xs4']);
		expect(className).toContain(style['end-md']);
		expect(className).toContain(style['end-xl']);
	});

	it('Should add "top-*" class if "top" property is set', () => {
		renderer.render(<Row top={['xs4', 'md', 'xl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['top-xs4']);
		expect(className).toContain(style['top-md']);
		expect(className).toContain(style['top-xl']);
	});

	it('Should add "middle-*" class if "middle" property is set', () => {
		renderer.render(<Row middle={['xs4', 'md', 'xl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['middle-xs4']);
		expect(className).toContain(style['middle-md']);
		expect(className).toContain(style['middle-xl']);
	});

	it('Should add "bottom-*" class if "bottom" property is set', () => {
		renderer.render(<Row bottom={['xs4', 'md', 'xl']} />);

		const {
			props: { className },
		} = renderer.getRenderOutput();

		expect(className).toContain(style['bottom-xs4']);
		expect(className).toContain(style['bottom-md']);
		expect(className).toContain(style['bottom-xl']);
	});

	it('Should retain specified className as last class', () => {
		renderer.render(<Row className="foo" end={['md']} />);

		const { className } = renderer.getRenderOutput().props;

		expect(className).toContain('foo');
		expect(className).toContain(style['end-md']);
		expect(className.split(' ').pop()).toEqual('foo');
	});

	it('Should support custom tag name', () => {
		renderer.render(<Row tagName="li" />);
		expect(renderer.getRenderOutput().type).toBe('li');
	});
});
