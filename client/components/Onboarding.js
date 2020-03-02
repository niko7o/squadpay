import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Button } from './Button';

const Onboarding = () => (
  <View style={styles.onboarding}>
    <View style={styles.logo}>
      <Text style={styles.onboardingTitle}>squadpay</Text>
    </View>
    <View style={styles.body}>
      <Button text="Sign up" />
      <Button text="Login" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  onboarding: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingTitle: {
    fontSize: 32,
  },
  body: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Onboarding;
