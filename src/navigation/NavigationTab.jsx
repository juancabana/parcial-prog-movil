import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Temperature from '../components/pages/Temperature';
import UnitLength from "../components/pages/UnitLegth";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <Tab.Navigator tabBarOptions={{
            // showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 90,
                ...styles.shadow,
                textAlign: 'center'
            }
        }} >
            <Tab.Screen name='Temperature' component={Temperature} />
            <Tab.Screen name='Longitud' component={UnitLength} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})