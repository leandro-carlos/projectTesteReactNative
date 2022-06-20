import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomePage from '../homePage';
import pageTwo from '../secondPage';
import FinalPage from '../finalScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component={HomePage}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Cadastro'
                component={pageTwo}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='Tela 03'
                component={FinalPage}
                // options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}