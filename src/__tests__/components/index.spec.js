import expect from 'expect';
import * as Exports from '../../components/index';

describe('components/index exports', () => {
	it('exports all components', () => {
		['Grid', 'Row', 'Col'].forEach((component) => {
			expect(Object.keys(Exports)).toContain(component);
		});
	});
});
