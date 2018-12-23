declare var document;

export function validatorFocus(selector: string) {
	try {
		if (document) {
			const invalidFields = document.querySelectorAll(selector);

			if (invalidFields && invalidFields.length) {
				invalidFields[0]['focus']();
			}
		}
	} catch (ex) {}
}
