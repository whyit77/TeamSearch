import { StyleSheet, flex, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');
import Constants from 'expo-constants';
import { HeaderHeightContext } from 'react-navigation-stack';


let B1 = '#121212';
let B2 = '#292929';
let B3 ='#3d3d3d';
let WHITE = 'white';
let RED = 'red';


const mainStyle = StyleSheet.create({
  ///////////////////////
  // Top Level Container
  toplevel: {
    flex: 1,
   // justifyContent: 'center',
    //marginTop: 10,
    // marginBottom: Constants.statusBarHeight*2,
    // marginTop: 20,
    alignContent: 'center',
    backgroundColor: B1,
    // height: screen.height*1.5,
    paddingVertical: 20,
    // paddingBottom: 100


  },
  ////////////////////////
  // Body Container
  container: {
    // flex: 1,
    backgroundColor: B1,
    // height: screen.height,
    paddingBottom: 10,
    //marginTop: 10, 
    paddingVertical: 10,
    alignContent: 'center',
    alignItems: 'center'
  },

  /////////////////////////
  // Text Style

  bigText: {
    fontSize: 30,
    color: WHITE,
    margin: 10,
    textAlign: 'center'
  },
  smallText: {
    fontSize: 20,
    color: 'white',
    margin: 10,
    textAlign: "center",

  },
  textBlock: {
    marginTop: 20
  },
  text: {
    fontSize: 18,
    color: "#969696",
    textAlign: "center",
    marginBottom: 2
  },
  link: {
    textDecorationLine: "underline"
  },
  profilePic: {

  },
  scrollView: {
    // paddingVertical: 10,
    // height: screen.height*4,
    flex: 4
  },

})


// Button Styles
const buttonStyle = StyleSheet.create({
    buttonContainer: {
      backgroundColor: B2,
      paddingVertical: 9,
      paddingHorizontal: 20,
      borderRadius: 30,
      width: 140,
      marginTop: 10,
      marginBottom: 10
   },
   buttonText: {
       textAlign: 'center',
       color: WHITE,
       fontSize: 15,
       fontWeight: 'bold',
   },
   viewStyle: {
       alignItems: 'center',
       justifyContent: 'center',
   },

}) 

/////////////////////////////////////////
// Form Styling
/////////////////////////////////////////

const formStyle = StyleSheet.create({
  formContainer: {
     flex: 1,
    //justifyContent: 'center',
    //alignItems:'center',
    backgroundColor: B1,
    // height: screen.height*5,
    //borderRadius: 30,
    // paddingBottom: 10,
    // marginBottom: 10, 
    //  paddingBottom: 100,
  },

  row: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    marginBottom: 11,
    width: 250
  },
  placeholderStyle: {
    color: WHITE,
    fontSize: 18,
    //fontWeight: "500",
    marginBottom: 7,
    // marginTop: 10,
  },
  label: {
    color: '#b3b3b3',
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 0,
    marginTop: 10,
    textShadowColor: WHITE,
    marginLeft: 20
  },
  textfield: {
    fontSize: 18,
    fontWeight: "400",
    color: "#cfcfcf",
    marginBottom: 4,
  },
  errorText: {
    color: RED,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  buttons: {
    alignContent: 'center',
    alignItems: 'center'

  },
  formButtonContainer: {
    // paddingVertical: 9,
    // paddingHorizontal: 20,
    borderRadius: 30,
    // width: screen.width,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //alignContent: 'center',
    // backgroundColor: 'blue',
    color: WHITE

   },
  formButton: {
    backgroundColor: RED,
    // paddingVertical: 9,
    // paddingHorizontal: 20,
    borderRadius: 30,
    width: 250,
     marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    color: WHITE


   },
  formButtonText: {
     textAlign: 'center',
     color: WHITE,
     fontSize: 15,
     fontWeight: 'bold',
 },
 textBlock: {
  marginTop: 20
},
toggleLabel: {
  color: '#b3b3b3',
  fontSize: 18,
  fontWeight: "600",
  marginBottom: 0,
  marginTop: 30,
  textShadowColor: WHITE,
  marginHorizontal: 20
},
toggle: {
  marginTop: 30,
  marginLeft: 10
},
text: {
  fontSize: 18,
  color: "#969696",
  textAlign: "center",
  marginVertical: 5,
  marginHorizontal: 10,
  alignContent: 'center',
  justifyContent: 'center',

},
link: {
  textDecorationLine: "underline",
  color: '#b3b3b3',
  fontSize: 18,

},
picker: {
  //width: 200, 
  //height: 200, 
  marginTop: -30
},
fillInText: {
  color: WHITE,
  fontSize: 23,
  fontWeight: "600",
  marginBottom: 0,
  marginTop: 10,
  textShadowColor: WHITE,
  padding: 10,
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: "center",


}

})


const teamListStyle = StyleSheet.create ({
  teamContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    alignContent: 'center',
    backgroundColor: B2,
    borderRadius: 30,
    margin: 10,
    width: screen.width - 20,
    padding: 10
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems:'center', 
    alignContent:'center',  
    margin: 5

  },
  teamLabelText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 7,
    marginTop: 10,
  },
  teamInputText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7,
    marginTop: 10,
  },
  container1: {
    // marginTop: 10,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'space-between',
    alignItems:'center',   
    width: screen.width,
    marginBottom: 0
  },
  nameContainer: {
      //flex: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center',   
      marginLeft: 20,
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor: B3,
      borderRadius: 30,
      width: screen.width/2
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',  
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginRight: 20,
    backgroundColor: B3,
    borderRadius: 30,
    width: screen.width/3+10
  },
  container2: {
    marginTop: 5,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width,
    justifyContent: 'space-between',
  },
  adminContainer: {
    //flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',   
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: B3,
    borderRadius: 30,
    width: screen.width/2
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',  
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginRight: 20,
    backgroundColor: B3,
    borderRadius: 30,
    width: screen.width/3+10
  },
  container3: {
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width,
    justifyContent: 'space-between',
    width: screen.width,
    marginTop: 5
  },
  descriptionContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',   
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: B3,
    borderRadius: 30,
    width: screen.width-40
  }

})

const teamMemberStyle = StyleSheet.create ({
  mainContainer: {
    width: screen.width - 10,
    height: screen.height/11,
    backgroundColor: B2,
    borderRadius: 30,
    padding: 10
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width,
    flexDirection: 'row',
    // justifyContent: 'space-between',

  },
  nameContainer: {
    //flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',   
    marginLeft: 20,
    //paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: screen.width/2

  },
  bigText: {
    fontSize: 20,
    color: WHITE,
    //margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
})


export { B1, B2, B3, mainStyle, buttonStyle, teamMemberStyle, formStyle, teamListStyle }