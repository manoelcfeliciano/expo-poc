import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './screens/Profile';

const AppStack = createNativeStackNavigator();
const AppBottomStack = createBottomTabNavigator();

const AppBottom = () => {
	return (
		<AppBottomStack.Navigator>
			<AppBottomStack.Screen name="Profile" component={Profile} />
		</AppBottomStack.Navigator>
	);
};

export const AppRoutes = () => {
	return (
		<NavigationContainer>
			<AppStack.Navigator>
				<AppStack.Screen name="app" component={AppBottom} />
			</AppStack.Navigator>
		</NavigationContainer>
	);
};
