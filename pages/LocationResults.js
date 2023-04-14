import React from 'react';
import {StyleSheet, Modal, SafeAreaView, View, FlatList} from 'react-native';

import ModalBackgroundOverlay from '../components/ModalBackgroundOverlay';
import LocationResult from '../components/LocationResult';

function LocationResults({
  setShowLocationResults,
  showLocationResults,
  backgroundImage,
  locationData,
  fetchGet,
  setLocation,
  setWeatherData,
  setPollutionData,
  setForecastData,
  units,
}) {
  return (
    <Modal
      animationType="fade"
      visible={showLocationResults}
      onRequestClose={() => setShowLocationResults(false)}
      transparent={true}
      style={styles.flexContainer}>
      <SafeAreaView style={styles.flexContainer}>
        <ModalBackgroundOverlay
          backgroundImage={backgroundImage}
          style={styles.flexContainer}
          onPress={() => setShowLocationResults(false)}>
          <View style={styles.container.modal}>
            <View style={styles.container.list}>
              <FlatList
                data={locationData}
                renderItem={({item, index}) => (
                  <LocationResult
                    locationItem={item}
                    index={index}
                    fetchGet={fetchGet}
                    setLocation={setLocation}
                    setWeatherData={setWeatherData}
                    setPollutionData={setPollutionData}
                    setForecastData={setForecastData}
                    units={units}
                    setShowLocationResults={setShowLocationResults}
                  />
                )}
              />
            </View>
          </View>
        </ModalBackgroundOverlay>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    modal: {
      alignItems: 'center',
    },
    list: {
      borderRadius: 8,
      overflow: 'hidden',
      width: '80%',
    },
  },
  button: {
    background: {
      backgroundColor: 'whitesmoke',
      paddingVertical: '2%',
      alignItems: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    text: {
      paddingHorizontal: '5%',
      paddingVertical: '1%',
      color: 'dodgerblue',
      fontWeight: 500,
    },
  },
});

export default LocationResults;
