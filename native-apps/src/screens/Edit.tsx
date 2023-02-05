import { Image, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DetailsScreenRouteProp, MainStackParamList } from '../types/navigation';

const Edit = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  return (
    <View>
      <Text>Edit</Text>
    </View>
  )
}

export default Edit