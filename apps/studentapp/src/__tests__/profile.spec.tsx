import React from 'react';
import { render } from '@testing-library/react-native';
import { Profile } from '../screens/Profile';

describe('Profile', () => {
	it('check if name input has the expected placeholder', () => {
		const { getByTestId } = render(<Profile />);

		const inputName = getByTestId('input-name');
		expect(inputName.props.placeholder).toEqual('Nome');
	});
});
