export function createSearchQuery(
	search?: string,
	sort?: string,
	order?: string,
	pageNo?: number,
	nPerPage?: number
) {
	const query = {};

	if (search) {
		query['search'] = search;
	}

	if (sort && order) {
		query['orderBy[' + sort + ']'] = order.toUpperCase();
	}

	if (pageNo >= 0 && nPerPage) {
		query['offset'] = pageNo && nPerPage ? pageNo * nPerPage : 0;
		query['limit'] = nPerPage;
	}

	return query;
}
