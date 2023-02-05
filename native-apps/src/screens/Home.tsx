import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../types/navigation';
import axios from 'axios';
import baseURL from '../../assets/baseUrl';



const Home = ({ navigation }: NativeStackScreenProps<MainStackParamList>) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${baseURL}/api/users`);
        setData(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (

    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', { title: item.name, phone: item.phone, address: item.address, division: item.division, category: item.category.name, image: item.image })
              }
            >
              <View style={styles.item}>
                <Image style={{ width: 40, height: 40 }}
                  source={{
                    uri: item.image ?
                      item.image : 'https://github.com/raisulislampiaus/raisulislampiaus/blob/main/Avatar-PNG-Free-Download.png?raw=true'
                  }}
                />
                <Text style={styles.title}>Name:
                  {item.name.length > 10 ? item.name.substring(0, 15 - 3)
                    + '...' : item.name
                  }
                </Text>
                <Text style={styles.title}>
                  {item.category.name.length > 8 ? item.category.name.substring(0, 15 - 3)
                    + '...' : item.category.name
                  }
                </Text>

              </View>
            </TouchableOpacity>
          )}
        />
      )
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

  },
  item: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").width / 3.2,
    padding: 10,
    margin: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    color: "#0369a1",
    fontSize: 17,
    fontWeight: '600'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50

  },
});

export default Home;


