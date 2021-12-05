import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Intercom from '@intercom/intercom-react-native';

export const Profile = () => {
	return (
		<View>
			<Text>{'Perfil'}</Text>

			<TextInput testID="input-name" placeholder="Nome" autoCorrect={false} />
			<TextInput placeholder="Sobrenome" autoCorrect={false} />
			<Button title="Salvar" onPress={() => Intercom.displayMessenger()} />
		</View>
	);
};
