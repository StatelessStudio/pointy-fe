import 'jasmine';

import { createSearchQuery } from '../src/http/create-search-query';

describe('createSearchQuery()', () => {
	it('can create a basic search query', () => {
		let result = createSearchQuery('test');

		expect(result).toEqual(jasmine.any(Object));
		expect('search' in result).toBe(true);
		expect(result['search']).toEqual('test');
	});
});
