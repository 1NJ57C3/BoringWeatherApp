import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';

function WidgetHeader({weatherData, location, title, onPress, style}) {
  const externalStyles = style;

  function renderLocationName() {
    return location?.name?.length < 30 ? (
      <Text
        style={[styles.text.common, styles.text.name, externalStyles?.text]}>
        {location.name ? location.name : '--'}
      </Text>
    ) : (
      <View>
        <Text
          style={[styles.text.common, styles.text.city, externalStyles?.text]}>
          {location.city ? location.city : '--'}
        </Text>
        <Text
          style={[styles.text.common, styles.text.state, externalStyles?.text]}>
          {location.state ? location.state + ', ' : ''}
          {location.country ? location.country : ''}
        </Text>
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, externalStyles?.container]}>
      <Text style={styles.preText}>{title}</Text>
      {renderLocationName()}
      <Text>
        {weatherData
          ? new Date(weatherData.dt * 1000).toLocaleString()
          : '--/--/----, --:--:-- --'}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  preText: {
    fontSize: 17,
  },
  text: {
    name: {
      fontSize: 28,
    },
    city: {
      fontSize: 32,
    },
    state: {
      fontSize: 22,
    },
    common: {
      textAlign: 'center',
    },
  },
});

export default WidgetHeader;
