import { Image, StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DetailsScreenRouteProp, MainStackParamList } from '../types/navigation';

const Details = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  const route = useRoute<DetailsScreenRouteProp>();
  return (
    <View style={styles.container}>
      <Image style={{ width: 100, height: 100, backgroundColor: "gray" }} source={{ uri: route.params.image ? route.params.image : 'https://github.com/raisulislampiaus/raisulislampiaus/blob/main/Avatar-PNG-Free-Download.png?raw=true' }} />
      <Text style={styles.title}>Name:{route.params.title}</Text>
      <Text style={styles.title}>Phone:{route.params.phone}</Text>
      <Text style={styles.title}>Address:{route.params.address}</Text>
      <Text style={styles.title}>category:{route.params.category}</Text>
      <Text style={styles.title}>Division:{route.params.division}</Text>
      <View style={{ marginTop: 250, flexDirection: "row" }}>
        <View style={{ marginRight: 100}}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
        <View>
          <Button title="Edit" onPress={() =>
              navigation.navigate('Edit' )
            }/>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000",
    marginTop: 10
  }
});
