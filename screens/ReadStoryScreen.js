import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config';

export default class ReadStoryScreen extends React.Component {

    constructor(){

    super();
      this.state={
        allStories:[],
      }

  }

  componentDidMount(){
    this.retrieveStories();
  }

  retrieveStories = () => {

    var allStories = [];
    var stories = db.collection("Stories").get().then((querySnapshot)=> {
      querySnapshot.forEach((doc)=>{
        allStories.push(doc.data());
      })
      this.setState({allStories})
    })

  }
  
    render() {
      return (

        <View style={styles.container}>

          <Text style={styles.header}>Bed Time Stories</Text>
          
          //SearchBar
            placeholder="Type Here..."
            onChangeText={this.retrieveStories}
            value={search}
          //

          <FlatList
            data = {this.state.allStories}
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <Text>Title:{item.title}</Text>
                <Text>Author:{item.author}</Text>
              </View>
            )}
            keyExtractor={(item,index) => index.toString()}
          />

        </View>

      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
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
    },
    
    itemContainer: {
      height: 80,
      width:'100%',
      borderWidth: 2,
      borderColor: 'pink',
      justifyContent: 'center',
      alignSelf: 'center',
    }
});