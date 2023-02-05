import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import
import Home from '../screens/Home';

import AddEmployee from '../screens/AddEmployee';

const Drawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      {/* Drawer Screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="employee" component={AddEmployee} />
    </Drawer.Navigator>
  );
};

export default Drawer;
