export function validatorFocus(selector: string) {
	var document;

	if (document) {
		const invalidFields = document.querySelectorAll(selector);

		if (
			invalidFields &&
			invalidFields.length &&
			'focus' in invalidFields[0]
		) {
			invalidFields[0]['focus']();
		}
	}
}
