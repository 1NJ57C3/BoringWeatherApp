import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  useColorScheme,
} from 'react-native';

import Header from './components/Header';
import LocationSearch from './pages/LocationSearch';
import WeatherWidget from './pages/WeatherWidget';
import LocationResults from './pages/LocationResults';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

import ForecastList from './pages/ForecastList';

function App() {
  let favorDark = useColorScheme() === 'dark';
  const [units, setUnits] = useState('imperial');
  const [locationInput, setLocationInput] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showLocationSearch, setShowLocationSearch] = useState(true);
  const [showLocationResults, setShowLocationResults] = useState(false);
  const [searchButtonLabel, setSearchButtonLabel] = useState('Search');
  const [showWeatherWidget, setShowWeatherWidget] = useState(true);
  const [showForecast, setShowForecast] = useState(false);

  const uom = {
    imperial: {
      temp: '°F',
      wind: ' mph',
    },
    metric: {
      temp: '°C',
      wind: ' m/s',
    },
    airQuality: {
      1: ' - Good',
      2: ' - Fair',
      3: ' - Moderate',
      4: ' - Poor',
      5: ' - Very Poor',
    },
  };

  const colorScheme = favorDark ? 'dark' : 'light';

  function fetchGet({URL, action, extraActions = ''}) {
    if (isLoading) {
      return setTimeout(() => fetchGet({URL: URL, action: action}), 500);
    } else {
      setIsLoading(true);

      fetch(URL)
        .then(r => {
          if (r.ok) {
            return r.json();
          } else {
            throw new Error(r.status, r.statusText);
          }
        })
        .then(action)
        .then(extraActions)
        .catch(console.error);

      setIsLoading(false);
    }
  }

  function submitLocationQuery(input) {
    const locationQuery = input.replaceAll(/,\s/g, ',');

    if (locationQuery) {
      fetchGet({
        URL: geocodingURL,
        action: d => {
          setLocationData(d);
          setShowLocationResults(true);
          setShowLocationSearch(false);
        },
      });
    }
  }

  useEffect(() => {
    const searchButtonLabels = [
      'Search',
      'Show me the weather!',
      'Who needs Siri?',
      'Is it raining?',
      'Should I take a jacket?',
      'Alexa who?',
    ];

    const randomIndex = Math.floor(Math.random() * searchButtonLabels.length);

    setSearchButtonLabel(searchButtonLabels[randomIndex]);
  }, []);

  return (
    <SafeAreaView style={[styles.flexContainer, styles.container.root]}>
      <KeyboardAvoidingView
        style={[styles.flexContainer, styles.container.app]}>
        <LocationSearch
          setShowLocationSearch={setShowLocationSearch}
          showLocationSearch={showLocationSearch}
          setLocationInput={setLocationInput}
          locationInput={locationInput}
          submitLocationQuery={submitLocationQuery}
          searchButtonLabel={searchButtonLabel}
          colorScheme={colorScheme}
        />
        <LocationResults
          setShowLocationResults={setShowLocationResults}
          showLocationResults={showLocationResults}
          fetchGet={fetchGet}
          setLocation={setLocation}
          setWeatherData={setWeatherData}
          setPollutionData={setPollutionData}
          setForecastData={setForecastData}
          locationData={locationData}
          units={units}
          colorScheme={colorScheme}
        />
        {showWeatherWidget && !showForecast ? (
          <ScrollView
            contentContainerStyle={styles.flexContainer}
            style={styles.scrollContainer}>
            <Header title="Boring Weather App" colorScheme={colorScheme} />
            <WeatherWidget
              weatherData={weatherData}
              pollutionData={pollutionData}
              location={location}
              units={units}
              uom={uom}
              setShowLocationSearch={setShowLocationSearch}
              colorScheme={colorScheme}
            />
            <Footer colorScheme={colorScheme} />
          </ScrollView>
        ) : (
          <ForecastList
            setShowLocationSearch={setShowLocationSearch}
            forecastData={forecastData}
            weatherData={weatherData}
            location={location}
            units={units}
            uom={uom}
            colorScheme={colorScheme}
          />
        )}
        <NavBar
          setShowWeatherWidget={setShowWeatherWidget}
          setShowForecast={setShowForecast}
          showWeatherWidget={showWeatherWidget}
          showForecast={showForecast}
          colorScheme={colorScheme}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    root: {
      backgroundColor: 'black',
    },
    app: {
      backgroundColor: 'white',
    },
  },
  flexContainer: {
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: 'whitesmoke',
  },
});

export default App;
