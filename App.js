/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,FlatList,
  Text,ActivityIndicator,
  StatusBar,
} from 'react-native';


const App: () => React$Node = () => {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json.movies);
        console.log(json.movies);
      }  )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>


  );
};

const styles = StyleSheet.create({

});

export default App;
