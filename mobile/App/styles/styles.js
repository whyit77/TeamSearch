import { StyleSheet, flex, Dimensions } from 'react-native';

const screen = Dimensions.get('screen');

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
    backgroundColor: B1,
    //justifyContent: 'space-between',

  },
  ////////////////////////
  // Body Container
  container: {
    flex: 1,
    backgroundColor: B1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bigText: {
    fontSize: 30,
    color: WHITE,
    margin: 10
  },
  smallText: {
    fontSize: 250,
    color: WHITE,
    margin: 10
  }


})


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
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: B2,
    borderRadius: 30,
    paddingBottom: 20,
    margin: 10, 
    paddingVertical: 10
  },

  row: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    marginBottom: 11,
    width: 250
  },
  label: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 7,
    marginTop: 10
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
  formButtonContainer: {
    backgroundColor: RED,
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 140,
    marginTop: 10
   },
 formButtonText: {
     textAlign: 'center',
     color: WHITE,
     fontSize: 15,
     fontWeight: 'bold',
 },

})

/////////////////////////////////////////
// Plane Header Style: Text Only
/////////////////////////////////////////

const headerRegStyle = StyleSheet.create({

  titleBar:{
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: B2,
    width: screen.width,
    //justifyContent: 'space-between',
    //justifyContent: 'flex-end',
  },
  centerContainer: {
    //flex: 1,
    //alignSelf: 'center',
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width
 
  },
  centerText: {
    //flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
    //justifyContent: 'center',
    //alignContent: 'center',
    marginTop: '14%',
    marginBottom: '3%',
    color: WHITE,
    fontSize: 25,
    fontWeight: 'bold',
    //width: screen.width
  },
})

/////////////////////////////////////////
// Drawer Header Style: Text + L Drawer
/////////////////////////////////////////

const headerDrawerStyle = StyleSheet.create ({
  titleBar:{
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: B2,
    width: screen.width,
    //justifyContent: 'space-between',
    //justifyContent: 'flex-end',
  },
  centerContainer: {
    //flex: 1,
    //alignSelf: 'center',
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width
 
  },
  centerText: {
    //flexDirection: 'row',
    alignSelf: 'center',
    textAlign: 'center',
    //justifyContent: 'center',
    //alignContent: 'center',
    marginTop: '14%',
    marginBottom: '3%',
    color: WHITE,
    fontSize: 25,
    fontWeight: 'bold',
    //width: screen.width
  },
})

/////////////////////////////////////////
// Drawer Header Plus Style: Drawer + Header + Plus
/////////////////////////////////////////

const headerDrawerPlusStyle = StyleSheet.create ({
  titleBar:{
    //alignSelf: 'center',
    // alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: B2,
    justifyContent: 'space-between',
    //justifyContent: 'flex-end',
  },
  centerContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',    
  },
  centerText: {
    // flexDirection: 'row',
    // alignSelf: 'center',
    textAlign: 'center',
    //justifyContent: 'center',
    marginTop: '14%',
    marginBottom: '3%',
    color: WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },

})

/////////////////////////////////////////
// Back Header Style: Header + Back Arrow
/////////////////////////////////////////
const headerBackStyle = StyleSheet.create ({
  titleBar:{
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: B2,
    width: screen.width,
    //justifyContent: 'space-between',
    //justifyContent: 'flex-end',
  },
  centerContainer: {
    //flex: 1,
    //alignSelf: 'center',
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width
 
  },
  centerText: {
    // flexDirection: 'row',
    // alignSelf: 'center',
    textAlign: 'center',
    //justifyContent: 'center',
    marginTop: '14%',
    marginBottom: '3%',
    color: WHITE,
    fontSize: 25,
    fontWeight: 'bold',
  },

})


const teamListStyle = StyleSheet.create ({
  teamContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: B2,
    borderRadius: 30,
    paddingBottom: 20,
    paddingTop: 5,
    margin: 10
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width
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
    marginTop: 10,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',   
    width: screen.width,
    justifyContent: 'space-between',
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

export { mainStyle, buttonStyle, headerRegStyle, headerDrawerStyle, headerDrawerPlusStyle, headerBackStyle, formStyle, teamListStyle }