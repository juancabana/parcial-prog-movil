import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Temperature from '../components/pages/Temperature';
import UnitLength from "../components/pages/UnitLegth";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Temperature' component={Temperature} />
            <Tab.Screen name='Longitud' component={UnitLength} />
        </Tab.Navigator>
    )
}