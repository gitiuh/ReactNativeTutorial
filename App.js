import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MaterialBottom4 from './src/views/MaterialBottom4';
import StackNavigator5 from './src/views/StackNavigator5';
import DrawerNavigator5 from './src/views/DrawerNavigator5';

const App = () => {
  return (
    <View style={styles.container}>
      <DrawerNavigator5 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
