import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import Header from '../components/Header';
import WidgetHeader from '../components/WidgetHeader';
import ForecastListItem from '../components/ForecastListItem';
import Footer from '../components/Footer';

function ForecastList({
  setShowLocationSearch,
  forecastData,
  weatherData,
  location,
  units,
  uom,
  colorScheme,
  style,
}) {
  const externalStyles = style;

  return (
    <View style={styles.flexContainer}>
      <Header title="Boring Weather App" colorScheme={colorScheme} />
      <View
        style={[styles.flexContainer, styles.listContainer, externalStyles]}>
        <FlatList
          ListHeaderComponent={
            <WidgetHeader
              weatherData={weatherData}
              title="Five Day Forecast for"
              location={location}
              style={styles.widgetHeader}
              onPress={() => setShowLocationSearch(true)}
            />
          }
          ListFooterComponent={<Footer colorScheme={colorScheme} />}
          data={forecastData?.list}
          renderItem={({item, index}) => (
            <ForecastListItem
              forecastItem={item}
              index={index}
              units={units}
              uom={uom}
              onPress={() => setShowLocationSearch(true)}
            />
          )}
          style={styles.listContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: 'whitesmoke',
  },
  widgetHeader: {
    container: {
      backgroundColor: 'snow',
      paddingVertical: 22,
    },
    text: {},
  },
});

export default ForecastList;
