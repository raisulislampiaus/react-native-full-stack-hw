import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator';


LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <>
      <RootNavigator />
    </>
  );
};

export default App;
