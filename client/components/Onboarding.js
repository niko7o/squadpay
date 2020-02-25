import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Onboarding = () => (
  <View style={styles.onboarding}>
    <Text style={styles.onboardingTitle}>squadpay</Text>
    <TouchableOpacity style={styles.onboardingButton}>
      <Text>Understood</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  onboarding: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  onboardingTitle: {
    fontSize: 40,
  },
  onboardingButton: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    marginTop: 16,
  },
  onboardingButtonText: {
    fontSize: 20,
  },
});

export default Onboarding;
