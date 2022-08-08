import React from "react";
import { createDrawerNavigation } from "@react-navigation/drawer";
import Profile from '../screens/Profile'
import TabNavigator from "./TabNavigator"

const Drawer = createDrawerNavigation();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;










