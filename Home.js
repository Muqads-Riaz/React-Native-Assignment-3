import React from "react";
import { View, TextInput, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import styles from "../Styling";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

export default function Home({ navigation }) {
  let [data, setdata] = useState([])
  let [searchedProduct, setSearchedProduct] = useState([])
  let receiveData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((success) => {
        setdata([...success.data])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let moveData = (e) => {
    navigation.navigate('SingleProduct', e)
  }
  useEffect(() => {
    receiveData()
  }, [])

  let searchCard = (val) => {
    searchedProduct = data.filter((e) => {
      return e.category.toLowerCase().includes(val.toLowerCase())
    })
    setSearchedProduct([...searchedProduct])
  }
  return (
    <>
      <View style={styles.main}>
        <TextInput onChangeText={(e) => searchCard(e)} placeholderTextColor={'black'} style={styles.searchInp} placeholder="Search here..." />
        {/* <Icon color="red" size={50} name="lock" /> 
        <Icon color="black" size={30} name="search" /> */}
        <ScrollView>
          <View>
            {searchedProduct && searchedProduct.length > 0 ?
              searchedProduct.map((e, i) => {
                return <TouchableOpacity onPress={() => moveData(e)}  key={i} style={styles.card}>
                  <Text style={styles.heading}>{e.category}</Text>
                  <Image source={{ uri: e.image }} style={{ width: "50%", height: 200, resizeMode: "contain" }} />
                  <Text style={styles.txt}  >{e.title}</Text>
                  <Text style={styles.txt} >Price: {e.price}</Text>
                </TouchableOpacity >
              }) : null}
          </View>
        </ScrollView>
        <ScrollView>
          <View >
            {data && data.length > 0 ?
              data.map((e, i) => {
                return <TouchableOpacity  onPress={() => moveData(e)} key={i} style={styles.card}>
                  <Text style={styles.heading}>{e.category}</Text>
                  <Image source={{ uri: e.image }} style={{ width: "50%", height: 200, resizeMode: "contain" }} />
                  <Text style={styles.txt}  >{e.title}</Text>
                  <Text style={styles.txt} >Price: {e.price}</Text>
                </TouchableOpacity >
              }) : null}
          </View>
        </ScrollView>
      </View>
    </>
  )
}
