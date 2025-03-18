import {MD3LightTheme as DefaultTheme} from 'react-native-paper';
import type {MD3Theme} from 'react-native-paper';

export const theme: MD3Theme = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        primary: '#4fac63',
        secondary: '#f39c12',
    },
};
