import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { NeuView } from 'neumorphism-ui';

import Button from './Button';

const Onboarding = () => (
  <View style={styles.onboarding}>
    <View style={styles.logo}>
      <Text style={styles.onboardingTitle}>squadpay</Text>
    </View>
    <NeuView>
      <Button type="rectangle" />
    </NeuView>
  </View>
);

const styles = StyleSheet.create({
  onboarding: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
});

export default Onboarding;
