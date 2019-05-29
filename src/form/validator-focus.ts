declare var document;

export function validatorFocus(selector?: string, parent?: string) {
	if (!selector) {
		selector = '.ng-invalid,.field-invalid';
	}

	try {
		if (parent) {
			const classes = selector.split(',').map((item) => {
				return `${parent} ${item}`;
			});

			selector = classes.join(',');
		}

		if (document) {
			let invalidFields = document.querySelectorAll(selector);

			invalidFields = Array.from(invalidFields).filter((field: any) => {
				return (
					'tagName' in field &&
					field['tagName'].toLowerCase() !== 'form'
				);
			});

			if (invalidFields && invalidFields.length) {
				invalidFields[0]['focus']();
			}
		}
	} catch (ex) {
		console.error('exception', ex);
	}
}
