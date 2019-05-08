import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid
} from 'react-native';
import styles from './css/styles';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      textInputData: '',
      getData: ''
    }
  }

  setValueStorage = () => {
    if (this.state.textInputData.trim() === "") {
      ToastAndroid.show('Enter some text input', ToastAndroid.SHORT);
      return;
    }
    AsyncStorage.setItem('storeValue', this.state.textInputData);
    ToastAndroid.show('Data Stored Successfully', ToastAndroid.SHORT);
  }

  getValueStorage = () => {
    AsyncStorage.getItem('storeValue').then((value) => this.setState({ getData: value }))
  }

  clearStorage = () => {
    AsyncStorage.clear()
    this.setState({getData: ''})
    ToastAndroid.show('Data cleared successfully..!!', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.textHeader}>
          React Native Codility
        </Text>
        <View style={{ backgroundColor: '#2471A3', width: '100%', height: 1 }} />

        <View style={styles.container}>
          <StatusBar
            backgroundColor="#2471A3"
            barStyle="light-content"
          />
          <Text style={styles.welcome}>
            Welcome to AsyncStorage APIs!
          </Text>
          <TextInput
            placeholder='Enter text input'
            style={styles.TextInputStyle}
            underlineColorAndroid='transparent'
            onChangeText={data => this.setState({ textInputData: data })}
          >
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={this.setValueStorage} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Store Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.getValueStorage} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Retrieve Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.clearStorage} activeOpacity={0.7}>
            <Text style={styles.buttonText}>Clear Data</Text>
          </TouchableOpacity>

          <Text style={styles.welcome}> {this.state.getData} </Text>
        </View>
      </View>
    );
  }
}