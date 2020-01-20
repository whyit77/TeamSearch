import { StyleSheet, flex } from 'react-native';


export default StyleSheet.create({
    // container: {
    //     marginTop: 150,
    //     backgroundColor: '#FFFF',
    //     // FlexWrap: 'wrap'
    // },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontSize: 30,
  }
      

})

const exampleButtons = StyleSheet.create({
    primary: {
      flex: 1,
      height: 70,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20

    }
})

//export { exampleStyle, exampleButtons }