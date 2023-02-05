import { View, Text, TextInput, Button, ScrollView, StyleSheet, SafeAreaView, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import baseURL from '../../assets/baseUrl';
import { Picker } from '@react-native-picker/picker';
import mime from "mime";



const options: any = {
  title: 'Select Image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,

  },
}


const AddEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [division, setDivision] = useState("");
  const [category, setCategory] = useState();
  const [image, setImage] = useState();
  const [categories, setCategories] = useState([] as { name: string; id: number; }[]);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [modal, setModal] = useState(false)





  const openGallery = async()=>{
    const images = await launchImageLibrary(options)
    console.log(images)
    const formdata = new FormData();
    formdata.append('file', {
      uri:images?.assets,
      type:images?.assets,
      name:images?.assets,
    })
    formdata.append('upload_preset','nativeApp')
    formdata.append("cloud_name","piaus")
  
    fetch("https://api.cloudinary.com/v1_1/piaus/image/upload",{
          method:"post",
          body:formdata
      }).then(res=>res.json()).
      then(data=>{
          setImage(data.url)
          setModal(false)
      }).catch(err=>{
          Alert.alert("error while uploading")
      })
  }











  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/category`);
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, [])

  return (
    <ScrollView style={styles.mainOne}>
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder={"Enter Name"}
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPhone(text)}
          value={phone}
          placeholder={"Enter Phone Number"}

        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAddress(text)}
          value={address}
          placeholder={"Enter You'r Current Address"}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDivision(text)}
          value={division}
          placeholder={"Enter You'r Current Address"}
        />
        <Picker

          selectedValue={selectedLanguage}
          onValueChange={(e) => [setSelectedLanguage(e), setCategory(e)]}
        >
          {categories.map((category) => (
            <Picker.Item key={category.id} label={category.name} value={category.name} />
          ))}
        </Picker>
        <TouchableOpacity onPress={openGallery}>
          <Text style={{ fontSize: 20 }}>+</Text>
        </TouchableOpacity>
      
        <View style={styles.submit}>
          <Button title='submit' />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainOne: {
    backgroundColor: "#fff",
    color: "#000",
    opacity: 0.7,

  },
  main: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  textOne: {
    fontSize: 40,
    fontWeight: "bold",
    color: "blue"
  },
  textTwo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    color: 'blue'
  },
  textThree: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.84,

    elevation: 5,

  },
  input: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 6.84,

    elevation: 5,
  },
  upload: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,


  },
  submit: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10,
  },
  login: {
    marginBottom: 10,


  },
  TextFive: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 80,
    padding: 10,
  }
});
export default AddEmployee