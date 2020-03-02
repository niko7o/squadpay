import React from 'react';

import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

import { NeuButton } from 'neumorphism-ui';

const chooseNeumorphButton = type => {
  switch (type) {
    case 'circle':
      return (
        <NeuButton
          style={{ height: 150, width: 150, borderRadius: 75 }}
          onPress={() => {
            Alert.alert('I was pressed');
          }}
          onUnpress={() => {
            Alert.alert('I was unpressed');
          }}>
          <Text style={{ opacity: 0.4, textAlign: 'center' }}>
            NeuButton with listeners
          </Text>
        </NeuButton>
      );
    case 'rectangle':
      return (
        <NeuButton
          style={{ height: 70, width: 120, borderRadius: 50 }}
          noPressedState={true}
          onPress={() => {
            Alert.alert('I was pressed');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
            }}>
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
              source={{
                uri:
                  'https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png',
              }}
            />
            <Text style={{ fontWeight: 'bold', opacity: 0.4 }}>LIKE</Text>
          </View>
        </NeuButton>
      );
    default:
      return (
        <NeuButton
          style={{ height: 70, width: 120, borderRadius: 50 }}
          noPressedState={true}
          onPress={() => {
            Alert.alert('I was pressed');
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '60%',
            }}>
            <Image
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
              source={{
                uri:
                  'https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png',
              }}
            />
            <Text style={{ fontWeight: 'bold', opacity: 0.4 }}>LIKE</Text>
          </View>
        </NeuButton>
      );
  }
};

const Button = ({ type }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e5ec',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {chooseNeumorphButton(type)}
    </View>
  );
};

export default Button;
