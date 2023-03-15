import { createStackNavigator } from '@react-navigation/stack';
import Temperature from './../components/pages/Temperature'

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='temperature' component={Temperature} />
        </Stack.Navigator>
    )
}