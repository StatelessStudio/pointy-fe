export function createSearchQuery(
	search?: string,
	sort?: string,
	order?: string,
	pageNo?: number,
	nPerPage?: number
) {
	const query = {};

	query['__search'] = search ? search : '';

	if (sort && order) {
		query['__orderBy[' + sort + ']'] = order.toUpperCase();
	}

	if (pageNo >= 0 && nPerPage) {
		query['__offset'] = pageNo && nPerPage ? pageNo * nPerPage : 0;
		query['__limit'] = nPerPage;
	}

	return query;
}
