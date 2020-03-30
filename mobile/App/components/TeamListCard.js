const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]



import { Text, Platform, View, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Image } from "react-native";
import {mainStyle, teamListStyle} from '../styles/styles';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import React, { Component } from 'react';
import { CardList } from 'react-native-card-list';

export const TeamListCard = ({ name, status, admin, size, description }) => (

   // implemented without image with header
//    <Card title="CARD WITH DIVIDER">
//      {
//        users.map((u, i) => {
//          return (
//            <View key={i} style={styles.user}>
//              <Image
//                style={styles.image}
//                resizeMode="cover"
//                source={{ uri: u.avatar }}
//              />
//              <Text style={styles.name}>{u.name}</Text>
//            </View>
//          );
//        })
//      }
//    </Card>
   
//    // implemented without image without header, using ListItem component
//     <Card containerStyle={{padding: 0}} >
//      {
//        users.map((u, i) => {
//          return (
//            <ListItem
//              key={i}
//              roundAvatar
//              title={u.name}
//              avatar={{uri:u.avatar}}
//            />
//          );
//        })
//      }
//    </Card>
   
   
   // implemented with Text and Button as children

   <View style={styles.container}>
        <CardList users={users} />
      </View>

//    <Card
//      title='HELLO WORLD'
//     //  image={require('../images/pic2.jpg')}
//     >
//      <Text style={{marginBottom: 10}}>
//       {description}
//      </Text>
//      <Button
//        icon={<Icon name='code' color='#ffffff' />}
//        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
//        title='VIEW NOW' />
//    </Card>



   );

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
})