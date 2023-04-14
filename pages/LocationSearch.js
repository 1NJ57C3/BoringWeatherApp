import React from 'react';
import {
  StyleSheet,
  Modal,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import Header from '../components/Header';
import ModalBackgroundOverlay from '../components/ModalBackgroundOverlay';

function LocationSearch({
  setShowLocationSearch,
  showLocationSearch,
  setLocationInput,
  locationInput,
  submitLocationQuery,
  searchButtonLabel,
  colorScheme,
  backgroundImage,
  style,
}) {
  const externalStyles = style;

  return (
    <Modal
      animationType="fade"
      onRequestClose={() => setShowLocationSearch(false)}
      transparent={true}
      visible={showLocationSearch}
      style={[styles.flexContainer, externalStyles]}>
      <SafeAreaView style={[styles.flexContainer, externalStyles]}>
        <ModalBackgroundOverlay
          backgroundImage={backgroundImage}
          style={[styles.flexContainer]}
          onPress={() => setShowLocationSearch(false)}>
          <View style={styles.alignCenter}>
            <View style={[styles.container]}>
              <Header title="Enter a Location" colorScheme={colorScheme} />
              <TextInput
                placeholder="i.e. San Francisco, CA, USA"
                onChangeText={setLocationInput}
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => submitLocationQuery(locationInput)}
                style={styles.button.container}>
                <Text style={styles.button.text}>{searchButtonLabel}</Text>
              </TouchableOpacity>
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
  alignCenter: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'whitesmoke',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 7,
    width: '85%',
    padding: 8,
    marginBottom: 60,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    paddingVertical: 14,
    marginVertical: 10,
    width: '95%',
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    container: {
      borderRadius: 7,
      backgroundColor: '#57B6F3',
      padding: 16,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
    },
  },
});

export default LocationSearch;
