import { StyleSheet, flex, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');



const exampleStyle = StyleSheet.create({
  ///////////////////////
  // Top Level Container
  toplevel: {
    flex: 1,
    //justifyContent: 'space-between',
    backgroundColor: "#121212",
    

  },
  ///////////////////////////////////////

  ////////////////////////
  // START Header Bar Style
  titleBar:{
    //alignSelf: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#292929",

    justifyContent: 'space-between',
    //justifyContent: 'flex-end',
  },
  centerContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',    
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-end',
  },
  centerText: {
    // flexDirection: 'row',
    // alignSelf: 'center',
    textAlign: 'center',
    //justifyContent: 'center',
    marginTop: '14%',
    marginBottom: '3%',
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
  },
  leftButton: {
    //flexDirection: 'row',
    //alignSelf: 'center',
    textAlign: 'left',
    marginTop: '9%',
    marginBottom: '3%',
    marginLeft: 20,
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
  },
  rightButton: {
    //flexDirection: 'row',
    //alignSelf: 'center',
    textAlign: 'right',
    marginTop: '9%',
    marginBottom: '3%',
    marginLeft: 20,
    marginRight: 20,
    color: "white",
    fontSize: 25,
    fontWeight: 'bold',
  },
  // END header bar style
  ///////////////////////////////////

  ////////////////////////
  // Body Container
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screen.width,
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: "#445689"
  },
  
  // END Body Container
  //////////////////////////////

  //////////////////////////////
  // Form Styling
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#292929',
    borderRadius: 30,
    margin: 10
  },
  formText: {
    color: 'white'
  },
    formButton: {
      flex: 1,
      height: 7,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20

    },
    formButtonContainer: {
      backgroundColor: '#292929',
      paddingVertical: 9,
      paddingHorizontal: 20,
      borderRadius: 30,
      width: 140,
   },
   formButtonText: {
       textAlign: 'center',
       color: 'white',
       fontSize: 15,
       fontWeight: 'bold',
   },
   // END Form Styling
   ////////////////////////////

      

})

const exampleText = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
})
const exampleButtons = StyleSheet.create({
    primary: {
      flex: 1,
      height: 7,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20

    },
    buttonContainer: {
      backgroundColor: '#292929',
      paddingVertical: 9,
      paddingHorizontal: 20,
      borderRadius: 30,
      width: 140,
   },
   buttonText: {
       textAlign: 'center',
       color: 'white',
       fontSize: 15,
       //fontWeight: 'bold',
   },
   viewStyle: {
       alignItems: 'center',
       justifyContent: 'center',
   }
})

export { exampleStyle, exampleButtons, exampleText }