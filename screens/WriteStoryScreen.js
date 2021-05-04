import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {

  constructor(props){

    super(props);
    this.state={
        title:'',
        author:'',
        storyText:'',
    }

  }

  submitStory = () => {

    db.collection("Stories").add({
        title: this.state.title,
        author: this.state.author,
        storyText: this.state.storyText,
        date: firebase.firestore.FieldValue.serverTimeStamp().now().toDate()
    })

    this.setState({
      title:'',
      author:'',
      storyText:'',
    });
    ToastAndroid.show('Your story has been sumitted', ToastAndroid.SHORT)
  }
  
    render() {
        return(
          <KeyboardAvoidingView 
            style={styles.container}
            behavior = "padding" enabled>

            <Text style={styles.header}>Story Hub</Text>

            <TextInput 
              placeholder="Story Title"
              onChangeText = {(text) => {this.setState=({title: text})}}
              value={this.state.title}
              style={styles.inputTitle}
            />

            <TextInput  
              placeholder="Story Author"
              onChangeText = {(text) => {this.setState=({author: text})}}
              value={this.state.author}
              style={styles.inputAuthor}
            />

            <TextInput 
              placeholder="Story"
              onChangeText = {(text) => {this.setState=({storyText: text})}} 
              value={this.state.storyText}
              multiline={true}
              style={styles.inputStory} 
            />

              <TouchableOpacity 
                style={styles.submitButton}
                onPress={this.submitStory(), ToastAndroid.show("Your story has been submitted", ToastAndroid.SHORT)}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>

          </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    submitButton:{
      backgroundColor: 'pink',
      padding: 10,
      margin: 10,
      fontWeight:5,
    },

    inputView:{
      flexDirection: 'column',
      marginRight:3,
    },

    inputTitle:{
      width: 300,
      height: 30,
      borderWidth: 2,
      borderRightWidth: 2,
      fontSize: 15,
      marginRight:'5%',
      marginTop: '10%',
    },

    inputAuthor:{
      width: 300,
      height: 30,
      borderWidth: 2,
      borderRightWidth: 2,
      fontSize: 15,
      marginRight:'5%',
      marginTop: '5%',
    },

    inputStory:{
      width: 300,
      height: 200,
      borderWidth: 2,
      borderRightWidth: 2,
      fontSize: 15,
      marginTop: '5%',
    },

    header:{
      backgroundColor:"pink",
      alignItems: 'center',
      fontSize: 20,
      fontWeight: '550',
      paddingBottom:10,
      paddingTop:10,
      paddingLeft:120.5,
      paddingRight:120.5,
    }

  });