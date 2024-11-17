import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
 
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>29°C</Text>
      <Text style={styles.location}>Kathmandu, Nepal</Text>
      <Text style={styles.description}>Low of 26°C, partially cloudy</Text>

      <View style={styles.forecast}>
        <View style={styles.forecastItem}>
          <Text style={styles.day}>Mon</Text>
          <Text style={styles.temp}>19°</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.day}>Tue</Text>
          <Text style={styles.temp}>21°</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.day}>Wed</Text>
          <Text style={styles.temp}>24°</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.day}>Thu</Text>
          <Text style={styles.temp}>22°</Text>
        </View>
        <View style={styles.forecastItem}>
          <Text style={styles.day}>Fri</Text>
          <Text style={styles.temp}>20°</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 24,
    marginTop: 8,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  forecast: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  forecastItem: {
    alignItems: 'center',
  },
  day: {
    fontSize: 18,
  },
  temp: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
