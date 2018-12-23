import 'jasmine';
import { validatorFocus } from '../src/form';

describe('validatorFocus', () => {
	it('does not throw errors', () => {
		validatorFocus('input.invalid');
	});
});
