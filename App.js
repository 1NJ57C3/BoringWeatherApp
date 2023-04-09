import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import Header from './components/Header';

function App() {
  const favorDark = useColorScheme() === 'dark';
  const colorScheme = favorDark ? 'dark' : 'light';

  return (
    <SafeAreaView>
      <Header title="Boring Weather App" colorScheme={colorScheme} />
      {/* // TODO Optimistic Programming -  */}
      {/* <WeatherWidget /> */}
      {/* <LocationInput /> */}
    </SafeAreaView>
  );
}

export default App;
